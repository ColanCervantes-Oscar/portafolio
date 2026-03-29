import { useState, useEffect } from 'react'
import { personal, roles, t } from '../data/portfolio.ts'

interface Props { lang:'es'|'en' }

function OrbitAvatar() {
  const dots = Array.from({length:10})
  return (
    <div style={{
      position:'relative',
      width:'clamp(200px,28vw,280px)',
      height:'clamp(200px,28vw,280px)',
      display:'flex',alignItems:'center',justifyContent:'center',
      margin:'0 auto',
    
    }}>
      <div style={{width:'clamp(130px,17vw,190px)',height:'clamp(130px,17vw,190px)',borderRadius:'50%',overflow:'hidden',border:'3px solid var(--accent)',zIndex:2,position:'relative',boxShadow:'0 0 40px rgba(99,179,237,0.25)'}}>
        <img src={personal.avatar} alt="Oscar Colan"
          onError={e=>{(e.currentTarget.parentElement as HTMLDivElement).innerHTML='<div style="width:100%;height:100%;background:var(--surface);display:flex;align-items:center;justify-content:center;font-size:3rem">👤</div>'}}
          style={{width:'100%',height:'100%',objectFit:'cover'}}/>
      </div>
      <div style={{position:'absolute',width:'clamp(150px,20vw,238px)',height:'clamp(150px,20vw,238px)',border:'1.5px dashed rgba(99,179,237,0.4)',borderRadius:'50%',animation:'spin-ring 12s linear infinite'}}/>
      <div style={{position:'absolute',width:'clamp(180px,24vw,272px)',height:'clamp(180px,24vw,272px)',border:'1px dashed rgba(118,228,167,0.25)',borderRadius:'50%',animation:'spin-ring-rev 18s linear infinite'}}/>
      {dots.map((_,i)=>(
        <div key={i} style={{position:'absolute',width:'7px',height:'7px',borderRadius:'50%',background:i%2===0?'var(--accent)':'var(--accent2)',boxShadow:`0 0 7px ${i%2===0?'var(--accent)':'var(--accent2)'}`,animation:`orbit${i%3===0?'':i%3===1?'2':'3'} ${5+i*0.3}s linear infinite`,animationDelay:`${-i*0.6}s`}}/>
      ))}
      {[].map((icon,i)=>(
        <div key={icon} style={{position:'absolute',width:'20px',height:'20px',borderRadius:'50%',background:'var(--bg2)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.75rem',animation:`orbitSlow${i%2===0?'':'2'} ${14+i*2}s linear infinite`,animationDelay:`${-i*4.5}s`}}>
          {icon}
        </div>
      ))}
    </div>
  )
}

export default function Hero({ lang }: Props) {
  const [displayed,setDisplayed]=useState('')
  const [ri,setRi]=useState(0)
  const [ci,setCi]=useState(0)
  const [del,setDel]=useState(false)
  const tx=t[lang]

  useEffect(()=>{
    const cur=roles[ri]
    let to:ReturnType<typeof setTimeout>
    if(!del){
      if(ci<cur.length) to=setTimeout(()=>{setDisplayed(cur.slice(0,ci+1));setCi(c=>c+1)},75)
      else to=setTimeout(()=>setDel(true),1800)
    } else {
      if(ci>0) to=setTimeout(()=>{setDisplayed(cur.slice(0,ci-1));setCi(c=>c-1)},45)
      else{setDel(false);setRi(r=>(r+1)%roles.length)}
    }
    return()=>clearTimeout(to)
  },[ci,del,ri])

  return (
    <>
      {/* ── DESKTOP (>1024px): altura completa de pantalla ── */}
      <section id="hero" className="section section-a hero-desktop">
        <div className="container">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'clamp(1rem,3vw,2.5rem)'}}>
            <div style={{flex:'1',minWidth:'260px'}}>
              <p style={{fontFamily:'var(--mono)',fontSize:'.78rem',color:'var(--accent)',letterSpacing:'.2em',textTransform:'uppercase',marginBottom:'1.2rem',animation:'fadeUp .6s ease .2s both'}}>
                {tx.hero.greeting}
              </p>
              <h1 style={{fontSize:'clamp(2.2rem,5vw,5rem)',fontWeight:800,lineHeight:1.05,letterSpacing:'-.02em',animation:'fadeUp .6s ease .4s both'}}>
                Oscar <span style={{color:'var(--accent)'}}>Colan</span>
              </h1>
              <p style={{fontFamily:'var(--mono)',fontSize:'clamp(.8rem,1.6vw,.95rem)',color:'var(--muted)',marginTop:'1.2rem',minHeight:'1.5em',animation:'fadeUp .6s ease .6s both'}}>
                {displayed}<span style={{display:'inline-block',width:'2px',height:'1em',background:'var(--accent)',marginLeft:'2px',verticalAlign:'middle',animation:'blink 1s step-end infinite'}}/>
              </p>
              <p style={{fontFamily:'var(--mono)',fontSize:'.78rem',color:'var(--muted)',marginTop:'.5rem',animation:'fadeUp .6s ease .7s both'}}>
                {tx.hero.at} <span style={{color:'var(--accent2)'}}>{personal.company}</span>
              </p>
              <div style={{display:'flex',gap:'.75rem',marginTop:'2rem',flexWrap:'wrap',animation:'fadeUp .6s ease .8s both'}}>
                <a href="#projects" className="btn btn-primary">{tx.hero.cta1}</a>
                <a href="#contact" className="btn btn-ghost">{tx.hero.cta2}</a>
                <a href="/cv-colancervantes.pdf" download="cv-colancervantes.pdf" className="btn btn-ghost" style={{display:'flex',alignItems:'center',gap:'.4rem'}}>
                  {tx.hero.cv} ↓
                </a>
              </div>
            </div>
            <div style={{display:'flex',justifyContent:'center',animation:'fadeUp .6s ease 1s both'}}>
              <OrbitAvatar/>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Desktop: altura completa */
        .hero-desktop {
          min-height: 100vh;
          padding-top: 6rem;   /* ← ajusta el espacio arriba */
          padding-bottom: 4rem; /* ← ajusta el espacio abajo */
        }

        /* Tablet (481px – 1024px): altura automática con padding generoso */
        @media(max-width:1024px){
          .hero-desktop {
            min-height: unset;
            padding-top: 6rem;   /* ← ajusta en tablet */
            padding-bottom: 4rem;
          }
          .hero-desktop .container > div {
            gap: 2.5rem;
          }
        }

        /* Móvil (0 – 480px): columna centrada, más espacio entre texto e imagen */
        @media(max-width:480px){
          .hero-desktop {
            min-height: unset;
            padding-top: 5.5rem;  /* ← ajusta en móvil */
            padding-bottom: 3.5rem;
          }
          .hero-desktop .container > div {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 2.5rem !important; /* ← espacio entre texto e imagen en móvil */
          }
          .hero-desktop .container > div > div:first-child {
            min-width: unset !important;
            width: 100% !important;
          }
          .hero-desktop .container > div > div:first-child > div:last-child {
            justify-content: center !important;
          }
        }
      `}</style>
    </>
  )
}
