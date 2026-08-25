import { useEffect, useRef, useState } from "react";
import { FiTerminal, FiGithub, FiMail, FiExternalLink } from "react-icons/fi";

const commands = [
  "help",
  "about",
  "skills",
  "experience",
  "projects",
  "status",
  "contact",
  "clear",
];

const initialOutput = [
  {
    type: "system",
    text: "Welcome to Vibhoo's Developer Terminal.",
  },
  {
    type: "system",
    text: 'Type "help" to see available commands.',
  },
];

const DeveloperTerminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(initialOutput);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);

  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const addOutput = (items) => {
    setHistory((prev) => [...prev, ...items]);
  };

  const runCommand = (command) => {
    const cmd = command.trim().toLowerCase();

    if (!cmd) return;

    // Show entered command
    addOutput([
      {
        type: "command",
        text: cmd,
      },
    ]);

    // Save command history
    if (cmd !== "clear") {
      setCommandHistory((prev) => [...prev, cmd]);
    }

    switch (cmd) {
      case "help":
        addOutput([
          {
            type: "output",
            text: "Available commands:",
          },
          {
            type: "output",
            text: "about        → About Vibhoo",
          },
          {
            type: "output",
            text: "skills       → Technical skills",
          },
          {
            type: "output",
            text: "experience   → Work experience",
          },
          {
            type: "output",
            text: "projects     → Featured projects",
          },
          {
            type: "output",
            text: "status       → Current availability",
          },
          {
            type: "output",
            text: "contact      → Contact information",
          },
          {
            type: "output",
            text: "clear        → Clear terminal",
          },
        ]);
        break;

      case "about":
        addOutput([
          {
            type: "output",
            text: "Vibhoo Vishwakarma",
          },
          {
            type: "output",
            text: "React.js Frontend Developer",
          },
          {
            type: "output",
            text: "Building clean, responsive and user-focused web applications.",
          },
        ]);
        break;

      case "skills":
        addOutput([
          {
            type: "output",
            text: "Frontend",
          },
          {
            type: "output",
            text: "→ React.js",
          },
          {
            type: "output",
            text: "→ JavaScript",
          },
          {
            type: "output",
            text: "→ HTML5",
          },
          {
            type: "output",
            text: "→ CSS3",
          },
          {
            type: "output",
            text: "→ Tailwind CSS",
          },
          {
            type: "output",
            text: "",
          },
          {
            type: "output",
            text: "Backend",
          },
          {
            type: "output",
            text: "→ Java",
          },
          {
            type: "output",
            text: "→ Spring Boot",
          },
          {
            type: "output",
            text: "→ REST APIs",
          },
          {
            type: "output",
            text: "",
          },
          {
            type: "output",
            text: "Database",
          },
          {
            type: "output",
            text: "→ MySQL",
          },
          {
            type: "output",
            text: "→ MongoDB",
          },
        ]);
        break;

      case "experience":
        addOutput([
          {
            type: "output",
            text: "Frontend Developer Intern",
          },
          {
            type: "output",
            text: "Vithal Visions Pvt. Ltd.",
          },
          {
            type: "output",
            text: "Aug 2025 – Apr 2026",
          },
          {
            type: "output",
            text: "",
          },
          {
            type: "output",
            text: "Worked on React-based applications,",
          },
          {
            type: "output",
            text: "responsive interfaces and REST API integration.",
          },
          {
            type: "output",
            text: "",
          },
          {
            type: "output",
            text: "Previous experience:",
          },
          {
            type: "output",
            text: "Infosys Springboard — Angular",
          },
        ]);
        break;

      case "projects":
        addOutput([
          {
            type: "output",
            text: "Featured Projects",
          },
          {
            type: "output",
            text: "01  CineVestor Platform",
          },
          {
            type: "output",
            text: "02  Medication Tracker",
          },
          {
            type: "output",
            text: "03  AI Resume Analyzer",
          },
          {
            type: "output",
            text: "04  Pong Game",
          },
          {
            type: "output",
            text: "05  Matrimonial Website",
          },
          {
            type: "output",
            text: "",
          },
          {
            type: "output",
            text: 'Scroll to "Projects" to explore them.',
          },
        ]);
        break;

      case "status":
        addOutput([
          {
            type: "status",
            text: "● OPEN TO WORK",
          },
          {
            type: "output",
            text: "Looking for Frontend / React.js opportunities.",
          },
        ]);
        break;

      case "contact":
        addOutput([
          {
            type: "output",
            text: "Email    → vibhoovishwakarma@gmail.com",
          },
          {
            type: "output",
            text: "Location → Uttar Pradesh, India",
          },
          {
            type: "output",
            text: "",
          },
          {
            type: "output",
            text: "You can also use the Contact section below.",
          },
        ]);
        break;

      case "clear":
        setHistory([]);
        break;

      default:
        addOutput([
          {
            type: "error",
            text: `Command not found: ${cmd}`,
          },
          {
            type: "output",
            text: 'Type "help" to see available commands.',
          },
        ]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const command = input.trim();

    if (!command) return;

    runCommand(command);

    setInput("");
    setHistoryIndex(-1);
  };

  const handleKeyDown = (event) => {
    // Arrow Up
    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (commandHistory.length === 0) return;

      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    }

    // Arrow Down
    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (historyIndex === -1) return;

      const newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    }

    // Tab autocomplete
    if (event.key === "Tab") {
      event.preventDefault();

      const match = commands.find((command) =>
        command.startsWith(input.toLowerCase()),
      );

      if (match) {
        setInput(match);
      }
    }
  };

  const executeQuickCommand = (command) => {
    setInput("");
    setHistoryIndex(-1);
    runCommand(command);
    inputRef.current?.focus();
  };

  return (
    <section
      id="developer-terminal"
      className="
        relative

        py-16
        sm:py-20
        lg:py-28

        bg-gradient-to-b
        from-white
        to-purple-50

        dark:from-[#05060f]
        dark:to-[#05060f]

        overflow-hidden
      "
    >
      {/* Background glow */}

      <div
        className="
          absolute
          top-0
          left-0

          w-72
          h-72
          sm:w-96
          sm:h-96

          bg-purple-200/40
          dark:bg-violet-700/10

          rounded-full
          blur-3xl

          -translate-x-1/3
          -translate-y-1/3
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0

          w-72
          h-72
          sm:w-96
          sm:h-96

          bg-violet-200/30
          dark:bg-blue-700/10

          rounded-full
          blur-3xl

          translate-x-1/3
          translate-y-1/3
        "
      />

      <div
        className="
          relative

          max-w-6xl
          mx-auto

          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Heading */}

        <div className="text-center mb-10 sm:mb-14">
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
            <FiTerminal size={14} />
            Developer Terminal
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
            "
          >
            Explore My{" "}
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
              Developer Profile
            </span>
          </h2>

          <p
            className="
              mt-5

              max-w-2xl
              mx-auto

              text-sm
              sm:text-base
              lg:text-lg

              leading-7

              text-gray-600
              dark:text-gray-400
            "
          >
            Use the terminal below to explore my skills, experience, projects
            and availability.
          </p>
        </div>

        {/* Terminal */}

        <div
          className="
            rounded-2xl
            sm:rounded-3xl

            overflow-hidden

            border
            border-violet-500/20
            dark:border-violet-500/20

            bg-[#08090f]

            shadow-2xl
            shadow-purple-900/20
          "
        >
          {/* Terminal Header */}

          <div
            className="
              h-12
              sm:h-14

              px-4
              sm:px-5

              flex
              items-center
              justify-between

              bg-[#11121a]

              border-b
              border-white/10
            "
          >
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            <div
              className="
                text-[10px]
                sm:text-xs

                text-gray-500

                font-mono
              "
            >
              vibhoo@portfolio:~
            </div>

            <div className="w-10" />
          </div>

          {/* Terminal Body */}

          <div
            ref={terminalRef}
            onClick={() => inputRef.current?.focus()}
            className="
              h-[380px]
              sm:h-[440px]
              lg:h-[480px]

              overflow-y-auto

              p-4
              sm:p-6

              font-mono

              text-xs
              sm:text-sm

              scrollbar-thin
              scrollbar-thumb-violet-600/40

              cursor-text
            "
          >
            {/* Output */}

            <div className="space-y-1.5">
              {history.map((item, index) => {
                if (item.type === "command") {
                  return (
                    <div key={index} className="flex gap-2 text-white">
                      <span className="text-green-400">
                        vibhoo@portfolio:~$
                      </span>

                      <span>{item.text}</span>
                    </div>
                  );
                }

                if (item.type === "error") {
                  return (
                    <div
                      key={index}
                      className="
                        text-red-400
                        break-words
                      "
                    >
                      {item.text}
                    </div>
                  );
                }

                if (item.type === "status") {
                  return (
                    <div
                      key={index}
                      className="
                        text-green-400
                        font-semibold
                      "
                    >
                      {item.text}
                    </div>
                  );
                }

                if (item.type === "system") {
                  return (
                    <div
                      key={index}
                      className="
                        text-violet-300
                        break-words
                      "
                    >
                      {item.text}
                    </div>
                  );
                }

                return (
                  <div
                    key={index}
                    className="
                      text-gray-300

                      break-words

                      whitespace-pre-wrap
                    "
                  >
                    {item.text || "\u00A0"}
                  </div>
                );
              })}
            </div>

            {/* Input */}

            <form
              onSubmit={handleSubmit}
              className="
                flex
                items-start

                gap-2

                mt-3
              "
            >
              <span
                className="
                  text-green-400

                  flex-shrink-0
                "
              >
                vibhoo@portfolio:~$
              </span>

              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck="false"
                aria-label="Developer terminal command"
                className="
                  flex-1

                  min-w-0

                  bg-transparent

                  text-white

                  outline-none

                  font-mono
                "
              />

              <span
                className="
                  text-violet-400

                  animate-pulse
                "
              >
                ▋
              </span>
            </form>
          </div>

          {/* Quick Commands */}

          <div
            className="
              px-4
              sm:px-6

              py-4

              bg-[#11121a]

              border-t
              border-white/10
            "
          >
            <div
              className="
                flex
                flex-wrap

                items-center

                gap-2
              "
            >
              <span
                className="
                  text-[10px]
                  sm:text-xs

                  text-gray-500

                  mr-1
                "
              >
                Try:
              </span>

              {commands.slice(0, 7).map((command) => (
                <button
                  key={command}
                  type="button"
                  onClick={() => executeQuickCommand(command)}
                  className="
                    px-2.5
                    sm:px-3

                    py-1.5

                    rounded-lg

                    bg-white/5

                    border
                    border-white/10

                    text-gray-300

                    hover:bg-violet-600/20
                    hover:border-violet-500/40
                    hover:text-violet-300

                    transition

                    font-mono

                    text-[10px]
                    sm:text-xs
                  "
                >
                  {command}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom links */}

        <div
          className="
            flex
            flex-wrap

            justify-center

            gap-4

            mt-6
          "
        >
          <a
            href="https://github.com/VIBHOO12"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2

              text-xs
              sm:text-sm

              font-semibold

              text-gray-600
              dark:text-gray-400

              hover:text-violet-600
              dark:hover:text-violet-400

              transition
            "
          >
            <FiGithub size={15} />
            GitHub
          </a>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-2

              text-xs
              sm:text-sm

              font-semibold

              text-gray-600
              dark:text-gray-400

              hover:text-violet-600
              dark:hover:text-violet-400

              transition
            "
          >
            <FiMail size={15} />
            Contact Me
          </a>

          <a
            href="#projects"
            className="
              inline-flex
              items-center
              gap-2

              text-xs
              sm:text-sm

              font-semibold

              text-gray-600
              dark:text-gray-400

              hover:text-violet-600
              dark:hover:text-violet-400

              transition
            "
          >
            <FiExternalLink size={15} />
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTerminal;
