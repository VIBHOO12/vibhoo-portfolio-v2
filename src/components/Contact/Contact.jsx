
import { useState } from "react";
import emailjs from "@emailjs/browser";

import AnimatedBackground from "../common/AnimatedBackground";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiGithub,
  FiLinkedin,
  FiCopy,
} from "react-icons/fi";

const EMAIL = "vibhoovishwakarma@gmail.com";
const PHONE = "+91 9305646218";

const GITHUB_URL = "https://github.com/VIBHOO12";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/ervibhoovishwakarma/";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);

  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const isSending = status === "sending";
  const isSent = status === "success";
  const hasError = status === "error";

  /* ============================================================
     FORM CHANGE
  ============================================================ */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error message when user starts editing again
    if (status === "error") {
      setStatus("idle");
    }
  };

  /* ============================================================
     SEND EMAIL USING EMAILJS
  ============================================================ */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check EmailJS configuration
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");

      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        event.currentTarget,
        {
          publicKey,
        }
      );

      setStatus("success");
      setForm(INITIAL_FORM);

      // Remove success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");
    }
  };

  /* ============================================================
     COPY EMAIL
  ============================================================ */

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  /* ============================================================
     CONTACT INFORMATION
  ============================================================ */

  const contactInfo = [
    {
      icon: <FiMail size={20} />,
      label: "Email",
      value: EMAIL,
      action: copyEmail,
      actionIcon: copied ? (
        <FiCheck size={16} />
      ) : (
        <FiCopy size={16} />
      ),
    },

    {
      icon: <FiPhone size={20} />,
      label: "Phone",
      value: PHONE,
      href: `tel:${PHONE.replace(/\s/g, "")}`,
    },

    {
      icon: <FiMapPin size={20} />,
      label: "Location",
      value: "Uttar Pradesh, India",
    },
  ];

  return (
    <section
      id="contact"
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
      {/* ========================================================
          ANIMATED BACKGROUND
      ======================================================== */}

      <AnimatedBackground variant="soft" />

      {/* ========================================================
          AMBIENT GLOWS
      ======================================================== */}

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
          pointer-events-none
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
          pointer-events-none
        "
      />

      {/* ========================================================
          CONTAINER
      ======================================================== */}

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-10
        "
      >
        {/* ======================================================
            HEADING
        ====================================================== */}

        <div className="text-center mb-10 sm:mb-16">
          <p
            className="
              uppercase
              tracking-[4px]
              sm:tracking-[6px]
              text-purple-600
              dark:text-violet-400
              font-semibold
              text-xs
              sm:text-sm
            "
          >
            Contact
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-6xl
              font-black
              mt-4
              text-gray-900
              dark:text-white
              leading-tight
            "
          >
            Let's{" "}
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
              Work Together
            </span>
          </h2>

          <p
            className="
              mt-5
              sm:mt-6
              text-gray-600
              dark:text-gray-400
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
              lg:text-lg
              leading-7
            "
          >
            Have a project, collaboration, or job opportunity?
            I'd love to hear from you.
          </p>

          {/* Availability */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              mt-6
              bg-green-50
              dark:bg-green-500/10
              text-green-700
              dark:text-green-400
              px-4
              py-2
              rounded-full
              text-xs
              sm:text-sm
              font-semibold
              border
              border-green-100
              dark:border-green-500/20
            "
          >
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-green-500
                animate-pulse
              "
            />

            Open to new opportunities
          </div>
        </div>

        {/* ======================================================
            MAIN CONTENT
        ====================================================== */}

        <div
          className="
            grid
            lg:grid-cols-5
            gap-6
            sm:gap-8
            lg:gap-12
          "
        >
          {/* ====================================================
              CONTACT INFORMATION
          ==================================================== */}

          <div
            className="
              lg:col-span-2
              bg-white
              dark:bg-white/5
              rounded-3xl
              p-6
              sm:p-8
              lg:p-10
              shadow-lg
              dark:shadow-none
              border
              border-purple-100
              dark:border-white/10
              flex
              flex-col
            "
          >
            <h3
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-gray-900
                dark:text-white
              "
            >
              Contact Information
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-gray-500
                dark:text-gray-400
              "
            >
              Feel free to reach out for opportunities,
              collaborations, or project discussions.
            </p>

            {/* Contact Items */}

            <div className="mt-8 space-y-5">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="
                    flex
                    items-center
                    gap-4
                    group
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      w-11
                      h-11
                      sm:w-12
                      sm:h-12
                      rounded-xl
                      bg-purple-50
                      dark:bg-violet-500/10
                      flex
                      items-center
                      justify-center
                      text-purple-700
                      dark:text-violet-400
                      flex-shrink-0
                      group-hover:scale-105
                      transition
                    "
                  >
                    {item.icon}
                  </div>

                  {/* Content */}

                  <div className="flex-1 min-w-0">
                    <h4
                      className="
                        text-xs
                        font-semibold
                        text-gray-400
                        dark:text-gray-500
                        uppercase
                        tracking-wide
                      "
                    >
                      {item.label}
                    </h4>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="
                          text-sm
                          sm:text-base
                          text-gray-700
                          dark:text-gray-200
                          hover:text-purple-700
                          dark:hover:text-violet-400
                          transition
                          truncate
                          block
                        "
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="
                          text-sm
                          sm:text-base
                          text-gray-700
                          dark:text-gray-200
                          truncate
                        "
                      >
                        {item.value}
                      </p>
                    )}
                  </div>

                  {/* Copy Email */}

                  {item.action && (
                    <button
                      type="button"
                      onClick={item.action}
                      aria-label="Copy email address"
                      title={copied ? "Copied" : "Copy email"}
                      className="
                        w-9
                        h-9
                        rounded-lg
                        bg-purple-50
                        dark:bg-white/5
                        text-purple-700
                        dark:text-violet-300
                        flex
                        items-center
                        justify-center
                        hover:bg-purple-100
                        dark:hover:bg-white/10
                        transition
                        flex-shrink-0
                      "
                    >
                      {item.actionIcon}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* ==================================================
                SOCIAL LINKS
            ================================================== */}

            <div className="mt-auto pt-10">
              <h4
                className="
                  text-xs
                  sm:text-sm
                  font-semibold
                  text-gray-400
                  dark:text-gray-500
                  uppercase
                  tracking-wide
                  mb-4
                "
              >
                Find me on
              </h4>

              <div className="flex items-center gap-3">
                {/* GitHub */}

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-purple-50
                    dark:bg-white/5
                    flex
                    items-center
                    justify-center
                    text-gray-700
                    dark:text-gray-200
                    hover:bg-purple-700
                    hover:text-white
                    transition
                  "
                >
                  <FiGithub size={18} />
                </a>

                {/* LinkedIn */}

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-purple-50
                    dark:bg-white/5
                    flex
                    items-center
                    justify-center
                    text-gray-700
                    dark:text-gray-200
                    hover:bg-purple-700
                    hover:text-white
                    transition
                  "
                >
                  <FiLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* ====================================================
              CONTACT FORM
          ==================================================== */}

          <form
            onSubmit={handleSubmit}
            className="
              lg:col-span-3
              bg-white
              dark:bg-white/5
              rounded-3xl
              p-6
              sm:p-8
              lg:p-10
              shadow-lg
              dark:shadow-none
              border
              border-purple-100
              dark:border-white/10
              space-y-5
              sm:space-y-6
            "
          >
            {/* Name + Email */}

            <div
              className="
                grid
                sm:grid-cols-2
                gap-5
                sm:gap-6
              "
            >
              {/* Name */}

              <div>
                <label
                  htmlFor="contact-name"
                  className="
                    block
                    text-xs
                    sm:text-sm
                    font-semibold
                    text-gray-500
                    dark:text-gray-400
                    mb-2
                  "
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  minLength={2}
                  maxLength={80}
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Your name"
                  className="
                    w-full
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-white
                    dark:bg-gray-700/70
                    text-gray-900
                    dark:text-white
                    placeholder:text-gray-400
                    dark:placeholder:text-gray-500
                    rounded-xl
                    p-3.5
                    sm:p-4
                    outline-none
                    focus:border-purple-600
                    dark:focus:border-violet-500
                    focus:ring-2
                    focus:ring-purple-500/10
                    transition
                    text-sm
                    sm:text-base
                  "
                />
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="contact-email"
                  className="
                    block
                    text-xs
                    sm:text-sm
                    font-semibold
                    text-gray-500
                    dark:text-gray-400
                    mb-2
                  "
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  maxLength={120}
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="
                    w-full
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-white
                    dark:bg-gray-700/70
                    text-gray-900
                    dark:text-white
                    placeholder:text-gray-400
                    dark:placeholder:text-gray-500
                    rounded-xl
                    p-3.5
                    sm:p-4
                    outline-none
                    focus:border-purple-600
                    dark:focus:border-violet-500
                    focus:ring-2
                    focus:ring-purple-500/10
                    transition
                    text-sm
                    sm:text-base
                  "
                />
              </div>
            </div>

            {/* Subject */}

            <div>
              <label
                htmlFor="contact-subject"
                className="
                  block
                  text-xs
                  sm:text-sm
                  font-semibold
                  text-gray-500
                  dark:text-gray-400
                  mb-2
                "
              >
                Subject
              </label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                maxLength={150}
                value={form.subject}
                onChange={handleChange}
                placeholder="Job opportunity / Project inquiry"
                className="
                  w-full
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-white
                  dark:bg-gray-700/70
                  text-gray-900
                  dark:text-white
                  placeholder:text-gray-400
                  dark:placeholder:text-gray-500
                  rounded-xl
                  p-3.5
                  sm:p-4
                  outline-none
                  focus:border-purple-600
                  dark:focus:border-violet-500
                  focus:ring-2
                  focus:ring-purple-500/10
                  transition
                  text-sm
                  sm:text-base
                "
              />
            </div>

            {/* Message */}

            <div>
              <label
                htmlFor="contact-message"
                className="
                  block
                  text-xs
                  sm:text-sm
                  font-semibold
                  text-gray-500
                  dark:text-gray-400
                  mb-2
                "
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                minLength={10}
                maxLength={2000}
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="
                  w-full
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-white
                  dark:bg-gray-700/70
                  text-gray-900
                  dark:text-white
                  placeholder:text-gray-400
                  dark:placeholder:text-gray-500
                  rounded-xl
                  p-3.5
                  sm:p-4
                  outline-none
                  focus:border-purple-600
                  dark:focus:border-violet-500
                  focus:ring-2
                  focus:ring-purple-500/10
                  transition
                  resize-none
                  text-sm
                  sm:text-base
                "
              />
            </div>

            {/* ==================================================
                STATUS MESSAGE
            ================================================== */}

            {isSent && (
              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-green-50
                  dark:bg-green-500/10
                  border
                  border-green-100
                  dark:border-green-500/20
                  text-green-700
                  dark:text-green-400
                  px-4
                  py-3
                  text-sm
                "
              >
                <FiCheck size={18} />

                <span>
                  Thanks! Your message has been sent successfully.
                </span>
              </div>
            )}

            {hasError && (
              <div
                className="
                  rounded-xl
                  bg-red-50
                  dark:bg-red-500/10
                  border
                  border-red-100
                  dark:border-red-500/20
                  text-red-600
                  dark:text-red-400
                  px-4
                  py-3
                  text-sm
                "
              >
                Something went wrong while sending your message.
                Please try again or email me directly.
              </div>
            )}

            {/* ==================================================
                SUBMIT BUTTON
            ================================================== */}

            <button
              type="submit"
              disabled={isSending}
              className="
                w-full
                flex
                items-center
                justify-center
                gap-2
                bg-gradient-to-r
                from-violet-700
                to-purple-600
                text-white
                py-3.5
                sm:py-4
                rounded-xl
                font-semibold
                shadow-lg
                shadow-purple-900/10
                hover:scale-[1.02]
                active:scale-[0.99]
                disabled:opacity-70
                disabled:cursor-not-allowed
                disabled:hover:scale-100
                transition
              "
            >
              {isSending ? (
                <>
                  <span
                    className="
                      w-4
                      h-4
                      border-2
                      border-white/30
                      border-t-white
                      rounded-full
                      animate-spin
                    "
                  />

                  Sending...
                </>
              ) : isSent ? (
                <>
                  <FiCheck size={18} />
                  Message Sent
                </>
              ) : (
                <>
                  <FiSend size={18} />
                  Send Message
                </>
              )}
            </button>

            <p
              className="
                text-xs
                text-center
                text-gray-400
                dark:text-gray-500
              "
            >
              Your message will be sent securely to my inbox.
            </p>
          </form>
        </div>

        {/* ======================================================
            FOOTER NOTE
        ====================================================== */}

        <div className="mt-10 sm:mt-14 text-center">
          <p
            className="
              text-xs
              sm:text-sm
              text-gray-500
              dark:text-gray-500
            "
          >
            © {new Date().getFullYear()} Vibhoo Vishwakarma.{" "}
            <span className="text-violet-500">
              Code. Create. Improve. Repeat.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// import { useState } from "react";

