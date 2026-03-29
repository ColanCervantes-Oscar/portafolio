import { useState } from 'react'
import { personal, t } from '../data/portfolio.ts'

interface Props { lang:'es'|'en' }

const contactLinks = [
  {
    label: 'oscarcolancervantes14@gmail.com',
    href: 'mailto:oscarcolancervantes14@gmail.com',
    dot: true,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: 'linkedin.com/in/colancervantes',
    href: 'https://www.linkedin.com/in/colancervantes',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'github.com/ColanCervantes-Oscar',
    href: 'https://github.com/ColanCervantes-Oscar',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: '+51 980 423 135',
    href: 'tel:+51980423135',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.12 6.12l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
]

export default function Contact({ lang }: Props) {
  const tx=t[lang].contact
  const [form,setForm]=useState({name:'',email:'',subject:'',message:''})
  const [status,setStatus]=useState<'idle'|'sending'|'ok'|'error'>('idle')

  const handle=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>
    setForm(f=>({...f,[e.target.name]:e.target.value}))

  const submit=async(e:React.FormEvent)=>{
    e.preventDefault()
    setStatus('sending')
    try {
      const res=await fetch('https://api.web3forms.com/submit',{
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify({
          access_key:'YOUR_ACCESS_KEY_HERE',
          name:form.name, email:form.email,
          subject:`[Portfolio] ${form.subject}`,
          message:form.message, to:personal.email,
        })
      })
      const data=await res.json()
      if(data.success){setStatus('ok');setForm({name:'',email:'',subject:'',message:''})}
      else setStatus('error')
    } catch { setStatus('error') }
    setTimeout(()=>setStatus('idle'),5000)
  }

  return (
    <section id="contact" className="section section-b" style={{minHeight:'unset',paddingTop:'4rem',paddingBottom:'4rem'}}>
      <div className="container">
        <p className="section-label fade-in">{tx.label}</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))',gap:'clamp(1.5rem,3vw,3.5rem)',alignItems:'start'}}>

          {/* LEFT */}
          <div className="fade-in">
            <h2 style={{fontSize:'clamp(1.4rem,3.5vw,2.6rem)',fontWeight:800,lineHeight:1.2,marginBottom:'.85rem',letterSpacing:'-.02em',whiteSpace:'pre-line'}}>{tx.title}</h2>
            <p style={{fontFamily:'var(--mono)',fontSize:'clamp(.75rem,1.3vw,.85rem)',color:'var(--muted)',lineHeight:1.8,marginBottom:'1.5rem'}}>{tx.subtitle}</p>
            <div style={{display:'flex',flexDirection:'column',gap:'.55rem'}}>
              {contactLinks.map(link=>(
                <a key={link.label} href={link.href}
                  target={link.href.startsWith('mailto')||link.href.startsWith('tel')?undefined:'_blank'}
                  rel="noreferrer"
                  style={{fontFamily:'var(--mono)',fontSize:'clamp(.68rem,1.1vw,.78rem)',color:'var(--muted)',display:'flex',alignItems:'center',gap:'.65rem',padding:'.6rem .9rem',border:'1px solid var(--border)',borderRadius:'8px',transition:'all .2s'}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--accent)';e.currentTarget.style.color='var(--accent)';e.currentTarget.style.background='rgba(99,179,237,.05)'}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.color='var(--muted)';e.currentTarget.style.background='transparent'}}>
                  <span style={{color:'var(--accent)',flexShrink:0,display:'flex',alignItems:'center'}}>
                    {'dot' in link && link.dot
                      ? <span style={{width:'7px',height:'7px',borderRadius:'50%',background:'var(--accent2)',animation:'pulse 2s ease-in-out infinite',display:'inline-block'}}/>
                      : link.icon
                    }
                  </span>
                  <span style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — form */}
          <form onSubmit={submit} className="fade-in" style={{display:'flex',flexDirection:'column',gap:'1rem',background:'var(--bg3)',border:'1px solid var(--border)',borderRadius:'14px',padding:'clamp(1rem,2.5vw,1.75rem)'}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'.85rem'}}>
              <div className="form-group">
                <label className="form-label">{tx.form.name}</label>
                <input name="name" required value={form.name} onChange={handle} placeholder={tx.form.namePh} className="form-input"/>
              </div>
              <div className="form-group">
                <label className="form-label">{tx.form.email}</label>
                <input name="email" type="email" required value={form.email} onChange={handle} placeholder={tx.form.emailPh} className="form-input"/>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">{tx.form.subject}</label>
              <input name="subject" required value={form.subject} onChange={handle} placeholder={tx.form.subjectPh} className="form-input"/>
            </div>
            <div className="form-group">
              <label className="form-label">{tx.form.message}</label>
              <textarea name="message" required rows={4} value={form.message} onChange={handle} placeholder={tx.form.messagePh} className="form-input"/>
            </div>
            <button type="submit" disabled={status==='sending'} className="btn btn-primary" style={{width:'100%',textAlign:'center',opacity:status==='sending'?.7:1}}>
              {status==='sending'?tx.form.sending:tx.form.send}
            </button>
            {status==='ok'&&<p style={{fontFamily:'var(--mono)',fontSize:'.75rem',color:'var(--accent2)',textAlign:'center'}}>✓ {tx.form.success}</p>}
            {status==='error'&&<p style={{fontFamily:'var(--mono)',fontSize:'.75rem',color:'#fc8181',textAlign:'center'}}>✕ {tx.form.error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
