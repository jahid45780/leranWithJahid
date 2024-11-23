import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, EffectCoverflow } from 'swiper/modules';

const ProjectCardSlider = () => {
  const projects = [
    {
      title: 'Travel Tourism',
      description: 'Developed Rest API backend with Express and Mongo DB for service technology...',
      tags: ['React', 'React Router', 'Node', 'Express', 'Firebase', 'MongoDb', 'React Bootstrap'],
      image: 'path/to/image1.png',
      liveLink: '#',
      codeLink: '#',
      serverLink: '#'
    },
    {
      title: 'Organic Food',
      description: 'Developed Rest API backend with Express and Mongo DB for service technology...',
      tags: ['React', 'React Router', 'Node', 'Express', 'Firebase', 'MongoDb', 'React Bootstrap'],
      image: 'path/to/image2.png',
      liveLink: '#',
      codeLink: '#',
      serverLink: '#'
    },
    {
      title: 'Jewellery Shop',
      description: 'Developed Rest API backend with Express and Mongo DB for service technology...',
      tags: ['React', 'React Router', 'Node', 'Express', 'Firebase', 'MongoDb', 'React Bootstrap'],
      image: 'path/to/image3.png',
      liveLink: '#',
      codeLink: '#',
      serverLink: '#'
    },
    {
      title: 'html ',
      description: 'Developed Rest API backend with Express and Mongo DB for service technology...',
      tags: ['React', 'React Router', 'Node', 'Express', 'Firebase', 'MongoDb', 'React Bootstrap'],
      image: 'path/to/image3.png',
      liveLink: '#',
      codeLink: '#',
      serverLink: '#'
    }
  ];

  return (
    <div className="w-full p-4">
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800 rounded-lg p-6 w-full max-w-sm mx-auto">
              <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
              <h3 className="text-white text-xl mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-gray-700 text-white px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <div className="flex justify-between text-sm">
                <a href={project.liveLink} className="text-blue-400">🔗 Live</a>
                <a href={project.codeLink} className="text-blue-400">💻 Code Link</a>
                <a href={project.serverLink} className="text-blue-400">🔗 Server Link</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCardSlider;