// import AnimatedBackground from "../common/AnimatedBackground";

// import {
//   FiMail,
//   FiPhone,
//   FiMapPin,
//   FiSend,
//   FiCheck,
//   FiGithub,
//   FiLinkedin,
//   FiCopy,
//   FiExternalLink,
// } from "react-icons/fi";

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [sent, setSent] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const email = "vibhoovishwakarma@gmail.com";
//   const phone = "+91 9305646218";

//   const githubUrl = "https://github.com/VIBHOO12";

//   // Replace this with your actual LinkedIn profile URL
//   const linkedinUrl = "https://www.linkedin.com/in/ervibhoovishwakarma/";

//   const handleChange = (event) => {
//     setForm((prev) => ({
//       ...prev,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const mailBody = encodeURIComponent(
//       `Name: ${form.name}
// Email: ${form.email}

// ${form.message}`
//     );

//     const subject = encodeURIComponent(
//       form.subject || "Portfolio Inquiry"
//     );

//     window.location.href = `mailto:${email}?subject=${subject}&body=${mailBody}`;

//     setSent(true);

//     setTimeout(() => {
//       setSent(false);
//     }, 4000);
//   };

//   const copyEmail = async () => {
//     try {
//       await navigator.clipboard.writeText(email);

//       setCopied(true);

