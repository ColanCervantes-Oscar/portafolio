import { useState } from 'react'
import { brands, t, type Brand } from '../data/portfolio.ts'

interface Props { lang:'es'|'en' }

// Genera screenshot automático desde la URL usando un servicio gratuito
function getSiteScreenshot(url: string): string {
  const encoded = encodeURIComponent(url)
  return `https://api.microlink.io/?url=${encoded}&screenshot=true&meta=false&embed=screenshot.url`
}

// Extrae dominio limpio para mostrarlo en la barra
function getDomain(url: string): string {
  return url.replace('https://','').replace('http://','').replace(/\/$/,'')
}

function BrandCard({ brand, lang }: { brand:Brand; lang:'es'|'en' }) {
  const [hovered,setHovered]=useState(false)
  const [imgErr,setImgErr]=useState(false)
  const tx=t[lang].projects
  const desc=lang==='es'?brand.descriptionEs:brand.descriptionEn
  const screenshot=getSiteScreenshot(brand.url)

  return (
    <div className="fade-in"
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      style={{background:'var(--bg2)',border:`1px solid ${hovered?brand.color+'55':'var(--border)'}`,borderRadius:'12px',overflow:'hidden',transition:'all .25s',transform:hovered?'translateY(-5px)':'none'}}>

      {/* Browser mockup */}
      <div style={{background:'var(--bg3)',borderBottom:'1px solid var(--border)'}}>
        {/* Barra del navegador */}
        <div style={{display:'flex',alignItems:'center',gap:'.5rem',padding:'.55rem .85rem',borderBottom:'1px solid var(--border)'}}>
          <div style={{display:'flex',gap:'.32rem',flexShrink:0}}>
            <div style={{width:'9px',height:'9px',borderRadius:'50%',background:'#ff5f57'}}/>
            <div style={{width:'9px',height:'9px',borderRadius:'50%',background:'#ffbd2e'}}/>
            <div style={{width:'9px',height:'9px',borderRadius:'50%',background:'#28c840'}}/>
          </div>
          <div style={{flex:1,background:'var(--bg2)',borderRadius:'4px',padding:'.18rem .6rem',fontFamily:'var(--mono)',fontSize:'.58rem',color:'var(--muted)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
            {getDomain(brand.url)}
          </div>
        </div>

        {/* Screenshot o fallback con color */}
        <div style={{height:'150px',overflow:'hidden',position:'relative'}}>
          {!imgErr ? (
            <img
              src={screenshot}
              alt={brand.name}
              onError={()=>setImgErr(true)}
              style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top',transition:'transform .4s'}}
              onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.03)')}
              onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')}
            />
          ) : (
            // Fallback si no carga el screenshot
            <div style={{width:'100%',height:'100%',background:`linear-gradient(135deg, ${brand.color}20, ${brand.color}05)`,display:'flex',alignItems:'center',justifyContent:'center',borderBottom:`2px solid ${brand.color}30`}}>
              <span style={{fontFamily:'var(--mono)',fontSize:'1.1rem',fontWeight:800,color:brand.color,letterSpacing:'-.02em'}}>{brand.name}</span>
            </div>
          )}
          {/* Overlay sutil al hacer hover */}
          <div style={{position:'absolute',inset:0,background:`linear-gradient(to bottom, transparent 60%, ${brand.color}15)`,pointerEvents:'none',opacity:hovered?1:0,transition:'opacity .3s'}}/>
        </div>
      </div>

      {/* Cuerpo */}
      <div style={{padding:'1rem 1.2rem'}}>
        <h3 style={{fontSize:'.95rem',fontWeight:600,color:hovered?brand.color:'var(--text)',transition:'color .2s',marginBottom:'.15rem'}}>{brand.name}</h3>
        <div style={{fontFamily:'var(--mono)',fontSize:'.62rem',color:'var(--accent)',letterSpacing:'.05em',textTransform:'uppercase',marginBottom:'.6rem'}}>Consigue Ventas</div>
        <p style={{fontFamily:'var(--mono)',fontSize:'.74rem',color:'var(--muted)',lineHeight:1.7,marginBottom:'.75rem'}}>{desc}</p>
        <div style={{display:'flex',gap:'.35rem',flexWrap:'wrap',marginBottom:'.75rem'}}>
          {brand.tags.map(tag=>(
            <span key={tag} style={{fontFamily:'var(--mono)',fontSize:'.62rem',padding:'.15rem .45rem',borderRadius:'3px',background:brand.color+'15',color:brand.color,border:`1px solid ${brand.color}30`}}>{tag}</span>
          ))}
        </div>
        <a href={brand.url} target="_blank" rel="noreferrer"
          onClick={e=>e.stopPropagation()}
          style={{fontFamily:'var(--mono)',fontSize:'.7rem',color:'var(--muted)',display:'inline-flex',alignItems:'center',gap:'.35rem',transition:'color .2s'}}
          onMouseEnter={e=>e.currentTarget.style.color=brand.color}
          onMouseLeave={e=>e.currentTarget.style.color='var(--muted)'}>
          {tx.visit}
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default function Projects({ lang }: Props) {
  const tx=t[lang].projects
  return (
    <section id="projects" className="section section-b">
      <div className="container">
        <p className="section-label fade-in">{tx.label}</p>
        <div className="fade-in" style={{marginBottom:'2rem'}}>
          <h2 style={{fontSize:'clamp(1.4rem,3.5vw,2.4rem)',fontWeight:800,letterSpacing:'-.02em',marginBottom:'.5rem'}}>
            {tx.title} <span style={{color:'var(--accent)'}}>Consigue Ventas</span>
          </h2>
          <p style={{fontFamily:'var(--mono)',fontSize:'clamp(.78rem,1.4vw,.85rem)',color:'var(--muted)'}}>{tx.subtitle}</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(100%,280px),1fr))',gap:'1.5rem'}}>
          {brands.map(brand=><BrandCard key={brand.name} brand={brand} lang={lang}/>)}
        </div>
      </div>
    </section>
  )
}
