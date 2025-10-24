import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, RocketIcon, PaletteIcon } from './icons';

interface LandingPageProps {
  onGetStarted: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <motion.div
    variants={itemVariants}
    className="bg-slate-800/20 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 text-center"
  >
    <div className="w-16 h-16 mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-slate-100">{title}</h3>
    <p className="text-slate-400">{children}</p>
  </motion.div>
);

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[80vh]"
    >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400 mt-12">
            AI Post Generator
        </motion.h1>
        <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg md:text-xl text-slate-400">
            Transform your ideas into engaging social media posts for LinkedIn, Twitter, and Instagram in seconds.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4">
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStarted}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500"
            >
                Get Started Free
            </motion.button>
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-slate-800/50 border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition-colors duration-300">
                Learn More
            </motion.button>
        </motion.div>

        <motion.div 
            variants={containerVariants}
            className="mt-20 w-full grid grid-cols-1 md:grid-cols-3 gap-8"
        >
            <FeatureCard icon={<SparklesIcon />} title="AI-Powered">
                Advanced AI generates platform-specific content.
            </FeatureCard>
            <FeatureCard icon={<RocketIcon />} title="Lightning Fast">
                Get posts in seconds, not hours.
            </FeatureCard>
            <FeatureCard icon={<PaletteIcon />} title="Custom Images">
                AI-generated images for each post.
            </FeatureCard>
        </motion.div>
    </motion.div>
  );
};