//       setTimeout(() => {
//         setCopied(false);
//       }, 2000);
//     } catch (error) {
//       console.error("Failed to copy email:", error);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: <FiMail size={20} />,
//       label: "Email",
//       value: email,
//       action: copyEmail,
//       actionIcon: copied ? (
//         <FiCheck size={16} />
//       ) : (
//         <FiCopy size={16} />
//       ),
//     },

//     {
//       icon: <FiPhone size={20} />,
//       label: "Phone",
//       value: phone,
//       href: `tel:${phone.replace(/\s/g, "")}`,
//     },

//     {
//       icon: <FiMapPin size={20} />,
//       label: "Location",
//       value: "Uttar Pradesh, India",
//     },
//   ];

//   return (
//     <section
//       id="contact"
//       className="
//         relative

//         py-16
//         sm:py-20
//         lg:py-28

//         bg-gradient-to-b
//         from-white
//         to-purple-50

//         dark:from-[#05060f]
//         dark:to-[#05060f]

//         overflow-hidden
//       "
//     >
//       <AnimatedBackground variant="soft" />

//       {/* =====================================================
//           AMBIENT GLOWS
//       ====================================================== */}

//       <div
//         className="
//           absolute
//           top-0
//           left-0

//           w-72
//           h-72

//           sm:w-96
//           sm:h-96

