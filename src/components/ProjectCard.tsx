import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string; // Link para o projeto (GitHub, site, etc.)
  tags: string[]; // Lista de tecnologias usadas
};


export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl, tags }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col transform transition-transform duration-300 hover:scale-105">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={`Imagem do projeto ${title}`} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-base flex-grow mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-blue-900/50 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Ver Projeto
        </a>
      </div>
    </div>
  );
};