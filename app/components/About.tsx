"use client";
import Link from "next/link";

import { easeIn, easeOut, motion } from "framer-motion";
function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: easeIn },
    },
  };
  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
  };
  const textContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };
  const btnContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const btnItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-800 sm:text-5xl">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Me
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Passionate developer crafting digital experiences that make a
            difference
          </p>
        </motion.div>

        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Side - Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl rounded-2xl">
              <img
                src="/images/hevi.jpg" // Replace with your image
                alt="About Me"
                className="object-cover w-full h-auto"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-purple-600/10 mix-blend-overlay"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute w-24 h-24 bg-blue-100 rounded-full -top-6 -left-6 mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute w-32 h-32 bg-purple-100 rounded-full -bottom-6 -right-6 mix-blend-multiply filter blur-xl opacity-70"></div>

            {/* Experience badge */}
            <div className="absolute p-4 bg-white shadow-lg -bottom-4 -left-4 rounded-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <motion.div
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              <motion.h3
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl"
              >
                Crafting Digital Experiences with Code & Creativity
              </motion.h3>
              <motion.p
                variants={textItem}
                className="mb-4 leading-relaxed text-gray-600"
              >
                I'm a passionate Frontend Developer and UI/UX Designer with over
                2 years of experience creating modern, responsive web
                applications. I love turning complex problems into simple,
                beautiful designs.
              </motion.p>
              <motion.p
                variants={textItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="leading-relaxed text-gray-600"
              >
                My journey in web development started with curiosity and has
                evolved into a career focused on creating user-centered
                solutions that combine functionality with aesthetic appeal.
              </motion.p>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {/* Section Title */}
              <motion.h4
                variants={item}
                className="text-xl font-semibold text-gray-800"
              >
                What I Do
              </motion.h4>

              {/* Cards Grid */}
              <motion.div
                variants={container}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {/* Frontend Development */}
                <motion.div
                  variants={item}
                  className="flex items-center p-3 space-x-3 transition-colors duration-300 rounded-lg bg-gray-50 hover:bg-blue-50"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">
                    Frontend Development
                  </span>
                </motion.div>

                {/* UI/UX Design */}
                <motion.div
                  variants={item}
                  className="flex items-center p-3 space-x-3 transition-colors duration-300 rounded-lg bg-gray-50 hover:bg-purple-50"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v.01"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">
                    UI/UX Design
                  </span>
                </motion.div>

                {/* App Development */}
                <motion.div
                  variants={item}
                  className="flex items-center p-3 space-x-3 transition-colors duration-300 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg dark:bg-purple-700">
                    <svg
                      className="w-5 h-5 text-purple-600 dark:text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 8v8m-8-8v8m-4 0h16a2 2 0 002-2V8a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    App Development
                  </span>
                </motion.div>

                {/* Telegram Bot */}
                <motion.div
                  variants={item}
                  className="flex items-center p-3 space-x-3 transition-colors duration-300 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg dark:bg-purple-700">
                    <svg
                      className="w-5 h-5 text-purple-600 dark:text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.5 12l19-7-7 19-4-7-8-5z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    Telegram Bot
                  </span>
                </motion.div>

                {/* Responsive Design */}
                <motion.div
                  variants={item}
                  className="flex items-center p-3 space-x-3 transition-colors duration-300 rounded-lg bg-gray-50 hover:bg-green-50"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">
                    Responsive Design
                  </span>
                </motion.div>

                {/* Performance Optimization */}
                <motion.div
                  variants={item}
                  className="flex items-center p-3 space-x-3 transition-colors duration-300 rounded-lg bg-gray-50 hover:bg-orange-50"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg">
                    <svg
                      className="w-5 h-5 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">
                    Performance Optimization
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={btnContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-4 pt-6 sm:flex-row"
            >
              {/* Download CV Button */}
              <motion.div variants={btnItem}>
                <Link href="/images/mammp_surafel_cv.pdf" download>
                  <button className="px-8 py-3 font-semibold text-white transition-all duration-300 transform bg-blue-600 rounded-full hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg">
                    Download CV
                  </button>
                </Link>
              </motion.div>

              {/* View My Work Button */}
              <motion.div variants={btnItem}>
                <Link href="#projects">
                  <button className="px-8 py-3 font-semibold text-gray-700 transition-all duration-300 border-2 border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600">
                    View My Work
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
