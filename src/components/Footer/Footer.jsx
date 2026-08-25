import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiHeart,
} from "react-icons/fi";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Terminal", id: "developer-terminal" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Certificates", id: "certificates" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative bg-[#070810] text-gray-300 overflow-hidden">
      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-72
          h-40
          sm:w-96
          sm:h-52

          bg-violet-600/10

          blur-3xl
          rounded-full

          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main Footer */}
        <div
          className="
            py-12
            sm:py-14
            lg:py-16

            grid
            md:grid-cols-3

            gap-10
            lg:gap-16
          "
        >
          {/* Brand */}
          <div>
            <button
              onClick={() => scrollToSection("home")}
              className="
                text-2xl
                sm:text-3xl

                font-black
                tracking-tight

                text-white

                hover:scale-105
                transition-transform
              "
            >
              <span className="text-violet-500">V</span>
              ibhoo.
            </button>

            <p
              className="
                mt-4

                text-sm
                sm:text-base

                leading-7

                text-gray-400

                max-w-sm
              "
            >
              React.js Frontend Developer focused on building clean,
              responsive and user-friendly web applications.
            </p>

            {/* Availability */}
            <div
              className="
                inline-flex
                items-center
                gap-2

                mt-5

                px-3
                py-2

                rounded-full

                bg-green-500/10

                border
                border-green-500/20

                text-green-400

                text-xs
                sm:text-sm

                font-semibold
              "
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              Open to Work
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[3px] text-white">
              Quick Links
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="
                    text-left

                    text-sm

                    text-gray-400

                    hover:text-violet-400

                    transition-colors
                  "
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[3px] text-white">
              Let's Connect
            </h3>

            <p className="mt-5 text-sm text-gray-400 leading-6">
              Have a project, opportunity or just want to say hello?
              Feel free to reach out.
            </p>

            <div className="flex items-center gap-3 mt-5">
              {/* GitHub */}
              <a
                href="https://github.com/VIBHOO12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-10
                  h-10

                  rounded-xl

                  bg-white/5

                  border
                  border-white/10

                  flex
                  items-center
                  justify-center

                  text-gray-300

                  hover:bg-violet-600
                  hover:text-white
                  hover:border-violet-500

                  hover:-translate-y-1

                  transition-all
                "
              >
                <FiGithub size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-10
                  h-10

                  rounded-xl

                  bg-white/5

                  border
                  border-white/10

                  flex
                  items-center
                  justify-center

                  text-gray-300

                  hover:bg-violet-600
                  hover:text-white
                  hover:border-violet-500

                  hover:-translate-y-1

                  transition-all
                "
              >
                <FiLinkedin size={18} />
              </a>

              {/* Email */}
              <a
                href="mailto:vibhoovishwakarma@gmail.com"
                aria-label="Email"
                className="
                  w-10
                  h-10

                  rounded-xl

                  bg-white/5

                  border
                  border-white/10

                  flex
                  items-center
                  justify-center

                  text-gray-300

                  hover:bg-violet-600
                  hover:text-white
                  hover:border-violet-500

                  hover:-translate-y-1

                  transition-all
                "
              >
                <FiMail size={18} />
              </a>
            </div>

            {/* Email text */}
            <a
              href="mailto:vibhoovishwakarma@gmail.com"
              className="
                inline-block
                mt-4

                text-sm

                text-gray-400

                hover:text-violet-400

                transition
              "
            >
              vibhoovishwakarma@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            border-t
            border-white/10

            py-5
            sm:py-6

            flex
            flex-col
            sm:flex-row

            items-center
            justify-between

            gap-4
          "
        >
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Vibhoo Vishwakarma. All rights
            reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
            Built with
            <FiHeart className="text-violet-500" size={13} />
            using React.js
          </p>

          {/* Back to Top */}
          <button
            onClick={() => scrollToSection("home")}
            aria-label="Back to top"
            title="Back to top"
            className="
              w-9
              h-9

              rounded-lg

              border
              border-white/10

              bg-white/5

              flex
              items-center
              justify-center

              text-gray-400

              hover:bg-violet-600
              hover:text-white
              hover:border-violet-500

              transition-all
            "
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;