import React from 'react';
import styles from '../App.module.css';

export default function Approach() {
  return (
    <section id='approach' className={styles.sectionPad}>
      <div className='container'>
        <h2 className={styles.sectionHeading}>Our approach</h2>
        <div className={styles.approachGrid}>
          {[{ step: 'Discover', desc: 'Inventory, risks, success criteria' }, { step: 'Plan', desc: 'Architecture, timeline, runbook' }, { step: 'Migrate', desc: 'Pilot, iterate, cutover' }, { step: 'Harden', desc: 'Security, backups, DR' }, { step: 'Operate', desc: 'Docs, handover, support' }].map((s, i) => (
            <div key={s.step} className='card'>
              <div className={styles.approachStep}>{String(i + 1).padStart(2, '0')}</div>
              <div className={styles.approachTitle}>{s.step}</div>
              <div className={styles.approachDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
