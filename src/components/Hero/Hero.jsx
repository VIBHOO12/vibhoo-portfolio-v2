

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaDownload, FaReact, FaNodeJs, FaJava, FaGitAlt } from "react-icons/fa";

// import Intro from "./Intro";
// import profile from "../../assets/images/vibhoo.jpg";

// const orbitIcons = [
//   { icon: <FaReact />, color: "#61DAFB", angle: 0 },
//   { icon: <FaNodeJs />, color: "#3C873A", angle: 90 },
//   { icon: <FaJava />, color: "#EA4335", angle: 180 },
//   { icon: <FaGitAlt />, color: "#F1502F", angle: 270 },
// ];

// const terminalLines = [
//   "role: Frontend Developer Intern @ Vithal Visions",
//   "stack: React.js, JavaScript, Tailwind CSS",
//   "status: Open to full-time opportunities",
//   "experience: 9+ months in production apps",
// ];

// const Hero = () => {
//   const [showIntro, setShowIntro] = useState(true);
//   const [lineIndex, setLineIndex] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowIntro(false), 5200);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const rotator = setInterval(() => {
//       setLineIndex((prev) => (prev + 1) % terminalLines.length);
//     }, 2800);
//     return () => clearInterval(rotator);
//   }, []);

//   return (
//     <>
//       {showIntro && <Intro />}

//       <section id="home" className="relative overflow-hidden overflow-x-hidden bg-gradient-to-b from-purple-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 min-h-screen flex items-center pt-24 pb-16">
//         <div className="absolute top-0 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-purple-300/40 dark:bg-purple-800/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-violet-300/40 dark:bg-violet-800/20 rounded-full blur-3xl"></div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center w-full">
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center lg:text-left order-2 lg:order-1"
//           >
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-sm font-semibold text-gray-700 dark:text-gray-200">
//               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//               Available for Work
//             </span>

//             <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 dark:text-white leading-tight">
//               Hi, I'm
//               <br />
//               <span className="text-purple-700">Vibhoo Vishwakarma</span>
//             </h1>

//             <div className="mt-4 text-lg sm:text-xl lg:text-2xl font-semibold text-violet-700 dark:text-violet-400 min-h-[2rem]">
//               <TypeAnimation
//                 sequence={[
//                   "Frontend Developer", 1500,
//                   "React.js Developer", 1500,
//                   "MERN Stack Developer", 1500,
//                   "Java Developer", 1500,
//                 ]}
//                 speed={45}
//                 repeat={Infinity}
//               />
//             </div>

//             <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
//               Passionate Frontend & MERN Stack Developer focused on building beautiful, scalable and high-performance web applications using React.js, JavaScript and modern UI.
//             </p>

//             <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-700 to-purple-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
//                 Hire Me
//                 <FaArrowRight />
//               </a>

//               <a href="/resume.pdf" download className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-7 py-3.5 rounded-xl font-semibold shadow-md border border-gray-200 dark:border-gray-700 hover:scale-105 transition">
//                 <FaDownload />
//                 Resume
//               </a>
//             </div>

//             <div className="mt-10 grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0">
//               <div className="text-center lg:text-left">
//                 <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">20+</h2>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
//               </div>
//               <div className="text-center lg:text-left">
//                 <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">1+</h2>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">Years Learning</p>
//               </div>
//               <div className="text-center lg:text-left">
//                 <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">100%</h2>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">Dedication</p>
//               </div>
//             </div>

//            <div className="hidden sm:block mt-10 max-w-md mx-auto lg:mx-0 bg-gray-900 rounded-2xl shadow-xl overflow-hidden text-left">
//   <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
//     <span className="w-3 h-3 rounded-full bg-red-500"></span>
//     <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
//     <span className="w-3 h-3 rounded-full bg-green-500"></span>
//     <span className="ml-2 text-xs text-gray-400">about.js</span>
//   </div>
//   <div className="px-5 py-4 text-sm text-green-400 font-mono h-16 flex items-center">
//     <span className="text-purple-400 mr-2">$</span>
//     <TypeAnimation
//       key={lineIndex}
//       sequence={[terminalLines[lineIndex]]}
//       speed={60}
//       cursor={true}
//       repeat={0}
//     />
//   </div>
// </div>

