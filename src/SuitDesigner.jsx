import { useState } from "react";
import "./SuitDesigner.css";

const SUIT_PARTS = [
  { id: "jacket", label: "Jacket", price: 280, icon: "🧥" },
  { id: "shirt", label: "Shirt", price: 95, icon: "👔" },
  { id: "waistcoat", label: "Waistcoat", price: 120, icon: "🦺" },
  { id: "tie", label: "Tie", price: 45, icon: "👔" },
  { id: "tieclip", label: "Tie Clip", price: 30, icon: "📎" },
  { id: "pocketsquare", label: "Pocket Square", price: 25, icon: "🟫" },
  { id: "belt", label: "Belt", price: 65, icon: "⬛" },
  { id: "trousers", label: "Trousers", price: 160, icon: "👖" },
  { id: "shoes", label: "Shoes", price: 195, icon: "👞" },
];

const COLORS = {
  jacket: [
    { name: "Midnight", hex: "#1a1a2e" }, { name: "Charcoal", hex: "#2e2e2e" },
    { name: "Navy", hex: "#1b2a4a" }, { name: "Slate", hex: "#4a5568" },
    { name: "Espresso", hex: "#3b2314" },
  ],
  shirt: [
    { name: "Ivory", hex: "#f5f0e8" }, { name: "White", hex: "#ffffff" },
    { name: "Pale Blue", hex: "#c8daf0" }, { name: "Blush", hex: "#f0d8d0" },
    { name: "Sage", hex: "#c8d8c8" },
  ],
  tie: [
    { name: "Royal", hex: "#2255bb" }, { name: "Crimson", hex: "#8b1a1a" },
    { name: "Forest", hex: "#2d5016" }, { name: "Gold", hex: "#c9a84c" },
    { name: "Onyx", hex: "#1a1a1a" },
  ],
  trousers: [
    { name: "Midnight", hex: "#1a1a2e" }, { name: "Charcoal", hex: "#2e2e2e" },
    { name: "Navy", hex: "#1b2a4a" }, { name: "Stone", hex: "#9e8e78" },
    { name: "Slate", hex: "#4a5568" },
  ],
  shoes: [
    { name: "Cognac", hex: "#7a3e1a" }, { name: "Onyx", hex: "#1a1a1a" },
    { name: "Chestnut", hex: "#5c2f1a" }, { name: "Tan", hex: "#b87a4a" },
    { name: "Mahogany", hex: "#400e09" },
  ],
};

