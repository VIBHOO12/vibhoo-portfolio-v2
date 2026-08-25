
// import { FiExternalLink, FiGithub, FiStar, FiArrowUpRight } from "react-icons/fi";

// const ProjectCard = ({ project, index }) => {
//   return (
//     <div className="group relative rounded-3xl p-[1.5px] bg-gradient-to-br from-purple-200 via-transparent to-transparent dark:from-purple-800/50 hover:from-violet-500 hover:to-purple-500 transition-all duration-500">
//       <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-gray-800 h-full">
//         <span className="absolute top-4 right-4 z-10 text-5xl sm:text-6xl font-black text-purple-100 dark:text-gray-700 select-none">
//           {String(index + 1).padStart(2, "0")}
//         </span>

//         {project.featured && (
//           <span className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-gradient-to-r from-violet-700 to-purple-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
//             <FiStar size={12} />
//             Featured
//           </span>
//         )}

//         <div className="relative overflow-hidden bg-purple-50 dark:bg-gray-900">
//           {project.image ? (
//             <img src={project.image} alt={project.title} className="h-48 sm:h-56 w-full object-cover transition duration-700 sm:group-hover:scale-110" />
//           ) : (
//             <div className="h-48 sm:h-56 w-full flex items-center justify-center text-purple-300 dark:text-gray-600 text-5xl font-black">
//               {project.title.charAt(0)}
//             </div>
//           )}

//           <div className="hidden sm:flex absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition duration-500 items-center justify-center gap-4">
//             <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition">
//               <FiExternalLink size={16} />
//               Live
//             </a>
//             <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-purple-700 text-white px-5 py-3 rounded-xl font-semibold hover:scale-105 transition">
//               <FiGithub size={16} />
//               Code
//             </a>
//           </div>
//         </div>

//         <div className="p-5 sm:p-7">
//           <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>

//           <p className="mt-2.5 sm:mt-3 text-sm text-gray-600 dark:text-gray-300 leading-6 line-clamp-2">{project.description}</p>

//           <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
//             {project.tech.map((tech) => (
//               <span key={tech} className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2.5 py-1 rounded-full text-xs font-medium">
//                 {tech}
//               </span>
//             ))}
//           </div>

//           <div className="flex sm:hidden items-center gap-3 mt-5 pt-5 border-t border-purple-100 dark:border-gray-700">
//             <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-purple-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm">
//               <FiExternalLink size={14} />
//               Live
//             </a>
//             <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-purple-50 dark:bg-gray-700 text-purple-700 dark:text-gray-200 px-4 py-2.5 rounded-xl font-semibold text-sm">
//               <FiGithub size={14} />
//               Code
//             </a>
//           </div>
//         </div>

//         <a href={project.live} target="_blank" rel="noopener noreferrer" className="hidden sm:flex absolute bottom-6 right-6 w-9 h-9 rounded-full bg-white dark:bg-gray-700 shadow-md items-center justify-center text-purple-700 dark:text-purple-300 opacity-0 group-hover:opacity-0 pointer-events-none">
//           <FiArrowUpRight size={16} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

// import { FiExternalLink, FiGithub, FiStar, FiArrowUpRight } from "react-icons/fi";

// const ProjectCard = ({ project, index }) => {
//   return (
//     <div className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-purple-200 via-transparent to-transparent dark:from-white/10 dark:via-transparent dark:to-transparent hover:from-violet-500 hover:to-purple-500 transition-all duration-500">
//       <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#0a0b1a] h-full flex flex-col">
//         {/* "Browser window" chrome bar — gives the card a live-preview feel */}
//         <div className="flex items-center justify-between gap-3 px-4 py-3 bg-purple-50 dark:bg-white/5 border-b border-purple-100 dark:border-white/10">
//           <div className="flex items-center gap-2">
//             <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
//             <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
//             <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
//           </div>

//           <span className="flex-1 text-center text-[11px] sm:text-xs font-medium text-gray-400 dark:text-gray-500 truncate px-2">
//             {project.title.toLowerCase().replace(/\s+/g, "-")}.live
//           </span>

//           <span className="text-[11px] sm:text-xs font-bold text-purple-300 dark:text-white/10 select-none w-6 text-right">
//             {String(index + 1).padStart(2, "0")}
//           </span>
//         </div>

//         {/* Screenshot / preview area */}
//         <div className="relative overflow-hidden bg-purple-50 dark:bg-white/5">
//           {project.featured && (
//             <span className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-gradient-to-r from-violet-700 to-purple-600 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-lg">
//               <FiStar size={11} />
//               Featured
//             </span>
//           )}

