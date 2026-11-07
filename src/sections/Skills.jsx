
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaRobot,
  FaServer,
  FaChartLine,
  FaLayerGroup,
  FaLink,
  FaDatabase,
  FaBolt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReact,
  SiTensorflow,
  SiScikitlearn,
  SiFlask,
  SiSqlite,
  SiPandas,
  SiNumpy,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    subtitle: "Writing logic and solving problems",
    icon: FaCode,
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Developing intelligent applications",
    icon: FaBrain,
    skills: [
      { name: "Machine Learning", icon: FaBrain, color: "#A78BFA" },
      { name: "Deep Learning", icon: FaLayerGroup, color: "#A78BFA" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Keras", icon: FaLayerGroup, color: "#D00000" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    ],
  },
  {
    title: "Frontend Development",
    subtitle: "Building modern user interfaces",
    icon: FaLaptopCode,
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
    ],
  },
  {
    title: "Generative AI",
    subtitle: "Exploring modern AI technologies",
    icon: FaRobot,
    skills: [
      { name: "LangChain", icon: FaLink, color: "#21A179" },
      { name: "FAISS", icon: FaDatabase, color: "#A78BFA" },
      { name: "RAG", icon: FaBrain, color: "#A78BFA" },
      { name: "Groq API", icon: FaBolt, color: "#F55036" },
    ],
  },
  {
    title: "Backend & Database",
    subtitle: "Managing application logic and data",
    icon: FaServer,
    skills: [
      { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      { name: "SQL", icon: FaDatabase, color: "#A78BFA" },
    ],
  },
  {
    title: "Data Analysis & Tools",
    subtitle: "Working with data and development tools",
    icon: FaChartLine,
    skills: [
      { name: "Pandas", icon: SiPandas, color: "#E70488" },
      { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
      { name: "Excel", icon: FaChartLine, color: "#217346" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    ],
  },
];

const Skills = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);

  // Show one card on mobile and two on larger screens
  useEffect(() => {
    const updateLayout = () => {
      setVisibleCount(window.innerWidth < 640 ? 1 : 2);
    };

    updateLayout();

    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const totalPages = Math.ceil(skillCategories.length / visibleCount);

  const visibleCategories = skillCategories.slice(
    currentPage * visibleCount,
    currentPage * visibleCount + visibleCount
  );

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="skills" className="relative overflow-hidden py-16 sm:py-20 md:py-24">

      {/* Background glow */}
      <motion.div
        className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-[var(--color-primary)]/10 blur-[100px] sm:h-80 sm:w-80"
        animate={{ x: [0, 35, 0], y: [0, 25, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-10 right-0 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px] sm:h-80 sm:w-80"
        animate={{ x: [0, -35, 0], y: [0, -25, 0] }}
        transition={{ duration: 11, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-widest text-[var(--color-primary)] sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-primary)]" />
            My Technical Expertise
          </span>

          <h2 className="mt-5 text-3xl font-bold text-[var(--color-secondary-foreground)] sm:mt-6 sm:text-4xl md:text-5xl">
            Technologies I{" "}
            <span className="font-serif font-normal italic text-white">
              Work With
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted-foreground)] sm:text-base">
            A collection of programming languages, frameworks and tools
            I use to develop applications, explore AI technologies and
            work with data.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentPage}-${visibleCount}`}
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -35 }}
              transition={{ duration: 0.35 }}
              className={`grid grid-cols-1 gap-5 sm:gap-6 ${
                visibleCount === 2 ? "sm:grid-cols-2" : ""
              }`}
            >
              {visibleCategories.map((category, index) => {
                const CategoryIcon = category.icon;

                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="group relative h-full overflow-hidden rounded-2xl p-[1px]"
                  >
                    {/* Gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/70 via-transparent to-purple-500/50 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Card */}
                    <div className="relative flex h-full min-h-[270px] flex-col rounded-2xl glass-strong p-5 sm:min-h-[300px] sm:p-6">

                      {/* Category heading */}
                      <div className="mb-6 flex items-center gap-3 sm:gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-primary)] sm:h-12 sm:w-12">
                          <CategoryIcon className="text-lg text-[var(--color-primary)] transition-colors group-hover:text-white sm:text-xl" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-base font-semibold text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-primary)] sm:text-lg">
                            {category.title}
                          </h3>

                          <p className="mt-1 text-xs text-[var(--color-muted-foreground)] sm:text-sm">
                            {category.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="grid flex-1 grid-cols-2 content-start gap-x-4 gap-y-5">
                        {category.skills.map((skill) => {
                          const SkillIcon = skill.icon;

                          return (
                            <motion.div
                              key={skill.name}
                              whileHover={{ scale: 1.05, y: -3 }}
                              className="group/skill flex min-w-0 items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-4 transition-all duration-300 hover:border-[var(--color-primary)]/60 hover:bg-[var(--color-primary)]/10 sm:gap-2.5"
                            >
                              <SkillIcon
                                className="shrink-0 text-lg transition-transform duration-300 group-hover/skill:scale-110 sm:text-xl"
                                style={{ color: skill.color }}
                              />

                              <span className="break-words text-xs font-medium text-[var(--color-muted-foreground)] transition-colors group-hover/skill:text-[var(--color-foreground)] sm:text-sm">
                                {skill.name}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Decorative line */}
                      <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-[var(--color-primary)] to-purple-400 transition-all duration-700 group-hover:w-full" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider controls */}
        <div className="mt-8 flex items-center justify-center gap-5 sm:mt-10">

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous skills"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white sm:h-11 sm:w-11"
          >
            <FaChevronLeft />
          </button>

          {/* Pagination dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to skills page ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "w-7 bg-[var(--color-primary)]"
                    : "w-2.5 bg-[var(--color-muted-foreground)]/40 hover:bg-[var(--color-primary)]/60"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next skills"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white sm:h-11 sm:w-11"
          >
            <FaChevronRight />
          </button>

        </div>

        <p className="mt-4 text-center text-xs text-[var(--color-muted-foreground)]">
          Showing {visibleCategories.length} of {skillCategories.length} skill categories
        </p>

      </div>
    </section>
  );
};

export default Skills;
