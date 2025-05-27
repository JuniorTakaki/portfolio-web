import React from 'react';

const Project: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 font-sans">
      <h1 className="text-3xl text-gray-900">Página de Projeto</h1>
      <p className="text-base text-gray-500 mt-2">
        Você está na rota <code className="bg-gray-200 rounded px-1 py-0.5 font-mono text-sm">/project</code>
      </p>
    </div>
  );
};

export default Project;
