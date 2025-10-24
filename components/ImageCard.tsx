import React from 'react';

interface ImageCardProps {
  imageUrl: string | null;
  isLoading: boolean;
  topic: string;
}

const SkeletonLoader: React.FC = () => (
  <div className="w-full aspect-square bg-slate-700 rounded-lg relative overflow-hidden shimmer-effect"></div>
);

export const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, isLoading, topic }) => {
  
  const handleDownload = () => {
    if (!imageUrl) return;
    const link = document.createElement('a');
    link.href = imageUrl;
    const sanitizedTopic = topic.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    link.download = `ai_post_image_${sanitizedTopic || 'download'}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-lg p-6 flex flex-col transition-all duration-300 hover:border-emerald-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
      <h3 className="text-xl font-bold text-slate-200 mb-4 text-center">Generated Image</h3>
      <div className="flex-grow flex items-center justify-center mb-4">
        {isLoading && !imageUrl ? (
          <SkeletonLoader />
        ) : imageUrl ? (
          <img src={imageUrl} alt="AI generated for post" className="rounded-lg shadow-md max-w-full h-auto object-contain" />
        ) : null}
      </div>
      <button
        onClick={handleDownload}
        disabled={isLoading || !imageUrl}
        className="w-full px-5 py-2.5 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-emerald-500 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-70 transition-all duration-300"
      >
        Download Image
      </button>
    </div>
  );
};