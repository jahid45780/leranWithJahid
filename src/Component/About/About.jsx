const About = () => {
    const teamMembers = [
        {
          name: "Muhammad Monir Hossain",
          role: "Chief Executive Officer (CEO)",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XpDXXuOzSPbVw_CrqWys5ncDgR34rUZ87g&s",
        },
        {
          name: "Sabina Akter ",
          role: "chairman of Bdcalling IT Ltd",
          image: "https://media.licdn.com/dms/image/v2/D5603AQHd8nBg6-owVA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721025207569?e=2147483647&v=beta&t=jHGbpjoJ7vYpQlahOX9D-XSovbenb0kfk7xyuVIXKhc",
        },
        {
          name: "Saruar Zahan",
          role: "GM",
          image: "https://prnt.sc/BP72ACS1tuSi",
        },
        {
          name: "Karina Islam",
          role: "Advisor",
          image: "/path-to-image/karina.png",
        },
        {
          name: "Nadia Rahman",
          role: "Marketing Manager",
          image: "/path-to-image/nadia.png",
        },
        {
          name: "Shahidul Islam",
          role: "Senior Software Engineer",
          image: "/path-to-image/shahidul.png",
        },
        {
          name: "Ayesha Akter",
          role: "UI/UX Designer",
          image: "/path-to-image/ayesha.png",
        },
        {
          name: "Tanvir Hasan",
          role: "Frontend Developer",
          image: "/path-to-image/tanvir.png",
        },
        {
          name: "Farzana Karim",
          role: "Backend Developer",
          image: "/path-to-image/farzana.png",
        },
        {
          name: "Imran Hossain",
          role: "QA Engineer",
          image: "/path-to-image/imran.png",
        },
        {
          name: "Tanjil Ahmed",
          role: "DevOps Engineer",
          image: "/path-to-image/tanjil.png",
        },
        {
          name: "Rashid Mahmud",
          role: "Data Scientist",
          image: "/path-to-image/rashid.png",
        },
        {
          name: "Zakia Sultana",
          role: "HR Manager",
          image: "/path-to-image/zakia.png",
        },
        {
          name: "Samiul Islam",
          role: "Business Analyst",
          image: "/path-to-image/samiul.png",
        },
        {
          name: "Maliha Chowdhury",
          role: "Content Strategist",
          image: "/path-to-image/maliha.png",
        },
        {
          name: "Faisal Kabir",
          role: "Customer Support Lead",
          image: "/path-to-image/faisal.png",
        },
        {
          name: "Nasrin Akter",
          role: "Project Manager",
          image: "/path-to-image/nasrin.png",
        },
        {
          name: "Adnan Rahman",
          role: "Cyber Security Specialist",
          image: "/path-to-image/adnan.png",
        },
        {
          name: "Sadia Hossain",
          role: "Graphic Designer",
          image: "/path-to-image/sadia.png",
        },
        {
          name: "Sakib Ahmed",
          role: "Digital Marketing Specialist",
          image: "/path-to-image/sakib.png",
        },
        {
          name: "Rubel Hasan",
          role: "Sales Executive",
          image: "/path-to-image/rubel.png",
        },
        {
          name: "Mahmudul Islam",
          role: "SEO Specialist",
          image: "/path-to-image/mahmudul.png",
        },
        {
          name: "Parveen Sultana",
          role: "Finance Manager",
          image: "/path-to-image/parveen.png",
        },
        {
          name: "Ehsan Rahman",
          role: "Legal Advisor",
          image: "/path-to-image/ehsan.png",
        },
        {
          name: "Tahsin Alam",
          role: "System Administrator",
          image: "/path-to-image/tahsin.png",
        }
      ];
    return (
        <div>
             <section className="bg-black text-white py-16 px-4 text-center">
      <h2 className="text-4xl font-semibold text-purple-300 mb-8">Meet Our Team_</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="relative inline-block">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-lg border-2 border-purple-500 mx-auto"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-20 rounded-lg" />
            </div>
            <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
            <p className="text-sm text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
        </div>
    );
};

export default About;