
import { motion } from "framer-motion";
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
  SiVercel
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
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute top-20 left-0 w-80 h-80 rounded-full bg-[var(--color-primary)]/10 blur-[100px] pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 11, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs md:text-sm uppercase tracking-widest text-[var(--color-primary)]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
            My Technical Expertise
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-5 text-[var(--color-secondary-foreground)]">
            Technologies I
            <span className="font-serif italic font-normal text-white">
              {" "}Work With
            </span>
          </h2>

          <p className="text-sm md:text-base leading-7 text-[var(--color-muted-foreground)]">
            A collection of programming languages, frameworks and
            tools I use to develop applications, explore AI
            technologies and work with data.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl p-[1px] overflow-hidden"
              >
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/60 via-transparent to-purple-500/40 opacity-50 group-hover:opacity-100 transition duration-500" />

                {/* Card */}
                <div className="relative h-full rounded-2xl glass-strong p-6">

                  {/* Category header */}
                  <div className="flex items-start gap-4 mb-7">

                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:scale-110 transition-all duration-300">
                      <CategoryIcon className="text-xl text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                        {category.title}
                      </h3>

                      <p className="text-xs mt-1 text-[var(--color-muted-foreground)]">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Technology logos */}
                  <div className="grid grid-cols-2 gap-3">

                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.35,
                            delay: index * 0.08 + skillIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.06 }}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--color-surface)]/70 border border-[var(--color-border)] hover:border-[var(--color-primary)]/60 hover:bg-[var(--color-primary)]/10 transition-all duration-300 cursor-default"
                        >
                          <SkillIcon
                            className="text-xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: skill.color }}
                          />

                          <span className="text-xs md:text-sm font-medium text-[var(--color-muted-foreground)] group-hover:text-[var(--color-foreground)] transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}

                  </div>

                  {/* Bottom decorative line */}
                  <div className="mt-7 h-[2px] w-0 bg-gradient-to-r from-[var(--color-primary)] to-purple-400 group-hover:w-full transition-all duration-700" />

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Skills;
