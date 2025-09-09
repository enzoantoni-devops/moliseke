import React from 'react';
import styles from '../App.module.css';
import { BrandIcon } from './Header';

export default function Hero() {
  return (
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
  );
}
