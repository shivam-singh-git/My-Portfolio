'use client';

import Image from "next/image";
import Typewriter from '@/components/Typewriter';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent relative z-30 tracking-wider leading-tight"
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
                    Hello, my name is Shivam Singh, and I am passionate about exploring what we can achieve with data. Whether it's using data for predictive modeling to analyze trends and forecast the future or understanding how data flows for analysis and inference, I want to learn everything. My deep curiosity about data started with my love for video games, which led me to explore how games work, sparking my early interest in GPUs and making NVIDIA my favorite company. Since then, I've closely followed NVIDIA's latest advancements and have been fascinated by their approach to using deep learning for super-sampling lower-resolution frames—first with CNNs and now with self-attention. This was my biggest inspiration to dive into AI and specifically learn about neural networks. After mastering these concepts, my goal is to explore Generative AI and design transformers that outperform current state-of-the-art models while being optimized for real-world applications.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-violet-600 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </span>
                  Education
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-violet-200 transition-colors duration-300">
                    <h4 className="text-xl font-medium text-slate-800 mb-2">Bachelor of Technology in Information Technology</h4>
                    <p className="text-violet-600 font-medium mb-2">Bhagwan Parshuram Institute of Technology, Rohini (New Delhi)</p>
                    <p className="text-slate-500 text-sm mb-3">September 2021 - July 2025</p>
                    <p className="text-slate-600 font-medium">CGPA: 8.51</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-violet-200 transition-colors duration-300">
                    <h4 className="text-xl font-medium text-slate-800 mb-2">Higher Secondary Education (CBSE)</h4>
                    <p className="text-violet-600 font-medium mb-2">Vandana International School, Dwarka (New Delhi)</p>
                    <p className="text-slate-500 text-sm mb-3">May 2018 - April 2020</p>
                    <p className="text-slate-600 font-medium">Percentage: 84.4%</p>
                  </div>
                </div>
              </div>

              {/* Research */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-violet-600 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  Research Publications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-violet-200 transition-colors duration-300">
                    <h4 className="text-xl font-medium text-slate-800 mb-2">Sentiment Analysis Using Deep Learning</h4>
                    <p className="text-violet-600 font-medium mb-2">ICICC Springer Journal</p>
                    <p className="text-slate-500 text-sm mb-4">February 15, 2024 - Presented at Shaheed Sukhdev College of Engineering</p>
                    <div className="mb-4">
                      <p className="text-sm text-slate-600 mb-2">Authors: Shivam Singh, Saksham Chawla, Aditya Gupta, Rachna Jain</p>
                      <p className="text-sm text-slate-600">Department of Information Technology, Bhagwan Parshuram Institute of Technology</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-slate-700 mb-2">Abstract:</p>
                      <p className="text-sm text-slate-600">
                        Sentiment analysis is vital for deciphering emotions in text, aiding in informed decision-making based on public sentiment. This study examines various machine learning models, focusing on deep learning architectures like GRU, LSTM, CNN-LSTM, and GRU-CNN. The analysis uses an Emotions dataset containing six categories—sadness, joy, fear, anger, love, and surprise—evaluating models based on accuracy, loss, and generalization. The GRU model stood out with a top accuracy of 91%.
                      </p>
                    </div>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-2"></span>
                        Conducted comprehensive analysis of LSTM, GRU, CNN-LSTM, and GRU-CNN architectures for emotion classification
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-2"></span>
                        Achieved 91% accuracy with GRU model, outperforming other architectures
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-2"></span>
                        Evaluated model performance using multiple metrics including accuracy, precision, recall, and F1-score
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-2"></span>
                        Developed novel preprocessing techniques for social media text data
                      </li>
                    </ul>
                    <a href="https://drive.google.com/file/d/1pitQfsmrqiuKMfWSy-RYx1vlYZcphVUZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700 group mt-4">
                      <span>Read Paper</span>
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-violet-600 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  Professional Experience
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-violet-200 transition-colors duration-300">
                    <h4 className="text-xl font-medium text-slate-800 mb-2">Sales Operations Analyst Intern</h4>
                    <p className="text-violet-600 font-medium mb-2">Bosscoder Academy, Noida, Uttar Pradesh</p>
                    <p className="text-slate-500 text-sm mb-4">November 2024 - March 2025</p>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-2"></span>
                        Managed lead distribution and tracking using LeadSquared CRM, boosting sales team productivity
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-2"></span>
                        Developed both live and static dashboards to analyze batch details, yearly sales trends, and lead quality sources
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-2"></span>
                        Streamlined data transformation processes using Power Query, M language, and Python libraries
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-2"></span>
                        Designed and implemented classification frameworks to organize leads by experience, education, and ambiguous data
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-violet-200 transition-colors duration-300">
                    <h4 className="text-xl font-medium text-slate-800 mb-2">AI Engineer (Computer Vision) Intern</h4>
                    <p className="text-violet-600 font-medium mb-2">Codepulse Robotics Private Limited, Bengaluru (Remote)</p>
                    <p className="text-slate-500 text-sm mb-4">October 2024 - November 2024</p>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-2"></span>
                        Assisted in the design, development, and experimentation of computer vision models
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-2"></span>
                        Worked on switching the backbone of YOLOv3 and YOLOv4 from Darknet to EfficientNet B3
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-2"></span>
                        Worked with datasets like COCO for model training, evaluation, and fine-tuning
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-violet-200 transition-colors duration-300">
                    <h4 className="text-xl font-medium text-slate-800 mb-2">Machine Learning Intern</h4>
                    <p className="text-violet-600 font-medium mb-2">SecureVision Tech, Chennai (Remote)</p>
                    <p className="text-slate-500 text-sm mb-4">July 2024 - August 2024</p>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-2"></span>
                        Contributed to the FaceBuddy project, developing advanced face detection models
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-2"></span>
                        Designed and fine-tuned face detection models to enhance performance
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-2"></span>
                        Analyzed and preprocessed large datasets to optimize model training
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-2"></span>
                        Collaborated on integration testing and conducted performance evaluations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-violet-600 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-violet-200 transition-colors duration-300">
                    <h4 className="text-xl font-medium text-slate-800 mb-2">AI Engineer Internship Certificate</h4>
                    <p className="text-violet-600 font-medium mb-4">Codepulse Robotics Private Limited</p>
                    <a href="https://drive.google.com/file/d/1O21Q0iVW1eyD4SWOoJ2DcNMlj8_X4Gdx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700 group">
                      <span>View Certificate</span>
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-violet-200 transition-colors duration-300">
                    <h4 className="text-xl font-medium text-slate-800 mb-2">Machine Learning Internship Certificate</h4>
                    <p className="text-violet-600 font-medium mb-4">SecureVision Tech</p>
                    <a href="https://drive.google.com/file/d/19t30OxOPeuAcyg36DtHDVe_gSSzY1XWL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700 group">
                      <span>View Certificate</span>
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-violet-200 transition-colors duration-300">
                    <h4 className="text-xl font-medium text-slate-800 mb-2">Sales Operations Analyst Offer Letter</h4>
                    <p className="text-violet-600 font-medium mb-4">Bosscoder Academy</p>
                    <a href="https://drive.google.com/file/d/1CT9yrItb8h1uCPmCwq5_5bkmAYb_XF_F/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700 group">
                      <span>View Offer Letter</span>
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-2xl font-semibold text-violet-600 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </span>
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-violet-200 transition-colors duration-300">
                    <h4 className="font-medium text-slate-800 mb-4">Languages & Libraries</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-violet-50 text-violet-600 rounded-full text-sm font-medium">Python</span>
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">SQL</span>
                      <span className="px-3 py-1.5 bg-violet-50 text-violet-600 rounded-full text-sm font-medium">NumPy</span>
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">Pandas</span>
                      <span className="px-3 py-1.5 bg-violet-50 text-violet-600 rounded-full text-sm font-medium">TensorFlow</span>
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">PyTorch</span>
                      <span className="px-3 py-1.5 bg-violet-50 text-violet-600 rounded-full text-sm font-medium">Keras</span>
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">OpenCV</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-violet-200 transition-colors duration-300">
                    <h4 className="font-medium text-slate-800 mb-4">Data Visualization & BI</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-violet-50 text-violet-600 rounded-full text-sm font-medium">Power BI</span>
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">Matplotlib</span>
                      <span className="px-3 py-1.5 bg-violet-50 text-violet-600 rounded-full text-sm font-medium">Seaborn</span>
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">Plotly</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-violet-200 transition-colors duration-300">
                    <h4 className="font-medium text-slate-800 mb-4">Statistics & Analysis</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-violet-50 text-violet-600 rounded-full text-sm font-medium">Hypothesis Testing</span>
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">Regression Analysis</span>
                      <span className="px-3 py-1.5 bg-violet-50 text-violet-600 rounded-full text-sm font-medium">Statistical Modeling</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-violet-200 transition-colors duration-300">
                    <h4 className="font-medium text-slate-800 mb-4">Development & Deployment</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-violet-50 text-violet-600 rounded-full text-sm font-medium">GitHub</span>
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">DVC</span>
                      <span className="px-3 py-1.5 bg-violet-50 text-violet-600 rounded-full text-sm font-medium">Flask</span>
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">Docker</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
          <div className="space-y-8">
            {/* Project 1 */}
            <div className="bg-slate-800 rounded-lg p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Image
                    src="/projects/customer-churn.png"
                    alt="Customer Churn Prediction"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-white mb-2">Customer Churn Prediction</h3>
                  <p className="text-slate-300 mb-4">
                    Built a machine learning model to predict customer churn using XGBoost. 
                    The model analyzes customer behavior patterns and predicts likelihood of churning.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm">XGBoost</span>
                    <span className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm">Scikit-learn</span>
                    <span className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm">Pandas</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-slate-800 rounded-lg p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Image
                    src="/projects/sentiment-analysis.png"
                    alt="Sentiment Analysis"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-white mb-2">Sentiment Analysis with Deep Learning</h3>
                  <p className="text-slate-300 mb-4">
                    Developed a deep learning model for sentiment analysis using LSTM networks. 
                    The model can classify text into positive, negative, or neutral sentiments.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm">TensorFlow</span>
                    <span className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm">Keras</span>
                    <span className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm">NLP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Programming Languages */}
            <div className="bg-slate-800 p-6 rounded-lg border border-violet-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Programming Languages</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-violet-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Python
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-violet-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  JavaScript
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-violet-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  TypeScript
                </li>
              </ul>
            </div>

            {/* Machine Learning */}
            <div className="bg-slate-800 p-6 rounded-lg border border-violet-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Machine Learning</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-violet-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  TensorFlow
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-violet-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  PyTorch
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-violet-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Scikit-learn
                </li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="bg-slate-800 p-6 rounded-lg border border-violet-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Web Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-violet-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  React
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-violet-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Next.js
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-violet-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Tailwind CSS
                </li>
              </ul>
            </div>

            {/* Tools & Others */}
            <div className="bg-slate-800 p-6 rounded-lg border border-violet-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Tools & Others</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-violet-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Git
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-violet-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Docker
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-violet-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  AWS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-12 border border-slate-200">
              <h3 className="text-2xl font-semibold text-violet-600 mb-6 flex items-center">
                <span className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-blue-500 text-white font-medium rounded-lg hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-12 border border-slate-200">
              <h3 className="text-2xl font-semibold text-violet-600 mb-6 flex items-center">
                <span className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Contact Information
              </h3>
              <div className="space-y-8">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-slate-600">
                      <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>shivamsingh8826105@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-600">
                      <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+91 7982691376</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-600">
                      <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>New Delhi, India</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Connect with me</h4>
                  <div className="flex space-x-6">
                    <a href="https://github.com/shivam-singh-git" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-600 transition-colors duration-300">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com/in/ShivamSingh19" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-600 transition-colors duration-300">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
