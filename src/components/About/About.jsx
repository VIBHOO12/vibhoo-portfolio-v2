




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


