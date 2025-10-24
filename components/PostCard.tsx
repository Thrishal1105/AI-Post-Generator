import React, { useState, useEffect } from 'react';

interface PostCardProps {
  platformName: string;
  icon: React.ReactNode;
  content: string;
  isLoading: boolean;
}

const SkeletonLoader: React.FC = () => (
  <div className="space-y-3">
    <div className="h-4 bg-slate-700 rounded w-3/4 relative overflow-hidden shimmer-effect"></div>
    <div className="h-4 bg-slate-700 rounded relative overflow-hidden shimmer-effect"></div>
    <div className="h-4 bg-slate-700 rounded relative overflow-hidden shimmer-effect"></div>
    <div className="h-4 bg-slate-700 rounded w-1/2 relative overflow-hidden shimmer-effect"></div>
  </div>
);

export const PostCard: React.FC<PostCardProps> = ({ platformName, icon, content, isLoading }) => {
  const [copyStatus, setCopyStatus] = useState<'Copy' | 'Copied!'>('Copy');

  useEffect(() => {
    if (content) {
      setCopyStatus('Copy');
    }
  }, [content]);

  const handleCopy = () => {
    if (content) {
      navigator.clipboard.writeText(content);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus('Copy'), 2000);
    }
  };

  return (
    <div className="bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-lg p-6 flex flex-col h-full transition-all duration-300 hover:border-sky-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8">{icon}</div>
          <h3 className="text-xl font-bold text-slate-200">{platformName}</h3>
        </div>
        <button
          onClick={handleCopy}
          disabled={isLoading || !content}
          className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
            copyStatus === 'Copied!'
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
          } disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed`}
        >
          {copyStatus}
        </button>
      </div>
      <div className="flex-grow text-slate-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">
        {isLoading ? <SkeletonLoader /> : content}
      </div>
    </div>
  );
};