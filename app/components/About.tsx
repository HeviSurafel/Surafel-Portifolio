import Link from "next/link";

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a
            difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hevi.jpg" // Replace with your image
                alt="About Me"
                className="w-full h-auto object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-purple-600/10 mix-blend-overlay"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

            {/* Experience badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Crafting Digital Experiences with Code & Creativity
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a passionate Frontend Developer and UI/UX Designer with over
                2 years of experience creating modern, responsive web
                applications. I love turning complex problems into simple,
                beautiful designs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My journey in web development started with curiosity and has
                evolved into a career focused on creating user-centered
                solutions that combine functionality with aesthetic appeal.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">What I Do</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
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
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-purple-50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
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
                </div>

                {/* App Development Card */}
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900 transition-colors duration-300">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-700 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-purple-600 dark:text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* Updated path: Device/Code Icon */}
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
                </div>

                {/* Telegram Bot Card */}
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900 transition-colors duration-300">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-700 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-purple-600 dark:text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* Updated path: Paper Airplane Icon */}
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
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
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
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
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
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/images/mammp_surafel_cv.pdf" download>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Download CV
                </button>
              </Link>
              <Link href="#projects">
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  View My Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
