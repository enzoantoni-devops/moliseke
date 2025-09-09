import React from 'react'
import Header, { BrandIcon } from './components/Header'
import styles from './App.module.css'

const C={midnight:'#0E1B2E',brand:'#2A6AF4',teal:'#00796B'}

function Icon({name,size=20,color=C.brand}){
  const p={fill:'none',stroke:color,strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'}
  if(name==='cloud')
    return(<svg width={size} height={size} viewBox='0 0 24 24'><path {...p} d='M20 17.5a3.5 3.5 0 0 0-3.5-3.5h-.5a5 5 0 0 0-9.7-1.5A3 3 0 0 0 6 19h10.5A3.5 3.5 0 0 0 20 17.5z'/></svg>)
  if(name==='mail')
    return(<svg width={size} height={size} viewBox='0 0 24 24'><path {...p} d='M4 6h16v12H4z'/><path {...p} d='m22 6-10 7L2 6'/></svg>)
  if(name==='server')
    return(<svg width={size} height={size} viewBox='0 0 24 24'><rect {...p} x='3' y='4' width='18' height='6' rx='2'/><rect {...p} x='3' y='14' width='18' height='6' rx='2'/><path {...p} d='M7 8h.01M7 18h.01'/></svg>)
  if(name==='stack')
    return(<svg width={size} height={size} viewBox='0 0 24 24'><path {...p} d='m12 2 9 5-9 5-9-5 9-5z'/><path {...p} d='m3 12 9 5 9-5'/><path {...p} d='m3 17 9 5 9-5'/></svg>)
  return null
}

export default function App(){
  return(
    <div className={styles.app}>
      <Header />

      <section>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>Cloud migrations & email moves for SMBs</h1>
            <p className={styles.heroText}>On-prem → Azure & AWS • Microsoft 365 / Google Workspace • Terraform deployments. We work across the US, Canada, UK, EU & Australia.</p>
            <div className={styles.heroActions}>
              <a href='#services' className='btn btn-primary'>Our services</a>
              <a href='#contact' className='btn btn-outline'>Get in touch</a>
            </div>
            <div aria-hidden className={styles.heroBrandIcon}>
              <BrandIcon size={120} stroke={8} color='#fff'/>
            </div>
          </div>
        </div>
      </section>

      <section id='services' className={styles.sectionPad}>
        <div className='container'>
          <h2 className={styles.sectionHeading}>Services</h2>
          <div className={`grid grid-3 ${styles.servicesGrid}`}>
            <div className='card'>
              <div className={styles.cardHeader}><Icon name='cloud'/><h3>On-prem → Azure & AWS migrations</h3></div>
              <ul><li>• Discovery & readiness assessment</li><li>• Architecture & landing zone setup</li><li>• Cutover with rollback plan</li><li>• Security & compliance baked-in</li></ul>
            </div>
            <div className='card'>
              <div className={styles.cardHeader}><Icon name='stack'/><h3>Email to Microsoft 365 & Google Workspace</h3></div>
              <ul><li>• Domain & DNS alignment</li><li>• Mailbox & data migration (staged/cutover)</li><li>• Security policies: MFA, DKIM, DMARC</li><li>• End-user enablement & support</li></ul>
            </div>
            <div className='card'>
              <div className={styles.cardHeader}><Icon name='server'/><h3>Infrastructure deployments with Terraform</h3></div>
              <ul><li>• IaC standards for Azure & AWS</li><li>• CI/CD pipelines & environments</li><li>• Observability & cost guardrails</li><li>• Documentation & handover</li></ul>
            </div>
          </div>
        </div>
      </section>

      <section id='why' className={`${styles.sectionPad} ${styles.whySection}`}>
        <div className='container'>
          <h2 className={styles.sectionHeading}>Why moliseke</h2>
          <div className={styles.whyGrid}>
            <div className='card'><strong>Clarity over complexity</strong><p className={styles.whyCardText}>Readable runbooks, diagrams and status. We make cloud changes transparent.</p></div>
            <div className='card'><strong>Security by design</strong><p className={styles.whyCardText}>MFA, least privilege and audit baked-in from day one—no surprises later.</p></div>
            <div className='card'><strong>Measurable outcomes</strong><p className={styles.whyCardText}>Cutover windows, rollback points and KPI dashboards to prove value.</p></div>
          </div>
        </div>
      </section>

      <section id='approach' className={styles.sectionPad}>
        <div className='container'>
          <h2 className={styles.sectionHeading}>Our approach</h2>
          <div className={styles.approachGrid}>
            {[{step:'Discover',desc:'Inventory, risks, success criteria'},{step:'Plan',desc:'Architecture, timeline, runbook'},{step:'Migrate',desc:'Pilot, iterate, cutover'},{step:'Harden',desc:'Security, backups, DR'},{step:'Operate',desc:'Docs, handover, support'}].map((s,i)=>(
              <div key={s.step} className='card'>
                <div className={styles.approachStep}>{String(i+1).padStart(2,'0')}</div>
                <div className={styles.approachTitle}>{s.step}</div>
                <div className={styles.approachDesc}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='regions' className={styles.sectionPad}>
        <div className='container'>
          <h2 className={styles.sectionHeading}>Regions we serve</h2>
          <div className={styles.regionsGrid}>
            {['United States','Canada','United Kingdom','European Union','Australia'].map(r=><span key={r} className='chip'>{r}</span>)}
          </div>
        </div>
      </section>

      <section id='contact' className={`${styles.sectionPad} ${styles.contactSection}`}>
        <div className='container'>
          <h2 className={styles.sectionHeadingLight}>Let’s talk about your migration</h2>
          <p className={styles.contactText}>Email us a short note about your current environment and target platform. We’ll reply with a brief plan and timeline options.</p>
          <div className={styles.contactActions}>
            <a href='mailto:info@moliseke.com' className='btn btn-primary'>info@moliseke.com</a>
            <a href='#services' className='btn btn-outline'>Explore services</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <div className={styles.footerBrand}><BrandIcon size={18}/><span>moliseke</span></div>
          <div className={styles.footerCopy}>© {new Date().getFullYear()} moliseke — moliseke.com</div>
        </div>
      </footer>

    </div>
  )
}
