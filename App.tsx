import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LandingPage } from './components/LandingPage';
import { Generator } from './components/Generator';

const AnimatedGridBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <motion.div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15), transparent 80%)`,
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'landing' | 'generator'>('landing');

  const showGenerator = () => {
    setCurrentPage('generator');
  };

  return (
    <div className="min-h-screen text-slate-100 font-sans p-4 sm:p-6 lg:p-8 relative">
      <AnimatedGridBackground />
      <div className="relative z-10">
        {currentPage === 'landing' ? (
          <LandingPage onGetStarted={showGenerator} />
        ) : (
          <Generator />
        )}
      </div>
    </div>
  );
};

export default App;