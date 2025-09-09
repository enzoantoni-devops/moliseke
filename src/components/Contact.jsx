import React from 'react';
import styles from '../App.module.css';

export default function Contact() {
  return (
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
  );
}
