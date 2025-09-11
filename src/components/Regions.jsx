import React from 'react';
import styles from '../App.module.css';

const regions = [
  { name: 'United States', code: 'us' },
  { name: 'Canada', code: 'ca' },
  { name: 'United Kingdom', code: 'uk' },
  { name: 'European Union', code: 'eu' },
  { name: 'Australia', code: 'au' },
];

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

export default function Regions() {
  return (
    <section id='regions' className={styles.sectionPad}>
      <div className='container'>
        <h2 className={styles.sectionHeading}>Regions we serve</h2>
        <div className={styles.regionsGrid}>
          {regions.map(({ name, code }) => (
            <span key={name} className={`chip ${styles.flagChip}`}>
              <img src={`/flags/${code}.svg`} alt='' width='20' height='20' />
              {name}
            </span>
          ))}
        </div>
        <div className={styles.logosGrid}>
          {logos.map(({ name, file }) => (
            <img key={file} src={`/logos/${file}.svg`} alt={`${name} logo`} loading='lazy' />
          ))}
        </div>
      </div>
    </section>
  );
}
