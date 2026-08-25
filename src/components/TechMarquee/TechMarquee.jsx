const tech = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Java",
  "Spring Boot",
  "MySQL",
  "Git",
  "GitHub",
  "REST API",
  "Vercel",
];

const TechMarquee = () => {
  return (
    <section className="overflow-hidden bg-purple-700 py-5">

      <div className="flex whitespace-nowrap animate-marquee">

        {[...tech, ...tech].map((item, index) => (
          <span
            key={index}
            className="mx-10 text-white text-xl font-semibold"
          >
            {item}
          </span>
        ))}

      </div>

    </section>
  );
};

export default TechMarquee;