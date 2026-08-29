import React from "react";

const experiences = [
  {
    period: "2025 — Present",
    role: "Master of Computer Applications (AI & ML)",
    company: "Rayat Bahra university",
    description:
      "Focusing on Artificial Intelligence, Machine Learning, and modern software development practices.",
    //technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: true,
  },
  {
    period: "2022 — 2025",
    role: "Bachelor of Computer Applications (BCA)",
    company: "Rayat Bahra university",
    description:
      "Built strong fundamentals in programming, web development, and databases.",
    //technologies: ["React", "Redux", "Jest", "Cypress"],
    current: false,
  },
  {
    period: "2020 — 2022",
    role: "XII (Senior Secondary), Commerce",
    company: "Govt model senior secondary school Sector-46",
    description:
      "Successfully completed my higher secondary education with a focus on analytical and logical subjects and developed a deeper interest in the field of technology.",
    //technologies: ["React", "Node.js", "MongoDB", "AWS"],
    current: false,
  },
  {
    period: "2018 — 2020",
    role: "X (Secondary)",
    company: "Govt model senior secondary school Sector-4",
    description:
      "Completed my secondary education with a strong academic foundation, focusing on core subjects .This phase helped me develop discipline, problem-solving skills,",
   // technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden fade-up">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 
        bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">
            Academic Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
            Building a strong foundation
            <span className="font-serif italic font-normal text-white">
              {" "}In technology and continuously learning modern tools..
            </span>
          </h2>

          <p className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
            A timeline of my Education & Growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] 
            bg-gradient-to-b 
            from-[var(--color-primary)]/70 
            via-[var(--color-primary)]/30 
            to-transparent 
            md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-[var(--color-primary)] rounded-full -translate-x-1/2 ring-4 ring-[var(--color-background)] z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full 
                      bg-[var(--color-highlight)] animate-ping opacity-75"
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                    }`}
                >
                  <div className="glass p-6 rounded-2xl border 
                    border-[var(--color-primary)] 
                    hover:border-[var(--color-primary)] 
                    hover:shadow-[0_0_12px_var(--color-primary)] 
                    transition-all duration-300"
                  >

                    <span className="text-sm text-[var(--color-primary)] font-medium">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2 text-[var(--color-foreground)]">
                      {exp.role}
                    </h3>

                    <p className="text-[var(--color-muted-foreground)]">
                      {exp.company}
                    </p>

                    <p className="text-sm text-[var(--color-muted-foreground)] mt-4">
                      {exp.description}
                    </p>

                    {/* Technologies
                    <div className="flex flex-wrap justify-center gap-2 mt-6">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full 
                          bg-[var(--color-surface)] 
                          text-[var(--color-muted-foreground)] 
                          hover:text-[var(--color-primary)] 
                          transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div> */}

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;