//           bg-purple-200/40
//           dark:bg-violet-700/10

//           rounded-full
//           blur-3xl

//           -translate-x-1/3
//           -translate-y-1/3
//         "
//       />

//       <div
//         className="
//           absolute
//           bottom-0
//           right-0

//           w-72
//           h-72

//           sm:w-96
//           sm:h-96

//           bg-violet-200/30
//           dark:bg-blue-700/10

//           rounded-full
//           blur-3xl

//           translate-x-1/3
//           translate-y-1/3
//         "
//       />

//       <div
//         className="
//           relative

//           max-w-7xl
//           mx-auto

//           px-4
//           sm:px-6
//           lg:px-10
//         "
//       >
//         {/* =====================================================
//             HEADING
//         ====================================================== */}

//         <div className="text-center mb-10 sm:mb-16">
//           <p
//             className="
//               uppercase

//               tracking-[4px]
//               sm:tracking-[6px]

//               text-purple-600
//               dark:text-violet-400

//               font-semibold

//               text-xs
//               sm:text-sm
//             "
//           >
//             Contact
//           </p>

//           <h2
//             className="
//               text-3xl
//               sm:text-4xl
//               lg:text-6xl

//               font-black

//               mt-4

//               text-gray-900
//               dark:text-white

//               leading-tight
//             "
//           >
//             Let's{" "}
//             <span
//               className="
//                 bg-gradient-to-r
//                 from-purple-700
//                 to-violet-600

