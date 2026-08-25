

// import { FiDownload, FiMapPin, FiCode } from "react-icons/fi";
// import profile from "../../assets/images/profile.jpg";

// const About = () => {
//   const stats = [
//     { value: "9+", label: "Months Experience" },
//     { value: "25+", label: "UI Components" },
//     { value: "18+", label: "REST APIs" },
//     { value: "4+", label: "Live Projects" },
//   ];

//   const techStack = ["React.js", "JavaScript", "Tailwind CSS", "Redux", "REST API", "Git"];

//   return (
//     <section id="about" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-950">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center mb-12 sm:mb-16 lg:mb-20">
//           <span className="text-purple-600 font-semibold tracking-[3px] sm:tracking-[4px] uppercase text-sm sm:text-base">About Me</span>

//           <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-4 sm:mt-5 text-gray-900 dark:text-white leading-tight">
//             Turning Ideas Into
//             <span className="text-purple-700"> Digital Products</span>
//           </h2>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
//           <div className="relative max-w-sm sm:max-w-md mx-auto lg:max-w-none">
//             <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full rounded-3xl bg-purple-200 dark:bg-purple-900/40"></div>

//             <img src={profile} alt="Vibhoo Vishwakarma" className="relative rounded-3xl shadow-2xl w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover" />

//             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 w-max">
//               <span className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-700">
//                 <FiCode size={18} />
//               </span>
//               <div>
//                 <p className="text-sm font-bold text-gray-900 dark:text-white leading-none">Frontend Dev</p>
//                 <p className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-1">
//                   <FiMapPin size={12} />
//                   India
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-6 lg:mt-0">
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white text-center lg:text-left">Frontend Developer</h3>

//             <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-gray-300 text-center lg:text-left">
//               I'm Vibhoo Vishwakarma, a React.js Frontend Developer with production experience building responsive, scalable and user-friendly web applications. I enjoy transforming ideas into beautiful digital experiences using clean, maintainable code.
//             </p>

//             <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6">
//               {techStack.map((tech) => (
//                 <span key={tech} className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-400 shadow-sm border border-purple-100 dark:border-purple-900/50">
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             <div className="grid grid-cols-2 gap-4 sm:gap-5 mt-8">
//               {stats.map((item) => (
//                 <div key={item.label} className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-5 shadow-lg text-center lg:text-left">
//                   <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-700">{item.value}</h4>
//                   <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-300">{item.label}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8 sm:mt-10">
//               <a href="/resume.pdf" download className="inline-flex items-center justify-center gap-2 bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-purple-800 transition font-semibold">
//                 <FiDownload />
//                 Download Resume
//               </a>

//               <a href="#contact" className="inline-flex items-center justify-center gap-2 border-2 border-purple-700 text-purple-700 dark:text-purple-400 dark:border-purple-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition font-semibold">
//                 Let's Talk
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import {
  FiDownload,
  FiArrowUpRight,
  FiLayers,
  FiZap,
  FiUsers,
  FiCode,
} from "react-icons/fi";
import AnimatedBackground from "../common/AnimatedBackground";


const valueProps = [
  {
    icon: <FiCode size={20} />,
    title: "Clean Code",
    desc: "Reusable, maintainable React components built for scalability.",
  },
  {
    icon: <FiLayers size={20} />,
    title: "Responsive UI",
    desc: "Modern interfaces that work smoothly across mobile, tablet, and desktop.",
  },
  {
    icon: <FiZap size={20} />,
    title: "Performance Focus",
    desc: "Optimizes UI performance and cross-device user experiences.",
  },
  {
    icon: <FiUsers size={20} />,
    title: "Team Collaboration",
    desc: "Experienced with Git, GitHub, code reviews, and collaborative development.",
  },
];

