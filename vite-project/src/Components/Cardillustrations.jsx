

export const NotesIllustration = () => (
  <svg viewBox="0 0 210 132" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', height: '100%', background: '#1a1b2e', display: 'block' }}>
    {/* Document */}
    <rect x="30" y="20" width="80" height="92" rx="6"
      fill="#1e1f35" stroke="rgba(99,102,241,0.4)" strokeWidth="1"/>
    {/* Title bar */}
    <rect x="42" y="36" width="56" height="6" rx="2" fill="rgba(99,102,241,0.55)"/>
    {/* Lines */}
    <rect x="42" y="50" width="40" height="4" rx="2" fill="rgba(255,255,255,0.13)"/>
    <rect x="42" y="60" width="50" height="4" rx="2" fill="rgba(255,255,255,0.10)"/>
    <rect x="42" y="70" width="36" height="4" rx="2" fill="rgba(255,255,255,0.10)"/>
    <rect x="42" y="80" width="48" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
    <rect x="42" y="90" width="30" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
    {/* Checkmark circle */}
    <circle cx="155" cy="66" r="28"
      fill="rgba(99,102,241,0.10)" stroke="rgba(99,102,241,0.35)" strokeWidth="1"/>
    <path d="M143 66l8 8 16-16"
      stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const CodeIllustration = () => (
  <svg viewBox="0 0 210 132" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', height: '100%', background: '#07080f', display: 'block' }}>
    {/* Top bar */}
    <rect x="0" y="0" width="210" height="22" fill="#13141f"/>
    {/* File name pill */}
    <rect x="10" y="7" width="48" height="8" rx="2" fill="rgba(34,211,238,0.18)"/>
    <text x="14" y="14" fontFamily="monospace" fontSize="6" fill="rgba(34,211,238,0.8)">main.py</text>
    {/* Run button */}
    <circle cx="192" cy="11" r="5"
      fill="rgba(34,211,238,0.15)" stroke="rgba(34,211,238,0.5)" strokeWidth="0.8"/>
    <path d="M190 9l4 2-4 2V9z" fill="#22d3ee"/>

    {/* Code lines */}
    <text x="12" y="36" fontFamily="monospace" fontSize="7.5" fill="rgba(34,211,238,0.7)">def fibonacci(n):</text>
    <text x="20" y="48" fontFamily="monospace" fontSize="7.5" fill="rgba(255,255,255,0.45)">  a, b = 0, 1</text>
    <text x="20" y="60" fontFamily="monospace" fontSize="7.5" fill="rgba(167,139,250,0.8)">  for _ in range(n):</text>
    <text x="28" y="72" fontFamily="monospace" fontSize="7.5" fill="rgba(255,255,255,0.38)">    yield a</text>
    <text x="28" y="84" fontFamily="monospace" fontSize="7.5" fill="rgba(255,255,255,0.38)">    a, b = b, a+b</text>
    {/* Active line cursor */}
    <rect x="8" y="76" width="2.5" height="11" rx="1" fill="rgba(34,211,238,0.8)"/>

    {/* Output bar */}
    <rect x="0" y="100" width="210" height="32" fill="#0a0b15"/>
    <text x="12" y="120" fontFamily="monospace" fontSize="7" fill="rgba(34,211,238,0.75)">
      [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    </text>
  </svg>
)

export const LectureIllustration = () => (
  <svg viewBox="0 0 210 132" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', height: '100%', background: '#14101e', display: 'block' }}>
    {/* Video frame */}
    <rect x="20" y="20" width="120" height="76" rx="8"
      fill="#1c1628" stroke="rgba(167,139,250,0.3)" strokeWidth="1"/>
    {/* Play button circle */}
    <circle cx="80" cy="58" r="22"
      fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.45)" strokeWidth="1"/>
    <path d="M73 50l22 8-22 8V50z" fill="#a78bfa"/>
    {/* Progress bar track */}
    <rect x="20" y="102" width="120" height="3" rx="1.5" fill="rgba(255,255,255,0.07)"/>
    <rect x="20" y="102" width="72" height="3" rx="1.5" fill="rgba(167,139,250,0.6)"/>
    {/* Scrubber dot */}
    <circle cx="92" cy="103.5" r="4"
      fill="#a78bfa" stroke="rgba(167,139,250,0.4)" strokeWidth="1"/>
    {/* Waveform bars on the right */}
    <rect x="155" y="28" width="2.5" height="66" rx="1" fill="rgba(167,139,250,0.18)"/>
    <rect x="162" y="38" width="2.5" height="46" rx="1" fill="rgba(167,139,250,0.14)"/>
    <rect x="169" y="32" width="2.5" height="56" rx="1" fill="rgba(167,139,250,0.20)"/>
    <rect x="176" y="42" width="2.5" height="36" rx="1" fill="rgba(167,139,250,0.12)"/>
    <rect x="183" y="30" width="2.5" height="62" rx="1" fill="rgba(167,139,250,0.16)"/>
    <rect x="190" y="44" width="2.5" height="32" rx="1" fill="rgba(167,139,250,0.10)"/>
    {/* Duration text */}
    <text x="118" y="118" fontFamily="monospace" fontSize="7" fill="rgba(167,139,250,0.5)">32:14</text>
  </svg>
)