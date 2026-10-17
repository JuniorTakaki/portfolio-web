import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';

export type ProjectData = {
  title: string;
  description: string;
  context: string;
  status: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
};

type ProjectsCarouselProps = {
  items: ProjectData[];
};

const ProjectsCarousel = ({ items }: ProjectsCarouselProps) => {
  const { t } = useLanguage();
  return (
    <section id="projects" className="section-rule w-full px-4 py-16 text-white sm:py-24 md:pr-24">
      <div className="mx-auto w-full max-w-7xl md:w-11/12">
        <div className="mb-8 flex flex-col gap-4 border-l-2 border-cyan-400 pl-4 sm:mb-12 sm:pl-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-300/70 sm:text-xs">
              {t('selectedWork')}
            </p>
            <h2 className="font-mono text-3xl font-bold text-white sm:text-5xl">{t('projects')}</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-sky-100/55">{t('projectsDescription')}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] md:gap-5">
          {items.map((item, index) => (
            <ProjectCard
              key={item.title}
              index={index}
              featured={index === 0}
              title={item.title}
              description={item.description}
              context={item.context}
              status={item.status}
              imageUrl={item.imageUrl}
              projectUrl={item.projectUrl}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;