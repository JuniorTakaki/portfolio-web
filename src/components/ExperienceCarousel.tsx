import React, { useState } from 'react';

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Igus',
    role: 'Technical Support',
    period: 'april 2024 - may 2024',
    description:'lorem',
  },
  {
    id: 2,
    company: 'Unianchieta',
    role: 'Technical Support',
    period: 'october 2024 - present',
    description:'lorem',
  },
  
];

export const ExperienceCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const experience = experiences[currentIndex];

  return (
    
    <section className='w-10/12 mx-auto max-w-7xl py-12'>
      <h2 className=" py-12 text-3xl font-bold font-mono text-center text-white transition-transform duration-300 hover:scale-x-102 md:text-4xl">
        Experience
      </h2>
      <div className='max-w-lg mx-auto font-sans'>
      <article className=" text-white">
        <h3 className="text-xl font-bold ">{experience.role}</h3>
        <h4 className="text-md">{experience.company}</h4>
        <p className="italic text-sm">{experience.period}</p>
        <p className="py-10 ">{experience.description}</p>
      </article>

      <div className="flex justify-between">
        <button
          onClick={prevExperience}
          aria-label="Experiência anterior"
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
        >
          &lt; Anterior
        </button>
        <button
          onClick={nextExperience}
          aria-label="Próxima experiência"
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
        >
          Próximo &gt;
        </button>
      </div>
      </div>
    </section>
  );
};

export default ExperienceCarousel;