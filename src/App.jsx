import React from 'react'

function uid() {
  return Math.random().toString(36).slice(2, 9)
}

export default function App() {
  const [tasks, setTasks] = React.useState(() => {
    try {
      const raw = localStorage.getItem('tasks')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    try { localStorage.setItem('tasks', JSON.stringify(tasks)) } catch {}
  }, [tasks])

  function add() {
    const v = text.trim()
    if (!v) return
    setTasks([{ id: uid(), text: v, done: false }, ...tasks])
    setText('')
  }

  function toggle(id) {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  function remove(id) {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div className="app">
      <div className="card">
        <h1>Todo — Simple Task Manager</h1>

        <div className="input-row">
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && add()}
            placeholder="Add a new task and press Enter"
          />
          <button onClick={add}>Add</button>
        </div>

        <ul className="task-list">
          {tasks.length === 0 && <li className="empty">No tasks yet — add one above</li>}
          {tasks.map(t => (
            <li key={t.id} className={t.done ? 'done' : ''}>
              <label>
                <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
                <span className="text">{t.text}</span>
              </label>
              <button className="remove" onClick={() => remove(t.id)}>Delete</button>
            </li>
          ))}
        </ul>

        <small className="hint">LocalStorage-backed, build-ready Vite + React app</small>
      </div>
    </div>
  )
}
