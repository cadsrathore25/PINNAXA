
import React, { useState } from 'react';
import { Sparkles, Loader2, Copy } from 'lucide-react';
import { generateTeaser } from '../services/gemini';

const AdminAISummarizer = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!inputText) return;
    setLoading(true);
    const result = await generateTeaser(inputText);
    setSummary(result);
    setLoading(false);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          AI Summarizer <Sparkles className="text-primary w-8 h-8" />
        </h1>
        <p className="text-gray-500">Transform long product descriptions into catchy website teasers using Gemini AI.</p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3">Input Full Text</label>
          <textarea 
            rows={8}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 focus:ring-2 ring-primary outline-none transition-all leading-relaxed"
            placeholder="Paste product details or company mission here..."
          />
        </div>

        <button 
          onClick={handleGenerate}
          disabled={loading || !inputText}
          className="w-full bg-primary text-white py-5 rounded-2xl font-bold hover:bg-primary-dark shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Sparkles className="w-6 h-6" />}
          Generate Engaging Teaser
        </button>

        {summary && (
          <div className="mt-10 p-8 bg-primary/5 rounded-[2rem] border border-primary/10 relative group">
            <h3 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Generated Teaser</h3>
            <p className="text-xl font-medium text-gray-800 leading-relaxed italic">
              "{summary}"
            </p>
            <button 
              onClick={() => { navigator.clipboard.writeText(summary); alert('Copied to clipboard!'); }}
              className="absolute top-6 right-6 p-2 bg-white rounded-xl shadow-md text-primary opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAISummarizer;
