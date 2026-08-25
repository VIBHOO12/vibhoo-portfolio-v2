

import { FiAward } from "react-icons/fi";

import certificateData from "./CertificateData";
import CertificateCard from "./CertificateCard";
import AnimatedBackground from "../common/AnimatedBackground";

const Certificates = () => {
  return (
    <section
      id="certificates"
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
      <AnimatedBackground variant="soft" />

      {/* Ambient Glow */}

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
          max-w-7xl
          mx-auto

          px-4
          sm:px-6
          lg:px-10
        "
      >
        {/* =====================================================
            HEADING
        ====================================================== */}

        <div className="text-center mb-12 sm:mb-16">
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
            <FiAward size={14} />

            Achievements
          </span>

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-6xl

              font-black

              mt-4
              sm:mt-5

              text-gray-900
              dark:text-white

              leading-tight
            "
          >
            My{" "}
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
              Certificates
            </span>
          </h2>

          <p
            className="
              mt-5

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
            Certifications, internships, and professional training
            that reflect my continuous learning and technical growth.
          </p>
        </div>

        {/* =====================================================
            CERTIFICATE GRID
        ====================================================== */}

        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3

            gap-6
            sm:gap-8
          "
        >
          {certificateData.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>

        {/* Empty State */}

        {certificateData.length === 0 && (
          <div
            className="
              text-center

              py-16

              text-gray-500
              dark:text-gray-400
            "
          >
            No certificates available yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;