import React from 'react';

interface GraphicStepProps {
  id: string;
  children: React.ReactNode;
}

const GraphicStep: React.FC<GraphicStepProps> = ({ id, children }) => {
  return (
    <div id={id} className="graphic-step">
      {children}
    </div>
  );
};

export default GraphicStep;