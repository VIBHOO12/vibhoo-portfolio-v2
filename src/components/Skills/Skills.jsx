

// import { useState } from "react";
// import {
//   FaReact, FaNodeJs, FaJava, FaGitAlt, FaHtml5, FaCss3Alt,
// } from "react-icons/fa";
// import {
//   SiTailwindcss, SiJavascript, SiSpringboot, SiMysql, SiMongodb, SiExpress,
// } from "react-icons/si";

// const categories = ["All", "Frontend", "Backend", "Tools"];

// const skills = [
//   { name: "React.js", icon: <FaReact />, color: "#61DAFB", level: 90, category: "Frontend", desc: "Building reusable components and SPAs" },
//   { name: "JavaScript", icon: <SiJavascript />, color: "#F0DB4F", level: 88, category: "Frontend", desc: "ES6+, DOM, async programming" },
//   { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8", level: 92, category: "Frontend", desc: "Rapid responsive UI design" },
//   { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", level: 95, category: "Frontend", desc: "Semantic, accessible markup" },
//   { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", level: 90, category: "Frontend", desc: "Animations, flexbox, grid" },
//   { name: "Java", icon: <FaJava />, color: "#EA4335", level: 78, category: "Backend", desc: "OOP and core programming" },
//   { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F", level: 70, category: "Backend", desc: "Secure backend services" },
//   { name: "MySQL", icon: <SiMysql />, color: "#4479A1", level: 80, category: "Backend", desc: "Relational database design" },
//   { name: "Git & GitHub", icon: <FaGitAlt />, color: "#F1502F", level: 85, category: "Tools", desc: "Version control and collaboration" },
// ];

// const Skills = () => {
//   const [active, setActive] = useState("All");

//   const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

//   return (
//     <section id="skills" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center mb-10 sm:mb-14">
//           <span className="text-purple-600 font-semibold tracking-[3px] sm:tracking-[4px] uppercase text-sm sm:text-base">
//             Skills
//           </span>

//           <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-4 sm:mt-5 text-gray-900 dark:text-white leading-tight">
//             My Tech <span className="text-purple-700">Stack</span>
//           </h2>

//           <p className="mt-5 sm:mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
//             Technologies I use to build fast, scalable and responsive web applications.
//           </p>
//         </div>

//         {/* Category filter */}
//         <div className="flex flex-wrap justify-center gap-3 mb-10 sm:mb-14">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActive(cat)}
//               className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
//                 active === cat
//                   ? "bg-gradient-to-r from-violet-700 to-purple-600 text-white shadow-lg scale-105"
//                   : "bg-purple-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Flip cards */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6" style={{ perspective: "1000px" }}>
//           {filtered.map((skill) => (
//             <div key={skill.name} className="group h-48 sm:h-56" style={{ perspective: "1000px" }}>
//               <div
//                 className="relative w-full h-full transition-transform duration-500"
//                 style={{ transformStyle: "preserve-3d" }}
//                 onMouseEnter={(e) => (e.currentTarget.style.transform = "rotateY(180deg)")}
//                 onMouseLeave={(e) => (e.currentTarget.style.transform = "rotateY(0deg)")}
//               >
//                 {/* Front */}
//                 <div
//                   className="absolute inset-0 rounded-2xl bg-white dark:bg-gray-800 border border-purple-100 dark:border-gray-700 shadow-md flex flex-col items-center justify-center gap-3 p-4"
//                   style={{ backfaceVisibility: "hidden" }}
//                 >
//                   <div
//                     className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl bg-purple-50 dark:bg-gray-700"
//                     style={{ color: skill.color }}
//                   >
//                     {skill.icon}
//                   </div>
//                   <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white text-center">
//                     {skill.name}
//                   </h3>
//                   <span className="text-xs text-gray-400 dark:text-gray-500">Hover for details</span>
//                 </div>

//                 {/* Back */}
//                 <div
//                   className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-700 to-purple-600 shadow-md flex flex-col items-center justify-center gap-3 p-4 text-center"
//                   style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
//                 >
//                   <h3 className="text-sm sm:text-base font-bold text-white">{skill.name}</h3>
//                   <p className="text-xs text-purple-100 leading-5">{skill.desc}</p>

