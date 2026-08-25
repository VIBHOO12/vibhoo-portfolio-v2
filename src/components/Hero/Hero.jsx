
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
    value: "5+",
    label: "Live Projects",
  },
  {
    icon: <HiOutlineCodeBracket />,
    value: "25+",
    label: "UI Components",
  },
  {
    icon: <HiOutlineServerStack />,
    value: "18+",
    label: "REST APIs",
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