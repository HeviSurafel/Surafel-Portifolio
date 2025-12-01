"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, easeOut, AnimatePresence } from 'framer-motion';

function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const heroVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };
 const fullText = "Welcome to My"; // full text to type
  const [letter, setLetter] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setLetter((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 150); // typing speed in ms
      
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);
  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="flex items-center min-h-screen px-4 bg-white dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="grid items-center w-full grid-cols-1 gap-8 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-12">
          {/* Loading skeleton */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
            <div className="flex order-2 gap-4 lg:flex-col lg:order-1">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="w-12 h-12 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse"></div>
              ))}
            </div>
            <div className="flex-1 order-1 space-y-6 text-gray-800 dark:text-white lg:order-2">
              <div className="h-12 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
              <div className="h-20 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
              <div className="flex gap-4 pt-4">
                <div className="w-32 h-12 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse"></div>
                <div className="w-32 h-12 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-gray-200 h-96 dark:bg-gray-700 rounded-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="flex items-center min-h-screen px-4 py-5 transition-colors duration-300 bg-white dark:bg-gray-900 sm:px-6 lg:px-8">
      <AnimatePresence mode="wait">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="grid items-center w-full grid-cols-1 gap-8 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-12"
        >
          {/* Left side - Social media icons and content */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
            {/* Social Media Icons - Vertical Column */}
            <motion.div 
              variants={itemVariant}
              className="flex order-2 gap-4 lg:flex-col lg:order-1"
            >
              <a
                href="https://x.com/SurafelWond?t=nc5w804hgjB2U36AeskP6Q&s=09"
                className="p-3 text-gray-600 transition-colors duration-300 rounded-full dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/hevi590?igsh=azM0c210aXBlNnZr"
                className="p-3 text-gray-600 transition-colors duration-300 rounded-full dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/surafel-wondu-829820210/"
                className="p-3 text-gray-600 transition-colors duration-300 rounded-full dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com/HeviSurafel"
                className="p-3 text-gray-600 transition-colors duration-300 rounded-full dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </motion.div>

            {/* Hero Text Content */}
            <motion.div 
              variants={itemVariant}
              className="flex-1 order-1 space-y-6 text-gray-800 dark:text-white lg:order-2"
            >
              <motion.h1 
                variants={itemVariant}
                className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              >
               {letter}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Portfolio
                </span>
              </motion.h1>
              <motion.p 
                variants={itemVariant}
                className="text-xl text-gray-600 sm:text-2xl dark:text-gray-300"
              >
                Frontend Developer & UI/UX Designer
              </motion.p>
              <motion.p 
                variants={itemVariant}
                className="max-w-lg text-lg leading-relaxed text-gray-600 dark:text-gray-300"
              >
                Creating beautiful and functional web experiences with modern technologies 
                and user-centered design principles.
              </motion.p>
              <motion.div 
                variants={itemVariant}
                className="flex flex-col gap-4 pt-4 sm:flex-row"
              >
                <Link href="#contact">
                  <button className="px-8 py-3 font-semibold text-white transition-all duration-300 transform bg-blue-600 rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg">
                    Get In Touch
                  </button>
                </Link>
                <Link href="#projects">
                  <button className="px-8 py-3 font-semibold text-gray-700 transition-all duration-300 border-2 border-gray-300 rounded-full dark:border-gray-600 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400">
                    View Projects
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <motion.div 
            variants={itemVariant}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              <div className="relative overflow-hidden shadow-xl rounded-2xl">
                <Image
                  src="/images/surafel.jpg"
                  alt="Surafel - Frontend Developer & UI/UX Designer"
                  width={500}
                  height={500}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
              
              {/* Optional decorative elements */}
              <div className="absolute w-24 h-24 bg-blue-100 rounded-full -top-4 -right-4 dark:bg-blue-900 mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute w-32 h-32 delay-1000 bg-purple-100 rounded-full -bottom-4 -left-4 dark:bg-purple-900 mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Hero;