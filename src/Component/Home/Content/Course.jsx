import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, EffectCoverflow } from 'swiper/modules';

const ProjectCardSlider = () => {
  const projects = [
    {
      title:  'Optimizing Supply Chain Efficiency: Strategies for Seamless Operations' ,
      description: 'I will analyze your supply chain operations, identify cost-saving opportunities, and optimize logistics to improve profitability. Get a streamlined, cost-effective supply chain tailored to your business needs!',
      tags: ['Logistics', "Procurement","Inventory Management","Supply Chain Optimization",],
      image: 'https://i.ibb.co.com/23kTnR24/13317065-5208999.jpg',
    },
    {
      title: 'The Role of Technology in Modern Supply Chain Management',
      description: ' I will assist in supplier sourcing, contract negotiation, and procurement strategy to enhance your supply chain reliability and cost efficiency. Get quality products at the best prices!',
      tags: ['Logistics', "Procurement","Inventory Management","Supply Chain Optimization"],
      image: 'https://i.ibb.co.com/JRnP7P0q/8832806-4016257.jpg',
    },
    {
      title: 'Reducing Costs and Improving Productivity in Supply Chain Logistics',
      description: 'I will assist in supplier sourcing, contract negotiation, and procurement strategy to enhance your supply chain reliability and cost efficiency. Get quality products at the best prices!',
      tags: ['Logistics', "Procurement","Inventory Management","Supply Chain Optimization"],
      image: 'https://i.ibb.co.com/DDw56Dgk/5604668-56861.jpg',
    },
    {
      title: 'Sustainable Supply Chain Management: Balancing Profit and Responsibility',
      description: ' I will help you plan efficient logistics, choose the right carriers, and ensure smooth delivery operations. Let’s enhance your supply chain with smart logistics solutions!',
      tags: ['Logistics', "Procurement","Inventory Management","Supply Chain Optimization"],
      image: 'https://i.ibb.co.com/WbmnjQr/5544609-54949.jpg',
    }
  ];

  return (
    <div className="w-full bg-green-100 p-4">
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
            <div className="bg-gray-500 rounded-lg p-6 w-full max-w-sm mx-auto">
              <img src={project.image} alt={project.title} className="rounded-lg mb-4 h-80" />
              <h3 className=" font-fontTitle text-sm text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-gray-700 text-white px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCardSlider;


