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
          image: "https://i.ibb.co.com/Qjm1GZ6Z/Screenshot-1.png",
        },
        {
          name: "Atikur Rahman",
          role: "Manager, SCM",
          image: "https://i.ibb.co.com/hFPmjZFy/Screenshot-1.png",
        },
        {
          name: "Md. Showrav Mia",
          role: "Asst. Manager, SCM",
          image: "https://i.ibb.co.com/jPSCdgWX/Screenshot-2.png",
        },
        {
          name: "Atikul Islam Ashik",
          role: "Sr.Executive,SCM",
          image: "https://i.ibb.co.com/gbBsBL3T/Screenshot-3.png",
        },
        {
          name: "Sazzad Hossain",
          role: "Executive, SCM",
          image: "https://i.ibb.co.com/0yt3029b/Screenshot-4.png",
        },
        {
          name: "Md. Shoriful Islam",
          role: "Executive, SCM",
          image: "https://i.ibb.co.com/6c0gcN1g/Screenshot-5.png",
        },
        {
          name: "MD Jahid",
          role: "Executive, SCM",
          image: "https://i.ibb.co.com/20vf7X6X/475655545-1625726811399435-8677621151499408334-n.jpg",
        },
        {
          name: "Arif Mahmud",
          role: "Executive, SCM",
          image: "https://i.ibb.co.com/xtb2DdHY/Screenshot-6.png",
        },
        {
          name: "Ahchanul Haque Tareq",
          role: "Executive, SCM",
          image: "https://i.ibb.co.com/KpKgTjSq/Screenshot-7.png",
        },
        {
          name: "Abu Bakar Shiddik",
          role: "Executive, SCM",
          image: "https://i.ibb.co.com/YTV7Xkyp/Screenshot-8.png",
        },
        {
          name: "Israt Jahan",
          role: "Executive, SCM",
          image: "/path-to-image/zakia.png",
        },
        {
          name: "Anika Ibnat",
          role: "Sales Executive",
          image: "/path-to-image/samiul.png",
        },
        {
          name: "Arif Hossen",
          role: "Executive, SCM",
          image: "/path-to-image/maliha.png",
        },
        {
          name: "Rezwan Ahmed",
          role: "Executive, SCM",
          image: "/path-to-image/faisal.png",
        },
        {
          name: "Md. Ibrahim Mia",
          role: "Sales Executive",
          image: "/path-to-image/nasrin.png",
        },
        {
          name: "Sadikur Rahman Lelin",
          role: "Sales Executive",
          image: "/path-to-image/adnan.png",
        },
        {
          name: "Rony Molla",
          role: "Sales Executive",
          image: "/path-to-image/sadia.png",
        },
        {
          name: "Md Yeasin Hossen",
          role: "Sales Executive",
          image: "/path-to-image/sakib.png",
        },
        {
          name: "Humayun Kobir",
          role: "Sales Executive",
          image: "/path-to-image/rubel.png",
        },
        {
          name: "Abdur Rahman Arshad",
          role: "Sales Executive",
          image: "/path-to-image/mahmudul.png",
        },
        {
          name: "Md Jubayer Alam Ratul",
          role: "Sales Executive",
          image: "/path-to-image/parveen.png",
        },
        {
          name: "Saiful Islam",
          role: "Sales Executive",
          image: "/path-to-image/ehsan.png",
        },
        {
          name: "Sabbir Ahmed Shakil",
          role: "Sales Executive",
          image: "/path-to-image/tahsin.png",
        },
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