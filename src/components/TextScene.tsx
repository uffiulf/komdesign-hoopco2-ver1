import React from 'react';

interface TextSceneProps {
  id: string;
  title: string;
  text: string;
}

const TextScene: React.FC<TextSceneProps> = ({ id, title, text }) => {
  return (
    <div id={id} className="text-scene">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default TextScene;