//             <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
//               <a href="#" aria-label="GitHub" className="w-11 h-11 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-purple-700 hover:-translate-y-1 transition">
//                 <FaGithub size={18} />
//               </a>
//               <a href="#" aria-label="LinkedIn" className="w-11 h-11 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-purple-700 hover:-translate-y-1 transition">
//                 <FaLinkedin size={18} />
//               </a>
//               <a href="#contact" aria-label="Email" className="w-11 h-11 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-purple-700 hover:-translate-y-1 transition">
//                 <FaEnvelope size={18} />
//               </a>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="order-1 lg:order-2 flex justify-center"
//           >
//             <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
//               <div className="absolute inset-0 rounded-full bg-purple-400/40 blur-3xl"></div>

//               <div className="absolute inset-0 animate-[spin_16s_linear_infinite]">
//                 {orbitIcons.map((item, i) => (
//                   <div
//                     key={i}
//                     className="absolute top-1/2 left-1/2 w-11 h-11 sm:w-12 sm:h-12 -mt-5 sm:-mt-6 -ml-5 sm:-ml-6 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-xl"
//                     style={{
//                       transform: `rotate(${item.angle}deg) translateX(clamp(95px, 33vw, 140px)) rotate(-${item.angle}deg)`,
//                       color: item.color,
//                     }}
//                   >
//                     <div className="animate-[spin_16s_linear_infinite]" style={{ animationDirection: "reverse" }}>
//                       {item.icon}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="absolute -inset-3 rounded-full border-2 border-dashed border-purple-400/60"></div>

//               <img
//                 src={profile}
//                 alt="Vibhoo Vishwakarma"
//                 className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
//               />

//               <div className="absolute -bottom-4 -right-2 sm:right-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-5 py-3 text-center z-10">
//                 <h2 className="text-xl sm:text-2xl font-bold text-purple-700">20+</h2>
//                 <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 leading-tight block">
//                   Projects
//                   <br />
//                   Completed
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400">
//           <span className="w-5 h-9 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-1.5">
//             <span className="w-1 h-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce"></span>
//           </span>
//           <p className="text-xs">Scroll Down</p>
//         </div> */}
//         <div
//   onClick={() =>
//     document.getElementById("about")?.scrollIntoView({
//       behavior: "smooth",
//     })
//   }
//   className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center cursor-pointer group z-20"
// >
//   <span className="text-xs uppercase tracking-[0.3em] text-gray-500 group-hover:text-blue-500 transition-colors">
//     Explore
//   </span>

//   <svg
//     className="w-6 h-6 mt-2 animate-bounce text-gray-500 group-hover:text-blue-500 transition-colors"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M19 9l-7 7-7-7"
//     />
//   </svg>
// </div>
//       </section>
//     </>
//   );
// };

// export default Hero;

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaDownload, FaReact, FaQuoteLeft } from "react-icons/fa";
// import { SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";
// import { HiOutlineRocketLaunch, HiOutlineBriefcase, HiOutlineUserGroup, HiOutlineCodeBracket } from "react-icons/hi2";

// import Intro from "./Intro";
// import profile from "../../assets/images/vibhoo.jpg";

// const orbitIcons = [
//   { icon: <FaReact />, color: "#61DAFB", angle: 0 },
//   { icon: <SiJavascript />, color: "#F7DF1E", angle: 90 },
//   { icon: <SiTailwindcss />, color: "#38BDF8", angle: 180 },
//   { icon: <SiMongodb />, color: "#4DB33D", angle: 270 },
// ];

// const stats = [
//   { icon: <HiOutlineRocketLaunch />, value: "20+", label: "Projects Completed" },
//   { icon: <HiOutlineBriefcase />, value: "1+", label: "Years Experience" },
//   { icon: <HiOutlineUserGroup />, value: "10+", label: "Happy Clients" },
//   { icon: <HiOutlineCodeBracket />, value: "100%", label: "Client Satisfaction" },
// ];

// const Hero = () => {
//   const [showIntro, setShowIntro] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowIntro(false), 5200);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {showIntro && <Intro />}