//           {project.image ? (
//             <img
//               src={project.image}
//               alt={project.title}
//               className="h-48 sm:h-52 w-full object-cover object-top transition duration-700 sm:group-hover:scale-110"
//             />
//           ) : (
//             <div className="h-48 sm:h-52 w-full flex items-center justify-center text-purple-300 dark:text-white/10 text-5xl font-black">
//               {project.title.charAt(0)}
//             </div>
//           )}

//           {/* Desktop hover overlay — actions slide up instead of fading in place */}
//           <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 items-end justify-center pb-5">
//             <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//               <a
//                 href={project.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2.5 rounded-xl font-semibold text-sm hover:scale-105 transition"
//               >
//                 <FiExternalLink size={14} />
//                 Live
//               </a>
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:scale-105 transition"
//               >
//                 <FiGithub size={14} />
//                 Code
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-5 sm:p-6 flex flex-col flex-1">
//           <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
//             {project.title}
//             <FiArrowUpRight
//               size={16}
//               className="text-purple-400 dark:text-violet-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
//             />
//           </h3>

//           <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-6 line-clamp-2">
//             {project.description}
//           </p>

//           <div className="flex flex-wrap gap-2 mt-4">
//             {project.tech.map((tech) => (
//               <span
//                 key={tech}
//                 className="bg-purple-100 dark:bg-white/5 text-purple-700 dark:text-violet-300 border border-transparent dark:border-white/10 px-2.5 py-1 rounded-full text-xs font-medium"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>

//           {/* Mobile action row */}
//           <div className="flex sm:hidden items-center gap-3 mt-5 pt-5 border-t border-purple-100 dark:border-white/10">
//             <a
//               href={project.live}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-700 to-purple-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm"
//             >
//               <FiExternalLink size={14} />
//               Live
//             </a>
//             <a
//               href={project.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex-1 flex items-center justify-center gap-2 bg-purple-50 dark:bg-white/5 text-purple-700 dark:text-gray-200 px-4 py-2.5 rounded-xl font-semibold text-sm"
//             >
//               <FiGithub size={14} />
//               Code
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import { useState } from "react";

