import React from 'react';

const ProblemVideoSection: React.FC = () => {
  return (
    <div className="problem-video-container">
      <video 
        className="problem-video" 
        src="/media/199788-911378451_tiny.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
      <video 
        className="problem-video" 
        src="/media/91333-629589164_tiny.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
    </div>
  );
};

export default ProblemVideoSection;