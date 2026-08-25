

// import { TypeAnimation } from "react-type-animation";
// import { useEffect, useState } from "react";
// import bg from "../../assets/images/intro-img.jpg";

// const INTRO_DURATION = 5200; // ms - keep in sync with Hero's showIntro timeout

// const Intro = () => {
//   const [fade, setFade] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     // trigger entrance animation on next tick
//     const mountTimer = setTimeout(() => setMounted(true), 50);

//     const fadeTimer = setTimeout(() => setFade(true), INTRO_DURATION);

//     const start = Date.now();
//     const progressTimer = setInterval(() => {
//       const elapsed = Date.now() - start;
//       const pct = Math.min(100, Math.round((elapsed / INTRO_DURATION) * 100));
//       setProgress(pct);
//       if (pct >= 100) clearInterval(progressTimer);
//     }, 50);

//     return () => {
//       clearTimeout(mountTimer);
//       clearTimeout(fadeTimer);
//       clearInterval(progressTimer);
//     };
//   }, []);

//   return (
//     <div
//       className={`fixed inset-0 z-[9999] overflow-hidden transition-all duration-1000 ${
//         fade ? "opacity-0 scale-110 pointer-events-none" : "opacity-100"
//       }`}
//     >
//       <img
//         src={bg}
//         alt=""
//         aria-hidden="true"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       <div className="absolute inset-0 bg-[#05060f]/80"></div>

//       <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] sm:w-[650px] sm:h-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/30 blur-[120px] sm:blur-[170px] animate-pulse"></div>
//       <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-blue-600/10 blur-[100px] sm:blur-[140px]"></div>

//       <div className="relative flex items-center justify-center h-full px-5">
//         <div
//           className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl px-6 py-10 sm:px-10 sm:py-12 shadow-2xl text-center max-w-lg sm:max-w-4xl w-full transition-all duration-700 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <p className="uppercase tracking-[4px] sm:tracking-[8px] text-violet-300 font-semibold mb-4 sm:mb-5 text-xs sm:text-base">
//             Welcome To
//           </p>

//           <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 leading-tight">
//             <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
//               Vibhoo Portfolio
//             </span>
//           </h1>

//           <TypeAnimation
//             sequence={[
//               "Frontend Developer", 1200,
//               "React.js Developer", 1200,
//               "Full Stack Java Developer", 1200,
//               "Spring Boot Developer", 1200,
//               "Building Real World Projects", 1200,
//             ]}
//             speed={45}
//             repeat={0}
//             cursor={true}
//             wrapper="h2"
//             className="text-base sm:text-xl md:text-3xl font-semibold text-violet-200"
//           />

//           <div className="mt-8 sm:mt-10 flex justify-center">
//             <div className="w-40 sm:w-56 h-1 rounded-full bg-white/10 overflow-hidden">
//               <div
//                 className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 transition-all duration-150 ease-linear"
//                 style={{ width: `${progress}%` }}
//               ></div>
//             </div>
//           </div>

//           <p className="mt-3 text-[11px] sm:text-xs text-violet-300 tracking-widest tabular-nums">
//             {progress}%
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Intro;

import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import bg from "../../assets/images/intro-img.jpg";

const INTRO_DURATION = 5200; // ms - keep in sync with Hero's showIntro timeout
const SESSION_KEY = "intro-shown";

const Intro = ({ onFinish }) => {
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  const finish = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
    setFade(true);
    setTimeout(() => onFinish?.(), 1000); // let the fade-out transition play
  };

  useEffect(() => {
    const mountTimer = setTimeout(() => setMounted(true), 50);
    const fadeTimer = setTimeout(finish, INTRO_DURATION);

    const start = Date.now();
    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / INTRO_DURATION) * 100));
      setProgress(pct);
      if (pct >= 100) clearInterval(progressTimer);
    }, 50);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(fadeTimer);
      clearInterval(progressTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden transition-all duration-1000 ${
        fade ? "opacity-0 scale-110 pointer-events-none" : "opacity-100"
      }`}
    >
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#05060f]/80"></div>

      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] sm:w-[650px] sm:h-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/30 blur-[120px] sm:blur-[170px] animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-blue-600/10 blur-[100px] sm:blur-[140px]"></div>

      {/* Skip button */}
      <button
        onClick={finish}
        className="absolute top-5 right-5 sm:top-8 sm:right-8 z-10 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-violet-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 transition"
      >
        Skip
        <span aria-hidden="true">→</span>
      </button>

      <div className="relative flex items-center justify-center h-full px-5">
        <div
          className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl px-6 py-10 sm:px-10 sm:py-12 shadow-2xl text-center max-w-lg sm:max-w-4xl w-full transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="uppercase tracking-[4px] sm:tracking-[8px] text-violet-300 font-semibold mb-4 sm:mb-5 text-xs sm:text-base">
            Welcome To
          </p>

          <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
              Vibhoo Portfolio
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer", 1200,
              "React.js Developer", 1200,
              "Full Stack Java Developer", 1200,
              "Spring Boot Developer", 1200,
              "Building Real World Projects", 1200,
            ]}
            speed={45}
            repeat={0}
            cursor={true}
            wrapper="h2"
            className="text-base sm:text-xl md:text-3xl font-semibold text-violet-200"
          />

          <div className="mt-8 sm:mt-10 flex justify-center">
            <div className="w-40 sm:w-56 h-1 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 transition-all duration-150 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <p className="mt-3 text-[11px] sm:text-xs text-violet-300 tracking-widest tabular-nums">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;