const SuitFigure = ({ config }) => {
  const { jacketColor, shirtColor, tieColor, trouserColor, shoeColor, enabled } = config;

  return (
    <svg viewBox="0 0 200 420" xmlns="http://www.w3.org/2000/svg" className="figure-svg">
      <defs>
        <radialGradient id="shirtSheen" cx="40%" cy="30%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
        </radialGradient>
        <linearGradient id="jacketLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={jacketColor} stopOpacity="1" />
          <stop offset="100%" stopColor={jacketColor} stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="jacketRight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={jacketColor} stopOpacity="0.85" />
          <stop offset="100%" stopColor={jacketColor} stopOpacity="1" />
        </linearGradient>
        <linearGradient id="shoeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={shoeColor} />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="pantsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={trouserColor} />
          <stop offset="50%" stopColor={trouserColor} stopOpacity="0.8" />
          <stop offset="100%" stopColor={trouserColor} />
        </linearGradient>
        <filter id="softShadow"><feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" /></filter>
      </defs>

      <rect x="88" y="52" width="24" height="22" rx="4" fill="#d4a882" />
      <ellipse cx="100" cy="38" rx="22" ry="26" fill="#d4a882" />
      <ellipse cx="100" cy="18" rx="22" ry="12" fill="#3a2510" />
      <ellipse cx="78" cy="38" rx="4" ry="6" fill="#c49572" />
      <ellipse cx="122" cy="38" rx="4" ry="6" fill="#c49572" />
      <ellipse cx="92" cy="40" rx="3" ry="2" fill="#a07850" opacity="0.5" />
      <ellipse cx="108" cy="40" rx="3" ry="2" fill="#a07850" opacity="0.5" />
      <path d="M93 46 Q100 50 107 46" stroke="#a07850" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {enabled.shirt && (
        <>
          <rect x="80" y="70" width="40" height="120" rx="2" fill={shirtColor} />
          <rect x="80" y="70" width="40" height="120" rx="2" fill="url(#shirtSheen)" />
          <polygon points="100,70 80,60 85,80" fill={shirtColor} />
          <polygon points="100,70 120,60 115,80" fill={shirtColor} />
          {[80, 95, 110, 125, 140, 155].map((y, i) => (
            <circle key={i} cx="100" cy={y} r="1.5" fill={shirtColor === "#ffffff" ? "#ddd" : "#ccc"} opacity="0.7" />
          ))}
        </>
      )}

      {enabled.waistcoat && (
        <>
          <path d="M83,72 L83,168 Q100,172 117,168 L117,72 Q100,78 83,72Z" fill={jacketColor} opacity="0.75" />
          <path d="M100,72 L100,168" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          {[90, 108, 126, 144].map((y, i) => <circle key={i} cx="100" cy={y} r="2" fill="#c9a84c" />)}
        </>
      )}

      {enabled.tie && (
        <>
          <polygon points="97,73 103,73 106,130 100,138 94,130" fill={tieColor} />
          <polygon points="95,73 105,73 100,84" fill={tieColor} opacity="0.7" />
          <polygon points="97,73 103,73 102,80 100,82 98,80" fill={tieColor} filter="brightness(1.2)" />
          <line x1="100" y1="85" x2="100" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
        </>
      )}

      {enabled.tieclip && <rect x="96" y="112" width="8" height="3" rx="1.5" fill="#c9a84c" />}

      {enabled.jacket && (
        <>
          <path d="M55,65 L83,72 L83,175 L48,185 L40,130 Z" fill="url(#jacketLeft)" filter="url(#softShadow)" />
          <path d="M145,65 L117,72 L117,175 L152,185 L160,130 Z" fill="url(#jacketRight)" filter="url(#softShadow)" />
          <path d="M83,72 L68,65 L80,95 Z" fill={jacketColor} opacity="0.9" />
          <path d="M117,72 L132,65 L120,95 Z" fill={jacketColor} opacity="0.9" />
          <path d="M83,72 L72,68" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <path d="M117,72 L128,68" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <path d="M55,65 Q45,75 40,130" stroke={jacketColor} strokeWidth="12" fill="none" />
          <path d="M145,65 Q155,75 160,130" stroke={jacketColor} strokeWidth="12" fill="none" />
          <path d="M48,185 Q100,195 152,185" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
          {enabled.pocketsquare && <path d="M60,110 L72,110 L70,100 L62,100 Z" fill="#f5f0e8" opacity="0.9" />}
          <circle cx="100" cy="160" r="3" fill={jacketColor} stroke="#c9a84c" strokeWidth="1" />
        </>
      )}

      {enabled.belt && (
        <>
          <rect x="75" y="178" width="50" height="7" rx="2" fill="#1a1008" />
          <rect x="97" y="177" width="6" height="9" rx="1" fill="#c9a84c" />
          <circle cx="100" cy="181.5" r="2" fill="#1a1008" />
        </>
      )}

      {enabled.trousers && (
        <>
          <path d="M75,185 L75,320 Q82,325 95,320 L100,200 Z" fill="url(#pantsGrad)" />
          <path d="M125,185 L125,320 Q118,325 105,320 L100,200 Z" fill="url(#pantsGrad)" />
          <line x1="85" y1="190" x2="85" y2="316" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
          <line x1="115" y1="190" x2="115" y2="316" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
          <rect x="75" y="316" width="20" height="4" rx="1" fill={trouserColor} opacity="0.8" />
          <rect x="105" y="316" width="20" height="4" rx="1" fill={trouserColor} opacity="0.8" />
        </>
      )}

      {enabled.shoes && (
        <>
          <path d="M72,320 Q68,335 60,340 Q70,348 92,344 L95,320 Z" fill="url(#shoeGrad)" />
          <path d="M60,340 Q70,348 92,344" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.6" />
          <path d="M128,320 Q132,335 140,340 Q130,348 108,344 L105,320 Z" fill="url(#shoeGrad)" />
          <path d="M140,340 Q130,348 108,344" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.6" />
          <path d="M72,326 Q80,323 92,325" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
          <path d="M128,326 Q120,323 108,325" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
        </>
      )}
    </svg>
  );
};