//       <section
//         id="home"
//         className="relative overflow-hidden overflow-x-hidden bg-gradient-to-b from-purple-50 via-white to-white dark:from-[#05060f] dark:via-[#05060f] dark:to-[#05060f] min-h-screen flex flex-col justify-between pt-28 pb-10"
//       >
//         {/* ambient glows */}
//         {/* <div className="absolute top-10 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-300/40 dark:bg-violet-700/20 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/3 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-violet-300/30 dark:bg-blue-700/10 rounded-full blur-3xl"></div> */}

//         {/* ================================
//     PREMIUM ANIMATED BACKGROUND
// ================================ */}

// <div className="absolute inset-0 overflow-hidden pointer-events-none">

//   {/* Large Purple Zoom Orb */}
//   <div
//     className="
//       absolute
//       -top-32
//       -left-32
//       w-[320px]
//       h-[320px]
//       sm:w-[450px]
//       sm:h-[450px]
//       lg:w-[600px]
//       lg:h-[600px]
//       rounded-full
//       bg-purple-400/20
//       dark:bg-violet-600/20
//       blur-3xl
//       animate-zoomOrb
//     "
//   />

//   {/* Right Floating Orb */}
//   <div
//     className="
//       absolute
//       top-[20%]
//       -right-32
//       w-[280px]
//       h-[280px]
//       sm:w-[400px]
//       sm:h-[400px]
//       lg:w-[550px]
//       lg:h-[550px]
//       rounded-full
//       bg-violet-400/20
//       dark:bg-purple-600/15
//       blur-3xl
//       animate-floatOrb
//     "
//   />

//   {/* Bottom Blue Glow */}
//   <div
//     className="
//       absolute
//       bottom-[-120px]
//       left-[25%]
//       w-[250px]
//       h-[250px]
//       sm:w-[350px]
//       sm:h-[350px]
//       rounded-full
//       bg-blue-400/10
//       dark:bg-blue-500/10
//       blur-3xl
//       animate-pulse
//     "
//   />

//   {/* Center Soft Glow */}
//   <div
//     className="
//       absolute
//       top-1/2
//       left-1/2
//       -translate-x-1/2
//       -translate-y-1/2
//       w-[300px]
//       h-[300px]
//       sm:w-[450px]
//       sm:h-[450px]
//       rounded-full
//       bg-violet-500/5
//       dark:bg-violet-500/10
//       blur-3xl
//       animate-centerGlow
//     "
//   />

//   {/* Subtle Developer Grid */}
//   <div
//     className="
//       absolute
//       inset-0
//       opacity-[0.035]
//       dark:opacity-[0.045]
//       bg-[linear-gradient(rgba(124,58,237,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.6)_1px,transparent_1px)]
//       bg-[size:45px_45px]
//     "
//   />

// </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center w-full flex-1">
//           {/* Left column */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center lg:text-left order-2 lg:order-1"
//           >
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 shadow-md dark:shadow-none border border-transparent dark:border-white/10 text-sm font-medium text-gray-700 dark:text-gray-200">
//               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//               Available for Work
//             </span>

//             <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight">
//               Hi, I'm
//               <br />
//               <span className="bg-gradient-to-r from-purple-700 to-violet-600 dark:from-violet-500 dark:to-purple-400 bg-clip-text text-transparent">
//                 Vibhoo
//                 <br />
//                 Vishwakarma
//               </span>
//             </h1>

//             <div className="mt-4 text-lg sm:text-xl lg:text-2xl font-semibold text-violet-700 dark:text-violet-400 min-h-[2rem]">
//               <TypeAnimation
//                 sequence={[
//                   "React.js Developer", 1500,
//                   "Frontend Developer", 1500,
//                   "MERN Stack Developer", 1500,
//                   "Java Developer", 1500,
//                 ]}
//                 speed={45}
//                 repeat={Infinity}
//               />
//             </div>

//             <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
//               Passionate Frontend & MERN Stack Developer focused on building beautiful, scalable and high-performance web applications using React.js, JavaScript and modern UI.
//             </p>

