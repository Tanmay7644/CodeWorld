import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey! Paste your coding question or describe a problem — I'll help you solve it." }
  ])
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isOpen])

  const handleOpen = () => {
    setIsAnimating(true)
    setIsOpen(true)
    setTimeout(() => setIsAnimating(false), 400)
  }

  const handleClose = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsAnimating(false)
    }, 300)
  }

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMsg = { role: "user", content: input.trim() }
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setInput("")
    setLoading(true)

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/ai-assist`, {
        messages: updatedMessages
      })
      setMessages(prev => [...prev, { role: "assistant", content: res.data.reply }])
    } catch (err) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "⚠️ Something went wrong. Make sure the backend is running."
      }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Globe */}
      {!isOpen && (
        <button
          className={`ai-globe ${isAnimating ? 'globe-shrink' : ''}`}
          onClick={handleOpen}
          title="AI Assistant"
        >
          <div className="globe-pulse" />
          <div className="globe-inner">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <span className="globe-label">AI</span>
        </button>
      )}

      {/* Expanded Panel */}
      {isOpen && (
        <div className={`ai-panel ${isAnimating ? 'panel-opening' : 'panel-open'}`}>
          {/* Header */}
          <div className="ai-panel-header">
            <div className="ai-header-left">
              <div className="ai-status-dot" />
              <div>
                <span className="ai-header-title">Code Assistant</span>
                <span className="ai-header-sub">Powered by Claude</span>
              </div>
            </div>
            <button className="ai-close-btn" onClick={handleClose}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="ai-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`ai-message ${msg.role}`}>
                {msg.role === 'assistant' && (
                  <div className="ai-avatar">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
                    </svg>
                  </div>
                )}
                <div className="ai-bubble">
                  <pre>{msg.content}</pre>
                </div>
              </div>
            ))}

            {loading && (
              <div className="ai-message assistant">
                <div className="ai-avatar">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div className="ai-bubble typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="ai-input-area">
            <textarea
              ref={textareaRef}
              className="ai-textarea"
              placeholder="Ask a coding question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={2}
            />
            <button
              className={`ai-send-btn ${loading || !input.trim() ? 'disabled' : ''}`}
              onClick={handleSend}
              disabled={loading || !input.trim()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
          <p className="ai-hint">Shift+Enter for new line · Enter to send</p>
        </div>
      )}
    </>
  )
}

export default AIAssistant