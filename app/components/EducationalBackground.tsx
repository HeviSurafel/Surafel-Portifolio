// components/EducationalBackground.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  ChevronDown,
  ChevronUp,
  BookOpen,
  School,
} from "lucide-react";

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string[];
  gpa?: string;
  honors?: string[];
  courses?: string[];
  expanded?: boolean;
}

const EducationalBackground = () => {
  const [education, setEducation] = useState<EducationItem[]>([
    {
      id: 1,
      degree: "High School Diploma",
      institution: "Community High School",
      duration: "2015 - 2019",
      location: "Arbaminch, Ethiopia",
      gpa: "—",
      description: [
        "Focused on Science and Mathematics",
        "Active member of the Student Council",
        "Participated in Coding and Robotics Club",
      ],
      honors: ["Honor Roll"],
      courses: ["Mathematics", "Physics", "Chemistry", "Biology"],
      expanded: false,
    },
    {
      id: 2,
      degree: "Bachelor of Science in Software Engineering",
      institution: "Arbaminch University",
      duration: "2019 - 2023",
      location: "Arbaminch, Ethiopia",
      gpa: "3.73/4.0",
      description: [
        "Focused on Software Engineering and Web Development",
        "Completed a capstone project on Real-time Object Detection System",
        "Active member of the Computer Science Club",
      ],
      honors: ["Dean's List"],
      courses: [
        "Data Structures",
        "Algorithms",
        "Database Systems",
        "Software Engineering",
      ],
      expanded: false,
    },
  ]);

  const toggleExpand = (id: number) => {
    setEducation((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, expanded: !item.expanded } : item
      )
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen px-4 py-12 transition-colors duration-300 bg-white dark:bg-gray-900 sm:px-6 lg:px-8" id="education">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-12 h-12 mr-3 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Educational Background
            </h1>
          </div>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            A comprehensive overview of my academic journey and achievements
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute w-1 h-full transform left-8 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400" />

          {education.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative mb-8 ${
                index % 2 === 0
                  ? "md:pr-8 md:ml-auto md:pl-12"
                  : "md:pl-8 md:mr-auto md:pr-12"
              }`}
              style={{ maxWidth: "calc(50% - 32px)" }}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 
                w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 
                ${
                  index === 0
                    ? "bg-blue-500"
                    : index === 1
                    ? "bg-green-500"
                    : "bg-purple-500"
                }`}
              />

              {/* Education Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-6 bg-white border border-gray-200 shadow-lg cursor-pointer dark:bg-gray-800 rounded-2xl dark:border-gray-700"
                onClick={() => toggleExpand(item.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <School className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.degree}
                      </h3>
                    </div>

                    <div className="mb-3">
                      <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                        {item.institution}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item.location}
                      </div>
                      {item.gpa && (
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          GPA: {item.gpa}
                        </div>
                      )}
                    </div>

                    {item.expanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-4"
                      >
                        {/* Description */}
                        <div>
                          <h5 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">
                            Key Accomplishments
                          </h5>
                          <ul className="space-y-1">
                            {item.description.map((desc, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="mr-2 text-blue-500">•</span>
                                <span className="text-gray-700 dark:text-gray-300">
                                  {desc}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Honors */}
                        {item.honors && (
                          <div>
                            <h5 className="flex items-center mb-2 font-semibold text-gray-800 dark:text-gray-200">
                              <Award className="w-4 h-4 mr-2" />
                              Honors & Awards
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {item.honors.map((honor, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 text-sm text-yellow-800 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-yellow-900/30 dark:to-yellow-800/30 dark:text-yellow-200"
                                >
                                  {honor}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Courses */}
                        {item.courses && (
                          <div>
                            <h5 className="flex items-center mb-2 font-semibold text-gray-800 dark:text-gray-200">
                              <BookOpen className="w-4 h-4 mr-2" />
                              Relevant Courses
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {item.courses.map((course, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 text-sm text-blue-800 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/30 dark:text-blue-200"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>

                  <button
                    className="p-2 ml-4 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(item.id);
                    }}
                  >
                    {item.expanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </div>
  );
};

export default EducationalBackground;
