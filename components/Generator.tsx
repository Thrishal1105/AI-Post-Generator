import React, { useState, useCallback, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Header } from './Header';
import { TopicInput } from './TopicInput';
import { PostCard } from './PostCard';
import { ImageCard } from './ImageCard';
import { LinkedInIcon, TwitterIcon, InstagramIcon } from './icons';
import { generateSocialPosts, generatePostImage } from '../services/geminiService';
import type { GeneratedPosts, SocialPlatform } from '../types';

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export const Generator: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const [tone, setTone] = useState<string>('Professional');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedPosts, setGeneratedPosts] = useState<GeneratedPosts | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasGenerated, setHasGenerated] = useState<boolean>(false);

  const handleGenerate = useCallback(async () => {
    if (!topic.trim()) {
      setError('Please enter a topic.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedPosts(null);
    setGeneratedImage(null);
    setHasGenerated(true);

    try {
      const [posts, image] = await Promise.all([
        generateSocialPosts(topic, tone),
        generatePostImage(topic, tone)
      ]);

      setGeneratedPosts(posts);
      setGeneratedImage(image);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [topic, tone]);
  
  const socialPlatforms: { platform: SocialPlatform; icon: React.ReactNode; name: string }[] = [
    { platform: 'linkedin', icon: <LinkedInIcon />, name: 'LinkedIn' },
    { platform: 'twitter', icon: <TwitterIcon />, name: 'Twitter (X)' },
    { platform: 'instagram', icon: <InstagramIcon />, name: 'Instagram' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <Header />
      </AnimatedSection>
      
      <main>
        <AnimatedSection className="mt-8">
          <TopicInput
            topic={topic}
            setTopic={setTopic}
            onGenerate={handleGenerate}
            isLoading={isLoading}
            selectedTone={tone}
            setSelectedTone={setTone}
          />
        </AnimatedSection>

        {error && (
           <AnimatedSection className="mt-6">
            <div className="bg-red-900/50 backdrop-blur-md border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center" role="alert">
              <p>{error}</p>
            </div>
          </AnimatedSection>
        )}

        {hasGenerated && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {socialPlatforms.map(({ platform, icon, name }) => (
                <AnimatedSection key={platform}>
                    <PostCard
                        key={platform}
                        platformName={name}
                        icon={icon}
                        content={generatedPosts?.[platform] ?? ''}
                        isLoading={isLoading}
                    />
                </AnimatedSection>
            ))}
            <AnimatedSection>
              <ImageCard 
                  imageUrl={generatedImage} 
                  isLoading={isLoading}
                  topic={topic}
              />
            </AnimatedSection>
          </div>
        )}
      </main>
    </div>
  );
};
