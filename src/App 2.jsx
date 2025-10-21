import React from 'react'
import { marked } from 'marked'

function newNote() {
  return { id: Date.now().toString(36), title: 'Untitled', body: '# New note' }
}

export default function App() {
  const [notes, setNotes] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem('notes') || '[]') } catch { return [] }
  })
  const [active, setActive] = React.useState(notes[0]?.id || null)

  React.useEffect(() => localStorage.setItem('notes', JSON.stringify(notes)), [notes])

  function create() {
    const n = newNote()
    setNotes([n, ...notes])
    setActive(n.id)
  }

  function remove(id) {
    setNotes(notes.filter(n => n.id !== id))
    if (active === id) setActive(notes[0]?.id || null)
  }

  function update(id, patch) {
    setNotes(notes.map(n => n.id === id ? { ...n, ...patch } : n))
  }

  const activeNote = notes.find(n => n.id === active) || null

  return (
    <div className="app notes-app">
      <div className="card notes-card">
        <div className="sidebar">
          <div className="sidebar-top">
            <h2>Notes</h2>
            <button onClick={create}>New</button>
          </div>
          <ul className="note-list">
            {notes.map(n => (
              <li key={n.id} className={n.id === active ? 'active' : ''} onClick={() => setActive(n.id)}>
                <div className="note-title">{n.title}</div>
                <button className="delete" onClick={(e) => { e.stopPropagation(); remove(n.id) }}>Del</button>
              </li>
            ))}
            {notes.length === 0 && <li className="empty">No notes yet</li>}
          </ul>
        </div>

        <div className="editor">
          {activeNote ? (
            <>
              <input className="title" value={activeNote.title} onChange={e => update(activeNote.id, { title: e.target.value })} />
              <textarea className="body" value={activeNote.body} onChange={e => update(activeNote.id, { body: e.target.value })} />
            </>
          ) : (
            <div className="no-active">Select or create a note</div>
          )}
        </div>

        <div className="preview">
          <h3>Preview</h3>
          <div className="preview-content" dangerouslySetInnerHTML={{ __html: marked.parse(activeNote?.body || '') }} />
        </div>
      </div>
    </div>
  )
}
