'use client';

import Typewriter from '@/components/Typewriter';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative w-full min-h-screen pt-24 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 via-blue-500/30 to-violet-500/30 animate-gradient z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.5),rgba(255,255,255,0))] z-10"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-blue-600 to-violet-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
                <div className="relative bg-white rounded-lg p-3">
                  <div className="flex items-center space-x-1">
                    <span className="text-5xl font-black bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent animate-pulse-slow">S</span>
                    <span className="text-5xl font-black bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent animate-pulse-slow delay-150">S</span>
                  </div>
                </div>
              </div>
            </div>
            <Typewriter 
              text="Hello, I'm Shivam Singh! Welcome to My Portfolio!" 
              speed={50}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent tracking-wider leading-tight"
            />
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              AI Engineer & Machine Learning Specialist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl hover:from-violet-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get in Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a href="#projects" className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-slate-700 bg-white rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200">
                Explore Projects
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl p-12 border border-slate-200">
              {/* Professional Summary */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-violet-600 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  Professional Summary
                </h3>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-violet-200 transition-colors duration-300">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Hello, my name is Shivam Singh, and I am passionate about exploring what we can achieve with data. Whether it&apos;s using data for predictive modeling to analyze trends and forecast the future or understanding how data flows for analysis and inference, I want to learn everything. My deep curiosity about data started with my love for video games, which led me to explore how games work, sparking my early interest in GPUs and making NVIDIA my favorite company. Since then, I&apos;ve closely followed NVIDIA&apos;s latest advancements and have been fascinated by their approach to using deep learning for super-sampling lower-resolution frames—first with CNNs and now with self-attention. This was my biggest inspiration to dive into AI and specifically learn about neural networks. After mastering these concepts, my goal is to explore Generative AI and design transformers that outperform current state-of-the-art models while being optimized for real-world applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="text-center text-slate-500">[Projects will be listed here]</div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="text-center text-slate-500">[Skills will be listed here]</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="text-center text-slate-500">[Contact form or info will be here]</div>
        </div>
      </section>
    </div>
  );
}
