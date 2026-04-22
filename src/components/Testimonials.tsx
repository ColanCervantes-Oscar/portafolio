import { useState } from 'react'
import { testimonials, t } from '../data/portfolio.ts'

interface Props { lang:'es'|'en' }

export default function Testimonials({ lang }: Props) {
  const tx=t[lang].testimonials
  return (
    <section id="testimonials" className="section section-a" style={{minHeight:'auto',paddingTop:'5rem',paddingBottom:'5rem'}}>
      <div className="container">
        <p className="section-label fade-in">{tx.label}</p>
        <h2 className="fade-in" style={{fontSize:'clamp(1.5rem,3.5vw,2.4rem)',fontWeight:800,letterSpacing:'-.02em',marginBottom:'2.5rem',whiteSpace:'pre-line',lineHeight:1.2}}>{tx.title}</h2>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))',gap:'1.5rem'}}>
          {testimonials.map((tm,i)=>{
            const [imgErr,setImgErr]=useState(false)
            const text=lang==='es'?tm.textEs:tm.textEn
            return(
              <div key={i} className="testimonial-card fade-in">

                {/* PERSONA PRIMERO */}
                <div style={{display:'flex',alignItems:'center',gap:'.85rem',marginBottom:'1.25rem',paddingBottom:'1.25rem',borderBottom:'1px solid var(--border)'}}>
                  <div style={{width:'48px',height:'48px',borderRadius:'50%',overflow:'hidden',border:'2px solid var(--border)',flexShrink:0,background:'var(--surface)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    {!imgErr
                      ?<img src={tm.photo} alt={tm.name} onError={()=>setImgErr(true)} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                      :<span style={{fontSize:'1.4rem'}}>👤</span>
                    }
                  </div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontWeight:600,fontSize:'.92rem',marginBottom:'.15rem'}}>{tm.name}</div>
                    <div style={{fontFamily:'var(--mono)',fontSize:'.7rem',color:'var(--muted)'}}>{tm.role} · {tm.company}</div>
                  </div>
                  <a href={tm.linkedin} target="_blank" rel="noreferrer"
                    style={{fontFamily:'var(--mono)',fontSize:'.68rem',color:'var(--accent)',border:'1px solid var(--border)',borderRadius:'4px',padding:'.2rem .5rem',transition:'all .2s',flexShrink:0}}
                    onMouseEnter={e=>{e.currentTarget.style.background='var(--accent)';e.currentTarget.style.color='var(--bg)'}}
                    onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='var(--accent)'}}>
                    in ↗
                  </a>
                </div>

                {/* RECOMENDACIÓN DESPUÉS */}
                <div style={{fontSize:'2rem',color:'var(--accent)',lineHeight:1,marginBottom:'.5rem',fontFamily:'Georgia,serif',opacity:.35}}>"</div>
                <p style={{fontFamily:'var(--mono)',fontSize:'clamp(.78rem,1.3vw,.85rem)',color:'var(--muted)',lineHeight:1.85}}>{text}</p>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
