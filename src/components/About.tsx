import { useState } from 'react'
import { personal, badges, badgesEn, stats, t } from '../data/portfolio.ts'

interface Props { lang:'es'|'en' }

export default function About({ lang }: Props) {
  const [img1Err,setImg1Err]=useState(false)
  const [img2Err,setImg2Err]=useState(false)
  const tx=t[lang].about
  const bl=lang==='es'?badges:badgesEn

  return (
    <section id="about" className="section section-b">
      <div className="container">
        <p className="section-label fade-in">{tx.label}</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,320px),1fr))',gap:'clamp(2rem,4vw,4rem)',alignItems:'start'}}>
          <div className="fade-in">
            <p style={{fontFamily:'var(--mono)',fontSize:'.75rem',color:'var(--accent)',letterSpacing:'.15em',textTransform:'uppercase',marginBottom:'.8rem'}}>— {tx.tagline}</p>
            <h2 style={{fontSize:'clamp(1.5rem,3.5vw,2.6rem)',fontWeight:800,lineHeight:1.15,letterSpacing:'-.02em',marginBottom:'1.5rem',whiteSpace:'pre-line'}}>{tx.title}</h2>
            <p style={{fontFamily:'var(--mono)',fontSize:'clamp(.78rem,1.4vw,.88rem)',color:'var(--muted)',lineHeight:1.9,marginBottom:'1rem'}}>{tx.p1}</p>
            <p style={{fontFamily:'var(--mono)',fontSize:'clamp(.78rem,1.4vw,.88rem)',color:'var(--muted)',lineHeight:1.9,marginBottom:'1rem'}}>{tx.p2}</p>
            <p style={{fontFamily:'var(--mono)',fontSize:'clamp(.78rem,1.4vw,.88rem)',color:'var(--muted)',lineHeight:1.9,marginBottom:'1.5rem'}}>{tx.p3}</p>
            <div style={{display:'flex',flexWrap:'wrap',gap:'.5rem',marginBottom:'2rem'}}>
              {bl.map(b=><span key={b.text} className="badge"><span>{b.icon}</span> {b.text}</span>)}
            </div>
            <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
              <a href="#contact" className="btn btn-primary">{tx.cta1}</a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-ghost">{tx.cta2}</a>
            </div>
          </div>

          <div className="fade-in" style={{display:'flex',flexDirection:'column',gap:'1.2rem'}}>
            <div style={{borderRadius:'14px',overflow:'hidden',border:'1px solid var(--border)',aspectRatio:'4/3',background:'var(--bg2)',display:'flex',alignItems:'center',justifyContent:'center',animation:'float 6s ease-in-out infinite'}}>
              {!img1Err
                ?<img src={personal.avatar} alt="Oscar" onError={()=>setImg1Err(true)} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                :<div style={{textAlign:'center',color:'var(--muted)',fontFamily:'var(--mono)',fontSize:'.78rem',padding:'2rem'}}><div style={{fontSize:'3rem',marginBottom:'.5rem'}}>👤</div>Agrega /public/images/mi-foto.jpg</div>
              }
            </div>
            {!img2Err&&(
              <div style={{borderRadius:'10px',overflow:'hidden',border:'1px solid var(--border)',aspectRatio:'16/7',background:'var(--bg2)'}}>
                <img src={personal.avatarAlt} alt="Oscar alt" onError={()=>setImg2Err(true)} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
              </div>
            )}
            <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'.8rem'}}>
              {stats.map(s=>(
                <div key={s.num} style={{background:'var(--bg3)',border:'1px solid var(--border)',borderRadius:'10px',padding:'1rem',textAlign:'center',transition:'border-color .2s,transform .2s'}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.borderColor='var(--accent)';(e.currentTarget as HTMLDivElement).style.transform='translateY(-2px)'}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.borderColor='var(--border)';(e.currentTarget as HTMLDivElement).style.transform='translateY(0)'}}>
                  <div style={{fontSize:'clamp(1.4rem,3vw,2rem)',fontWeight:800,color:'var(--accent)',lineHeight:1}}>{s.num}</div>
                  <div style={{fontFamily:'var(--mono)',fontSize:'.68rem',color:'var(--muted)',marginTop:'.4rem',lineHeight:1.4}}>{lang==='es'?s.labelEs:s.labelEn}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
