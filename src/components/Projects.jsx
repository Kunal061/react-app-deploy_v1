import React from 'react'
import './Projects.css'

export default function Projects(){
  const projects = [
    {title:'Jenkins CI/CD for Static Hosting', desc:'CI/CD pipeline using Jenkins for AWS static website hosting', link:'https://github.com/Kunal061/ci-cd-aws-static-hosting'},
    {title:'Personal Portfolio', desc:'This portfolio site', link:'#'}
  ]
  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map(p=> (
            <div className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer">View Repo</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
