import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
// import AnimatedBorderButton from "./AnimatedBorderButton";
import { motion } from "framer-motion";


const projects = [
  {
    title: " Movie Rating",
    description:
      " A digital platform designed to help users discover, evaluate, and discuss films through community-driven ratings, expert reviews, and in-depth metadata.",
    image: "/R Projects/MovieRatingWeb.png",
    tags: ["React", "JavaScript", "Html","Css"],
    link: "https://starwingmovies.vercel.app/",
    github: "https://github.com/bhaskar22b/Movie-app",
  },
  {
    title: "Ecommerce",
    description:
      "a digital platform that enables businesses to sell goods or services directly to customers over the internet, serving as a 24/7 virtual storefront.",
    image: "/R Projects/Ecommerce.png",
    tags: ["React", "JavaScript", "Html","Css"],
    link: "https://ecommerce-site-xy.vercel.app/",
    github: "https://github.com/bhaskar22b/EcommerceWeb-repo",
  },
  {
    title: "Recipe Finder ",
    description:
      "A recipe finder website is an intelligent, user-friendly digital platform designed to minimize food waste and simplify meal planning.",
    image: "/R Projects/RecipeFinderWeb.png",
    tags: ["JavaScript", "Html","Css"],
    link: "https://recipe-finder-xy.vercel.app/",
    github: "https://github.com/bhaskar22b/recipeFinderApp/",
  },
  {
    title: "Strategic",
    description:
      "A Strategic Planner drives business growth by transforming data, consumer insights, and market trends into actionable, long-range strategies.",
    image: "/R Projects/StrategyWeb.png",
    tags: ["React", "Typescript", "NodeJS"],
    link: "#",
    github: "https://github.com/bhaskar22b/Consulting-temp-repo",
  },
];

const Projects = () => {
  return (
    <motion.section id="projects" className="py-24 relative overflow-hidden fade-left"
    initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{ duration:0.5}}
      viewport={{ once: true}}
    >

      {/* Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[var(--color-highlight)]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16"
        initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{ duration:0.5}}
      viewport={{ once: true}}
        >
          <span className="text-[var(--color-secondary-foreground)] text-sm uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-[var(--color-secondary-foreground)]">
            Projects that
            <span className="italic text-white"> make an impact</span>
          </h2>

          <p className="text-[var(--color-muted-foreground)]">
            A selection of my recent work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)] via-[var(--color-card)]/50 to-transparent" />

                {/* Overlay Icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-[var(--color-primary)] hover:text-white transition"
                    target="_blank"
                  >
                    <FaArrowUpRightFromSquare className="w-5 h-5"/>
                  </a>

                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-[var(--color-primary)] hover:text-white transition"
                    target="_blank"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition">
                    {project.title}
                  </h3>

                  <FaArrowUpRightFromSquare className="w-5 h-5 text-[var(--color-muted-foreground)] group-hover:text-[var(--color-primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </div>

                <p className="text-sm text-[var(--color-muted-foreground)]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs border border-[var(--color-border)] text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        {/* <div className="text-center mt-12">
          <AnimatedBorderButton>
            View All Projects
            <FaArrowUpRightFromSquare className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}

      </div>
    </motion.section>
  );
};

export default Projects;