//                 dark:from-violet-500
//                 dark:to-purple-400

//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Work Together
//             </span>
//           </h2>

//           <p
//             className="
//               mt-5
//               sm:mt-6

//               text-gray-600
//               dark:text-gray-400

//               max-w-2xl
//               mx-auto

//               text-sm
//               sm:text-base
//               lg:text-lg

//               leading-7
//             "
//           >
//             Have a project, collaboration, or job opportunity?
//             I'd love to hear from you.
//           </p>

//           {/* Availability */}

//           <div
//             className="
//               inline-flex
//               items-center
//               gap-2

//               mt-6

//               bg-green-50
//               dark:bg-green-500/10

//               text-green-700
//               dark:text-green-400

//               px-4
//               py-2

//               rounded-full

//               text-xs
//               sm:text-sm

//               font-semibold

//               border
//               border-green-100
//               dark:border-green-500/20
//             "
//           >
//             <span
//               className="
//                 w-2
//                 h-2

//                 rounded-full

//                 bg-green-500

//                 animate-pulse
//               "
//             />

//             Open to new opportunities
//           </div>
//         </div>

//         {/* =====================================================
//             MAIN CONTENT
//         ====================================================== */}

//         <div
//           className="
//             grid

//             lg:grid-cols-5

//             gap-6
//             sm:gap-8
//             lg:gap-12
//           "
//         >
//           {/* ===================================================
//               CONTACT INFORMATION
//           ==================================================== */}

//           <div
//             className="
//               lg:col-span-2

//               bg-white
//               dark:bg-white/5

//               rounded-3xl

//               p-6
//               sm:p-8
//               lg:p-10

//               shadow-lg
//               dark:shadow-none

//               border
//               border-purple-100
//               dark:border-white/10

//               flex
//               flex-col
//             "
//           >
//             <h3
//               className="
//                 text-2xl
//                 sm:text-3xl

//                 font-bold

//                 text-gray-900
//                 dark:text-white
//               "
//             >
//               Contact Information
//             </h3>

//             <p
//               className="
//                 mt-2

//                 text-sm

//                 text-gray-500
//                 dark:text-gray-400
//               "
//             >
//               Feel free to reach out for opportunities,
//               collaborations, or project discussions.
//             </p>

//             {/* Contact Items */}

//             <div className="mt-8 space-y-5">
//               {contactInfo.map((item) => (
//                 <div
//                   key={item.label}
//                   className="
//                     flex
//                     items-center
//                     gap-4

//                     group
//                   "
//                 >
//                   {/* Icon */}

//                   <div
//                     className="
//                       w-11
//                       h-11
//                       sm:w-12
//                       sm:h-12

//                       rounded-xl

//                       bg-purple-50
//                       dark:bg-violet-500/10

//                       flex
//                       items-center
//                       justify-center

//                       text-purple-700
//                       dark:text-violet-400

//                       flex-shrink-0

//                       group-hover:scale-105

//                       transition
//                     "
//                   >
//                     {item.icon}
//                   </div>

//                   {/* Content */}

//                   <div className="flex-1 min-w-0">
//                     <h4
//                       className="
//                         text-xs

//                         font-semibold

//                         text-gray-400
//                         dark:text-gray-500

//                         uppercase

//                         tracking-wide
//                       "
//                     >
//                       {item.label}
//                     </h4>

//                     {item.href ? (
//                       <a
//                         href={item.href}
//                         className="
//                           text-sm
//                           sm:text-base

//                           text-gray-700
//                           dark:text-gray-200

//                           hover:text-purple-700
//                           dark:hover:text-violet-400

//                           transition

//                           truncate
//                           block
//                         "
//                       >
//                         {item.value}
//                       </a>
//                     ) : (
//                       <p
//                         className="
//                           text-sm
//                           sm:text-base

//                           text-gray-700
//                           dark:text-gray-200

//                           truncate
//                         "
//                       >
//                         {item.value}
//                       </p>
//                     )}
//                   </div>

//                   {/* Copy */}

