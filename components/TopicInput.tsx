import React from 'react';

const tones = ['Professional', 'Casual', 'Witty', 'Informative', 'Funny'];

interface TopicInputProps {
  topic: string;
  setTopic: (topic: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
  selectedTone: string;
  setSelectedTone: (tone: string) => void;
}

export const TopicInput: React.FC<TopicInputProps> = ({ topic, setTopic, onGenerate, isLoading, selectedTone, setSelectedTone }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-lg">
      <textarea
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="e.g., How AI is transforming education"
        className="w-full h-28 p-4 bg-slate-900/50 border-2 border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 resize-none"
        disabled={isLoading}
      />
      
      <div className="mt-4">
        <label className="block text-sm font-medium text-slate-400 mb-2">Select a tone:</label>
        <div className="flex flex-wrap gap-2">
          {tones.map((tone) => (
            <button
              key={tone}
              onClick={() => setSelectedTone(tone)}
              disabled={isLoading}
              className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800
                ${selectedTone === tone
                  ? 'bg-white text-slate-900 ring-white'
                  : 'bg-transparent border border-slate-500 hover:bg-slate-700/50 text-slate-300'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {tone}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <button
          onClick={onGenerate}
          disabled={isLoading || !topic.trim()}
          className="w-full px-5 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-70 transition-all duration-300 flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            'Generate'
          )}
        </button>
      </div>
    </div>
  );
};
