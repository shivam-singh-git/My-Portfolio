import React from 'react';
import Link from 'next/link';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const projects = {
  'ai-image-generator': {
    title: 'AI Image Generator',
    year: '2024',
    description: 'A powerful AI image generation tool using Stable Diffusion. Create unique images from text descriptions with advanced customization options.',
    longDescription: `The AI Image Generator is a sophisticated web application that leverages the power of Stable Diffusion to create unique images from text descriptions. 
    Features include:
    • Advanced prompt engineering with negative prompts
    • Multiple model selection
    • Image size customization
    • Real-time generation preview
    • Image history and favorites
    • Responsive design for all devices`,
    technologies: ['React', 'Next.js', 'Stable Diffusion API', 'Tailwind CSS'],
    github: 'https://github.com/shivam-singh-git/ai-image-generator',
    demo: 'https://ai-image-generator-demo.vercel.app',
    image: '/projects/ai-image-generator.png'
  },
  'portfolio-website': {
    title: 'Portfolio Website',
    year: '2024',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations and a clean design.',
    longDescription: `This portfolio website showcases my work and skills in a modern, interactive way. 
    Features include:
    • Responsive design for all devices
    • Smooth scroll animations
    • Dynamic project showcase
    • Contact form with EmailJS integration
    • Modern UI with gradient effects
    • Typewriter animations
    • SEO optimized`,
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'EmailJS'],
    github: 'https://github.com/shivam-singh-git/portfolio',
    demo: 'https://shivam-singh.vercel.app',
    image: '/projects/portfolio.png'
  },
  'customer-churn-prediction': {
    title: 'Customer Churn Prediction',
    year: '2024',
    description: 'An interactive dashboard for predicting customer churn using machine learning. Built with Python, Streamlit, and XGBoost.',
    longDescription: `A sophisticated web application that helps businesses predict and prevent customer churn using advanced machine learning techniques.
    
    Key Features:
    • Real-time churn prediction using XGBoost
    • Interactive data visualization with Plotly
    • Comprehensive model performance metrics
    • User-friendly interface built with Streamlit
    • Detailed customer insights and recommendations
    
    Technical Details:
    • Achieved 85% accuracy in churn prediction
    • Implemented feature importance analysis
    • Built responsive and interactive dashboards
    • Developed automated ML pipeline
    • Integrated real-time prediction capabilities`,
    technologies: ['Python', 'Streamlit', 'XGBoost', 'Plotly', 'Scikit-learn'],
    github: 'https://github.com/shivam-singh-git/customer-churn-prediction',
    demo: 'https://customer-churn-prediction.streamlit.app',
    image: '/projects/customer-churn.png'
  },
  // Add other projects here...
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-8">Project Not Found</h1>
          <Link href="/" className="text-violet-600 hover:text-violet-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-violet-600 hover:text-violet-700 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Source Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">{project.title}</h1>
              <p className="text-slate-600 mb-6">{project.year}</p>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 mb-6">{project.description}</p>
                <div className="space-y-4">
                  {project.longDescription.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 