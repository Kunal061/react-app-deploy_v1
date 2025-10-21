import React from 'react'
import './Skills.css'

export default function Skills(){
  const skills = ['AWS','Jenkins','Docker','Linux','Bash','Git','Python']
  return (
    <section id="skills" className="skills">
      <div className="skills-inner">
        <h2>Skills</h2>
        <ul className="skill-list">
          {skills.map(s=> <li key={s}>{s}</li>)}
        </ul>
      </div>
    </section>
  )
}