//             <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <a
//                 href="#contact"
//                 className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-700 to-purple-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-violet-900/10 dark:shadow-violet-900/40 hover:scale-105 transition"
//               >
//                 Hire Me
//                 <FaArrowRight />
//               </a>

//               <a
//                 href="/resume.pdf"
//                 download
//                 className="inline-flex items-center justify-center gap-2 bg-white dark:bg-white/5 text-gray-800 dark:text-white px-7 py-3.5 rounded-xl font-semibold shadow-md dark:shadow-none border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 hover:scale-105 transition"
//               >
//                 <FaDownload />
//                 Resume
//               </a>
//             </div>

//             <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
//               <a href="#" aria-label="GitHub" className="w-11 h-11 rounded-full bg-white dark:bg-white/5 shadow-md dark:shadow-none border border-transparent dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-violet-700 dark:hover:text-violet-400 hover:-translate-y-1 transition">
//                 <FaGithub size={18} />
//               </a>
//               <a href="#" aria-label="LinkedIn" className="w-11 h-11 rounded-full bg-white dark:bg-white/5 shadow-md dark:shadow-none border border-transparent dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-violet-700 dark:hover:text-violet-400 hover:-translate-y-1 transition">
//                 <FaLinkedin size={18} />
//               </a>
//               <a href="#contact" aria-label="Email" className="w-11 h-11 rounded-full bg-white dark:bg-white/5 shadow-md dark:shadow-none border border-transparent dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-violet-700 dark:hover:text-violet-400 hover:-translate-y-1 transition">
//                 <FaEnvelope size={18} />
//               </a>
//             </div>
//           </motion.div>

//           {/* Right column - image + orbit + quote */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="order-1 lg:order-2 flex justify-center"
//           >
//             <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
//               <div className="absolute inset-0 rounded-full bg-purple-400/30 dark:bg-violet-600/30 blur-3xl"></div>

//               <div className="absolute inset-0 animate-[spin_16s_linear_infinite]">
//                 {orbitIcons.map((item, i) => (
//                   <div
//                     key={i}
//                     className="absolute top-1/2 left-1/2 w-11 h-11 sm:w-12 sm:h-12 -mt-5 sm:-mt-6 -ml-5 sm:-ml-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/10 shadow-lg flex items-center justify-center text-xl"
//                     style={{
//                       transform: `rotate(${item.angle}deg) translateX(clamp(95px, 33vw, 140px)) rotate(-${item.angle}deg)`,
//                       color: item.color,
//                     }}
//                   >
//                     <div className="animate-[spin_16s_linear_infinite]" style={{ animationDirection: "reverse" }}>
//                       {item.icon}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="absolute -inset-3 rounded-full border-2 border-dashed border-purple-400/50 dark:border-violet-500/40"></div>

//               <img
//                 src={profile}
//                 alt="Vibhoo Vishwakarma"
//                 className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-900 shadow-2xl"
//               />

//               <div className="absolute -bottom-8 -left-4 sm:-left-10 bg-white/95 dark:bg-gray-900/90 backdrop-blur border border-gray-100 dark:border-white/10 rounded-2xl shadow-xl px-5 py-4 max-w-[240px] z-10">
//                 <FaQuoteLeft className="text-purple-600 dark:text-violet-500 mb-2" size={16} />
//                 <p className="text-sm text-gray-700 dark:text-gray-200 leading-snug">
//                   Building digital experiences that are fast, responsive and user-friendly.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom stats bar */}
//         <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 w-full mt-16">
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white dark:bg-white/5 shadow-lg dark:shadow-none border border-gray-100 dark:border-white/10 rounded-2xl px-6 py-8">
//             {stats.map((stat, i) => (
//               <div key={i} className="text-center">
//                 <div className="flex justify-center text-violet-700 dark:text-violet-400 text-2xl mb-2">{stat.icon}</div>
//                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div
//           onClick={() =>
//             document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
//           }
//           className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center cursor-pointer group z-20"
//         >
//           <span className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-500 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
//             Explore
//           </span>
//           <svg
//             className="w-6 h-6 mt-2 animate-bounce text-gray-500 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//           </svg>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaReact,
  FaQuoteLeft,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