const stats = [
  { value: "9+", label: "Months Experience" },
  { value: "25+", label: "Reusable UI Components" },
  { value: "18+", label: "REST APIs Integrated" },
  { value: "2", label: "Internships" },
];
const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-purple-50 dark:from-[#05060f] dark:to-[#05060f] overflow-hidden"
    >
       <AnimatedBackground variant="soft" />
      {/* Ambient Glows */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-200/50 dark:bg-violet-700/10 rounded-full blur-3xl -translate-x-1/3" />

      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-violet-200/40 dark:bg-blue-700/10 rounded-full blur-3xl translate-x-1/3" /> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="text-purple-600 dark:text-violet-400 font-semibold tracking-[3px] sm:tracking-[4px] uppercase text-xs sm:text-sm">
            About Me
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-4 sm:mt-5 text-gray-900 dark:text-white leading-tight">
            Turning Ideas Into{" "}
            <span className="bg-gradient-to-r from-purple-700 to-violet-600 dark:from-violet-500 dark:to-purple-400 bg-clip-text text-transparent">
              Digital Products
            </span>
          </h2>
        </div>

        {/* Main About Content */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Frontend Developer (React.js)
          </h3>

          <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm Vibhoo Vishwakarma, a Frontend Developer specializing in
React.js, JavaScript (ES6+), and Tailwind CSS. I build scalable,
responsive web applications with a strong focus on clean UI,
reusable components, performance, and user experience.
          </p>

          <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            With 9+ months of hands-on experience, I have built 25+ reusable
UI components and integrated 18+ REST APIs across production-oriented
projects. I also have a full-stack foundation in Java, Spring Boot,
and MySQL, along with hands-on exposure to Generative AI.
          </p>

          {/* Stats */}
          <div className="mt-9 flex flex-wrap justify-center gap-8 sm:gap-12">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <h4 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-700 to-violet-600 dark:from-violet-400 dark:to-purple-300 bg-clip-text text-transparent">
                  {item.value}
                </h4>

                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-9">
            <a
  href="/resume.pdf"
  download="Vibhoo_Vishwakarma_Frontend_Developer_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-700 to-violet-600 dark:from-violet-600 dark:to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-105 transition font-semibold shadow-lg shadow-purple-900/10 dark:shadow-violet-900/40"
            >
              <FiDownload />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-purple-700 dark:border-white/15 text-purple-700 dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-purple-50 dark:hover:bg-white/5 dark:hover:border-violet-500/50 transition font-semibold"
            >
              Let's Talk
              <FiArrowUpRight />
            </a>
          </div>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-14 sm:mt-16 lg:mt-20">
          {valueProps.map((item) => (
            <div
              key={item.title}
              className="group bg-white dark:bg-white/5 border border-purple-100 dark:border-white/10 rounded-2xl p-5 sm:p-6 shadow-sm dark:shadow-none hover:-translate-y-1.5 hover:shadow-xl dark:hover:border-violet-500/40 transition"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-purple-100 dark:bg-violet-600/20 text-purple-700 dark:text-violet-400 group-hover:scale-110 transition">
                {item.icon}
              </span>

              <h4 className="mt-4 font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                {item.title}
              </h4>

              <p className="mt-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;


// import {
//   FiDownload,
//   FiMapPin,
//   FiArrowUpRight,
//   FiLayers,
//   FiZap,
//   FiUsers,
//   FiCode,
// } from "react-icons/fi";
// import profile from "../../assets/images/bg.jpeg";

// const valueProps = [
//   {
//     icon: <FiCode size={20} />,
//     title: "Clean Code",
//     desc: "Reusable, maintainable components built to last.",
//   },
//   {
//     icon: <FiLayers size={20} />,
//     title: "Pixel Perfect",
//     desc: "Responsive UI that looks right on every screen.",
//   },
//   {
//     icon: <FiZap size={20} />,
//     title: "Fast Delivery",
//     desc: "Ships features quickly without cutting corners.",
//   },
//   {
//     icon: <FiUsers size={20} />,
//     title: "Team Player",
//     desc: "Communicates clearly, adapts fast to feedback.",
//   },
// ];

// const stats = [
//   { value: "9+", label: "Months Exp." },
//   { value: "25+", label: "UI Components" },
//   { value: "18+", label: "REST APIs" },
//   { value: "4+", label: "Live Projects" },
// ];

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-purple-50 dark:from-[#05060f] dark:to-[#05060f] overflow-hidden"
//     >
//       {/* ambient glows */}
//       <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-200/50 dark:bg-violet-700/10 rounded-full blur-3xl -translate-x-1/3"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-violet-200/40 dark:bg-blue-700/10 rounded-full blur-3xl translate-x-1/3"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
//         <div className="text-center mb-12 sm:mb-16 lg:mb-20">
//           <span className="text-purple-600 dark:text-violet-400 font-semibold tracking-[3px] sm:tracking-[4px] uppercase text-xs sm:text-sm">
//             About Me
//           </span>

//           <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-4 sm:mt-5 text-gray-900 dark:text-white leading-tight px-2">
//             Turning Ideas Into
//             <span className="bg-gradient-to-r from-purple-700 to-violet-600 dark:from-violet-500 dark:to-purple-400 bg-clip-text text-transparent">
//               {" "}Digital Products
//             </span>
//           </h2>
//         </div>

//         {/* Top: image + intro side by side, image kept small & purposeful */}
//         <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 sm:gap-12 lg:gap-16 items-center">
//           <div className="relative max-w-[260px] sm:max-w-xs mx-auto lg:mx-0 w-full">
//             <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-purple-300 to-violet-300 dark:from-violet-600/30 dark:to-purple-600/20 rotate-6"></div>

//             <img
//               src={profile}
//               alt="Vibhoo Vishwakarma"
//               className="relative rounded-[1.75rem] shadow-2xl w-full aspect-[4/5] object-cover border-4 border-white dark:border-[#0a0b1a]"
//             />

//             <span className="absolute -top-3 -right-3 sm:-right-5 inline-flex items-center gap-1.5 bg-white dark:bg-[#0a0b1a] border border-purple-100 dark:border-white/10 shadow-lg rounded-full px-3 py-1.5 text-xs font-semibold text-gray-800 dark:text-white">
//               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//               Open to Work
//             </span>

//             <span className="absolute -bottom-3 -left-3 sm:-left-5 inline-flex items-center gap-1 bg-white dark:bg-[#0a0b1a] border border-purple-100 dark:border-white/10 shadow-lg rounded-full px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300">
//               <FiMapPin size={12} />
//               India · Remote friendly
//             </span>
//           </div>

//           <div className="text-center lg:text-left">
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
//               React.js Frontend Developer
//             </h3>

//             <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-gray-400">
//               I'm Vibhoo — I turn rough ideas into clean, responsive interfaces that people actually
//               enjoy using. Production experience with real APIs, real deadlines, and real users, not
//               just tutorials. If you need a frontend dev who ships and communicates well, let's talk.
//             </p>

//             <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
//               {stats.map((item) => (
//                 <div key={item.label} className="text-center lg:text-left">
//                   <h4 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-700 to-violet-600 dark:from-violet-400 dark:to-purple-300 bg-clip-text text-transparent">
//                     {item.value}
//                   </h4>
//                   <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">{item.label}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
//               <a
//                 href="/resume.pdf"
//                 download
//                 className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-700 to-violet-600 dark:from-violet-600 dark:to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-105 transition font-semibold shadow-lg shadow-purple-900/10 dark:shadow-violet-900/40"
//               >
//                 <FiDownload />
//                 Download Resume
//               </a>

//               <a
//                 href="#contact"
//                 className="inline-flex items-center justify-center gap-2 border-2 border-purple-700 dark:border-white/15 text-purple-700 dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-purple-50 dark:hover:bg-white/5 dark:hover:border-violet-500/50 transition font-semibold"
//               >
//                 Let's Talk
//                 <FiArrowUpRight />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom: recruiter-scannable value prop cards */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-14 sm:mt-16 lg:mt-20">
//           {valueProps.map((item) => (
//             <div
//               key={item.title}
//               className="group bg-white dark:bg-white/5 border border-purple-100 dark:border-white/10 rounded-2xl p-5 sm:p-6 shadow-sm dark:shadow-none hover:-translate-y-1.5 hover:shadow-xl dark:hover:border-violet-500/40 transition"
//             >
//               <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-purple-100 dark:bg-violet-600/20 text-purple-700 dark:text-violet-400 group-hover:scale-110 transition">
//                 {item.icon}
//               </span>
//               <h4 className="mt-4 font-bold text-gray-900 dark:text-white text-sm sm:text-base">
//                 {item.title}
//               </h4>
//               <p className="mt-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;