import React from 'react'
import './Certifications.css'

export default function Certifications(){
  const certs = [
    {title:'AWS Cloud Practitioner', link:'https://www.credly.com/badges/896158b7-947a-4614-88f5-48daf6907ea9/public_url'}
  ]
  return (
    <section id="certifications" className="certs">
      <div className="certs-inner">
        <h2>Certifications</h2>
        <ul>
          {certs.map(c=> (
            <li key={c.title}><a href={c.link} target="_blank" rel="noopener noreferrer">{c.title}</a></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
