import React from 'react';
import styles from '../App.module.css';

export default function Why() {
  return (
    <section id='why' className={`${styles.sectionPad} ${styles.whySection}`}>
      <div className='container'>
        <h2 className={styles.sectionHeading}>Why moliseke</h2>
        <div className={styles.whyGrid}>
          <div className='card'>
            <strong>Clarity over complexity</strong>
            <p className={styles.whyCardText}>Readable runbooks, diagrams and status. We make cloud changes transparent.</p>
          </div>
          <div className='card'>
            <strong>Security by design</strong>
            <p className={styles.whyCardText}>MFA, least privilege and audit baked-in from day one—no surprises later.</p>
          </div>
          <div className='card'>
            <strong>Measurable outcomes</strong>
            <p className={styles.whyCardText}>Cutover windows, rollback points and KPI dashboards to prove value.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
