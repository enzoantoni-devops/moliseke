import React from 'react';
import styles from '../App.module.css';

export default function Regions() {
  return (
    <section id='regions' className={styles.sectionPad}>
      <div className='container'>
        <h2 className={styles.sectionHeading}>Regions we serve</h2>
        <div className={styles.regionsGrid}>
          {['United States', 'Canada', 'United Kingdom', 'European Union', 'Australia'].map(r => (
            <span key={r} className='chip'>
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