export default function SuitDesigner() {
  const [activeTab, setActiveTab] = useState("toggle");
  const [enabled, setEnabled] = useState(Object.fromEntries(SUIT_PARTS.map((p) => [p.id, true])));
  const [colors, setColors] = useState({
    jacketColor: "#1a1a2e", shirtColor: "#f5f0e8", tieColor: "#2255bb", trouserColor: "#1a1a2e", shoeColor: "#7a3e1a",
  });
  const [activeColorSection, setActiveColorSection] = useState("jacket");
  const [animating, setAnimating] = useState(false);

  const total = SUIT_PARTS.filter((p) => enabled[p.id]).reduce((s, p) => s + p.price, 0);

  const toggle = (id) => {
    setAnimating(id);
    setTimeout(() => setAnimating(false), 400);
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const colorMap = { jacket: "jacketColor", shirt: "shirtColor", tie: "tieColor", trousers: "trouserColor", shoes: "shoeColor" };
  const colorableParts = ["jacket", "shirt", "tie", "trousers", "shoes"];

  return (
    <div className="studio-container">
      <div className="ambient-gold" />
      <div className="ambient-blue" />

      <header className="studio-header">
        <div className="header-label">Bespoke Atelier</div>
        <h1 className="header-title">
          The Gentleman's <span>Studio</span>
        </h1>
        <div className="header-divider" />
      </header>

      <div className="main-layout">
        {/* Left Panel */}
        <div className="panel-left">
          <div className="tab-container">
            {["toggle", "color"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
              >
                {tab === "toggle" ? "Pieces" : "Colour"}
              </button>
            ))}
          </div>

          {activeTab === "toggle" && (
            <div className="control-card">
              <div className="card-label">Select Components</div>
              {SUIT_PARTS.map((part) => (
                <div
                  key={part.id}
                  onClick={() => toggle(part.id)}
                  className={`piece-item ${enabled[part.id] ? "enabled" : ""}`}
                  style={{ transform: animating === part.id ? "scale(0.97)" : "scale(1)" }}
                >
                  <div className="piece-info">
                    <span style={{ fontSize: "14px", opacity: enabled[part.id] ? 1 : 0.4 }}>{part.icon}</span>
                    <span className="piece-label" style={{ color: enabled[part.id] ? "#e8dcc8" : "#554433" }}>
                      {part.label}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "11px", color: enabled[part.id] ? "#c9a84c" : "#443322" }}>${part.price}</span>
                    <div className={`toggle-switch ${enabled[part.id] ? "active" : ""}`}>
                      <div className="toggle-knob" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "color" && (
            <div className="control-card">
              <div className="card-label">Colour Selection</div>
              <div className="part-selector">
                {colorableParts.map((part) => (
                  <button
                    key={part}
                    onClick={() => setActiveColorSection(part)}
                    className={`part-btn ${activeColorSection === part ? "active" : ""}`}
                  >
                    {part}
                  </button>
                ))}
              </div>
              {COLORS[activeColorSection] && (
                <div>
                  <div className="card-label" style={{ marginBottom: "10px" }}>{activeColorSection} — colour</div>
                  <div className="swatch-grid">
                    {COLORS[activeColorSection].map((c) => {
                      const key = colorMap[activeColorSection];
                      const isSelected = colors[key] === c.hex;
                      return (
                        <div
                          key={c.hex}
                          onClick={() => setColors((prev) => ({ ...prev, [key]: c.hex }))}
                          title={c.name}
                          className={`swatch ${isSelected ? "selected" : ""}`}
                          style={{ background: c.hex }}
                        />
                      );
                    })}
                  </div>
                  <div style={{ marginTop: "12px", fontSize: "12px", color: "#665544", fontStyle: "italic" }}>
                    {COLORS[activeColorSection].find((c) => c.hex === colors[colorMap[activeColorSection]])?.name || "Custom"}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Center Figure */}
        <div className="figure-column">
          <div className="figure-container">
            <div className="spotlight" />
            <div className="ground-shadow" />
            <SuitFigure config={{ enabled, ...colors }} />
          </div>
          <div className="card-label" style={{ marginTop: "4px" }}>Bespoke Configuration</div>
        </div>

        {/* Right Panel */}
        <div className="panel-right">
          <div className="control-card" style={{ padding: "20px" }}>
            <div className="card-label" style={{ marginBottom: "16px" }}>Your Order</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
              {SUIT_PARTS.filter((p) => enabled[p.id]).map((p) => (
                <div key={p.id} className="summary-item">
                  <span>{p.label}</span>
                  <span style={{ color: "#c9a84c" }}>${p.price}</span>
                </div>
              ))}
            </div>
            <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)", margin: "12px 0" }} />
            <div className="total-container">
              <span className="card-label">Total</span>
              <span className="total-amount">${total.toLocaleString()}</span>
            </div>
          </div>

          {/* Palette Preview */}
          <div className="control-card">
            <div className="card-label" style={{ marginBottom: "12px" }}>Palette</div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {Object.entries(colorMap).map(([part, key]) => (
                <div key={part} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%", background: colors[key],
                    border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 2px 8px rgba(0,0,0,0.5)"
                  }} />
                  <span style={{ fontSize: "8px", letterSpacing: "1px", color: "#554433", textTransform: "uppercase" }}>{part.slice(0, 3)}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="cta-button">Commission Suit</button>
          <div style={{ textAlign: "center", fontSize: "10px", color: "#443322", letterSpacing: "1px", lineHeight: 1.8, marginTop: "16px" }}>
            Handcrafted in 6–8 weeks<br />Free worldwide delivery
          </div>
        </div>
      </div>
    </div>
  );
}