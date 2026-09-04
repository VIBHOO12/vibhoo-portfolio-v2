
const AnimatedBackground = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* =================================
          TOP LEFT PURPLE GLOW
      ================================= */}
      <div
        className="
          absolute
          -top-40
          -left-40
          w-[420px]
          h-[420px]
          sm:w-[550px]
          sm:h-[550px]
          lg:w-[700px]
          lg:h-[700px]
          rounded-full
          bg-purple-600/20
          dark:bg-purple-600/20
          blur-[110px]
          animate-zoomOrb
        "
      />

      {/* =================================
          TOP RIGHT VIOLET GLOW
      ================================= */}
      <div
        className="
          absolute
          -top-20
          -right-40
          w-[350px]
          h-[350px]
          sm:w-[500px]
          sm:h-[500px]
          lg:w-[650px]
          lg:h-[650px]
          rounded-full
          bg-violet-500/15
          dark:bg-violet-500/15
          blur-[110px]
          animate-floatOrb
        "
      />

      {/* =================================
          CENTER PURPLE LIGHT
      ================================= */}
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
          lg:w-[600px]
          lg:h-[600px]
          rounded-full
          bg-purple-500/8
          dark:bg-purple-500/10
          blur-[120px]
          animate-centerGlow
        "
      />

      {/* =================================
          BOTTOM RIGHT PURPLE GLOW
      ================================= */}
      <div
        className="
          absolute
          -bottom-48
          -right-40
          w-[350px]
          h-[350px]
          sm:w-[500px]
          sm:h-[500px]
          lg:w-[650px]
          lg:h-[650px]
          rounded-full
          bg-violet-600/15
          dark:bg-violet-600/15
          blur-[120px]
          animate-floatBottom
        "
      />

      {/* =================================
          SUBTLE GRID
      ================================= */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          dark:opacity-[0.055]
          bg-[linear-gradient(rgba(139,92,246,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.8)_1px,transparent_1px)]
          bg-[size:52px_52px]
        "
      />

      {/* =================================
          FLOATING LIGHT 1
      ================================= */}
      <span
        className="
          absolute
          top-[18%]
          left-[12%]
          w-2
          h-2
          rounded-full
          bg-violet-400/40
          blur-[1px]
          animate-particleOne
        "
      />

      {/* =================================
          FLOATING LIGHT 2
      ================================= */}
      <span
        className="
          absolute
          top-[32%]
          right-[18%]
          w-1.5
          h-1.5
          rounded-full
          bg-purple-400/50
          blur-[1px]
          animate-particleTwo
        "
      />

      {/* =================================
          FLOATING LIGHT 3
      ================================= */}
      <span
        className="
          absolute
          bottom-[22%]
          left-[28%]
          w-1.5
          h-1.5
          rounded-full
          bg-violet-300/40
          blur-[1px]
          animate-particleThree
        "
      />

      {/* =================================
          FLOATING LIGHT 4
      ================================= */}
      <span
        className="
          absolute
          bottom-[18%]
          right-[10%]
          w-2
          h-2
          rounded-full
          bg-purple-400/30
          blur-[1px]
          animate-pulse
        "
      />

      {/* =================================
          SMALL DEVELOPER SYMBOLS
      ================================= */}
      <span
        className="
          absolute
          top-[20%]
          right-[35%]
          text-4xl
          sm:text-5xl
          font-mono
          text-violet-400/[0.035]
          select-none
          animate-symbolFloat
        "
      >
        {"</>"}
      </span>

      <span
        className="
          absolute
          bottom-[20%]
          left-[12%]
          text-5xl
          sm:text-6xl
          font-mono
          text-purple-400/[0.035]
          select-none
          animate-symbolFloat
        "
      >
        {"{}"}
      </span>
    </div>
  );
};

export default AnimatedBackground;
