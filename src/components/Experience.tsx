import { useState } from 'react'
import { experiences, brands, t } from '../data/portfolio.ts'

interface Props { lang:'es'|'en' }

function ImageCarousel({ images, company }: { images:string[]; company:string }) {
  const [current,setCurrent]=useState(0)
  const [imgErr,setImgErr]=useState<boolean[]>(images.map(()=>false))
  const prev=()=>setCurrent(c=>(c-1+images.length)%images.length)
  const next=()=>setCurrent(c=>(c+1)%images.length)
  if(!images.length) return null
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'.5rem'}}>
      <div style={{position:'relative',borderRadius:'10px',overflow:'hidden',border:'1px solid var(--border)',aspectRatio:'16/10',background:'var(--bg3)',display:'flex',alignItems:'center',justifyContent:'center'}}>
        {!imgErr[current]
          ?<img src={images[current]} alt={`${company} ${current+1}`}
              onError={()=>setImgErr(e=>{const n=[...e];n[current]=true;return n})}
              style={{width:'100%',height:'100%',objectFit:'cover',transition:'opacity .3s'}}/>
          :<div style={{color:'var(--muted)',fontFamily:'var(--mono)',fontSize:'.7rem',textAlign:'center',padding:'1rem'}}>
              <div style={{fontSize:'1.8rem',marginBottom:'.4rem'}}>📷</div>
              /public/images/exp/
            </div>
        }
        {images.length>1&&(
          <>
            <button onClick={prev} style={{position:'absolute',left:'7px',top:'50%',transform:'translateY(-50%)',background:'rgba(8,11,16,.75)',border:'1px solid var(--border)',borderRadius:'50%',width:'28px',height:'28px',color:'var(--text)',fontSize:'1rem',display:'flex',alignItems:'center',justifyContent:'center',transition:'all .2s'}}
              onMouseEnter={e=>{e.currentTarget.style.background='var(--accent)';e.currentTarget.style.color='var(--bg)'}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(8,11,16,.75)';e.currentTarget.style.color='var(--text)'}}>‹</button>
            <button onClick={next} style={{position:'absolute',right:'7px',top:'50%',transform:'translateY(-50%)',background:'rgba(8,11,16,.75)',border:'1px solid var(--border)',borderRadius:'50%',width:'28px',height:'28px',color:'var(--text)',fontSize:'1rem',display:'flex',alignItems:'center',justifyContent:'center',transition:'all .2s'}}
              onMouseEnter={e=>{e.currentTarget.style.background='var(--accent)';e.currentTarget.style.color='var(--bg)'}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(8,11,16,.75)';e.currentTarget.style.color='var(--text)'}}>›</button>
            <div style={{position:'absolute',bottom:'7px',right:'9px',fontFamily:'var(--mono)',fontSize:'.6rem',color:'rgba(255,255,255,.75)',background:'rgba(0,0,0,.55)',padding:'.12rem .4rem',borderRadius:'3px'}}>
              {current+1}/{images.length}
            </div>
          </>
        )}
      </div>
      {images.length>1&&(
        <div style={{display:'flex',justifyContent:'center',gap:'.35rem'}}>
          {images.map((_,i)=>(
            <button key={i} onClick={()=>setCurrent(i)} style={{width:i===current?'16px':'6px',height:'6px',borderRadius:'3px',background:i===current?'var(--accent)':'var(--border)',border:'none',padding:0,transition:'all .3s'}}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Experience({ lang }: Props) {
  const [open,setOpen]=useState<number|null>(0)
  const tx=t[lang].experience

  return (
    <section id="experience" className="section section-d" style={{minHeight:'unset',paddingTop:'4rem',paddingBottom:'4rem'}}>
      <div className="container">
        <p className="section-label fade-in">{tx.label}</p>

        <div className="fade-in" style={{display:'flex',flexDirection:'column',gap:'1rem',marginBottom:'3.5rem'}}>
          {experiences.map((exp,i)=>{
            const isOpen=open===i
            const role=lang==='es'?exp.roleEs:exp.roleEn
            const loc=lang==='es'?exp.locationEs:exp.locationEn
            const summary=lang==='es'?exp.summaryEs:exp.summaryEn
            const details=lang==='es'?exp.detailEs:exp.detailEn
            const hasImages=exp.images&&exp.images.length>0

            return(
              <div key={i} className="accordion-item" style={{borderColor:isOpen?'rgba(99,179,237,.4)':'var(--border)'}}>

                {/* Header — en móvil se apila en filas */}
                <div className="accordion-header" onClick={()=>setOpen(isOpen?null:i)} style={{cursor:'pointer'}}>
                  <div style={{display:'flex',alignItems:'center',gap:'.85rem',flex:1,minWidth:0}}>
                    {/* Logo */}
                    <div style={{width:'38px',height:'38px',borderRadius:'8px',background:'var(--bg3)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',flexShrink:0}}>
                      <img src={exp.logo} alt={exp.company}
                        onError={e=>{(e.currentTarget as HTMLImageElement).style.display='none'}}
                        style={{width:'100%',height:'100%',objectFit:'contain',padding:'4px'}}/>
                    </div>

                    {/* Info — apila en móvil */}
                    <div style={{flex:1,minWidth:0,display:'flex',flexWrap:'wrap',alignItems:'center',gap:'.25rem .75rem'}}>
                      <div style={{width:'100%'}}>
                        <div style={{fontWeight:600,fontSize:'clamp(.8rem,1.4vw,.92rem)',color:'var(--text)',lineHeight:1.3}}>{role}</div>
                        <div style={{fontFamily:'var(--mono)',fontSize:'.7rem',color:'var(--accent)',marginTop:'.1rem'}}>{exp.company}</div>
                      </div>
                      <div style={{fontFamily:'var(--mono)',fontSize:'.65rem',color:'var(--muted)'}}>{exp.period}</div>
                      <div style={{fontFamily:'var(--mono)',fontSize:'.65rem',color:'var(--muted)'}}>{loc}</div>
                    </div>
                  </div>
                  <span className="accordion-arrow" style={{transform:isOpen?'rotate(180deg)':'rotate(0deg)',marginLeft:'.5rem',flexShrink:0}}>▾</span>
                </div>

                {/* Body */}
                <div className={`accordion-body${isOpen?' open':''}`}>
                  <div style={{
                    display:'grid',
                    gridTemplateColumns: hasImages ? 'repeat(auto-fit,minmax(min(100%,240px),1fr))' : '1fr',
                    gap:'1.25rem',
                    alignItems:'start',
                  }}>
                    <div>
                      <p style={{fontFamily:'var(--mono)',fontSize:'.8rem',color:'var(--muted)',marginBottom:'.85rem',lineHeight:1.8}}>{summary}</p>
                      <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'.45rem'}}>
                        {details.map((d,j)=>(
                          <li key={j} style={{fontFamily:'var(--mono)',fontSize:'.78rem',color:'var(--muted)',display:'flex',gap:'.5rem',alignItems:'flex-start',lineHeight:1.6}}>
                            <span style={{color:'var(--accent)',flexShrink:0}}>▸</span>{d}
                          </li>
                        ))}
                      </ul>
                      <div style={{display:'flex',gap:'.4rem',flexWrap:'wrap',marginTop:'.85rem'}}>
                        {exp.tags.map(tag=>(
                          <span key={tag} style={{fontFamily:'var(--mono)',fontSize:'.63rem',padding:'.18rem .5rem',borderRadius:'3px',background:'rgba(99,179,237,.1)',color:'var(--accent)',border:'1px solid rgba(99,179,237,.2)'}}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    {hasImages&&<ImageCarousel images={exp.images!} company={exp.company}/>}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Logos strip */}
        <div className="fade-in">
          <p style={{fontFamily:'var(--mono)',fontSize:'.7rem',color:'var(--muted)',letterSpacing:'.15em',textTransform:'uppercase',marginBottom:'1.25rem',textAlign:'center'}}>
            {lang==='es'?'Marcas con las que he trabajado':'Brands I have worked with'}
          </p>
          <div style={{display:'flex',flexWrap:'wrap',gap:'.85rem',justifyContent:'center',alignItems:'center'}}>
            {brands.map(b=>(
              <a key={b.name} href={b.url} target="_blank" rel="noreferrer"
                style={{display:'flex',alignItems:'center',justifyContent:'center',width:'76px',height:'42px',background:'var(--bg2)',border:'1px solid var(--border)',borderRadius:'8px',overflow:'hidden',padding:'6px',transition:'border-color .2s,transform .2s'}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=b.color;e.currentTarget.style.transform='translateY(-2px)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='translateY(0)'}}>
                <img src={b.logo} alt={b.name} style={{maxWidth:'100%',maxHeight:'100%',objectFit:'contain'}}
                  onError={e=>{(e.currentTarget.parentElement as HTMLAnchorElement).innerHTML=`<span style="font-family:var(--mono);font-size:.58rem;color:var(--muted);text-align:center;padding:2px">${b.name}</span>`}}/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
