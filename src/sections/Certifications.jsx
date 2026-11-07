
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";


const certifications = [
  {
    title: "Deep Learning",
    provider: "Scaler Topics",
    category: "AI / Machine Learning",
    skills: ["Keras", "TensorFlow"],
    date: "20 November 2026",
    certificateUrl: "/CertificationPdf/DL.pdf",
  },
  {
    title: "Python: Mastering the Essentials Programming",
    provider: "Scaler Topicsr",
    category: "Programming",
    skills: ["Python", "Programming"],
    date: "21 October 2026",
    certificateUrl: "/CertificationPdf/Python-Scaler.pdf",
  },
  {
    title: "Python Essentials",
    provider: "Python institute",
    category: "Programming",
    skills: ["Python", "Problem Solving"],
    date: "21 October 2026",
    certificateUrl: "/CertificationPdf/Python-Essentials.pdf",
  },
  {
    title: "Generative AI 101",
    provider: "Future Skills Prime",
    category: "Artificial Intelligence",
    skills: ["Generative AI", "LLMs", "Prompt Engineering"],
    date: "31 October 2026",
    certificateUrl: "/CertificationPdf/Generative-AI.pdf",
  },
  {
    title: "Data Science",
    provider: "Cisco Networking Academy",
    category: "Data Science",
    skills: ["Data Analysis", "Python", "Data Science"],
    date: "21 October 2026",
    certificateUrl: "/CertificationPdf/Data-Science.pdf",
  },
  {
    title: "Web Development",
    provider: "Ninzahub",
    category: "Web Development",
    skills: ["HTML", "CSS", "Tailwind CSS", "React"],
    date: "15 july 2026",
    certificateUrl: "/CertificationPdf/Web-Development.pdf",
  },
];


const Certifications = () => {
    return (
        <section
            id="certifications"
            className="py-24 relative overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute top-1/4 left-0 w-80 h-80 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--color-highlight)]/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[var(--color-secondary-foreground)] text-sm uppercase tracking-wider font-medium">
                        Learning & Achievements
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-[var(--color-secondary-foreground)]">
                        My
                        <span className="font-serif italic font-normal text-white">
                            {" "}Certifications
                        </span>
                    </h2>

                    <p className="text-[var(--color-muted-foreground)]">
                        Professional courses and certifications that reflect my
                        continuous learning in programming, artificial intelligence,
                        data science, and web development.
                    </p>
                </div>

                {/* Certification Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            className="glass rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_18px_var(--color-primary)] transition-all duration-300 flex flex-col"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Icon and category */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                                    <FaAward className="text-2xl text-[var(--color-primary)]" />
                                </div>

                                <span className="text-xs px-3 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-secondary-foreground)]">
                                    {cert.category}
                                </span>
                            </div>

                            {/* Details */}
                            <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-3">
                                {cert.title}
                            </h3>

                            <p className="text-sm text-[var(--color-muted-foreground)] mb-2">
                                Issued by: {cert.provider}
                            </p>

                            <p className="text-xs text-[var(--color-muted-foreground)] mb-5">
                                {cert.date}
                            </p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {cert.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-full text-xs border border-[var(--color-border)] text-[var(--color-muted-foreground)]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Certificate link */}
                            <div className="mt-auto">
                                <a
                                    href={cert.certificateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-white transition"
                                >
                                    View Certificate
                                    <FaExternalLinkAlt className="text-xs" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
