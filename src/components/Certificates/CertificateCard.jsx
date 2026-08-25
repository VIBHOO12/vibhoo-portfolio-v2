

// import {
//   FiExternalLink,
//   FiAward,
//   FiCalendar,
// } from "react-icons/fi";

// const CertificateCard = ({ certificate, index }) => {
//   const hasCredential =
//     certificate.credentialUrl &&
//     certificate.credentialUrl.trim() !== "";

//   return (
//     <div
//       className="
//         group
//         relative

//         rounded-3xl

//         p-[1.5px]

//         bg-gradient-to-br
//         from-purple-200
//         via-transparent
//         to-transparent

//         dark:from-violet-800/50
//         dark:via-transparent
//         dark:to-transparent

//         hover:from-violet-500
//         hover:to-purple-500

//         transition-all
//         duration-500
//       "
//     >
//       <div
//         className="
//           relative

//           rounded-3xl

//           overflow-hidden

//           bg-white
//           dark:bg-[#0a0b1a]

//           h-full

//           flex
//           flex-col
//         "
//       >
//         {/* =====================================================
//             NUMBER
//         ====================================================== */}

//         <span
//           className="
//             absolute

//             top-3
//             right-4

//             z-10

//             text-5xl
//             sm:text-6xl

//             font-black

//             text-purple-100
//             dark:text-white/5

//             select-none

//             pointer-events-none
//           "
//         >
//           {String(index + 1).padStart(2, "0")}
//         </span>

//         {/* =====================================================
//             FEATURED
//         ====================================================== */}

//         {/* =====================================================
//             IMAGE
//         ====================================================== */}

//         <div
//           className="
//             relative

//             overflow-hidden

//             bg-purple-50
//             dark:bg-white/5
//           "
//         >
//           {certificate.image ? (
//             <img
//               src={certificate.image}
//               alt={`${certificate.title} certificate`}
//               loading="lazy"
//               className="
//                 h-52
//                 sm:h-56

//                 w-full

//                 object-cover

//                 transition
//                 duration-700

//                 sm:group-hover:scale-105
//               "
//             />
//           ) : (
//             <div
//               className="
//                 h-52
//                 sm:h-56

//                 w-full

//                 flex
//                 items-center
//                 justify-center

//                 text-purple-300
//                 dark:text-white/10

//                 text-5xl

//                 font-black
//               "
//             >
//               {certificate.title.charAt(0)}
//             </div>
//           )}

//           {/* Desktop Verify Overlay */}

//           {hasCredential && (
//             <div
//               className="
//                 hidden
//                 sm:flex

//                 absolute
//                 inset-0

//                 bg-black/55

//                 opacity-0
//                 group-hover:opacity-100

//                 transition
//                 duration-500

//                 items-center
//                 justify-center
//               "
//             >
//               <a
//                 href={certificate.credentialUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2

//                   bg-white

//                   text-gray-900

//                   px-5
//                   py-3

//                   rounded-xl

//                   font-semibold
//                   text-sm

//                   hover:scale-105

//                   transition
//                 "
//               >
//                 <FiExternalLink size={16} />

//                 Verify Credential
//               </a>
//             </div>
//           )}
//         </div>

//         {/* =====================================================
//             CONTENT
//         ====================================================== */}

//         <div
//           className="
//             p-5
//             sm:p-6

//             flex
//             flex-col
//             flex-1
//           "
//         >
//           {/* Issuer */}

//           <div
//             className="
//               flex
//               items-center
//               gap-2

//               text-xs

//               font-semibold

//               text-purple-600
//               dark:text-violet-400

//               uppercase

//               tracking-wide
//             "
//           >
//             <FiAward size={14} />

//             {certificate.issuer}
//           </div>

//           {/* Title */}

//           <h3
//             className="
//               mt-2

//               text-lg
//               sm:text-xl

//               font-bold

//               text-gray-900
//               dark:text-white

//               leading-snug
//             "
//           >
//             {certificate.title}
//           </h3>

//           {/* Description */}

//           <p
//             className="
//               mt-3

//               text-sm

//               text-gray-600
//               dark:text-gray-400

//               leading-6
//             "
//           >
//             {certificate.description}
//           </p>

//           {/* Date */}

//           {certificate.date && (
//             <div
//               className="
//                 flex
//                 items-center
//                 gap-1.5

//                 mt-4

//                 text-xs

//                 text-gray-500
//                 dark:text-gray-500
//               "
//             >
//               <FiCalendar size={13} />

//               {certificate.date}
//             </div>
//           )}

//           {/* Skills */}

//           {certificate.skills?.length > 0 && (
//             <div
//               className="
//                 flex
//                 flex-wrap

//                 gap-2

