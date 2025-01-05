import React, { useState } from 'react';
import './Tokenization.css';

const Tokenization: React.FC = () => {
  const [input, setInput] = useState('');
  const [tokenizationMethod, setTokenizationMethod] = useState<'word' | 'subword' | 'character'>('word');

  // Tokenization logic
  const tokenize = (text: string, method: 'word' | 'subword' | 'character') => {
    if (method === 'word') {
      return text.split(' '); // Simple word tokenization
    } else if (method === 'subword') {
      return text.split(/(\s+|\W+)/).filter((token) => token.trim() !== ''); // Subword tokenization
    } else if (method === 'character') {
      return text.split(''); // Character tokenization
    }
    return [];
  };

  const tokens = tokenize(input, tokenizationMethod);

  return (
    <div className="tokenization">
      <h3>Tokenization</h3>
      <p>
        Tokenization is the process of breaking down text into smaller units called tokens. 
        These tokens can be words, subwords, or even characters, depending on the method used.
      </p>

      {/* Tokenization Method Toggle */}
      <div className="method-toggle">
        <button
          onClick={() => setTokenizationMethod('word')}
          className={tokenizationMethod === 'word' ? 'active' : ''}
        >
          Word Tokenization
        </button>
        <button
          onClick={() => setTokenizationMethod('subword')}
          className={tokenizationMethod === 'subword' ? 'active' : ''}
        >
          Subword Tokenization
        </button>
        <button
          onClick={() => setTokenizationMethod('character')}
          className={tokenizationMethod === 'character' ? 'active' : ''}
        >
          Character Tokenization
        </button>
      </div>

      {/* Input Text Box */}
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text here..."
        className="input-box"
      />

      {/* Tokenized Output */}
      <div className="tokenized-output">
        <strong>Tokens:</strong>
        <div className="tokens">
          {tokens.map((token, index) => (
            <span key={index} className="token">
              {token}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokenization;