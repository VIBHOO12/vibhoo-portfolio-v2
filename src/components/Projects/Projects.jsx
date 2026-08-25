

// import { useState } from "react";
// import projectData from "./ProjectData";
// import ProjectCard from "./ProjectCard";

// const Projects = () => {
//   const [filter, setFilter] = useState("All");

//   const allTech = ["All", ...new Set(projectData.flatMap((p) => p.tech))];

//   const filtered =
//     filter === "All" ? projectData : projectData.filter((p) => p.tech.includes(filter));

//   return (
//     <section id="projects" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-purple-50 to-white dark:from-gray-950 dark:to-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center mb-10 sm:mb-16">
//           <p className="uppercase tracking-[4px] sm:tracking-[6px] text-purple-600 font-semibold text-sm sm:text-base">Portfolio</p>

//           <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-4 text-gray-900 dark:text-white leading-tight">
//             Featured Projects
//           </h2>

//           <p className="mt-5 sm:mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
//             Some of the projects I have built using React.js, Spring Boot, Tailwind CSS and REST APIs.
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-14">
//           {allTech.map((tech) => (
//             <button
//               key={tech}
//               onClick={() => setFilter(tech)}
//               className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
//                 filter === tech
//                   ? "bg-gradient-to-r from-violet-700 to-purple-600 text-white shadow-lg scale-105"
//                   : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-purple-100 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-700"
//               }`}
//             >
//               {tech}
//             </button>
//           ))}
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {filtered.map((project, index) => (
//             <ProjectCard key={project.id} project={project} index={index} />
//           ))}
//         </div>

//         {filtered.length === 0 && (
//           <p className="text-center text-gray-500 dark:text-gray-400 mt-10">No projects found for this filter.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { useState } from "react";
import { FiFolder } from "react-icons/fi";

import projectData from "./ProjectData";
import ProjectCard from "./ProjectCard";

import AnimatedBackground from "../common/AnimatedBackground";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const allTech = [
    "All",
    ...new Set(projectData.flatMap((project) => project.tech)),
  ];

  const filtered =
    filter === "All"
      ? projectData
      : projectData.filter((project) =>
          project.tech.includes(filter)
        );

  return (
    <section
      id="projects"
      className="
        relative
        py-16
        sm:py-20
        lg:py-28

        bg-gradient-to-b
        from-purple-50
        to-white

        dark:from-[#05060f]
        dark:to-[#05060f]

        overflow-hidden
      "
    >
      {/* Animated Background */}

      <AnimatedBackground variant="soft" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* ================================================
            SECTION HEADING
        ================================================= */}

        <div className="text-center mb-10 sm:mb-16">
          <span
            className="
              inline-flex
              items-center
              gap-2

              text-purple-600
              dark:text-violet-400

              font-semibold
              tracking-[3px]
              sm:tracking-[4px]

              uppercase
              text-xs
              sm:text-sm
            "
          >
            <FiFolder size={14} />

            Portfolio
          </span>

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-6xl

              font-black

              mt-4

              text-gray-900
              dark:text-white

              leading-tight
            "
          >
            Featured{" "}

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
              Projects
            </span>
          </h2>

          <p
            className="
              mt-5
              sm:mt-6

              text-gray-600
              dark:text-gray-400

              max-w-2xl
              mx-auto

              text-base
              sm:text-lg
            "
          >
            Real projects built with modern frontend technologies,
            reusable components, and REST API integrations.
          </p>
        </div>

        {/* ================================================
            FILTERS
        ================================================= */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-2.5
            sm:gap-3

            mb-10
            sm:mb-14
          "
        >
          {allTech.map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => setFilter(tech)}
              className={`
                px-4
                sm:px-5
                py-2
                sm:py-2.5

                rounded-full

                text-xs
                sm:text-sm

                font-semibold

                transition-all

                ${
                  filter === tech
                    ? "bg-gradient-to-r from-violet-700 to-purple-600 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-purple-100 dark:border-white/10 hover:bg-purple-50 dark:hover:bg-white/10"
                }
              `}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* ================================================
            PROJECT GRID
        ================================================= */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3

            gap-6
            sm:gap-8
          "
        >
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* ================================================
            EMPTY STATE
        ================================================= */}

        {filtered.length === 0 && (
          <p
            className="
              text-center

              text-gray-500
              dark:text-gray-400

              mt-10
            "
          >
            No projects found for this filter.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;

// import { useState } from "react";
// import { FiFolder } from "react-icons/fi";
// import projectData from "./ProjectData";
// import ProjectCard from "./ProjectCard";
// import AnimatedBackground from "../common/AnimatedBackground";

// const Projects = () => {
//   const [filter, setFilter] = useState("All");

//   const allTech = ["All", ...new Set(projectData.flatMap((p) => p.tech))];

//   const filtered =
//     filter === "All" ? projectData : projectData.filter((p) => p.tech.includes(filter));

//   return (
//     <section
//       id="projects"
//       className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-purple-50 to-white dark:from-[#05060f] dark:to-[#05060f] overflow-hidden"
//     >
//        <AnimatedBackground variant="soft" />
//       <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-200/40 dark:bg-violet-700/10 rounded-full blur-3xl -translate-x-1/3"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-violet-200/30 dark:bg-blue-700/10 rounded-full blur-3xl translate-x-1/3"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center mb-10 sm:mb-16">
//           <span className="inline-flex items-center gap-2 text-purple-600 dark:text-violet-400 font-semibold tracking-[3px] sm:tracking-[4px] uppercase text-xs sm:text-sm">
//             <FiFolder size={14} />
//             Portfolio
//           </span>

//           <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-4 text-gray-900 dark:text-white leading-tight">
//             Featured{" "}
//             <span className="bg-gradient-to-r from-purple-700 to-violet-600 dark:from-violet-500 dark:to-purple-400 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>

//           <p className="mt-5 sm:mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
//             Live, production-facing work — built with React.js, Spring Boot, Tailwind CSS and real REST APIs.
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-14">
//           {allTech.map((tech) => (
//             <button
//               key={tech}
//               onClick={() => setFilter(tech)}
//               className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
//                 filter === tech
//                   ? "bg-gradient-to-r from-violet-700 to-purple-600 text-white shadow-lg scale-105"
//                   : "bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-purple-100 dark:border-white/10 hover:bg-purple-50 dark:hover:bg-white/10"
//               }`}
//             >
//               {tech}
//             </button>
//           ))}
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {filtered.map((project, index) => (
//             <ProjectCard key={project.id} project={project} index={index} />
//           ))}
//         </div>

//         {filtered.length === 0 && (
//           <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
//             No projects found for this filter.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;