//                   {item.action && (
//                     <button
//                       type="button"
//                       onClick={item.action}
//                       aria-label={`Copy ${item.label}`}
//                       title={copied ? "Copied" : "Copy email"}
//                       className="
//                         w-9
//                         h-9

//                         rounded-lg

//                         bg-purple-50
//                         dark:bg-white/5

//                         text-purple-700
//                         dark:text-violet-300

//                         flex
//                         items-center
//                         justify-center

//                         hover:bg-purple-100
//                         dark:hover:bg-white/10

//                         transition

//                         flex-shrink-0
//                       "
//                     >
//                       {item.actionIcon}
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* =================================================
//                 SOCIAL LINKS
//             ================================================== */}

//             <div className="mt-auto pt-10">
//               <h4
//                 className="
//                   text-xs
//                   sm:text-sm

//                   font-semibold

//                   text-gray-400
//                   dark:text-gray-500

//                   uppercase

//                   tracking-wide

//                   mb-4
//                 "
//               >
//                 Find me on
//               </h4>

//               <div className="flex items-center gap-3">
//                 {/* GitHub */}

//                 <a
//                   href={githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="GitHub profile"
//                   className="
//                     w-11
//                     h-11

//                     rounded-full

//                     bg-purple-50
//                     dark:bg-white/5

//                     flex
//                     items-center
//                     justify-center

//                     text-gray-700
//                     dark:text-gray-200

//                     hover:bg-purple-700
//                     hover:text-white

//                     transition
//                   "
//                 >
//                   <FiGithub size={18} />
//                 </a>

//                 {/* LinkedIn */}

//                 {linkedinUrl !== "YOUR_LINKEDIN_URL" && (
//                   <a
//                     href={linkedinUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="LinkedIn profile"
//                     className="
//                       w-11
//                       h-11

//                       rounded-full

//                       bg-purple-50
//                       dark:bg-white/5

//                       flex
//                       items-center
//                       justify-center

//                       text-gray-700
//                       dark:text-gray-200

//                       hover:bg-purple-700
//                       hover:text-white

//                       transition
//                     "
//                   >
//                     <FiLinkedin size={18} />
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* ===================================================
//               CONTACT FORM
//           ==================================================== */}

//           <form
//             onSubmit={handleSubmit}
//             className="
//               lg:col-span-3

//               bg-white
//               dark:bg-white/5

//               rounded-3xl

//               p-6
//               sm:p-8
//               lg:p-10

//               shadow-lg
//               dark:shadow-none

//               border
//               border-purple-100
//               dark:border-white/10

//               space-y-5
//               sm:space-y-6
//             "
//           >
//             {/* Name + Email */}

//             <div
//               className="
//                 grid

//                 sm:grid-cols-2

//                 gap-5
//                 sm:gap-6
//               "
//             >
//               {/* Name */}

//               <div>
//                 <label
//                   htmlFor="contact-name"
//                   className="
//                     block

//                     text-xs
//                     sm:text-sm

//                     font-semibold

//                     text-gray-500
//                     dark:text-gray-400

//                     mb-2
//                   "
//                 >
//                   Your Name
//                 </label>

//                 <input
//                   id="contact-name"
//                   type="text"
//                   name="name"
//                   required
//                   value={form.name}
//                   onChange={handleChange}
//                   placeholder="Your name"
//                   className="
//                     w-full

//                     border
//                     border-gray-200
//                     dark:border-white/10

//                     bg-white
//                     dark:bg-gray-700/70

//                     dark:text-white

//                     rounded-xl

//                     p-3.5
//                     sm:p-4

//                     outline-none

//                     focus:border-purple-600
//                     dark:focus:border-violet-500

//                     focus:ring-2
//                     focus:ring-purple-500/10

//                     transition

//                     text-sm
//                     sm:text-base
//                   "
//                 />
//               </div>

//               {/* Email */}

//               <div>
//                 <label
//                   htmlFor="contact-email"
//                   className="
//                     block

//                     text-xs
//                     sm:text-sm

//                     font-semibold

//                     text-gray-500
//                     dark:text-gray-400

//                     mb-2
//                   "
//                 >
//                   Your Email
//                 </label>

//                 <input
//                   id="contact-email"
//                   type="email"
//                   name="email"
//                   required
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="you@company.com"
//                   className="
//                     w-full

