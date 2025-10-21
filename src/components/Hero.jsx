import { useEffect, useRef } from 'react'
import './Hero.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero(){
  const canvasRef = useRef(null)

  useEffect(()=>{
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let rafId
    function resize(){
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    const particles = []
    const count = 40
    class P{constructor(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.r=Math.random()*3+1;this.vx=Math.random()*1-0.5;this.vy=Math.random()*1-0.5}update(){this.x+=this.vx;this.y+=this.vy;if(this.x>canvas.width)this.x=0;if(this.x<0)this.x=canvas.width;if(this.y>canvas.height)this.y=0;if(this.y<0)this.y=canvas.height}draw(){ctx.fillStyle='rgba(14,165,233,0.5)';ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fill()}}
    for(let i=0;i<count;i++)particles.push(new P())
    function anim(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{p.update();p.draw()});rafId=requestAnimationFrame(anim)}
    anim()
    window.addEventListener('resize',resize)
    return ()=>{window.removeEventListener('resize',resize);cancelAnimationFrame(rafId)}
  },[])

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-content">
        <div>
          <h1>Hi, I'm <span className="gradient-text">Kunal Rohilla</span></h1>
          <h2>DevOps & Cloud Engineer Enthusiast</h2>
          <p>Passionate about cloud technologies, automation, and building scalable infrastructure.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary"><FaEnvelope/> Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Kunal061" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/kunal-rohilla-745545246/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
          </div>
        </div>
      </div>
    </section>
  )
}
