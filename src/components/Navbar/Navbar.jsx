



// import { useEffect, useState } from "react";
// import {
//   FiMenu,
//   FiX,
//   FiDownload,
//   FiMoon,
//   FiSun,
// } from "react-icons/fi";

// const Navbar = () => {
//   const [mobile, setMobile] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Initialize dark mode
//   const [dark, setDark] = useState(() => {
//     if (typeof window === "undefined") return false;

//     const saved = localStorage.getItem("theme");

//     if (saved) {
//       return saved === "dark";
//     }

//     return window.matchMedia("(prefers-color-scheme: dark)").matches;
//   });

//   // Apply dark mode
//   useEffect(() => {
//     const root = document.documentElement;

//     if (dark) {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [dark]);

//   // Navbar scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Prevent background scrolling when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = mobile ? "hidden" : "auto";

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [mobile]);

//   const links = [
//     "Home",
//     "About",
//     "Skills",
//     "Projects",
//     "Experience",
//     "Certificates",
//     "Contact",
//   ];

//   const scrollToSection = (id) => {
//     setMobile(false);

//     const el = document.getElementById(id);

//     if (el) {
//       el.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   };

//   const toggleDark = () => {
//     setDark((prev) => !prev);
//   };

//   return (
//     <header
//       className={
//         "fixed top-0 left-0 w-full z-50 transition-all duration-500 " +
//         (scrolled
//           ? "backdrop-blur-xl bg-white/75 dark:bg-gray-900/75 shadow-lg"
//           : "bg-transparent")
//       }
//     >
//       <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-10">
//         <div className="h-16 sm:h-20 flex items-center justify-between">
//           {/* Logo */}
//           <button
//             onClick={() => scrollToSection("home")}
//             className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight dark:text-white"
//           >
//             <span className="text-violet-700">V</span>ibhoo
//           </button>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
//             {links.map((item) => {
//               const id = item.toLowerCase();

//               return (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(id)}
//                   className="relative font-semibold text-gray-700 dark:text-gray-200 hover:text-violet-700 dark:hover:text-violet-400 transition group bg-transparent"
//                 >
//                   {item}

//                   <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-violet-700 rounded-full transition-all duration-300 group-hover:w-full" />
//                 </button>
//               );
//             })}
//           </nav>

//           {/* Desktop Actions */}
//           <div className="hidden lg:flex items-center gap-4">
//             {/* Theme */}
//             <button
//               onClick={toggleDark}
//               aria-label="Toggle theme"
//               className="w-11 h-11 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:rotate-180 transition-transform duration-500"
//             >
//               {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
//             </button>

//             {/* Resume */}
//             <a
//               href="/resume.pdf"
//               download
//               className="flex items-center gap-2 px-5 xl:px-6 py-3 rounded-xl bg-gradient-to-r from-violet-700 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
//             >
//               <FiDownload />
//               <span>Resume</span>
//             </a>
//           </div>

//           {/* Mobile Actions */}
//           <div className="flex items-center gap-3 lg:hidden">
//             {/* Theme */}
//             <button
//               onClick={toggleDark}
//               aria-label="Toggle theme"
//               className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center dark:text-white"
//             >
//               {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
//             </button>

//             {/* Menu */}
//             <button
//               onClick={() => setMobile(!mobile)}
//               aria-label="Toggle menu"
//               className="dark:text-white"
//             >
//               {mobile ? <FiX size={26} /> : <FiMenu size={26} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={
//             "lg:hidden overflow-hidden transition-all duration-300 " +
//             (mobile
//               ? "max-h-[600px] opacity-100 mb-5"
//               : "max-h-0 opacity-0")
//           }
//         >
//           <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-xl p-5 border border-purple-100 dark:border-white/10">
//             <div className="flex flex-col gap-4">
//               {links.map((item) => {
//                 const id = item.toLowerCase();

//                 return (
//                   <button
//                     key={item}
//                     onClick={() => scrollToSection(id)}
//                     className="text-left font-semibold text-gray-700 dark:text-gray-200 hover:text-violet-700 dark:hover:text-violet-400 transition bg-transparent"
//                   >
//                     {item}
//                   </button>
//                 );
//               })}