//                     border
//                     border-gray-200
//                     dark:border-white/10

//                     bg-white
//                     dark:bg-gray-700/70

//                     dark:text-white

//                     rounded-xl

//                     p-3.5
//                     sm:p-4

//                     outline-none

//                     focus:border-purple-600
//                     dark:focus:border-violet-500

//                     focus:ring-2
//                     focus:ring-purple-500/10

//                     transition

//                     text-sm
//                     sm:text-base
//                   "
//                 />
//               </div>
//             </div>

//             {/* Subject */}

//             <div>
//               <label
//                 htmlFor="contact-subject"
//                 className="
//                   block

//                   text-xs
//                   sm:text-sm

//                   font-semibold

//                   text-gray-500
//                   dark:text-gray-400

//                   mb-2
//                 "
//               >
//                 Subject
//               </label>

//               <input
//                 id="contact-subject"
//                 type="text"
//                 name="subject"
//                 value={form.subject}
//                 onChange={handleChange}
//                 placeholder="Job opportunity / Project inquiry"
//                 className="
//                   w-full

//                   border
//                   border-gray-200
//                   dark:border-white/10

//                   bg-white
//                   dark:bg-gray-700/70

//                   dark:text-white

//                   rounded-xl

//                   p-3.5
//                   sm:p-4

//                   outline-none

//                   focus:border-purple-600
//                   dark:focus:border-violet-500

//                   focus:ring-2
//                   focus:ring-purple-500/10

//                   transition

//                   text-sm
//                   sm:text-base
//                 "
//               />
//             </div>

//             {/* Message */}

//             <div>
//               <label
//                 htmlFor="contact-message"
//                 className="
//                   block

//                   text-xs
//                   sm:text-sm

//                   font-semibold

//                   text-gray-500
//                   dark:text-gray-400

//                   mb-2
//                 "
//               >
//                 Message
//               </label>

//               <textarea
//                 id="contact-message"
//                 name="message"
//                 required
//                 rows="5"
//                 value={form.message}
//                 onChange={handleChange}
//                 placeholder="Tell me about your project or opportunity..."
//                 className="
//                   w-full

//                   border
//                   border-gray-200
//                   dark:border-white/10

//                   bg-white
//                   dark:bg-gray-700/70

//                   dark:text-white

//                   rounded-xl

//                   p-3.5
//                   sm:p-4

//                   outline-none

//                   focus:border-purple-600
//                   dark:focus:border-violet-500

//                   focus:ring-2
//                   focus:ring-purple-500/10

//                   transition

//                   resize-none

//                   text-sm
//                   sm:text-base
//                 "
//               />
//             </div>

//             {/* Submit */}

//             <button
//               type="submit"
//               className="
//                 w-full

//                 flex
//                 items-center
//                 justify-center
//                 gap-2

//                 bg-gradient-to-r
//                 from-violet-700
//                 to-purple-600

//                 text-white

//                 py-3.5
//                 sm:py-4

//                 rounded-xl

//                 font-semibold

//                 shadow-lg
//                 shadow-purple-900/10

//                 hover:scale-[1.02]

//                 active:scale-[0.99]

//                 transition
//               "
//             >
//               {sent ? (
//                 <>
//                   <FiCheck size={18} />

//                   Opening your email app
//                 </>
//               ) : (
//                 <>
//                   <FiSend size={18} />

//                   Send Message
//                 </>
//               )}
//             </button>

//             <p
//               className="
//                 text-xs

//                 text-center

//                 text-gray-400
//                 dark:text-gray-500
//               "
//             >
//               This opens your email app with the message
//               pre-filled. No form data is stored by this website.
//             </p>
//           </form>
//         </div>

//         {/* =====================================================
//             FOOTER NOTE
//         ====================================================== */}

//         <div
//           className="
//             mt-10
//             sm:mt-14

//             text-center
//           "
//         >
//           {/* line */}
//           <p
//   className="
//     text-xs
//     sm:text-sm
//     text-gray-500
//     dark:text-gray-500
//     text-center
//   "
// >
//   © {new Date().getFullYear()} Vibhoo Vishwakarma.{" "}
//   <span className="text-violet-500">
//     Code. Create. Improve. Repeat.
//   </span>
// </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
