import React from 'react'

const QUOTES = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do what you can, with what you have, where you are.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "You miss 100% of the shots you don't take.",
  "Simplicity is the ultimate sophistication."
]

function randomColor() {
  const r = Math.floor(Math.random() * 200) + 30
  const g = Math.floor(Math.random() * 200) + 30
  const b = Math.floor(Math.random() * 200) + 30
  return `rgb(${r}, ${g}, ${b})`
}

export default function App() {
  const [quote, setQuote] = React.useState(QUOTES[0])
  const [bg, setBg] = React.useState(() => randomColor())

  function next() {
    const q = QUOTES[Math.floor(Math.random() * QUOTES.length)]
    setQuote(q)
    setBg(randomColor())
  }

  return (
    <div className="app" style={{ background: bg }}>
      <div className="card">
        <h1>Random Quote</h1>
        <p className="quote">"{quote}"</p>
        <div className="controls">
          <button onClick={next}>New Quote</button>
        </div>
        <small className="hint">Deploy-ready Vite + React app</small>
      </div>
    </div>
  )
}
