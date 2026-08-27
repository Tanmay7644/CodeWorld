


import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardSwap, { Card } from './CardSwap';

// ── SVG Illustration Cards ────────────────────────────────────────────


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="lp-landing">
      <div className="lp-card-window">
      <CardSwap
        width={450}
        height={366}
        cardDistance={50}
        verticalDistance={50}
        delay={4000}
        pauseOnHover={false}
        easing="elastic"
        skewAmount={4}
      onCardClick={() => {
        navigate('/login');
      }}
      >
        <Card>
          <div className="lp-card-label">
            <span className="lp-card-tag">IDE</span>
            <span className="lp-card-title">Code Editor</span>
          </div>
          <svg viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="lp-card-svg">
            <rect width="420" height="300" fill="#07080f" />
            <rect width="420" height="28" fill="#13141f" />
            <rect x="12" y="9" width="56" height="10" rx="3" fill="rgba(34,211,238,0.2)" />
            <text x="16" y="18" fontFamily="monospace" fontSize="8" fill="rgba(34,211,238,0.9)">main.py</text>
            <circle cx="398" cy="14" r="7" fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.5)" strokeWidth="1" />
            <path d="M395 12l3 2-3 2z" fill="#22d3ee" />
            <text x="16" y="54" fontFamily="monospace" fontSize="10" fill="rgba(34,211,238,0.75)">def fibonacci(n):</text>
            <text x="28" y="72" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.5)">a, b = 0, 1</text>
            <text x="28" y="90" fontFamily="monospace" fontSize="10" fill="rgba(167,139,250,0.85)">for _ in range(n):</text>
            <text x="40" y="108" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.42)">yield a</text>
            <text x="40" y="126" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.42)">a, b = b, a+b</text>
            <rect x="12" y="116" width="3" height="14" rx="1" fill="rgba(34,211,238,0.9)" />
            <text x="16" y="152" fontFamily="monospace" fontSize="10" fill="rgba(132,204,22,0.7)">result = list(fibonacci(10))</text>
            <text x="16" y="170" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.45)">print(f"Seq: {"{result}"}")</text>
            <rect x="0" y="210" width="420" height="90" fill="#0a0b14" />
            <text x="16" y="232" fontFamily="monospace" fontSize="9" fill="rgba(34,211,238,0.6)">▸ STDOUT</text>
            <text x="16" y="252" fontFamily="monospace" fontSize="10" fill="rgba(34,211,238,0.85)">[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]</text>
            <text x="16" y="270" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.2)">exit 0 · 0.32s</text>
          </svg>
        </Card>
        <Card>
          <div className="lp-card-label">
            <span className="lp-card-tag lp-card-tag--indigo">DOCS</span>
            <span className="lp-card-title">Download Notes</span>
          </div>
          <svg viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="lp-card-svg">
            <rect width="420" height="300" fill="#0e0f1a" />
            <rect x="40" y="24" width="120" height="150" rx="8" fill="#1e1f35" stroke="rgba(99,102,241,0.35)" strokeWidth="1" />
            <rect x="56" y="44" width="88" height="10" rx="3" fill="rgba(99,102,241,0.6)" />
            <rect x="56" y="62" width="64" height="6" rx="2" fill="rgba(255,255,255,0.14)" />
            <rect x="56" y="76" width="78" height="6" rx="2" fill="rgba(255,255,255,0.10)" />
            <rect x="56" y="90" width="56" height="6" rx="2" fill="rgba(255,255,255,0.10)" />
            <rect x="56" y="104" width="72" height="6" rx="2" fill="rgba(255,255,255,0.08)" />
            <rect x="56" y="118" width="48" height="6" rx="2" fill="rgba(255,255,255,0.08)" />
            <rect x="56" y="132" width="68" height="6" rx="2" fill="rgba(255,255,255,0.06)" />
            <rect x="56" y="146" width="40" height="6" rx="2" fill="rgba(255,255,255,0.06)" />
            <circle cx="290" cy="110" r="52" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
            <path d="M272 110l14 14 26-26" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="220" y="210" width="180" height="56" rx="8" fill="#141528" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
            <text x="240" y="242" fontFamily="monospace" fontSize="11" fill="rgba(99,102,241,0.8)">3 notes available</text>
            <rect x="230" y="252" width="140" height="4" rx="2" fill="rgba(99,102,241,0.1)" />
            <rect x="230" y="252" width="90" height="4" rx="2" fill="rgba(99,102,241,0.5)" />
          </svg>
        </Card>
        <Card>
          <div className="lp-card-label">
            <span className="lp-card-tag lp-card-tag--violet">VIDEO</span>
            <span className="lp-card-title">Online Lectures</span>
          </div>
          <svg viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="lp-card-svg">
            <rect width="420" height="300" fill="#14101e" />
            <rect x="30" y="30" width="240" height="150" rx="12" fill="#1c1628" stroke="rgba(167,139,250,0.3)" strokeWidth="1" />
            <circle cx="150" cy="105" r="38" fill="rgba(167,139,250,0.1)" stroke="rgba(167,139,250,0.4)" strokeWidth="1" />
            <path d="M137 88l34 17-34 17V88z" fill="#a78bfa" />
            <rect x="30" y="188" width="240" height="5" rx="2" fill="rgba(255,255,255,0.06)" />
            <rect x="30" y="188" width="144" height="5" rx="2" fill="rgba(167,139,250,0.55)" />
            <circle cx="174" cy="190.5" r="6" fill="#a78bfa" />
            <text x="30" y="220" fontFamily="monospace" fontSize="9" fill="rgba(167,139,250,0.5)">32:14 / 58:00</text>
            <rect x="294" y="38" width="3" height="120" rx="1" fill="rgba(167,139,250,0.18)" />
            <rect x="304" y="56" width="3" height="84" rx="1" fill="rgba(167,139,250,0.14)" />
            <rect x="314" y="44" width="3" height="108" rx="1" fill="rgba(167,139,250,0.2)" />
            <rect x="324" y="64" width="3" height="68" rx="1" fill="rgba(167,139,250,0.12)" />
            <rect x="334" y="36" width="3" height="124" rx="1" fill="rgba(167,139,250,0.16)" />
            <rect x="344" y="70" width="3" height="60" rx="1" fill="rgba(167,139,250,0.10)" />
            <rect x="354" y="48" width="3" height="100" rx="1" fill="rgba(167,139,250,0.15)" />
            <rect x="364" y="80" width="3" height="44" rx="1" fill="rgba(167,139,250,0.09)" />
            <rect x="374" y="52" width="3" height="92" rx="1" fill="rgba(167,139,250,0.13)" />
            <rect x="384" y="60" width="3" height="76" rx="1" fill="rgba(167,139,250,0.11)" />
          </svg>
        </Card>
      </CardSwap>

      {/* <div className="lp-landing-hint">
        <span className="lp-hint-dot" />
        Click a card to explore
      </div> */}
      </div>
    </div>
  );
};

export default LandingPage;