//               <a
//                 href="/resume.pdf"
//                 download
//                 onClick={() => setMobile(false)}
//                 className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-700 to-purple-600 text-white rounded-xl py-3 font-semibold"
//               >
//                 <FiDownload />
//                 <span>Download Resume</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiDownload,
  FiMoon,
  FiSun,
} from "react-icons/fi";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Initialize dark mode
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;

    const saved = localStorage.getItem("theme");

    if (saved) {
      return saved === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply dark mode
  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "developer-terminal",
      "experience",
      "currently-building",
      "projects",
      "certificates",
      "contact",
    ];

    const handleSection = () => {
      const scrollPosition = window.scrollY + 140;

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= scrollPosition) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleSection);

    handleSection();

    return () => {
      window.removeEventListener("scroll", handleSection);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobile]);

  // Navigation items
  const links = [
    {
      label: "Home",
      id: "home",
    },
    {
      label: "About",
      id: "about",
    },
    {
      label: "Skills",
      id: "skills",
    },
    {
      label: "Terminal",
      id: "developer-terminal",
    },
    {
      label: "Projects",
      id: "projects",
    },
    {
      label: "Experience",
      id: "experience",
    },
    {
      label: "Certificates",
      id: "certificates",
    },
    {
      label: "Contact",
      id: "contact",
    },
  ];

  const scrollToSection = (id) => {
    setMobile(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const toggleDark = () => {
    setDark((prev) => !prev);
  };

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50

        transition-all
        duration-500

        ${
          scrolled
            ? "backdrop-blur-xl bg-white/80 dark:bg-[#080912]/80 shadow-lg border-b border-purple-100/70 dark:border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Navbar Row */}
        <div className="h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            aria-label="Go to home"
            className="
              text-2xl
              sm:text-3xl
              lg:text-4xl

              font-black
              tracking-tight

              text-gray-900
              dark:text-white

              hover:scale-105
              transition-transform
            "
          >
            <span className="text-violet-700 dark:text-violet-500">
              V
            </span>
            ibhoo
          </button>

          {/* Desktop Navigation */}
          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-5
              xl:gap-7
            "
            aria-label="Main navigation"
          >
            {links.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative

                    py-2

                    font-semibold
                    text-sm
                    xl:text-[15px]

                    transition-colors

                    ${
                      isActive
                        ? "text-violet-700 dark:text-violet-400"
                        : "text-gray-700 dark:text-gray-200 hover:text-violet-700 dark:hover:text-violet-400"
                    }
                  `}
                >
                  {item.label}

                  {/* Active underline */}
                  <span
                    className={`
                      absolute
                      left-0
                      -bottom-1

                      h-[2px]

                      rounded-full

                      bg-violet-700
                      dark:bg-violet-400

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleDark}
              aria-label={
                dark ? "Switch to light mode" : "Switch to dark mode"
              }
              title={dark ? "Light mode" : "Dark mode"}
              className="
                relative

                w-11
                h-11

                rounded-full

                bg-white
                dark:bg-gray-800

                border
                border-purple-100
                dark:border-white/10

                shadow-md

                flex
                items-center
                justify-center

                text-gray-700
                dark:text-gray-200

                hover:rotate-180
                hover:scale-105

                transition-all
                duration-500
              "
            >
              {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="
                inline-flex
                items-center
                gap-2

                px-5
                xl:px-6
                py-3

                rounded-xl

                bg-gradient-to-r
                from-violet-700
                to-purple-600

                text-white

                font-semibold

                shadow-lg
                shadow-purple-900/20

                hover:scale-105
                hover:shadow-xl

                transition-all
              "
            >
              <FiDownload size={17} />

              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Theme */}
            <button
              onClick={toggleDark}
              aria-label={
                dark ? "Switch to light mode" : "Switch to dark mode"
              }
              title={dark ? "Light mode" : "Dark mode"}
              className="
                w-10
                h-10

                rounded-full

                bg-white
                dark:bg-gray-800

                border
                border-purple-100
                dark:border-white/10

                shadow-md

                flex
                items-center
                justify-center

                text-gray-700
                dark:text-gray-200

                transition-all
              "
            >
              {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Menu */}
            <button
              onClick={() => setMobile((prev) => !prev)}
              aria-label={mobile ? "Close menu" : "Open menu"}
              aria-expanded={mobile}
              className="
                w-10
                h-10

                rounded-xl

                flex
                items-center
                justify-center

                text-gray-800
                dark:text-white

                hover:bg-purple-50
                dark:hover:bg-white/10

                transition
              "
            >
              {mobile ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden

            overflow-hidden

            transition-all
            duration-300

            ${
              mobile
                ? "max-h-[700px] opacity-100 pb-5"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              bg-white/95
              dark:bg-[#0a0b16]/95

              backdrop-blur-xl

              rounded-2xl

              shadow-xl

              border
              border-purple-100
              dark:border-white/10

              p-4
              sm:p-5
            "
          >
            <div className="flex flex-col gap-1">
              {links.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      w-full

                      flex
                      items-center
                      justify-between

                      text-left

                      px-4
                      py-3

                      rounded-xl

                      font-semibold
                      text-sm
                      sm:text-base

                      transition

                      ${
                        isActive
                          ? "bg-purple-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400"
                          : "text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-white/5 hover:text-violet-700 dark:hover:text-violet-400"
                      }
                    `}
                  >
                    <span>{item.label}</span>

                    {isActive && (
                      <span
                        className="
                          w-2
                          h-2

                          rounded-full

                          bg-violet-600
                          dark:bg-violet-400
                        "
                      />
                    )}
                  </button>
                );
              })}

              {/* Mobile Resume */}
              <a
                href="/resume.pdf"
                download
                onClick={() => setMobile(false)}
                className="
                  mt-3

                  flex
                  items-center
                  justify-center
                  gap-2

                  bg-gradient-to-r
                  from-violet-700
                  to-purple-600

                  text-white

                  rounded-xl

                  py-3

                  font-semibold

                  shadow-lg
                "
              >
                <FiDownload size={17} />

                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;