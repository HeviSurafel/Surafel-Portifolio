"use client";
import { useState } from "react";

function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillsData = {
    frontend: {
      title: "Frontend Technologies",
      skills: [
        {
          name: "React",
          level: 90,
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          ),
        },
        { name: "Next.js", level: 85, icon: "▲" },
        {
          name: "Flutter",
          level: 85,
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#02569B">
              <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357zm.014 11.072l-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
            </svg>
          ),
        },
        {
          name: "TypeScript",
          level: 80,
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#3178C6">
              <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.576.78.008.035-1.036.73-1.668 1.123-.023.015-.11-.08-.21-.236-.31-.47-.635-.674-1.113-.7-.728-.04-1.197.396-1.197 1.117 0 .212.039.339.129.531.188.403.538.648 1.627 1.151 1.935.904 2.763 1.503 3.277 2.378.651 1.116.781 2.888.332 4.181-.396 1.154-1.438 2.343-2.835 2.997-.522.243-1.754.516-2.44.545-2.412.104-4.123-.615-5.252-2.199-.202-.285-.607-.96-.583-1.008.012-.02.11-.08.22-.131.108-.052.5-.248.868-.435l.668-.34.143.208c.277.412.863.976 1.231 1.175.823.447 1.957.39 2.57-.128.279-.237.4-.523.4-.943 0-.363-.039-.52-.188-.804-.202-.38-.616-.7-1.799-1.378-1.359-.78-1.941-1.258-2.471-1.975-.567-.776-.812-1.848-.632-2.76.299-1.498 1.576-2.572 3.185-2.682.552-.039 1.168.063 1.703.275zm-6.14.12h2.322l.031 1.516.034 1.516h.08c.166-.28.752-.916 1.038-1.126.205-.149.587-.358.78-.433.363-.139.947-.2 1.3-.135.078.015.078.015.039.08l-.039.066-.315.2c-.396.255-.668.48-1.055.895-.33.362-.43.543-.83 1.508l-.28.68h1.848l.299-.71.299-.71h1.543l-1.2 2.711c-.662 1.492-1.2 2.712-1.2 2.715 0 .002-.54.005-1.2.005h-1.2V16.1h-.68c-.374 0-.68-.015-.68-.035 0-.02.08-.224.178-.455l.177-.42H9.76l.299-.71.299-.71h1.844l.28-.68c.4-.965.5-1.146.83-1.508.387-.415.659-.64 1.055-.895l.315-.2.039-.066c.039-.065.039-.065-.039-.08-.353-.065-.937-.004-1.3.135-.193.075-.575.284-.78.433-.286.21-.872.846-1.038 1.126h-.08l-.034-1.516-.031-1.516z" />
            </svg>
          ),
        },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "HTML5", level: 98, icon: "🌐" },
        { name: "CSS3/Tailwind", level: 92, icon: "🎨" },
      ],
    },
    backend: {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 75, icon: "🟢" },
        { name: "Express", level: 70, icon: "🚂" },
        { name: "Python", level: 65, icon: "🐍" },
        { name: "Django", level: 60, icon: "🌿" },
        { name: "MongoDB", level: 70, icon: "🍃" },
        { name: "PostgreSQL", level: 65, icon: "🐘" },
        { name: "Firebase", level: 75, icon: "🔥" },
        { name: "REST APIs", level: 85, icon: "🔗" },
      ],
    },
    tools: {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 88, icon: "📚" },
        { name: "Docker", level: 60, icon: "🐳" },
        { name: "AWS", level: 55, icon: "☁️" },
        { name: "Figma", level: 80, icon: "🎯" },
        { name: "Jest", level: 70, icon: "🃏" },
        { name: "Webpack", level: 65, icon: "📦" },
      ],
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies
          </p>
        </div>

        {/* Skills Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
              }`}
            >
              {skillsData[tab].title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData[activeTab].skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <span className="text-xl">{skill.icon}</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">
                    {skill.name}
                  </span>
                </div>
                <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Skill Level Text */}
              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Advanced</span>
                <span>Expert</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">2+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
