


import { useState, useRef, useEffect } from "react";

import {
  FiX,
  FiSend,
  FiCpu,
  FiUser,
} from "react-icons/fi";

/* =========================================================
   PORTFOLIO KNOWLEDGE BASE
========================================================= */

const knowledgeBase = [
  {
    keywords: [
      "skill",
      "skills",
      "tech",
      "stack",
      "technology",
      "technologies",
    ],
    answer:
      "Vibhoo's core frontend skills include React.js, JavaScript, HTML, CSS, Tailwind CSS, responsive UI development, reusable components, and REST API integration. She also has experience with Angular, Java, Spring Boot, MySQL, and MongoDB.",
  },

  {
    keywords: [
      "frontend",
      "react",
      "reactjs",
      "react.js",
    ],
    answer:
      "React.js is one of Vibhoo's primary frontend technologies. She has built responsive interfaces, reusable components, dashboards, API-driven screens, and several production-oriented projects using React.js.",
  },

  {
    keywords: [
      "experience",
      "work",
      "job",
      "intern",
      "internship",
      "company",
    ],
    answer:
      "Vibhoo has internship experience in frontend and web development. Her experience includes Frontend Developer work at Vithal Visions Pvt. Ltd. and frontend development experience through Infosys Springboard.",
  },

  {
    keywords: [
      "vithal",
      "vithal visions",
    ],
    answer:
      "Vibhoo worked as a Frontend Developer Intern at Vithal Visions Pvt. Ltd. from August 2025 to April 2026. Her work focused on React.js applications, reusable components, responsive interfaces, REST API integration, and frontend development.",
  },

  {
    keywords: [
      "infosys",
      "springboard",
    ],
    answer:
      "Vibhoo worked as a Frontend Development Intern at Infosys Springboard, where she worked with frontend development, Angular components, REST APIs, and responsive layouts.",
  },

  {
    keywords: [
      "project",
      "projects",
      "portfolio",
      "built",
      "made",
    ],
    answer:
      "Vibhoo's featured projects include CineVestor Platform, Medication Tracker, AI Resume Analyzer, Pong Game, and a Matrimonial Website. These projects demonstrate frontend development, responsive UI, API integration, and full-stack application experience.",
  },

  {
    keywords: [
      "cinevestor",
      "cinevestor platform",
    ],
    answer:
      "CineVestor is an entertainment investment platform. Vibhoo worked on the frontend using React and Tailwind CSS, built reusable interfaces, implemented responsive layouts, and integrated REST APIs.",
  },

  {
    keywords: [
      "medication",
      "medicose",
      "medicine",
      "healthcare",
      "prescription",
    ],
    answer:
      "Medication Tracker is a healthcare application for managing medications, prescriptions, dosage schedules, appointments, and patient information. Vibhoo worked on the React frontend, responsive dashboards, reusable components, and REST API integration.",
  },

  {
    keywords: [
      "resume analyzer",
      "ai resume",
    ],
    answer:
      "AI Resume Analyzer is an AI-focused platform designed to analyze resumes and provide useful feedback for interview preparation. Vibhoo worked on the React frontend, resume-related interfaces, dashboard UI, responsive design, and backend API integration.",
  },

  {
    keywords: [
      "pong",
      "game",
      "pong game",
    ],
    answer:
      "Pong Game is a responsive arcade-style game built with React, JavaScript, and Tailwind CSS. Vibhoo built the game interface, responsive controls, interactive gameplay, and UI animations.",
  },

  {
    keywords: [
      "matrimonial",
      "matrimony",
      "marriage website",
    ],
    answer:
      "The Matrimonial Website is a responsive web application focused on profile discovery and user interactions. Vibhoo worked with Angular on the frontend, and the application also uses Spring Boot and MySQL.",
  },

  {
    keywords: [
      "angular",
    ],
    answer:
      "Vibhoo has frontend experience with Angular, including reusable Angular components and responsive layouts.",
  },

  {
    keywords: [
      "javascript",
      "js",
    ],
    answer:
      "JavaScript is one of Vibhoo's core development technologies. She uses it for React applications, interactive interfaces, application logic, and frontend functionality.",
  },

  {
    keywords: [
      "tailwind",
      "tailwind css",
    ],
    answer:
      "Vibhoo uses Tailwind CSS to build responsive and consistent user interfaces across her projects.",
  },

  {
    keywords: [
      "api",
      "rest",
      "rest api",
      "apis",
    ],
    answer:
      "Vibhoo has hands-on experience integrating REST APIs into frontend applications and connecting frontend interfaces with backend services.",
  },

  {
    keywords: [
      "java",
      "spring",
      "spring boot",
      "backend",
    ],
    answer:
      "Vibhoo has experience working with Java and Spring Boot as part of full-stack projects. Her primary focus is frontend development, while her backend experience includes REST APIs and MySQL-based applications.",
  },

  {
    keywords: [
      "mysql",
      "database",
      "db",
    ],
    answer:
      "Vibhoo has worked with MySQL in full-stack projects involving Spring Boot backends and React or Angular frontends.",
  },

  {
    keywords: [
      "available",
      "open",
      "opportunity",
      "opportunities",
      "hire",
      "hiring",
    ],
    answer:
      "Vibhoo is open to frontend development opportunities, particularly React.js and frontend-focused roles.",
  },

  {
    keywords: [
      "contact",
      "email",
      "reach",
      "connect",
      "phone",
    ],
    answer:
      "You can contact Vibhoo through the Contact section of this portfolio. You can also reach her at vibhoovishwakarma@gmail.com.",
  },

  {
    keywords: [
      "resume",
      "cv",
      "download",
    ],
    answer:
      "You can download Vibhoo's resume using the Resume button available in the portfolio.",
  },

  {
    keywords: [
      "education",
      "degree",
      "college",
      "study",
      "btech",
      "b.tech",
    ],
    answer:
      "Vibhoo is a B.Tech Information Technology graduate/final-year candidate from Bansal Institute of Engineering & Technology, Lucknow. For detailed education information, please check her resume.",
  },

  {
    keywords: [
      "github",
      "code",
      "repository",
      "repo",
    ],
    answer:
      "You can explore Vibhoo's projects and source code through the GitHub links provided in the Projects section.",
  },

  {
    keywords: [
      "hello",
      "hi",
      "hey",
      "hii",
    ],
    answer:
      "Hi! 👋 I'm Vibhoo's portfolio assistant. Ask me about her skills, experience, projects, technologies, or contact information.",
  },
];

