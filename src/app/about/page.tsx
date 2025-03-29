export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
          About Me
        </h1>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-red-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-slate-100">AI Engineer Intern</h3>
              <p className="text-red-400 mb-4">Codepulse Robotics Private Limited • 2023</p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Developed and implemented computer vision algorithms for real-time object detection</li>
                <li>Achieved 95% accuracy in facial recognition system using deep learning</li>
                <li>Optimized model performance and reduced inference time by 40%</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-rose-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-slate-100">Machine Learning Intern</h3>
              <p className="text-rose-400 mb-4">SecureVision Tech • 2023</p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Built and trained deep learning models for image classification tasks</li>
                <li>Implemented data augmentation techniques to improve model robustness</li>
                <li>Created automated testing pipelines for model validation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-red-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-red-400">Languages</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Python</li>
                <li>JavaScript/TypeScript</li>
                <li>SQL</li>
                <li>C++</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-rose-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-rose-400">Frameworks & Libraries</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>OpenCV</li>
                <li>scikit-learn</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-red-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-red-400">Tools & Technologies</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-red-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-red-400">AI Engineer Internship Certificate</h3>
              <p className="text-slate-300 mb-4">Codepulse Robotics Private Limited</p>
              <a href="#" className="text-slate-300 hover:text-red-400 transition-colors duration-300 flex items-center gap-2">
                View Certificate <span>→</span>
              </a>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-rose-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-rose-400">Machine Learning Internship Certificate</h3>
              <p className="text-slate-300 mb-4">SecureVision Tech</p>
              <a href="#" className="text-slate-300 hover:text-rose-400 transition-colors duration-300 flex items-center gap-2">
                View Certificate <span>→</span>
              </a>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-red-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-red-400">Sales Operations Analyst Offer Letter</h3>
              <p className="text-slate-300 mb-4">Bosscoder Academy</p>
              <a href="#" className="text-slate-300 hover:text-red-400 transition-colors duration-300 flex items-center gap-2">
                View Offer Letter <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-red-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-slate-100">Bachelor of Technology in Computer Science</h3>
              <p className="text-red-400 mb-1">Lovely Professional University</p>
              <p className="text-slate-300">2020 - 2024</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-rose-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-slate-100">Higher Secondary Education</h3>
              <p className="text-rose-400 mb-1">Jawahar Navodaya Vidyalaya</p>
              <p className="text-slate-300">2018 - 2020</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 