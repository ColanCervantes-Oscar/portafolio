import { useEffect, useRef, useState } from 'react'
import { skills, t } from '../data/portfolio.ts'

interface Props { lang:'es'|'en' }

export default function Skills({ lang }: Props) {
  const ref=useRef<HTMLElement>(null)
  const [animate,setAnimate]=useState(false)
  const tx=t[lang].skills

  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setAnimate(true)},{threshold:.15})
    if(ref.current)obs.observe(ref.current)
    return()=>obs.disconnect()
  },[])

  const rows=[]
  for(let i=0;i<skills.length;i+=2) rows.push(skills.slice(i,i+2))

  return (
    <section id="skills" className="section section-c" ref={ref}>
      <div className="container">
        <p className="section-label fade-in">{tx.label}</p>

        <div style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
          {rows.map((row,rowIdx)=>(
            <div key={rowIdx} style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'1.5rem'}}>
              {row.map((group,gi)=>(
                <div key={group.category} className="fade-in" style={{background:'var(--bg2)',border:'1px solid var(--border)',borderRadius:'12px',padding:'1.5rem',transition:'border-color .2s'}}
                  onMouseEnter={e=>(e.currentTarget as HTMLDivElement).style.borderColor='rgba(99,179,237,.35)'}
                  onMouseLeave={e=>(e.currentTarget as HTMLDivElement).style.borderColor='var(--border)'}>

                  <h3 style={{fontFamily:'var(--mono)',fontSize:'.75rem',color:'var(--accent)',letterSpacing:'.15em',textTransform:'uppercase',marginBottom:'1.25rem'}}>
                    {group.category}
                  </h3>

                  {/* Una sola fila con todos los iconos */}
                  <div style={{
                    display:'grid',
                    gridTemplateColumns:'repeat(auto-fit, minmax(70px, 1fr))',
                    gap:'.75rem',
                  }}>
                    {group.items.map((skill,si)=>(
                      <div key={skill.name} className="skill-card">
                        <img src={skill.icon} alt={skill.name}
                          onError={e=>{(e.currentTarget as HTMLImageElement).style.display='none'}}/>
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar-wrap">
                          <div className="skill-bar" style={{
                            width:animate?`${skill.level}%`:'0%',
                            transitionDelay:`${rowIdx*.1+gi*.08+si*.05}s`,
                          }}/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* En tablet y móvil: 1 columna, iconos en 2 filas */}
      <style>{`
        @media(max-width:768px){
          #skills .container > div > div {
            grid-template-columns: 1fr !important;
          }
        }
        @media(max-width:480px){
          #skills .skill-card {
            padding: .8rem .4rem !important;
          }
          #skills .skill-card img {
            width: 28px !important;
            height: 28px !important;
          }
        }
      `}</style>
    </section>
  )
}
