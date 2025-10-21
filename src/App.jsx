import React from 'react'

function randHex() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')
}

function copy(text) {
  if (navigator.clipboard) return navigator.clipboard.writeText(text)
  const t = document.createElement('textarea')
  t.value = text
  document.body.appendChild(t)
  t.select()
  document.execCommand('copy')
  document.body.removeChild(t)
  return Promise.resolve()
}

export default function App() {
  const [palette, setPalette] = React.useState(() => Array.from({ length: 5 }, () => randHex()))
  const [copied, setCopied] = React.useState(null)

  function regenerate() {
    setPalette(Array.from({ length: 5 }, () => randHex()))
  }

  function lockAt(i) {
    // simple 'lock' toggle by prefixing with "!" to indicate locked
    setPalette(p => p.map((c, idx) => idx === i ? (c.startsWith('!') ? c.slice(1) : ('!' + c)) : c))
  }

  function regenerateUnlocked() {
    setPalette(p => p.map(c => (c.startsWith('!') ? c : randHex())))
  }

  function clickCopy(hex) {
    const clean = hex.startsWith('!') ? hex.slice(1) : hex
    copy(clean).then(() => {
      setCopied(clean)
      setTimeout(() => setCopied(null), 1200)
    })
  }

  return (
    <div className="app palette-app">
      <div className="card">
        <h1>Color Palette Generator</h1>
        <p className="subtitle">Click a swatch to copy hex. Lock any color to keep it while regenerating.</p>

        <div className="palette">
          {palette.map((c, i) => {
            const locked = c.startsWith('!')
            const hex = locked ? c.slice(1) : c
            return (
              <div key={i} className="swatch" style={{ background: hex }}>
                <div className="swatch-top">
                  <button className="lock" onClick={() => lockAt(i)}>{locked ? '🔒' : '🔓'}</button>
                </div>
                <button className="swatch-copy" onClick={() => clickCopy(c)}>
                  {copied === hex ? 'Copied' : hex}
                </button>
              </div>
            )
          })}
        </div>

        <div className="controls">
          <button onClick={regenerate}>Generate</button>
          <button onClick={regenerateUnlocked}>Generate Unlocked</button>
        </div>

        <small className="hint">Small palette tool — ready for deployment</small>
      </div>
    </div>
  )
}
