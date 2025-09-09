import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Why from './components/Why';
import Approach from './components/Approach';
import Regions from './components/Regions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <Services />
      <Why />
      <Approach />
      <Regions />
      <Contact />
      <Footer />
    </div>
  );
}
