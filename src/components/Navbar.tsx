import { useState, useEffect } from 'react'
import { t } from '../data/portfolio.ts'

interface Props { lang:'es'|'en'; setLang:(l:'es'|'en')=>void; dark:boolean; setDark:(d:boolean)=>void }

export default function Navbar({ lang, setLang, dark, setDark }: Props) {
  const [scrolled,setScrolled]=useState(false)
  const [menuOpen,setMenuOpen]=useState(false)
  const tx=t[lang]

  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>40)
    window.addEventListener('scroll',fn)
    return()=>window.removeEventListener('scroll',fn)
  },[])

  const navLinks=[
    {label:tx.nav.about,    href:'#about'},
    {label:tx.nav.skills,   href:'#skills'},
    {label:tx.nav.projects, href:'#projects'},
    {label:tx.nav.experience,href:'#experience'},
    {label:tx.nav.testimonials,href:'#testimonials'},
    {label:tx.nav.contact,  href:'#contact'},
  ]

  const pillBtn=(active:boolean):React.CSSProperties=>({
    fontFamily:'var(--mono)',fontSize:'.72rem',
    padding:'.3rem .75rem',borderRadius:'999px',
    border:`1px solid ${active?'var(--accent)':'var(--border)'}`,
    background:active?'var(--accent)':'transparent',
    color:active?'var(--bg)':'var(--muted)',
    transition:'all .2s',fontWeight:active?700:400,
  })

  return (
    <nav style={{
      position:'fixed',top:0,left:0,right:0,zIndex:100,
      background:scrolled||menuOpen?'rgba(8,11,16,0.95)':'transparent',
      backdropFilter:scrolled||menuOpen?'blur(14px)':'none',
      borderBottom:scrolled?'1px solid var(--border)':'1px solid transparent',
      transition:'all .3s',
    }}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1rem 0'}}>
        {/* Logo */}
        <div style={{fontFamily:'var(--mono)',fontSize:'.95rem',color:'var(--accent)',letterSpacing:'.05em',flexShrink:0}}>
          &lt;oscar.dev /&gt;
        </div>

        {/* Desktop links */}
        <div className="nav-desktop" style={{display:'flex',alignItems:'center',gap:'clamp(.8rem,1.5vw,1.8rem)'}}>
          {navLinks.map(l=>(
            <a key={l.href} href={l.href}
              style={{fontFamily:'var(--mono)',fontSize:'clamp(.68rem,.9vw,.78rem)',color:'var(--muted)',letterSpacing:'.06em',textTransform:'uppercase',transition:'color .2s',whiteSpace:'nowrap'}}
              onMouseEnter={e=>(e.currentTarget.style.color='var(--accent)')}
              onMouseLeave={e=>(e.currentTarget.style.color='var(--muted)')}>
              {l.label}
            </a>
          ))}
          {/* Lang */}
          <div style={{display:'flex',gap:'3px',background:'var(--bg2)',borderRadius:'999px',padding:'3px',border:'1px solid var(--border)',flexShrink:0}}>
            <button style={pillBtn(lang==='es')} onClick={()=>setLang('es')}>ES</button>
            <button style={pillBtn(lang==='en')} onClick={()=>setLang('en')}>EN</button>
          </div>
          {/* Theme */}
          <button onClick={()=>setDark(!dark)} style={{background:'var(--bg2)',border:'1px solid var(--border)',borderRadius:'999px',padding:'.3rem .65rem',color:'var(--muted)',fontSize:'.9rem',transition:'all .2s',flexShrink:0}}
            onMouseEnter={e=>(e.currentTarget.style.borderColor='var(--accent)')}
            onMouseLeave={e=>(e.currentTarget.style.borderColor='var(--border)')}>
            {dark?'☀️':'🌙'}
          </button>
        </div>

        {/* Hamburger */}
        <button onClick={()=>setMenuOpen(!menuOpen)} className="nav-hamburger"
          style={{display:'none',background:'none',border:'none',color:'var(--accent)',fontSize:'1.4rem'}}>
          {menuOpen?'✕':'☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen&&(
        <div className="container" style={{paddingBottom:'1.5rem',display:'flex',flexDirection:'column',gap:'.85rem'}}>
          {navLinks.map(l=>(
            <a key={l.href} href={l.href} onClick={()=>setMenuOpen(false)}
              style={{fontFamily:'var(--mono)',fontSize:'.85rem',color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase',padding:'.4rem 0',borderBottom:'1px solid var(--border)'}}>
              {l.label}
            </a>
          ))}
          <div style={{display:'flex',gap:'.75rem',alignItems:'center',paddingTop:'.25rem'}}>
            <div style={{display:'flex',gap:'3px',background:'var(--bg2)',borderRadius:'999px',padding:'3px',border:'1px solid var(--border)'}}>
              <button style={pillBtn(lang==='es')} onClick={()=>setLang('es')}>ES</button>
              <button style={pillBtn(lang==='en')} onClick={()=>setLang('en')}>EN</button>
            </div>
            <button onClick={()=>setDark(!dark)} style={{background:'var(--bg2)',border:'1px solid var(--border)',borderRadius:'999px',padding:'.3rem .65rem',color:'var(--muted)',fontSize:'.9rem'}}>
              {dark?'☀️':'🌙'}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media(max-width:900px){
          .nav-desktop{display:none!important}
          .nav-hamburger{display:block!important}
        }
      `}</style>
    </nav>
  )
}
