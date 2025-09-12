import React, { useEffect, useRef } from 'react';
import styles from '../App.module.css';

const C = { midnight: '#0E1B2E', brand: '#2A6AF4', teal: '#00796B' };

const logos = [
  { name: 'Microsoft 365', file: '365' },
  { name: 'AWS', file: 'aws' },
  { name: 'Azure', file: 'azure' },
  { name: 'Elasticsearch', file: 'elasticsearch' },
  { name: 'GitHub', file: 'github' },
  { name: 'GitLab', file: 'gitlab' },
  { name: 'SharePoint', file: 'sharepoint' },
  { name: 'Slack', file: 'slack' },
  { name: 'Teams', file: 'teams' },
  { name: 'Windows', file: 'windows' },
];

function Icon({ name, size = 20, color = C.brand }) {
  const p = { fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'cloud')
    return (
      <svg width={size} height={size} viewBox='0 0 24 24'>
        <path {...p} d='M20 17.5a3.5 3.5 0 0 0-3.5-3.5h-.5a5 5 0 0 0-9.7-1.5A3 3 0 0 0 6 19h10.5A3.5 3.5 0 0 0 20 17.5z' />
      </svg>
    );
  if (name === 'mail')
    return (
      <svg width={size} height={size} viewBox='0 0 24 24'>
        <path {...p} d='M4 6h16v12H4z' />
        <path {...p} d='m22 6-10 7L2 6' />
      </svg>
    );
  if (name === 'server')
    return (
      <svg width={size} height={size} viewBox='0 0 24 24'>
        <rect {...p} x='3' y='4' width='18' height='6' rx='2' />
        <rect {...p} x='3' y='14' width='18' height='6' rx='2' />
        <path {...p} d='M7 8h.01M7 18h.01' />
      </svg>
    );
  if (name === 'stack')
    return (
      <svg width={size} height={size} viewBox='0 0 24 24'>
        <path {...p} d='m12 2 9 5-9 5-9-5 9-5z' />
        <path {...p} d='m3 12 9 5 9-5' />
        <path {...p} d='m3 17 9 5 9-5' />
      </svg>
    );
  return null;
}

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id='services' className={styles.sectionPad}>
      <div className='container'>
        <h2 className={styles.sectionHeading}>Services</h2>
        <div className={`grid grid-3 ${styles.servicesGrid}`}>
          <div className='card service-card' ref={(el) => (cardsRef.current[0] = el)}>
            <div className={styles.cardHeader}>
              <Icon name='cloud' />
              <h3>On-prem → Azure & AWS migrations</h3>
            </div>
            <ul>
              <li>• Discovery & readiness assessment</li>
              <li>• Architecture & landing zone setup</li>
              <li>• Cutover with rollback plan</li>
              <li>• Security & compliance baked-in</li>
            </ul>
          </div>
          <div className='card service-card' ref={(el) => (cardsRef.current[1] = el)}>
            <div className={styles.cardHeader}>
              <Icon name='stack' />
              <h3>Email to Microsoft 365 & Google Workspace</h3>
            </div>
            <ul>
              <li>• Domain & DNS alignment</li>
              <li>• Mailbox & data migration (staged/cutover)</li>
              <li>• Security policies: MFA, DKIM, DMARC</li>
              <li>• End-user enablement & support</li>
            </ul>
          </div>
          <div className='card service-card' ref={(el) => (cardsRef.current[2] = el)}>
            <div className={styles.cardHeader}>
              <Icon name='server' />
              <h3>Infrastructure deployments with Terraform</h3>
            </div>
            <ul>
              <li>• IaC standards for Azure & AWS</li>
              <li>• CI/CD pipelines & environments</li>
              <li>• Observability & cost guardrails</li>
              <li>• Documentation & handover</li>
            </ul>
          </div>
        </div>
        <div className={styles.logosGrid}>
          {logos.map(({ name, file }) => (
            <span key={file} className={styles.logoItem}>
              <img
                src={`/logos/${file}.svg`}
                alt={`${name} logo`}
                width='32'
                height='32'
                loading='lazy'
              />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
