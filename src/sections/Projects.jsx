
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const categories = [
  { id: "ai", label: "AI / ML Projects" },
  { id: "python", label: "Python Projects" },
  { id: "frontend", label: "Frontend Projects" },
];

const projects = {
  ai: [
    {
      title: "DocMind AI",
      subtitle: "AI-Powered PDF Chatbot",
      description:
        "An intelligent document assistant that allows users to upload PDF files and ask questions using Retrieval-Augmented Generation (RAG).",
      image: "/projects/docmind-ai.png",
      tags: ["Python", "Flask", "LangChain", "RAG"],
      // tags: ["Python", "Flask", "LangChain", "FAISS", "Groq API", "RAG"],
      github: "https://github.com/bhaskar22b/DocMind-AI",
      live: "https://docmind-scan.onrender.com",
    },
    {
      title: "Handwritten Digit Recognition",
      subtitle: "Deep Learning with CNN",
      description:
        "A deep learning application trained on the MNIST dataset to recognize handwritten digits using a Convolutional Neural Network. [ THis is group project]",
      image: "/projects/handwritten-digit.png",
      tags: ["Python", "TensorFlow", "Keras", "CNN", "MNIST"],
      github: "https://github.com/bhaskar22b/Handwritten-Digit-Recognition",
      live: "https://handwritten-digit-recognition-1-4i5j.onrender.com/",
    },
  ],

  python: [
    {
      title: "Expense Tracker",
      subtitle: "Personal Finance Management",
      description:
        "A web application for recording, organizing and analyzing daily expenses with category-wise tracking and financial summaries.",
      image: "/projects/expense-tracker.png",
      tags: ["Python", "Flask", "SQLite", "Pandas", "Tailwind CSS"],
      github: "https://github.com/bhaskar22b/ExpenseFlow.app",
      live: "https://expense-flow-manage-app.vercel.app/",
    },
    {
      title: "Library Management System ",
      subtitle: "Book and Member Management [ PassWord: 1234 , Username: admin]",
      description:
        "A library management application for managing books, members, issuing records and available book quantities.",
      image: "/projects/library-management.png",
      tags: ["Python", "Flask", "SQLAlchemy", "SQLite", "Tailwind CSS"],
      github: "https://github.com/bhaskar22b/PY-Library-Management-System-",
      live: "https://py-library-ms.vercel.app/",
    },
  ],

  frontend: [
    {
      title: "Movie Rating Website",
      subtitle: "Movie Discovery Platform",
      description:
        "A movie discovery platform where users can explore films, view information and discover movies through a modern interface.",
      image: "/R Projects/MovieRatingWeb.png",
      tags: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/bhaskar22b/Movie-app",
      live: "https://starwingmovies.vercel.app/",
    },
    {
      title: "Ecommerce Website",
      subtitle: "Online Shopping Platform",
      description:
        "An online shopping website designed to provide customers with a convenient product browsing and shopping experience.",
      image: "/R Projects/Ecommerce.png",
      tags: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/bhaskar22b/out-fit.co",
      live: "https://ecommerce-site-xy.vercel.app/",
    },
    {
      title: "Recipe Finder",
      subtitle: "Recipe Discovery Website",
      description:
        "A recipe discovery website that helps users explore food recipes and simplify their meal planning.",
      image: "/R Projects/RecipeFinderWeb.png",
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/bhaskar22b/recipeFinderApp/",
      live: "https://recipe-finder-xy.vercel.app/",
    },
    {
      title: "Strategic Planner",
      subtitle: "Business Strategy Website",
      description:
        "A business-focused website concept for presenting strategic planning and consulting services.",
      image: "/R Projects/StrategyWeb.png",
      tags: ["React", "TypeScript", "Node.js"],
      github: "https://github.com/bhaskar22b/Consulting-temp-repo",
      live: "",
    },
  ],
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("ai");

  const activeProjects = projects[activeCategory];

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[var(--color-highlight)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section heading */}
        <motion.div
          className="text-center mx-auto max-w-3xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-[var(--color-secondary-foreground)] text-sm uppercase tracking-wider">
            My Portfolio
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-[var(--color-secondary-foreground)]">
            Featured
            <span className="italic text-white"> Projects</span>
          </h2>

          <p className="text-[var(--color-muted-foreground)]">
            Explore my work in Artificial Intelligence, Python
            development and frontend engineering.
          </p>
        </motion.div>

        {/* Category selector */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={`px-5 py-3 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[0_0_18px_var(--color-primary)]"
                  : "glass text-[var(--color-muted-foreground)] border-[var(--color-border)] hover:text-white hover:border-[var(--color-primary)]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {activeProjects.map((project, index) => (
              <motion.article
                key={project.title}
                className="group glass rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_20px_var(--color-primary)] transition-all duration-300"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
              >
                {/* Project image */}
                <div className="relative overflow-hidden aspect-video bg-[var(--color-surface)]">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)]/70 to-transparent pointer-events-none" />

                  <span className="absolute bottom-4 left-4 text-xs font-medium px-3 py-2 rounded-full glass text-white">
                    {project.subtitle}
                  </span>
                </div>

                {/* Project details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-7 text-[var(--color-muted-foreground)]">
                    {project.description}
                  </p>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs border border-[var(--color-border)] text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[var(--color-border)]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass text-sm text-[var(--color-foreground)] hover:bg-[var(--color-primary)] hover:text-white transition"
                      >
                        <FaGithub className="text-lg" />
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--color-primary)] text-white text-sm hover:opacity-90 transition"
                      >
                        Live Demo
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
