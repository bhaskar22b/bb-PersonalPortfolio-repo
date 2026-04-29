import React from 'react'
import Button from '../Components/Button'
import { FaArrowRight, FaDownload, FaPhoneAlt } from 'react-icons/fa'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  FaCode,
  FaFileCode,
  FaDatabase,
  FaBrain,
  FaCloud,
  FaImage,
  FaChartBar
} from "react-icons/fa";

const skills = [
  { name: "React", image: "/skills/library.png" },
  { name: "JavaScript", image: "/skills/js-file.png" },
  { name: "Python", image: "/skills/file.png" },
  { name: "HTML", image: "/skills/html-5.png" },
  { name: "CSS", image: "/skills/css-3.png" },
  { name: "Tailwind CSS", image: "/skills/tailwind.png" },
  { name: "Data Analysis", image: "/skills/analysing.png" },
  { name: "MS Excel", image: "/skills/excel.png" },
  { name: "Vercel", image: "/skills/vercel.png" },
  { name: "GitHub", image: "/skills/github.png" },
  { name: "Photoshop", image: "/skills/photoshop.png" },
  { name: "AI/ML Basics", image: "/skills/ai-brain.png" },
];


export const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* bg */}
      <div className='absolute inset-0'>
        <img src="projects/hero-bg.jpg" alt="Hero image" className='w-full h-full object-cover opacity-40' />
      </div>

      <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background'>
      </div>

      {/* content */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* left - text */}
          <div className='space-y-8'>
            <div className="animate-fade-in">
              <span className='inline-flex items-center gap-2 px-4 py-2  rounded-full glass text-sm text-[var(--color-primary)]'>
                <span className='w-2 h-2 bg-[var(--color-primary)] rounded-full'></span>
                WEB DEVELOPER : React Specialist
              </span>
            </div>

            {/* headline */}
            <div className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                Building <span className="text-[var(--color-primary)] glow-text">Modern</span><span className='ml-4'>web</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  care and precision
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm BHaskar Bhushan — a software engineer specializing in
                React, Javascript, and python. I build scalable, performant web
                applications that users love.
              </p>
            </div>

            {/* CTA */}
            <div className='flex flex-wrap gap-4'>
              <div id="contact">
                <div>
                  <a target="_blank" href="mailto:bhaskarbushan22@gmail.com?subject=Contact&body=Hi, I want to connect with you">
                    <Button size="lg">
                      Email Me <FaArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                </div>

              </div>

              <a
                href="projects/bhaskar Bhushan CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black border border-[var(--color-primary)] text-white hover:border-[var(--color-primary)] hover:shadow-[0_0_20px_#20b2a6] text-lg hover:text-[var(--color-primary)] transition-all duration-300"
              >
                <FaDownload className='w-5 h-5' /> Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { Icon: FaGithub, href: "https://github.com/bhaskar22b" },
                { Icon: FaLinkedin, href: "https://www.linkedin.com/in/bhaskar-bhushan-b37609349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                // { Icon: Twitter, href: "#" },
                { Icon: FaInstagram, href: "https://www.instagram.com/bhaskar_b09?igsh=MXEycmw0NTRxMWYzMA==" },
                { Icon: FaPhoneAlt, href: "tel:+91 7717491129" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all duration-300"
                  target="_blank"
                >
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

          </div>
          {/* right - img */}
          <div className="relatice animate-fade-in animation-delay-300 ">
            {/* profile img */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-[var(--color-primary)] animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="projects/profile-photo-3a.png" alt="Bhaskar bhushan" className='w-full aspect-[4/5] object-cover rounded-2xl' />
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">Fresher</div>
                  {/* <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        {/* <div className="mt-20 text-center">
  <p className="text-sm text-[var(--color-muted-foreground)] mb-6">
    Technologies I work with
  </p>

  <div className="overflow-hidden">
    <div className="flex whitespace-nowrap animate-InfinityCircle">
      {[...skills, ...skills].map((skill, idx) => (
        <span
          key={idx}
          className="mx-6 text-lg font-medium text-[var(--color-muted-foreground)] hover:text-white transition"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</div> */}

        <div className="mt-40 text-center">
          <p className="text-3xl md:text-4xl font-semibold text-white mb-6">
            <span className='text-6xl'>T</span>echnologies I <span className="text-[var(--color-primary)] glow-text"> Work </span>with
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto relative overflow-hidden aspect-video">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 
      bg-[var(--color-card)] border border-[var(--color-border)] 
      rounded-xl py-6 text-[var(--color-foreground)] font-medium 
      hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition group glass overflow-hidden"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-125 mb-1"
                />

                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}