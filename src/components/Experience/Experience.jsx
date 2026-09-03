
import { FiBriefcase, FiCode, FiDatabase, FiGlobe, FiCheck } from "react-icons/fi";

const experiences = [
 {
  duration: "Aug 2025 – Apr 2026",
  role: "Frontend Developer Intern",
  company: "Vithal Visions Pvt. Ltd.",
  type: "Remote Internship",
  icon: <FiCode />,
  accent: "from-violet-600 to-purple-500",
  achievements: [
    "Built and shipped React.js applications for real-world use cases.",
    "Developed 15+ reusable React components.",
    "Integrated 18+ REST APIs using Axios.",
    "Created responsive interfaces with React.js and Tailwind CSS.",
    "Improved UI performance and resolved frontend issues.",
  ],
  current: false,
},
  {
  duration: "Mar 2024 – Jun 2024",
  role: "Frontend Development Intern",
  company: "Infosys Springboard",
  type: "Remote Internship",
  icon: <FiCode />,
  accent: "from-purple-600 to-fuchsia-500",
  achievements: [
    "Developed 10+ reusable Angular components.",
    "Integrated REST APIs into frontend workflows.",
    "Built responsive layouts for different screen sizes.",
    "Improved UI usability and overall user experience.",
  ],
  current: false,
},
  {
  duration: "Jun 2023 – Jul 2023",
  role: "Web Development Intern",
  company: "Bharat Intern",
  type: "Virtual Internship",
  icon: <FiGlobe />,
  accent: "from-fuchsia-500 to-pink-500",
  achievements: [
    "Worked on web development and frontend design tasks.",
    "Built and styled responsive web pages.",
    "Gained practical experience working in a virtual development environment.",
  ],
  current: false,
},
  {
    duration: "Dec 2022 – Jan 2023 · 1 month",
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    type: "Virtual Internship · Python, MySQL, HTML",
    icon: <FiDatabase />,
    accent: "from-blue-600 to-cyan-500",
    achievements: [
      "Built web development projects using Python, MySQL and HTML.",
      "Worked on structuring and querying data with MySQL.",
      "Gained hands-on exposure to backend-oriented web development.",
    ],
    current: false,
  },
  {
  duration: "Nov 2022 – Jan 2023",
  role: "Data Scraping Intern",
  company: "NSP Ites Pvt Ltd",
  type: "Virtual Internship",
  icon: <FiBriefcase />,
  accent: "from-cyan-500 to-emerald-500",
  achievements: [
    "Extracted and collected data from live websites.",
    "Cleaned and organized scraped data into usable formats.",
    "Gained practical experience with web data extraction techniques.",
  ],
  current: false,
},
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-purple-50 to-white dark:from-[#05060f] dark:to-[#05060f] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-200/40 dark:bg-violet-700/10 rounded-full blur-3xl translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-violet-200/30 dark:bg-blue-700/10 rounded-full blur-3xl -translate-x-1/3"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="uppercase tracking-[3px] sm:tracking-[5px] text-purple-600 dark:text-violet-400 font-semibold text-xs sm:text-sm">
            Experience
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-4 text-gray-900 dark:text-white leading-tight">
            Professional{" "}
            <span className="bg-gradient-to-r from-purple-700 to-violet-600 dark:from-violet-500 dark:to-purple-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mt-5 sm:mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
  My professional journey spans frontend development, web development,
  data scraping, and building responsive applications with modern
  technologies.
</p>
        </div>

        {/* ===== Desktop: alternating zigzag timeline ===== */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-purple-300 via-violet-300 to-transparent dark:from-violet-600/50 dark:via-blue-600/30"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const onLeft = index % 2 === 0;
              return (
                <div key={exp.company} className="relative flex items-center">
                  <div className={`w-1/2 ${onLeft ? "pr-10" : "order-2 pl-10"}`}>
                    <div
                      className={`group relative bg-white dark:bg-white/5 border border-purple-100 dark:border-white/10 rounded-2xl p-6 shadow-md dark:shadow-none hover:-translate-y-2 hover:shadow-2xl dark:hover:border-violet-500/50 transition-all duration-300 overflow-hidden ${
                        onLeft ? "text-right" : "text-left"
                      }`}
                    >
                      {/* subtle corner glow on hover */}
                      <div
                        className={`absolute -top-10 ${onLeft ? "-right-10" : "-left-10"} w-32 h-32 rounded-full bg-gradient-to-br ${exp.accent} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                      ></div>

                      <span
                        className={`pointer-events-none select-none absolute -bottom-3 ${onLeft ? "-left-2" : "-right-2"} text-6xl font-black text-purple-50 dark:text-white/[0.03]`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="relative">
                        <div className={`flex flex-wrap items-center gap-2 ${onLeft ? "justify-end" : "justify-start"}`}>
                          <span className="text-xs bg-purple-100 dark:bg-white/10 text-purple-700 dark:text-violet-300 px-3 py-1.5 rounded-full font-semibold">
                            {exp.duration}
                          </span>
                          {exp.current && (
                            <span className="flex items-center gap-1.5 bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full font-semibold text-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                              Current
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg lg:text-xl font-bold mt-3 text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <h4
                          className={`text-sm lg:text-base mt-1 font-medium bg-gradient-to-r ${exp.accent} bg-clip-text text-transparent`}
                        >
                          {exp.company}
                        </h4>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{exp.type}</p>

                        <div className="mt-4 space-y-2">
                          {exp.achievements.map((item) => (
                            <div
                              key={item}
                              className={`flex gap-2 items-start text-sm text-gray-600 dark:text-gray-400 leading-6 ${
                                onLeft ? "flex-row-reverse text-right" : ""
                              }`}
                            >
                              <FiCheck className="text-purple-600 dark:text-violet-400 mt-0.5 shrink-0" size={15} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* center node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.accent} border-4 border-white dark:border-[#05060f] shadow-xl flex items-center justify-center text-white text-lg ring-4 ring-purple-100/50 dark:ring-white/5 hover:scale-110 transition-transform duration-300`}
                    >
                      {exp.icon}
                    </div>
                  </div>

                  <div className={`w-1/2 ${onLeft ? "order-2" : ""}`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== Mobile / tablet: single-column timeline ===== */}
        <div className="lg:hidden relative">
          <div className="absolute left-5 sm:left-6 top-0 w-0.5 sm:w-1 h-full bg-purple-200 dark:bg-white/10 rounded-full"></div>

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="relative pl-14 sm:pl-16">
                <div
                  className={`absolute left-0 top-1 sm:top-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${exp.accent} border-4 sm:border-[6px] border-white dark:border-[#05060f] shadow-xl flex items-center justify-center text-white text-sm sm:text-base`}
                >
                  {exp.icon}
                </div>

                <div className="relative bg-white dark:bg-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg dark:shadow-none hover:-translate-y-1.5 hover:shadow-2xl dark:hover:border-violet-500/40 transition duration-300 border border-purple-100 dark:border-white/10 overflow-hidden">
                  <span className="pointer-events-none select-none absolute -bottom-2 -right-2 text-6xl font-black text-purple-50 dark:text-white/[0.03]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="inline-block text-xs sm:text-sm bg-purple-100 dark:bg-white/10 text-purple-700 dark:text-violet-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold">
                        {exp.duration}
                      </span>

                      <h3 className="text-xl sm:text-2xl font-bold mt-4 text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <h4
                        className={`text-base mt-1.5 font-medium bg-gradient-to-r ${exp.accent} bg-clip-text text-transparent`}
                      >
                        {exp.company}
                      </h4>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{exp.type}</p>
                    </div>

                    {exp.current && (
                      <span className="flex items-center gap-1.5 bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Current
                      </span>
                    )}
                  </div>

                  <div className="relative mt-6 grid sm:grid-cols-2 gap-3">
                    {exp.achievements.map((item) => (
                      <div key={item} className="flex gap-3 items-start">
                        <FiCheck className="text-purple-600 dark:text-violet-400 mt-1 shrink-0" size={16} />
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-6 sm:leading-7">
                          {item}
                        </p>
                      </div>
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

export default Experience;