/* =========================================================
   FALLBACK
========================================================= */

const fallback =
  "I don't have a specific answer for that yet. Try asking about Vibhoo's skills, experience, projects, technologies, resume, or contact information.";

/* =========================================================
   SUGGESTIONS
========================================================= */

const suggestions = [
  "What are her skills?",
  "Tell me about her projects",
  "Is she open to work?",
];

/* =========================================================
   GET ANSWER
========================================================= */

const getAnswer = (text) => {
  const lower = text.toLowerCase().trim();

  const match = knowledgeBase.find((entry) =>
    entry.keywords.some((keyword) => lower.includes(keyword))
  );

  return match ? match.answer : fallback;
};

/* =========================================================
   AI ASSISTANT
========================================================= */

const AIAssistant = () => {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text:
        "Hi! 👋 I'm Vibhoo's portfolio assistant. Ask me about her skills, experience, projects, or technologies.",
    },
  ]);

  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);

  const endRef = useRef(null);

  /* =======================================================
     AUTO SCROLL
  ======================================================= */

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing, open]);

  /* =======================================================
     SEND MESSAGE
  ======================================================= */

  const sendMessage = (text) => {
    const trimmed = text.trim();

    if (!trimmed || typing) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: trimmed,
      },
    ]);

    setInput("");
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: getAnswer(trimmed),
        },
      ]);

      setTyping(false);
    }, 600);
  };

  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* =====================================================
          FLOATING BUTTON
      ====================================================== */}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={
          open
            ? "Close portfolio assistant"
            : "Open portfolio assistant"
        }
        className="
          fixed
          bottom-5
          right-5

          sm:bottom-8
          sm:right-8

          z-40

          w-14
          h-14

          sm:w-16
          sm:h-16

          rounded-full

          bg-gradient-to-r
          from-violet-700
          to-purple-600

          text-white

          shadow-2xl

          flex
          items-center
          justify-center

          hover:scale-110

          transition-transform
          duration-300
        "
      >
        {open ? (
          <FiX size={24} />
        ) : (
          <FiCpu size={24} />
        )}

        {!open && (
          <span
            className="
              absolute
              top-0
              right-0

              w-3.5
              h-3.5

              rounded-full

              bg-green-400

              border-2
              border-white

              animate-pulse
            "
          />
        )}
      </button>

      {/* =====================================================
          CHAT WINDOW
      ====================================================== */}

      <div
        className={`
          fixed

          bottom-24
          right-4

          sm:bottom-28
          sm:right-8

          z-40

          w-[calc(100%-2rem)]
          sm:w-96

          max-w-sm

          bg-white
          dark:bg-gray-800

          rounded-3xl

          shadow-2xl

          border
          border-purple-100
          dark:border-gray-700

          flex
          flex-col

          transition-all
          duration-300

          origin-bottom-right

          ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          }
        `}
        style={{
          height: "min(520px, 70vh)",
        }}
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            flex
            items-center
            gap-3

            p-4
            sm:p-5

            bg-gradient-to-r
            from-violet-700
            to-purple-600

            rounded-t-3xl
          "
        >
          <div
            className="
              w-10
              h-10

              rounded-full

              bg-white/20

              flex
              items-center
              justify-center

              text-white
            "
          >
            <FiCpu size={20} />
          </div>

          <div>
            <p className="text-white font-semibold text-sm sm:text-base">
              Ask about Vibhoo
            </p>

            <p
              className="
                text-purple-100
                text-xs

                flex
                items-center
                gap-1.5
              "
            >
              <span
                className="
                  w-1.5
                  h-1.5

                  rounded-full

                  bg-green-400
                "
              />

              Portfolio Assistant · Online
            </p>
          </div>
        </div>

        {/* ===================================================
            MESSAGES
        ==================================================== */}

        <div
          className="
            flex-1

            overflow-y-auto

            p-4

            space-y-3
          "
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`
                flex
                gap-2

                ${
                  message.role === "user"
                    ? "flex-row-reverse"
                    : ""
                }
              `}
            >
              {/* Avatar */}

              <div
                className={`
                  w-7
                  h-7

                  rounded-full

                  flex
                  items-center
                  justify-center

                  flex-shrink-0

                  ${
                    message.role === "user"
                      ? "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300"
                      : "bg-violet-700 text-white"
                  }
                `}
              >
                {message.role === "user" ? (
                  <FiUser size={13} />
                ) : (
                  <FiCpu size={13} />
                )}
              </div>

              {/* Message */}

              <div
                className={`
                  max-w-[78%]

                  px-4
                  py-2.5

                  rounded-2xl

                  text-sm
                  leading-6

                  ${
                    message.role === "user"
                      ? "bg-purple-700 text-white rounded-br-sm"
                      : "bg-purple-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-bl-sm"
                  }
                `}
              >
                {message.text}
              </div>
            </div>
          ))}

          {/* =================================================
              TYPING INDICATOR
          ================================================= */}

          {typing && (
            <div className="flex gap-2">
              <div
                className="
                  w-7
                  h-7

                  rounded-full

                  bg-violet-700

                  text-white

                  flex
                  items-center
                  justify-center

                  flex-shrink-0
                "
              >
                <FiCpu size={13} />
              </div>

              <div
                className="
                  bg-purple-50
                  dark:bg-gray-700

                  px-4
                  py-3

                  rounded-2xl
                  rounded-bl-sm

                  flex
                  gap-1
                "
              >
                <span
                  className="
                    w-1.5
                    h-1.5

                    rounded-full

                    bg-purple-400

                    animate-bounce
                  "
                />

                <span
                  className="
                    w-1.5
                    h-1.5

                    rounded-full

                    bg-purple-400

                    animate-bounce
                  "
                  style={{
                    animationDelay: "150ms",
                  }}
                />

                <span
                  className="
                    w-1.5
                    h-1.5

                    rounded-full

                    bg-purple-400

                    animate-bounce
                  "
                  style={{
                    animationDelay: "300ms",
                  }}
                />
              </div>
            </div>
          )}

          <div ref={endRef} />
        </div>

        {/* ===================================================
            SUGGESTIONS
        ==================================================== */}

        {messages.length === 1 && (
          <div
            className="
              px-4
              pb-2

              flex
              flex-wrap
              gap-2
            "
          >
            {suggestions.map((suggestion) => (
              <button
                type="button"
                key={suggestion}
                onClick={() => sendMessage(suggestion)}
                className="
                  text-xs

                  bg-purple-50
                  dark:bg-gray-700

                  text-purple-700
                  dark:text-purple-300

                  px-3
                  py-1.5

                  rounded-full

                  hover:bg-purple-100
                  dark:hover:bg-gray-600

                  transition
                "
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        {/* ===================================================
            INPUT
        ==================================================== */}

        <form
          onSubmit={handleSubmit}
          className="
            p-3
            sm:p-4

            border-t
            border-purple-100
            dark:border-gray-700

            flex
            items-center
            gap-2
          "
        >
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about Vibhoo..."
            className="
              flex-1

              bg-purple-50
              dark:bg-gray-700

              dark:text-white

              rounded-full

              px-4
              py-2.5

              text-sm

              outline-none

              focus:ring-2
              focus:ring-purple-400
            "
          />

          <button
            type="submit"
            aria-label="Send message"
            disabled={!input.trim() || typing}
            className="
              w-10
              h-10

              rounded-full

              bg-purple-700

              text-white

              flex
              items-center
              justify-center

              hover:bg-purple-800

              disabled:opacity-50
              disabled:cursor-not-allowed

              transition

              flex-shrink-0
            "
          >
            <FiSend size={16} />
          </button>
        </form>
      </div>
    </>
  );
};

export default AIAssistant;