import {
  HiOutlineRocketLaunch,
  HiOutlineCodeBracket,
  HiOutlineCube,
  HiOutlineServerStack,
} from "react-icons/hi2";

import Intro from "./Intro";
import profile from "../../assets/images/vibhoo.jpg";

/* =========================================================
   TECH ICONS
========================================================= */

const orbitIcons = [
  {
    icon: <FaReact />,
    color: "#61DAFB",
    angle: 0,
  },
  {
    icon: <SiJavascript />,
    color: "#F7DF1E",
    angle: 90,
  },
  {
    icon: <SiTailwindcss />,
    color: "#38BDF8",
    angle: 180,
  },
  {
    icon: <SiMongodb />,
    color: "#4DB33D",
    angle: 270,
  },
];

/* =========================================================
   HERO STATS
========================================================= */

const stats = [
  {
    icon: <HiOutlineRocketLaunch />,
    value: "20+",
    label: "Projects Built",
  },
  {
    icon: <HiOutlineCodeBracket />,
    value: "25+",
    label: "Reusable UI Components",
  },
  {
    icon: <HiOutlineServerStack />,
    value: "18+",
    label: "REST APIs Integrated",
  },
  {
    icon: <HiOutlineCube />,
    value: "9+",
    label: "Months Experience",
  },
];

/* =========================================================
   HERO COMPONENT
========================================================= */

