import { useState } from 'react'
import { brands, t, type Brand } from '../data/portfolio.ts'

interface Props { lang: 'es'|'en' }

function BrandCard({ brand, lang }: { brand: Brand; lang: 'es'|'en' }) {
  const [imgError, setImgError] = useState(false)
  const [hovered, setHovered] = useState(false)
  const tx = t[lang].projects
  const desc = lang === 'es' ? brand.descriptionEs : brand.descriptionEn

  return (
    <div className="fade-in"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background:'var(--bg2)', border:`1px solid ${hovered ? brand.color+'55' : 'var(--border)'}`, borderRadius:'10px', padding:'clamp(1rem,2vw,1.5rem)', transition:'all 0.25s', transform: hovered ? 'translateY(-5px)' : 'none', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(90deg,${brand.color},transparent)`, transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin:'left', transition:'transform 0.3s' }} />

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'1rem' }}>
        <div style={{ width:'44px', height:'44px', borderRadius:'8px', background:'var(--bg3)', border:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', flexShrink:0 }}>
          {!imgError ? (
            <img src={brand.logo} alt={brand.name} onError={() => setImgError(true)} style={{ width:'100%', height:'100%', objectFit:'contain', padding:'5px' }} />
          ) : (
            <span style={{ fontFamily:'var(--mono)', fontSize:'0.6rem', color:brand.color, fontWeight:700 }}>{brand.name.slice(0,2).toUpperCase()}</span>
          )}
        </div>
        <a href={brand.url} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
          style={{ fontFamily:'var(--mono)', fontSize:'0.72rem', color:'var(--muted)', transition:'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color=brand.color)}
          onMouseLeave={e => (e.currentTarget.style.color='var(--muted)')}>
          {tx.visit}
        </a>
      </div>

      <h3 style={{ fontSize:'clamp(0.9rem,1.5vw,1rem)', fontWeight:600, marginBottom:'0.5rem', color: hovered ? brand.color : 'var(--text)', transition:'color 0.2s' }}>{brand.name}</h3>
      <p style={{ fontFamily:'var(--mono)', fontSize:'clamp(0.72rem,1.2vw,0.78rem)', color:'var(--muted)', lineHeight:1.7, marginBottom:'1.2rem' }}>{desc}</p>
      <div style={{ display:'flex', gap:'0.4rem', flexWrap:'wrap' }}>
        {brand.tags.map(tag => (
          <span key={tag} style={{ fontFamily:'var(--mono)', fontSize:'0.65rem', padding:'0.2rem 0.55rem', borderRadius:'3px', background:brand.color+'15', color:brand.color, border:`1px solid ${brand.color}35` }}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects({ lang }: Props) {
  const tx = t[lang].projects
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label fade-in">{tx.label}</p>
        <div className="fade-in" style={{ marginBottom:'2rem' }}>
          <h2 style={{ fontSize:'clamp(1.4rem,3.5vw,2.4rem)', fontWeight:800, letterSpacing:'-0.02em', marginBottom:'0.5rem' }}>
            {tx.title} <span style={{ color:'var(--accent)' }}>Consigue Ventas</span>
          </h2>
          <p style={{ fontFamily:'var(--mono)', fontSize:'clamp(0.78rem,1.4vw,0.85rem)', color:'var(--muted)' }}>{tx.subtitle}</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(100%,250px),1fr))', gap:'clamp(1rem,2vw,1.5rem)' }}>
          {brands.map(brand => <BrandCard key={brand.name} brand={brand} lang={lang} />)}
        </div>
      </div>
    </section>
  )
}
