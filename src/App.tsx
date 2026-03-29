import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Skills from './components/Skills.tsx'
import Experience from './components/Experience.tsx'
import Projects from './components/Projects.tsx'
import Testimonials from './components/Testimonials.tsx'
import Contact from './components/Contact.tsx'
import Cursor from './components/Cursor.tsx'

export default function App() {
  const [lang,setLang]=useState<'es'|'en'>('es')
  const [dark,setDark]=useState(true)

  useEffect(()=>{document.body.classList.toggle('light',!dark)},[dark])

  useEffect(()=>{
    const obs=new IntersectionObserver(
      (entries)=>entries.forEach((e,i)=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add('visible'),i*80)}),
      {threshold:.08}
    )
    document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el))
    return()=>obs.disconnect()
  },[])

  const year=new Date().getFullYear()
  const footer=lang==='es'?'Diseñado y construido por':'Designed and built by'

  return (
    <>
      <Cursor/>
      <div className="hero-grid"/>
      <Navbar lang={lang} setLang={setLang} dark={dark} setDark={setDark}/>
      <main>
        <Hero lang={lang}/>
        <About lang={lang}/>
        <Skills lang={lang}/>
        <Experience lang={lang}/>
        <Projects lang={lang}/>
        <Testimonials lang={lang}/>
        <Contact lang={lang}/>
      </main>
      <footer style={{textAlign:'center',padding:'2rem',fontFamily:'var(--mono)',fontSize:'.72rem',color:'var(--muted)',borderTop:'1px solid var(--border)',background:'var(--bg)'}}>
        {footer} <span style={{color:'var(--accent)'}}>Oscar Colan</span> — {year}
      </footer>
    </>
  )
}