const Hero = () => {
  const [showIntro, setShowIntro] = useState(true);

  /* Intro screen */
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5200);

    return () => clearTimeout(timer);
  }, []);

  /* Smooth scroll helper */
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =====================================================
          INTRO
      ===================================================== */}

      {showIntro && <Intro />}

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        id="home"
        className="
          relative
          overflow-hidden
          overflow-x-hidden
          min-h-screen
          flex
          flex-col
          justify-between
          pt-28
          pb-10

          bg-gradient-to-b
          from-purple-50
          via-white
          to-white

          dark:from-[#05060f]
          dark:via-[#080512]
          dark:to-[#05060f]
        "
      >
        {/* ===================================================
            ANIMATED BACKGROUND
        =================================================== */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Purple Orb */}

          <div
            className="
              absolute
              -top-32
              -left-32
              w-[320px]
              h-[320px]
              sm:w-[450px]
              sm:h-[450px]
              lg:w-[600px]
              lg:h-[600px]
              rounded-full
              bg-purple-400/20
              dark:bg-violet-600/20
              blur-3xl
              animate-zoomOrb
            "
          />

          {/* Right Floating Orb */}

          <div
            className="
              absolute
              top-[20%]
              -right-32
              w-[280px]
              h-[280px]
              sm:w-[400px]
              sm:h-[400px]
              lg:w-[550px]
              lg:h-[550px]
              rounded-full
              bg-violet-400/20
              dark:bg-purple-600/15
              blur-3xl
              animate-floatOrb
            "
          />

          {/* Bottom Blue Glow */}

          <div
            className="
              absolute
              bottom-[-120px]
              left-[25%]
              w-[250px]
              h-[250px]
              sm:w-[350px]
              sm:h-[350px]
              rounded-full
              bg-blue-400/10
              dark:bg-blue-500/10
              blur-3xl
              animate-pulse
            "
          />

          {/* Center Glow */}

          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[300px]
              h-[300px]
              sm:w-[450px]
              sm:h-[450px]
              rounded-full
              bg-violet-500/5
              dark:bg-violet-500/10
              blur-3xl
              animate-centerGlow
            "
          />

          {/* Developer Grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
              dark:opacity-[0.045]
              bg-[linear-gradient(rgba(124,58,237,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.6)_1px,transparent_1px)]
              bg-[size:45px_45px]
            "
          />
        </div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-10
            grid
            lg:grid-cols-2
            gap-14
            lg:gap-10
            items-center
            w-full
            flex-1
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              text-center
              lg:text-left
              order-2
              lg:order-1
            "
          >
            {/* Availability */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full

                bg-white
                dark:bg-white/5

                shadow-md
                dark:shadow-none

                border
                border-gray-100
                dark:border-white/10

                text-sm
                font-medium

                text-gray-700
                dark:text-gray-200
              "
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

              Available for Work
            </span>

            {/* Name */}

            <h1
              className="
                mt-6
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-black
                text-gray-900
                dark:text-white
                leading-tight
              "
            >
              Hi, I'm
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-purple-700
                  to-violet-600

                  dark:from-violet-500
                  dark:to-purple-400

                  bg-clip-text
                  text-transparent
                "
              >
                Vibhoo
                <br />
                Vishwakarma
              </span>
            </h1>

            {/* Role */}

            <div
              className="
                mt-4
                text-lg
                sm:text-xl
                lg:text-2xl
                font-semibold
                text-violet-700
                dark:text-violet-400
                min-h-[2rem]
              "
            >
              <TypeAnimation
                sequence={[
                 "React.js Frontend Developer", 1800,
    "Frontend Engineer", 1800,
    "Building Fast & Responsive UI", 1800,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Description */}

            <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
  Frontend Developer with **9+ months of hands-on experience** building
  scalable, responsive web applications using **React.js, JavaScript (ES6+)**
  and Tailwind CSS. Built **25+ reusable UI components** and integrated
  **18+ REST APIs** across live production projects with a strong focus on
  performance and user experience.
</p>

            {/* Buttons */}

            <div
              className="
                mt-8
                flex
                flex-col
                sm:flex-row
                gap-4
                justify-center
                lg:justify-start
              "
            >
              {/* Hire Me */}

              <button
                onClick={scrollToContact}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  bg-gradient-to-r
                  from-violet-700
                  to-purple-600

                  text-white

                  px-7
                  py-3.5

                  rounded-xl
                  font-semibold

                  shadow-lg
                  shadow-violet-900/10
                  dark:shadow-violet-900/40

                  hover:scale-105
                  transition
                "
              >
                Hire Me
                <FaArrowRight />
              </button>

              {/* Resume */}

              <a
                href="/resume.pdf"
                download
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  bg-white
                  dark:bg-white/5

                  text-gray-800
                  dark:text-white

                  px-7
                  py-3.5

                  rounded-xl
                  font-semibold

                  shadow-md
                  dark:shadow-none

                  border
                  border-gray-200
                  dark:border-white/10

                  hover:bg-gray-50
                  dark:hover:bg-white/10

                  hover:scale-105
                  transition
                "
              >
                <FaDownload />
                Resume
              </a>
            </div>

            {/* Social Links */}

            <div
              className="
                mt-8
                flex
                items-center
                gap-4
                justify-center
                lg:justify-start
              "
            >
              {/* GitHub */}

              <a
                href="https://github.com/VIBHOO12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-11
                  h-11
                  rounded-full

                  bg-white
                  dark:bg-white/5

                  shadow-md
                  dark:shadow-none

                  border
                  border-gray-100
                  dark:border-white/10

                  flex
                  items-center
                  justify-center

                  text-gray-700
                  dark:text-gray-300

                  hover:text-violet-700
                  dark:hover:text-violet-400

                  hover:-translate-y-1
                  transition
                "
              >
                <FaGithub size={18} />
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/ervibhoovishwakarma/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-11
                  h-11
                  rounded-full

                  bg-white
                  dark:bg-white/5

                  shadow-md
                  dark:shadow-none

                  border
                  border-gray-100
                  dark:border-white/10

                  flex
                  items-center
                  justify-center

                  text-gray-700
                  dark:text-gray-300

                  hover:text-violet-700
                  dark:hover:text-violet-400

                  hover:-translate-y-1
                  transition
                "
              >
                <FaLinkedin size={18} />
              </a>

              {/* Email */}

              <a
                href="mailto:vibhoovishwakarma@gmail.com"
                aria-label="Email"
                className="
                  w-11
                  h-11
                  rounded-full

                  bg-white
                  dark:bg-white/5

                  shadow-md
                  dark:shadow-none

                  border
                  border-gray-100
                  dark:border-white/10

                  flex
                  items-center
                  justify-center

                  text-gray-700
                  dark:text-gray-300

                  hover:text-violet-700
                  dark:hover:text-violet-400

                  hover:-translate-y-1
                  transition
                "
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              order-1
              lg:order-2
              flex
              justify-center
            "
          >
            <div
              className="
                relative
                w-64
                h-64
                sm:w-80
                sm:h-80
                lg:w-96
                lg:h-96
              "
            >
              {/* Image Glow */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-purple-400/30
                  dark:bg-violet-600/30
                  blur-3xl
                "
              />

              {/* Orbit */}

              <div
                className="
                  absolute
                  inset-0
                  animate-[spin_16s_linear_infinite]
                "
              >
                {orbitIcons.map((item, i) => (
                  <div
                    key={i}
                    className="
                      absolute
                      top-1/2
                      left-1/2

                      w-11
                      h-11

                      sm:w-12
                      sm:h-12

                      -mt-5
                      sm:-mt-6

                      -ml-5
                      sm:-ml-6

                      rounded-xl

                      bg-white
                      dark:bg-gray-900

                      border
                      border-gray-100
                      dark:border-white/10

                      shadow-lg

                      flex
                      items-center
                      justify-center

                      text-xl
                    "
                    style={{
                      transform: `rotate(${item.angle}deg) translateX(120px) rotate(-${item.angle}deg)`,
                      color: item.color,
                    }}
                  >
                    <div
                      className="
                        animate-[spin_16s_linear_infinite]
                      "
                      style={{
                        animationDirection: "reverse",
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>

              {/* Dashed Circle */}

              <div
                className="
                  absolute
                  -inset-3
                  rounded-full
                  border-2
                  border-dashed
                  border-purple-400/50
                  dark:border-violet-500/40
                "
              />

              {/* Profile Image */}

              <img
                src={profile}
                alt="Vibhoo Vishwakarma - React.js Frontend Developer"
                className="
                  relative
                  w-full
                  h-full
                  object-cover
                  rounded-full

                  border-4
                  border-white
                  dark:border-gray-900

                  shadow-2xl
                "
              />

              {/* Quote Card */}

              <div
                className="
                  absolute
                  -bottom-8
                  -left-4
                  sm:-left-10

                  bg-white/95
                  dark:bg-gray-900/90

                  backdrop-blur

                  border
                  border-gray-100
                  dark:border-white/10

                  rounded-2xl
                  shadow-xl

                  px-5
                  py-4

                  max-w-[240px]

                  z-10
                "
              >
                <FaQuoteLeft
                  className="
                    text-purple-600
                    dark:text-violet-500
                    mb-2
                  "
                  size={16}
                />

              <p className="text-sm text-gray-700 dark:text-gray-200 leading-snug">
  I build clean, scalable and responsive user interfaces that deliver
  real business value and great user experiences.
</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            STATS
        =================================================== */}

        <div
          className="
            relative
            max-w-6xl
            mx-auto
            px-4
            sm:px-6
            lg:px-10
            w-full
            mt-16
          "
        >
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-4
              gap-6

              bg-white
              dark:bg-white/5

              shadow-lg
              dark:shadow-none

              border
              border-gray-100
              dark:border-white/10

              rounded-2xl

              px-6
              py-8
            "
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center"
              >
                <div
                  className="
                    flex
                    justify-center

                    text-violet-700
                    dark:text-violet-400

                    text-2xl
                    mb-2
                  "
                >
                  {stat.icon}
                </div>

                <h3
                  className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                >
                  {stat.value}
                </h3>

                <p
                  className="
                    text-sm
                    text-gray-500
                    dark:text-gray-400
                    mt-1
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================
            EXPLORE BUTTON
        =================================================== */}

        <button
          type="button"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2

            hidden
            md:flex

            flex-col
            items-center

            cursor-pointer
            group
            z-20

            bg-transparent
            border-0
          "
          aria-label="Explore About section"
        >
          <span
            className="
              text-xs
              uppercase
              tracking-[0.3em]

              text-gray-500
              dark:text-gray-500

              group-hover:text-violet-600
              dark:group-hover:text-violet-400

              transition-colors
            "
          >
            Explore
          </span>

          <svg
            className="
              w-6
              h-6
              mt-2

              animate-bounce

              text-gray-500

              group-hover:text-violet-600
              dark:group-hover:text-violet-400

              transition-colors
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </section>
    </>
  );
};

export default Hero;