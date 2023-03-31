import React from 'react';
import './components/style/global.css';
import MainSection from './components/mainSection';
import Terminal from './components/Terminal';
import Header from './components/header';

export default () => {
  return (
    <section>
      <Header />
      <MainSection />
      <Terminal />
    </section>
  );
};
