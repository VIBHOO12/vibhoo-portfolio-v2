import {
  FiCode,
  FiArrowUpRight,
  FiActivity,
} from "react-icons/fi";

import AnimatedBackground from "../common/AnimatedBackground";

const CurrentlyBuilding = () => {
  const progress = 80;

  return (
    <section
      id="currently-building"
      className="
        relative
        py-16
        sm:py-20
        lg:py-24

        bg-gradient-to-b
        from-white
        to-purple-50

        dark:from-[#05060f]
        dark:to-[#05060f]

        overflow-hidden
      "
    >
      <AnimatedBackground variant="soft" />

      {/* Ambient glow */}

      <div
        className="
          absolute
          top-0
          right-0

          w-72
          h-72
          sm:w-96
          sm:h-96

          bg-purple-200/40
          dark:bg-violet-700/10

          rounded-full
          blur-3xl

          translate-x-1/3
          -translate-y-1/3
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0

          w-64
          h-64
          sm:w-80
          sm:h-80

          bg-violet-200/30
          dark:bg-blue-700/10

          rounded-full
          blur-3xl

          -translate-x-1/3
          translate-y-1/3
        "
      />

      <div
        className="
          relative
          max-w-5xl
          mx-auto

          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Heading */}

        <div className="text-center mb-10 sm:mb-12">
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
            <FiActivity size={14} />

            Currently Building
          </span>

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl

              font-black

              mt-4

              text-gray-900
              dark:text-white
            "
          >
            Always{" "}
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
              Building
            </span>
          </h2>

          <p
            className="
              mt-4

              text-gray-600
              dark:text-gray-400

              max-w-2xl
              mx-auto

              text-sm
              sm:text-base
              leading-7
            "
          >
            Exploring new ideas, improving my development skills,
            and building practical products.
          </p>
        </div>

        {/* Main Card */}

        <div
          className="
            group

            relative

            rounded-3xl

            p-[1.5px]

            bg-gradient-to-br
            from-purple-300
            via-violet-200
            to-transparent

            dark:from-violet-500/40
            dark:via-purple-500/10
            dark:to-transparent
          "
        >
          <div
            className="
              relative

              rounded-3xl

              bg-white
              dark:bg-[#0a0b1a]

              border
              border-purple-100
              dark:border-white/10

              p-6
              sm:p-8
              lg:p-10

              overflow-hidden
            "
          >
            {/* Top */}

            <div
              className="
                flex
                flex-col
                sm:flex-row

                sm:items-start
                sm:justify-between

                gap-5
              "
            >
              <div className="flex items-start gap-4">
                {/* Icon */}

                <div
                  className="
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14

                    rounded-2xl

                    bg-gradient-to-br
                    from-violet-700
                    to-purple-600

                    text-white

                    flex
                    items-center
                    justify-center

                    shadow-lg
                    shadow-purple-700/20

                    flex-shrink-0
                  "
                >
                  <FiCode size={24} />
                </div>

                <div>
                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-2
                    "
                  >
                    <h3
                      className="
                        text-xl
                        sm:text-2xl

                        font-bold

                        text-gray-900
                        dark:text-white
                      "
                    >
                      AI Code Reviewer Pro
                    </h3>

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5

                        text-[10px]
                        sm:text-xs

                        font-semibold

                        px-2.5
                        py-1

                        rounded-full

                        bg-green-50
                        dark:bg-green-500/10

                        text-green-700
                        dark:text-green-400

                        border
                        border-green-200
                        dark:border-green-500/20
                      "
                    >
                      <span
                        className="
                          w-1.5
                          h-1.5

                          rounded-full

                          bg-green-500

                          animate-pulse
                        "
                      />

                      In Progress
                    </span>
                  </div>

                  <p
                    className="
                      mt-2

                      text-sm
                      sm:text-base

                      text-gray-600
                      dark:text-gray-400
                    "
                  >
                    Building an AI-powered code review
                    experience for developers.
                  </p>
                </div>
              </div>

              {/* Progress */}

              <div
                className="
                  sm:text-right

                  min-w-[100px]
                "
              >
                <p
                  className="
                    text-2xl
                    sm:text-3xl

                    font-black

                    text-violet-700
                    dark:text-violet-400
                  "
                >
                  {progress}%
                </p>

                <p
                  className="
                    text-xs

                    text-gray-500
                    dark:text-gray-500
                  "
                >
                  Progress
                </p>
              </div>
            </div>

            {/* Progress Bar */}

            <div className="mt-7">
              <div
                className="
                  h-2.5

                  rounded-full

                  bg-purple-100
                  dark:bg-white/10

                  overflow-hidden
                "
              >
                <div
                  className="
                    h-full

                    rounded-full

                    bg-gradient-to-r
                    from-violet-700
                    to-purple-500

                    transition-all
                    duration-1000
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </div>

            {/* Technologies */}

            <div className="flex flex-wrap gap-2 mt-7">
              {[
                "React",
                "Gemini",
                "Monaco Editor",
                "JavaScript",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3
                    py-1.5

                    rounded-full

                    bg-purple-50
                    dark:bg-white/5

                    border
                    border-purple-100
                    dark:border-white/10

                    text-purple-700
                    dark:text-violet-300

                    text-xs
                    sm:text-sm

                    font-medium
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}

            <div
              className="
                mt-7

                pt-6

                border-t
                border-purple-100
                dark:border-white/10
              "
            >
              <p
                className="
                  text-sm
                  sm:text-base

                  leading-7

                  text-gray-600
                  dark:text-gray-400
                "
              >
                Developing a developer-focused platform that
                helps analyze code, identify potential issues,
                and provide AI-assisted suggestions in a modern
                coding environment.
              </p>
            </div>

            {/* Footer */}

            <div
              className="
                mt-7

                flex
                flex-col
                sm:flex-row

                sm:items-center
                sm:justify-between

                gap-4
              "
            >
              <span
                className="
                  text-xs
                  sm:text-sm

                  text-gray-500
                  dark:text-gray-500
                "
              >
                Last updated: Aug 2026
              </span>

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-2

                  text-sm

                  font-semibold

                  text-violet-700
                  dark:text-violet-400

                  hover:gap-3

                  transition-all
                "
              >
                Want to know more?
                <FiArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;