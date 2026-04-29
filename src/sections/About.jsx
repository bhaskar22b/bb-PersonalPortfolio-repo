import { FaCode, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";

const highlights = [
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: FaRocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div className="space-y-6">

            <div className="animate-fade-in">
              <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
              <p>
                I'm a passionate software engineer with experience crafting
                digital products that make a difference.
              </p>
              <p>
                I specialize in React, modern frontend tools, and building clean
                user experiences.
              </p>
              <p>
                I enjoy learning new technologies and improving my skills.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-[var(--color-foreground)]">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful."
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="glass p-6 rounded-2xl animate-fade-in group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 hover:bg-[var(--color-primary)]/20 transition">
                    <Icon className="w-6 h-6 text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[var(--color-foreground)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
};