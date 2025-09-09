import React from 'react';
import styles from '../App.module.css';
import { BrandIcon } from './Header';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerBrand}>
          <BrandIcon size={18} />
          <span>moliseke</span>
        </div>
        <div className={styles.footerCopy}>© {new Date().getFullYear()} moliseke — moliseke.com</div>
      </div>
    </footer>
  );
}