//                   <div className="w-full mt-1">
//                     <div className="flex justify-between text-[11px] text-purple-100 mb-1">
//                       <span>Proficiency</span>
//                       <span>{skill.level}%</span>
//                     </div>
//                     <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
//                       <div
//                         className="h-full rounded-full bg-white transition-all duration-700"
//                         style={{ width: `${skill.level}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import {
  FaReact, FaJava, FaGitAlt, FaHtml5, FaCss3Alt, FaRobot,
} from "react-icons/fa";
import {
  SiTailwindcss, SiJavascript, SiSpringboot, SiMysql, SiAngular,
  SiBootstrap, SiAxios, SiPostman, SiVercel, SiNetlify,
} from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi2";
import AnimatedBackground from "../common/AnimatedBackground";

// Layers of the stack, top (what users see) to bottom (what powers it) —
// every item sourced directly from the resume.
const layers = [
  {
    label: "Frontend",
    tagline: "What people see & interact with",
    accent: "from-purple-600 to-violet-500",
    glow: "bg-purple-400/30 dark:bg-violet-600/20",
    skills: [
      { name: "React.js", icon: <FaReact />, color: "#61DAFB", core: true },
      { name: "JavaScript (ES6+)", icon: <SiJavascript />, color: "#F0DB4F", core: true },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8", core: true },
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", core: true },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", core: true },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3", core: false },
      { name: "Angular", icon: <SiAngular />, color: "#DD0031", core: false },
    ],
  },
  {
    label: "React Ecosystem",
    tagline: "How components talk to real data",
    accent: "from-violet-600 to-indigo-500",
    glow: "bg-violet-400/30 dark:bg-indigo-600/20",
    skills: [
      { name: "React Hooks", icon: <FaReact />, color: "#61DAFB", core: true },
      { name: "Axios / REST APIs", icon: <SiAxios />, color: "#5A29E4", core: true },
    ],
  },
  {
    label: "Backend & Database",
    tagline: "What runs behind the interface",
    accent: "from-indigo-600 to-blue-500",
    glow: "bg-indigo-400/30 dark:bg-blue-600/20",
    skills: [
      { name: "Java", icon: <FaJava />, color: "#EA4335", core: false },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F", core: false },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1", core: false },
    ],
  },
  {
    label: "Tools & Platforms",
    tagline: "How I build, test & ship",
    accent: "from-blue-600 to-cyan-500",
    glow: "bg-blue-400/30 dark:bg-cyan-600/20",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt />, color: "#F1502F", core: true },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37", core: false },
      { name: "Vercel", icon: <SiVercel />, color: "#a1a1aa", core: false },
      { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7", core: false },
    ],
  },
  {
    label: "Emerging Tech",
    tagline: "What I'm exploring right now",
    accent: "from-cyan-500 to-emerald-500",
    glow: "bg-cyan-400/30 dark:bg-emerald-600/20",
    skills: [
      { name: "Generative AI", icon: <FaRobot />, color: "#10A37F", core: false },
    ],
  },
];

// --- Build an S-shaped connector path (like a winding road) linking each
// layer node, alternating left/right, matching the reference sketch. ---
const ROW_HEIGHT = 260; // px per layer row
const VIEW_WIDTH = 400;
const NODE_LEFT_X = 40;
const NODE_RIGHT_X = 360;
const TOTAL_HEIGHT = ROW_HEIGHT * layers.length;

const buildSnakePath = () => {
  const points = layers.map((_, i) => ({
    x: i % 2 === 0 ? NODE_LEFT_X : NODE_RIGHT_X,
    y: ROW_HEIGHT * i + ROW_HEIGHT / 2,
  }));

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    const midY = (a.y + b.y) / 2;
    // flat run near each node, then a smooth S-bend through the middle
    d += ` C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`;
  }
  return d;
};

