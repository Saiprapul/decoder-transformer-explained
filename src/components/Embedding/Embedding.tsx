import React from 'react';
import './Embedding.css';

const Embedding: React.FC = () => {
  return (
    <div className="embedding">
      <h3>Embedding</h3>
      <p>
        Tokens are converted into dense vectors of fixed size. These vectors capture semantic meaning and relationships between words.
      </p>
      <div className="embedding-visualization">
        {/* Placeholder for embedding visualization */}
        <p>Visualization of embeddings will go here.</p>
      </div>
    </div>
  );
};

export default Embedding;