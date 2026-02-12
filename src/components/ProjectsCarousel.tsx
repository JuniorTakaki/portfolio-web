import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

type ProjectData = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
};

type ProjectsCarouselProps = {
  items: ProjectData[];
};

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ items }) => {
  return (
    <section id="projects" className="py-24 w-full text-white mx-auto">
      <div className="mx-auto w-full space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-center hover:scale-x-102 transform transition-transform ease-out duration-300 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
          Meus Projetos
        </h2>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="w-10/12 pb-12"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className="self-stretch">
              <ProjectCard
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                projectUrl={item.projectUrl}
                tags={item.tags}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsCarousel;