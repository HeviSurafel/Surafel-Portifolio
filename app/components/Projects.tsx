'use client';
import { useState } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import Link from 'next/link';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Trust Charity Website",
      description: "A modern MERN-stack charity platform with donation tracking, user roles, and secure admin dashboard.",
      image: "/images/trust.png",
      link: 'http://trustcharityassociation.org/',
      github: "https://github.com/HeviSurafel", // Add your GitHub links
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Framer Motion"],
      category: "web",
      featured: true
    },
    {
      id: 2,
      title: "Blue Sapphire Ethiopian Tour Website",
      description: "A full-featured Ethiopian tour and travel website with tour listings, booking system, and beautiful UI.",
      image: "/images/blue.png",
      link: 'https://bluesapphireethiopiatours.com/',
      github: "https://github.com/HeviSurafel",
      technologies: ["React", "Node.js", "MongoDB", "Redux", "Tailwind CSS", "Framer Motion"],
      category: "web",
      featured: true
    },
    {
      id: 3,
      title: "Arba Minch Stadium Donation Website",
      description: "Donation management platform built using the MERN stack with roles: Admin, Customer, Finance, and SuperAdmin.",
      image: "/images/arbaminch.png",
      link: 'https://arbaminchstadium.makadamy.com/',
      github: "https://github.com/HeviSurafel",
      technologies: ["React", "Express", "MongoDB", "Node.js", "Framer Motion"],
      category: "web",
      featured: true
    },
    {
      id: 4,
      title: "Sebeta Sub City Website",
      description: "Official sub-city website built with modern UI, announcement system, and service information pages.",
      image: "/images/sebeta.png",
      link: 'https://seta-frontend.vercel.app/',
      github: "https://github.com/HeviSurafel",
      technologies: ["React", "Tailwind CSS", "Node.js", "Framer Motion"],
      category: "web",
      featured: false
    },
    {
      id: 5,
      title: "NelBlue Backend",
      description: "Backend API built with Node.js/Express, handling authentication, products, bookings, and admin features.",
      link: "https://nelblue.onrender.com",
      image: "/images/neblue.png",
      github: "https://github.com/HeviSurafel",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Framer Motion"],
      category: "backend",
      featured: false
    },
    {
      id: 6,
      title: "Telegram Bot Automation",
      description: "A Telegram bot built with Python for automation and user interaction, deployed on Render.",
      link: "https://telegram-bot-lhu8.onrender.com",
      image: "/images/telegrambot.png",
      github: "https://github.com/HeviSurafel",
      technologies: ["Python", "Telegram API", "Framer Motion"],
      category: "automation",
      featured: false
    },
    {
      id: 7,
      title: "BotRent Backend API",
      description: "A backend service powering the BotRent platform, featuring bot monitoring, user management, and secure API endpoints.",
      link: "https://dashboard.render.com/web/srv-d36r7oh5pdvs73dc47gg",
      image: "/images/botrent.png",
      github: "https://github.com/HeviSurafel",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "backend",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'backend', name: 'Backend API' },
    { id: 'automation', name: 'Automation' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  const filterVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Work</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that demonstrate my expertise in various technologies and domains
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={filterVariants}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      Featured
                    </motion.div>
                  )}

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-2 py-1 bg-white/20 text-white rounded-full text-xs backdrop-blur-sm border border-white/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-white text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 text-center flex items-center justify-center space-x-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span>Live Demo</span>
                        </motion.a>
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-transparent border border-white text-white py-2 rounded-lg font-medium hover:bg-white/20 transition-colors duration-300 text-center flex items-center justify-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span>Code</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold text-gray-800 dark:text-white mb-3"
                    whileHover={{ color: "#3B82F6" }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Quick Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium flex items-center space-x-1"
                      whileHover={{ x: 2 }}
                    >
                      <span>Visit Website</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                    
                    <div className="flex space-x-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 max-w-2xl mx-auto border border-blue-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss your next project and how I can help bring your ideas to life.
            </p>
            <Link href="#contact"> 
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;