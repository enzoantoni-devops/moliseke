import React from 'react';
import styles from '../App.module.css';

export default function Contact() {
  return (
    <section id='contact' className={`${styles.sectionPad} ${styles.contactSection}`}>
      <div className='container'>
        <h2 className={styles.sectionHeadingLight}>Let’s talk about your migration</h2>
        <p className={styles.contactText}>Send us a note about your current environment and target platform. We’ll reply with a brief plan and timeline options.</p>
          <form
            name='contact'
            method='POST'
            action='/'
            data-netlify='true'
            netlify-honeypot='bot-field'
            data-redirect='/'
            className={styles.contactForm}
          >
          <input type='hidden' name='form-name' value='contact' />
          <p className='sr-only'>
            <label>
              Don’t fill this out if you're human:
              <input name='bot-field' tabIndex='-1' autoComplete='off' />
            </label>
          </p>
          <div className={styles.contactField}>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' name='name' required />
          </div>
          <div className={styles.contactField}>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' name='email' required />
          </div>
          <div className={styles.contactField}>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' rows='5' required></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  );
}
