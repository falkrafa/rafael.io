import React from 'react';
import './style/global.css';
import Profile from './profile';

export default () => {
  return (
    <section
      className="w-screen h-screen"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80)`,
      }}
    >
      <div className="gradient-vertical w-screen h-screen">
        <div className="gradient-horizontal w-screen h-screen">
          <div className="w-screen h-screen flex justify-center items-center">
            <Profile />
          </div>
        </div>
      </div>
    </section>
  );
};
