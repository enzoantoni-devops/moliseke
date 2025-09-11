import React, { useState } from 'react';
import styles from '../App.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const response = await fetch('https://formspree.io/f/maypndlw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={`${styles.sectionPad} ${styles.contactSection}`}>
      <div className="container">
        <h2 className={styles.sectionHeadingLight}>Let’s talk about your migration</h2>
        <p className={styles.contactText}>
          Email us a short note about your current environment and target platform. We’ll reply with a
          brief plan and timeline options.
        </p>
        <form onSubmit={handleSubmit} style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: 8, borderRadius: 8, border: '1px solid #e5e7eb' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: 8, borderRadius: 8, border: '1px solid #e5e7eb' }}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            style={{ padding: 8, borderRadius: 8, border: '1px solid #e5e7eb' }}
          />
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
        {status === 'success' && <p style={{ marginTop: 8, color: 'var(--teal)' }}>Message sent! We’ll be in touch.</p>}
        {status === 'error' && <p style={{ marginTop: 8, color: '#e53935' }}>Something went wrong. Please try again.</p>}
      </div>
    </section>
  );
}
