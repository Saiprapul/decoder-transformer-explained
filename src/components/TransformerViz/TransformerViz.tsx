import React, { useState } from 'react';
import Tokenization from '../Tokenization/Tokenization';
import Embedding from '../Embedding/Embedding';
import { Info, BookOpen, Brain } from 'lucide-react'; // Import icons
import './TransformerViz.css';

const TransformerViz: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="transformer-viz">
      {/* Header */}
      <header>
        <h1>Decoder-Only Transformer</h1>
        <h2>Visualizing the Architecture Behind Generative AI Models</h2>
      </header>

      {/* Enhanced Introduction Section */}
      <div className="notes">
        <p>
          Over the past two years, Generative AI has revolutionized technology, powering models like ChatGPT, 
          Claude, and many others. These models are built on the <strong>decoder-only transformer architecture</strong>, 
          which was introduced in the groundbreaking paper:
          <a
            href="https://arxiv.org/abs/1706.03762"
            target="_blank"
            rel="noopener noreferrer"
          >
            "Attention is All You Need"
          </a>
        </p>

        <button onClick={() => setShowDetails(!showDetails)}>
          <Info size={16} />
          {showDetails ? "Show Less" : "Learn More"}
        </button>

        {showDetails && (
          <div className="details">
            <div className="detail-item">
              <BookOpen size={20} />
              <div>
                <h3>Key Concepts</h3>
                <p>
                  Transformer models process text by breaking it down into tokens, 
                  converting them into vectors (embeddings), and using self-attention 
                  mechanisms to understand relationships between words.
                </p>
              </div>
            </div>
            <div className="detail-item">
              <Brain size={20} />
              <div>
                <h3>Why Decoder-Only?</h3>
                <p>
                  While the original Transformer had both encoder and decoder, 
                  modern language models like GPT primarily use the decoder 
                  architecture, optimized for generating human-like text.
                </p>
              </div>
            </div>
          </div>
        )}

        <p>
          On this page, you can visually explore how these models work under the hood, 
          step by step. We'll break down each component and show how they work together 
          to understand and generate text.
        </p>
      </div>

      {/* Interactive Components */}
      <div className="components">
        <Tokenization />
        <Embedding />
      </div>
    </div>
  );
};

export default TransformerViz;