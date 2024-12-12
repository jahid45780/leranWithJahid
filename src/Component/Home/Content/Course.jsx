import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, EffectCoverflow } from 'swiper/modules';

const ProjectCardSlider = () => {
  const projects = [
    {
      title:  ' CS50s Introduction ' ,
      description: 'An introduction to computer science concepts, covering algorithms, data structures, web development, and more. Great for beginners.',
      tags: ['JavaScript', "Python","Java","C++", "C#","PHP"],
      image: 'https://i.ibb.co.com/1LPJ04Y/designers-using-3d-printer.jpg',
      LERAN: '🙌',
      Price: '$8500',
      SKILL: '🙌'
    },
    {
      title: 'The Complete JavaScript Course',
      description: 'A comprehensive guide to learning JavaScript, including modern ES6+ concepts, DOM manipulation, and building projects.',
      tags: ["Ruby"," Go (Golang)","TypeScript","Swift","Kotlin", "Rust"],
      image: 'https://static.semrush.com/blog/uploads/media/bd/39/bd3945cff339fe5cd96c069ce6e5f1f3/javascript-rendering.svg',
      LERAN: '🙌',
      Price: '$2500',
      SKILL: '🙌'
    },
    {
      title: 'Python for Everybody',
      description: 'Focuses on Python programming and its applications in data analysis and web development. Ideal for beginners in programming.',
      tags: ["Tailwind CSS","React","Angular","Vue.js", "Next.js","Svelte"],
      image: 'https://datascientest.com/en/files/2024/06/Python-Variables.jpg',
      LERAN: '🙌',
      Price: '$3500',
      SKILL: '🙌'
    },
    {
      title: 'The Odin Project',
      description: 'A full-stack web development curriculum, including HTML, CSS, JavaScript, Git, Node.js, and React. Project-based and highly practical.',
      tags: ["Docker", "Kubernetes","Git", "GitHub", " Jenkins","CI/CD", "AWS"],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuZwQ_8i0FP6vLn_PTgV19Oq2QrBqRFDtRA&s',
      LERAN: '🙌',
      Price: '$9800',
      SKILL: '🙌'
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
              <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-full  " />
              <h3 className=" text-xl font-fontTitle font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-gray-700 text-white px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <div className="flex justify-between text-sm">
                <a href={project.liveLink} className="text-3xl"> 🙌 </a>
                <a href={project.codeLink} className="text-black font-fontLearn font-black text-5xl"> {project.Price} </a>
                <a href={project.serverLink} className="text-3xl ">🙌</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCardSlider;


