
import React from 'react';

export const Header: React.FC = () => (
  <header className="text-center my-8 md:my-12">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-400">
        AI Post Generator
      </span>
    </h1>
    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
      Enter a topic and let AI craft engaging posts for LinkedIn, Twitter (X), and Instagram, complete with a unique, relevant image.
    </p>
  </header>
);