import {
  FiExternalLink,
  FiGithub,
  FiStar,
  FiArrowUpRight,
  FiX,
  FiCheckCircle,
} from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const closeCaseStudy = () => {
    setShowCaseStudy(false);
  };

  return (
    <>
      {/* =====================================================
          PROJECT CARD
      ====================================================== */}

      <div
        className="
          group
          relative
          rounded-2xl
          p-[1.5px]

          bg-gradient-to-br
          from-purple-200
          via-transparent
          to-transparent

          dark:from-white/10
          dark:via-transparent
          dark:to-transparent

          hover:from-violet-500
          hover:to-purple-500

          transition-all
          duration-500
        "
      >
        <div
          className="
            relative
            rounded-2xl
            overflow-hidden

            bg-white
            dark:bg-[#0a0b1a]

            h-full
            flex
            flex-col
          "
        >
          {/* =================================================
              BROWSER HEADER
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-3

              px-4
              py-3

              bg-purple-50
              dark:bg-white/5

              border-b
              border-purple-100
              dark:border-white/10
            "
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            </div>

            <span
              className="
                flex-1
                text-center
                text-[11px]
                sm:text-xs
                font-medium
                text-gray-400
                dark:text-gray-500
                truncate
                px-2
              "
            >
              {project.title.toLowerCase().replace(/\s+/g, "-")}.live
            </span>

            <span
              className="
                text-[11px]
                sm:text-xs
                font-bold
                text-purple-300
                dark:text-white/10
                select-none
                w-6
                text-right
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* =================================================
              PROJECT IMAGE
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              bg-purple-50
              dark:bg-white/5
            "
          >
            {/* Featured Badge */}

            {project.featured && (
              <span
                className="
                  absolute
                  top-3
                  left-3
                  z-10

                  flex
                  items-center
                  gap-1.5

                  bg-gradient-to-r
                  from-violet-700
                  to-purple-600

                  text-white

                  text-[11px]
                  font-semibold

                  px-3
                  py-1.5

                  rounded-full
                  shadow-lg
                "
              >
                <FiStar size={11} />
                Featured
              </span>
            )}

            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="
                  h-48
                  sm:h-52
                  w-full

                  object-cover
                  object-top

                  transition
                  duration-700

                  sm:group-hover:scale-110
                "
              />
            ) : (
              <div
                className="
                  h-48
                  sm:h-52
                  w-full

                  flex
                  items-center
                  justify-center

                  text-purple-300
                  dark:text-white/10

                  text-5xl
                  font-black
                "
              >
                {project.title.charAt(0)}
              </div>
            )}

            {/* =================================================
                DESKTOP HOVER ACTIONS
            ================================================= */}

            <div
              className="
                hidden
                sm:flex

                absolute
                inset-0

                bg-gradient-to-t
                from-black/80
                via-black/20
                to-transparent

                opacity-0
                group-hover:opacity-100

                transition
                duration-500

                items-end
                justify-center

                pb-5
              "
            >
              <div
                className="
                  flex
                  gap-3

                  translate-y-4
                  group-hover:translate-y-0

                  transition-transform
                  duration-500
                "
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2

                    bg-white
                    text-gray-900

                    px-4
                    py-2.5

                    rounded-xl

                    font-semibold
                    text-sm

                    hover:scale-105
                    transition
                  "
                >
                  <FiExternalLink size={14} />
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2

                    bg-violet-600
                    text-white

                    px-4
                    py-2.5

                    rounded-xl

                    font-semibold
                    text-sm

                    hover:scale-105
                    transition
                  "
                >
                  <FiGithub size={14} />
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* =================================================
              CARD CONTENT
          ================================================= */}

          <div
            className="
              p-5
              sm:p-6

              flex
              flex-col
              flex-1
            "
          >
            {/* Title */}

            <h3
              className="
                text-lg
                sm:text-xl

                font-bold

                text-gray-900
                dark:text-white

                flex
                items-center
                gap-1.5
              "
            >
              {project.title}

              <FiArrowUpRight
                size={16}
                className="
                  text-purple-400
                  dark:text-violet-400

                  opacity-0
                  -translate-x-1

                  group-hover:opacity-100
                  group-hover:translate-x-0

                  transition-all
                  duration-300
                "
              />
            </h3>

            {/* Description */}

            <p
              className="
                mt-2

                text-sm

                text-gray-600
                dark:text-gray-400

                leading-6

                line-clamp-3
              "
            >
              {project.description}
            </p>

            {/* =================================================
                TECH STACK
            ================================================= */}

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    bg-purple-100
                    dark:bg-white/5

                    text-purple-700
                    dark:text-violet-300

                    border
                    border-transparent
                    dark:border-white/10

                    px-2.5
                    py-1

                    rounded-full

                    text-xs
                    font-medium
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* =================================================
                CASE STUDY BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => setShowCaseStudy(true)}
              className="
                mt-5

                inline-flex
                items-center
                gap-2

                w-fit

                text-sm
                font-semibold

                text-violet-700
                dark:text-violet-400

                hover:gap-3

                transition-all
              "
            >
              View Case Study
              <FiArrowUpRight size={16} />
            </button>

            {/* =================================================
                MOBILE ACTIONS
            ================================================= */}

            <div
              className="
                flex
                sm:hidden

                items-center
                gap-3

                mt-5
                pt-5

                border-t
                border-purple-100
                dark:border-white/10
              "
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1

                  flex
                  items-center
                  justify-center
                  gap-2

                  bg-gradient-to-r
                  from-violet-700
                  to-purple-600

                  text-white

                  px-4
                  py-2.5

                  rounded-xl

                  font-semibold
                  text-sm
                "
              >
                <FiExternalLink size={14} />
                Live
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1

                  flex
                  items-center
                  justify-center
                  gap-2

                  bg-purple-50
                  dark:bg-white/5

                  text-purple-700
                  dark:text-gray-200

                  px-4
                  py-2.5

                  rounded-xl

                  font-semibold
                  text-sm
                "
              >
                <FiGithub size={14} />
                Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CASE STUDY MODAL
      ====================================================== */}

      {showCaseStudy && (
        <div
          className="
            fixed
            inset-0
            z-[100]

            flex
            items-center
            justify-center

            p-4
            sm:p-6

            bg-black/70
            backdrop-blur-sm
          "
          onClick={closeCaseStudy}
        >
          <div
            className="
              relative

              w-full
              max-w-3xl

              max-h-[90vh]

              overflow-y-auto

              bg-white
              dark:bg-[#0a0b1a]

              rounded-2xl

              border
              border-purple-100
              dark:border-white/10

              shadow-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={closeCaseStudy}
              className="
                absolute
                top-4
                right-4
                z-20

                w-10
                h-10

                rounded-full

                bg-white/90
                dark:bg-gray-900/90

                border
                border-gray-200
                dark:border-white/10

                flex
                items-center
                justify-center

                text-gray-700
                dark:text-white

                hover:bg-gray-100
                dark:hover:bg-white/10

                transition
              "
              aria-label="Close case study"
            >
              <FiX size={18} />
            </button>

            {/* =================================================
                MODAL IMAGE
            ================================================= */}

            <div className="h-52 sm:h-64 overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} case study`}
                  className="
                    w-full
                    h-full
                    object-cover
                    object-top
                  "
                />
              ) : (
                <div
                  className="
                    w-full
                    h-full

                    flex
                    items-center
                    justify-center

                    bg-purple-50
                    dark:bg-white/5

                    text-6xl
                    font-black

                    text-violet-300
                  "
                >
                  {project.title.charAt(0)}
                </div>
              )}
            </div>

            {/* =================================================
                MODAL CONTENT
            ================================================= */}

            <div className="p-6 sm:p-8">
              {/* Label */}

              <span
                className="
                  text-xs

                  uppercase
                  tracking-[3px]

                  text-violet-600
                  dark:text-violet-400

                  font-semibold
                "
              >
                Built by Vibhoo
              </span>

              {/* Title */}

              <h2
                className="
                  mt-2

                  text-2xl
                  sm:text-3xl

                  font-black

                  text-gray-900
                  dark:text-white
                "
              >
                {project.title}
              </h2>

              {/* =================================================
                  MY ROLE
              ================================================= */}

              <div className="mt-6">
                <h3
                  className="
                    text-sm
                    font-bold

                    text-gray-900
                    dark:text-white
                  "
                >
                  My Role
                </h3>

                <p
                  className="
                    mt-1

                    text-sm

                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  {project.myRole}
                </p>
              </div>

              {/* =================================================
                  PROBLEM
              ================================================= */}

              <div className="mt-6">
                <h3
                  className="
                    text-sm
                    font-bold

                    text-gray-900
                    dark:text-white
                  "
                >
                  Problem
                </h3>

                <p
                  className="
                    mt-2

                    text-sm
                    leading-6

                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  {project.problem}
                </p>
              </div>

              {/* =================================================
                  WHAT I BUILT
              ================================================= */}

              <div className="mt-6">
                <h3
                  className="
                    text-sm
                    font-bold

                    text-gray-900
                    dark:text-white
                  "
                >
                  What I Built
                </h3>

                <div className="mt-3 space-y-2.5">
                  {project.whatIBuilt?.map((item, i) => (
                    <div
                      key={i}
                      className="
                        flex
                        gap-3

                        text-sm

                        text-gray-600
                        dark:text-gray-400
                      "
                    >
                      <FiCheckCircle
                        className="
                          mt-0.5
                          flex-shrink-0

                          text-violet-600
                          dark:text-violet-400
                        "
                      />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  CHALLENGES
              ================================================= */}

              <div className="mt-6">
                <h3
                  className="
                    text-sm
                    font-bold

                    text-gray-900
                    dark:text-white
                  "
                >
                  Challenges
                </h3>

                <p
                  className="
                    mt-2

                    text-sm
                    leading-6

                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  {project.challenges}
                </p>
              </div>

              {/* =================================================
                  OUTCOME
              ================================================= */}

              <div className="mt-6">
                <h3
                  className="
                    text-sm
                    font-bold

                    text-gray-900
                    dark:text-white
                  "
                >
                  Outcome
                </h3>

                <p
                  className="
                    mt-2

                    text-sm
                    leading-6

                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  {project.outcome}
                </p>
              </div>

              {/* =================================================
                  TECHNOLOGIES
              ================================================= */}

              <div className="mt-6">
                <h3
                  className="
                    text-sm
                    font-bold

                    text-gray-900
                    dark:text-white
                  "
                >
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1.5

                        rounded-lg

                        bg-purple-50
                        dark:bg-violet-500/10

                        text-purple-700
                        dark:text-violet-300

                        text-xs
                        font-medium

                        border
                        border-purple-100
                        dark:border-violet-500/20
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* =================================================
                  MODAL ACTIONS
              ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row

                  gap-3

                  mt-8
                "
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1

                    inline-flex
                    items-center
                    justify-center
                    gap-2

                    px-5
                    py-3

                    rounded-xl

                    bg-gradient-to-r
                    from-violet-700
                    to-purple-600

                    text-white

                    font-semibold

                    hover:scale-[1.02]

                    transition
                  "
                >
                  <FiExternalLink />
                  View Live Project
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1

                    inline-flex
                    items-center
                    justify-center
                    gap-2

                    px-5
                    py-3

                    rounded-xl

                    border
                    border-gray-200
                    dark:border-white/10

                    text-gray-800
                    dark:text-white

                    font-semibold

                    hover:bg-gray-50
                    dark:hover:bg-white/5

                    transition
                  "
                >
                  <FiGithub />
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;