//                 mt-5
//               "
//             >
//               {certificate.skills.map((skill) => (
//                 <span
//                   key={skill}
//                   className="
//                     bg-purple-50
//                     dark:bg-violet-500/10

//                     text-purple-700
//                     dark:text-violet-300

//                     border
//                     border-purple-100
//                     dark:border-violet-500/20

//                     px-2.5
//                     py-1

//                     rounded-full

//                     text-xs

//                     font-medium
//                   "
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           )}

//           {/* ===================================================
//               MOBILE VERIFY
//           ==================================================== */}

//           {hasCredential && (
//             <div
//               className="
//                 sm:hidden

//                 mt-5
//                 pt-5

//                 border-t
//                 border-purple-100
//                 dark:border-white/10
//               "
//             >
//               <a
//                 href={certificate.credentialUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   w-full

//                   flex
//                   items-center
//                   justify-center
//                   gap-2

//                   bg-gradient-to-r
//                   from-violet-700
//                   to-purple-600

//                   text-white

//                   px-4
//                   py-2.5

//                   rounded-xl

//                   font-semibold
//                   text-sm
//                 "
//               >
//                 <FiExternalLink size={14} />

//                 Verify Credential
//               </a>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertificateCard;

import { useState } from "react";
import {
  FiExternalLink,
  FiAward,
  FiCalendar,
  FiZoomIn,
  FiX,
} from "react-icons/fi";

const CertificateCard = ({ certificate, index }) => {
  const [open, setOpen] = useState(false);

  const hasCredential =
    certificate.credentialUrl && certificate.credentialUrl.trim() !== "";

  return (
    <>
      <div className="group relative rounded-3xl p-[1.5px] bg-gradient-to-br from-purple-200 via-transparent to-transparent dark:from-violet-800/50 dark:via-transparent dark:to-transparent hover:from-violet-500 hover:to-purple-500 transition-all duration-500">
        <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#0a0b1a] h-full flex flex-col">
          <span className="absolute top-3 right-4 z-10 text-5xl sm:text-6xl font-black text-purple-100 dark:text-white/5 select-none pointer-events-none">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Image — clickable to open full view */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative overflow-hidden bg-purple-50 dark:bg-white/5 text-left cursor-zoom-in"
            aria-label={`View ${certificate.title} certificate`}
          >
            {certificate.image ? (
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                loading="lazy"
                className="h-52 sm:h-56 w-full object-cover transition duration-700 sm:group-hover:scale-105"
              />
            ) : (
              <div className="h-52 sm:h-56 w-full flex items-center justify-center text-purple-300 dark:text-white/10 text-5xl font-black">
                {certificate.title.charAt(0)}
              </div>
            )}

            {/* Desktop hover overlay */}
            <div className="hidden sm:flex absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition duration-500 items-center justify-center">
              <span className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-xl font-semibold text-sm">
                <FiZoomIn size={16} />
                View Certificate
              </span>
            </div>
          </button>

          <div className="p-5 sm:p-6 flex flex-col flex-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-violet-400 uppercase tracking-wide">
              <FiAward size={14} />
              {certificate.issuer}
            </div>

            <h3 className="mt-2 text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-snug">
              {certificate.title}
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-6">
              {certificate.description}
            </p>

            {certificate.date && (
              <div className="flex items-center gap-1.5 mt-4 text-xs text-gray-500 dark:text-gray-500">
                <FiCalendar size={13} />
                {certificate.date}
              </div>
            )}

            {certificate.skills?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-50 dark:bg-violet-500/10 text-purple-700 dark:text-violet-300 border border-purple-100 dark:border-violet-500/20 px-2.5 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Action row — works on all screens now */}
            <div className="mt-5 pt-5 border-t border-purple-100 dark:border-white/10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-700 to-purple-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:scale-[1.02] transition"
              >
                <FiZoomIn size={14} />
                View Certificate
              </button>

              {hasCredential && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-purple-50 dark:bg-white/5 text-purple-700 dark:text-gray-200 px-4 py-2.5 rounded-xl font-semibold text-sm"
                >
                  <FiExternalLink size={14} />
                  Verify
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <FiX size={20} />
          </button>

          <div
            className="relative max-w-3xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={certificate.image}
              alt={`${certificate.title} certificate full view`}
              className="max-h-[70vh] w-auto max-w-full rounded-xl shadow-2xl object-contain bg-white"
            />

            <div className="mt-4 text-center">
              <h3 className="text-white font-bold text-base sm:text-lg">{certificate.title}</h3>
              <p className="text-gray-400 text-sm mt-1">
                {certificate.issuer} {certificate.date && `· ${certificate.date}`}
              </p>

              {hasCredential && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-white text-gray-900 px-5 py-2.5 rounded-xl font-semibold text-sm hover:scale-105 transition"
                >
                  <FiExternalLink size={15} />
                  Verify Credential
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;