const SkillChip = ({ skill }) => (
  <span
    className={
      "inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:-translate-y-0.5 " +
      (skill.core
        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md"
        : "bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-purple-100 dark:border-white/10 hover:border-purple-300 dark:hover:border-violet-500/50")
    }
  >
    <span className="text-base" style={{ color: skill.color }}>
      {skill.icon}
    </span>
    {skill.name}
  </span>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-purple-50 dark:from-[#05060f] dark:to-[#05060f] overflow-hidden"
    >
       <AnimatedBackground variant="soft" />
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-200/40 dark:bg-violet-700/10 rounded-full blur-3xl translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-violet-200/30 dark:bg-blue-700/10 rounded-full blur-3xl -translate-x-1/3"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-purple-600 dark:text-violet-400 font-semibold tracking-[3px] sm:tracking-[4px] uppercase text-xs sm:text-sm">
            Skills
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-4 sm:mt-5 text-gray-900 dark:text-white leading-tight">
            My Tech{" "}
            <span className="bg-gradient-to-r from-purple-700 to-violet-600 dark:from-violet-500 dark:to-purple-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Layered the way I actually build things — from what users see, down to what
            powers it behind the scenes.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-gray-900 dark:bg-white"></span>
              Core stack
            </span>
            <span className="inline-flex items-center gap-1.5 ml-3">
              <span className="w-3 h-3 rounded-md border border-purple-200 dark:border-white/20"></span>
              Also comfortable with
            </span>
          </div>
        </div>

        {/* ===== Desktop / tablet: winding S-path timeline ===== */}
        <div className="hidden md:block relative" style={{ height: TOTAL_HEIGHT }}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={`0 0 ${VIEW_WIDTH} ${TOTAL_HEIGHT}`}
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d={buildSnakePath()}
              stroke="url(#snakeGradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="snakeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>

          {layers.map((layer, i) => {
            const onLeft = i % 2 === 0;
            return (
              <div
                key={layer.label}
                className="absolute w-full flex"
                style={{
                  top: ROW_HEIGHT * i,
                  height: ROW_HEIGHT,
                  justifyContent: onLeft ? "flex-start" : "flex-end",
                  alignItems: "center",
                }}
              >
                <div
                  className={`relative w-[78%] lg:w-[62%] flex items-center gap-4 ${
                    onLeft ? "" : "flex-row-reverse text-right"
                  }`}
                >
                  <div
                    className={`shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${layer.accent} flex items-center justify-center text-white text-sm font-bold shadow-lg ring-4 ring-white dark:ring-[#05060f] z-10`}
                  >
                    {i === layers.length - 1 ? <HiOutlineSparkles size={18} /> : i + 1}
                  </div>

                  <div className={`absolute w-24 h-24 rounded-full blur-2xl ${layer.glow} ${onLeft ? "-left-6" : "-right-6"} -z-10`}></div>

                  <div className="bg-white dark:bg-white/5 border border-purple-100 dark:border-white/10 rounded-2xl p-5 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:border-violet-500/30 transition-shadow w-full">
                    <div className={`flex flex-wrap items-baseline gap-2 mb-3 ${onLeft ? "" : "justify-end"}`}>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                        {layer.label}
                      </h3>
                      <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 italic">
                        {layer.tagline}
                      </span>
                    </div>

                    <div className={`flex flex-wrap gap-2 sm:gap-2.5 ${onLeft ? "" : "justify-end"}`}>
                      {layer.skills.map((skill) => (
                        <SkillChip key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== Mobile: straight connector, single column ===== */}
        <div className="md:hidden relative">
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-purple-300 via-violet-300 to-transparent dark:from-violet-700/60 dark:via-blue-700/40"></div>

          <div className="space-y-8">
            {layers.map((layer, i) => (
              <div key={layer.label} className="relative pl-14">
                <div
                  className={`absolute left-0 top-1 w-10 h-10 rounded-xl bg-gradient-to-br ${layer.accent} flex items-center justify-center text-white text-sm font-bold shadow-lg`}
                >
                  {i === layers.length - 1 ? <HiOutlineSparkles size={18} /> : i + 1}
                </div>

                <div className={`absolute -left-4 top-0 w-24 h-24 rounded-full blur-2xl ${layer.glow}`}></div>

                <div className="relative bg-white dark:bg-white/5 border border-purple-100 dark:border-white/10 rounded-2xl p-5 shadow-sm dark:shadow-none">
                  <div className="flex flex-wrap items-baseline gap-2 mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{layer.label}</h3>
                    <span className="text-xs text-gray-400 dark:text-gray-500 italic">{layer.tagline}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.skills.map((skill) => (
                      <SkillChip key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;