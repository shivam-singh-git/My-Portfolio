import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "Machine Learning Project",
      description: "Developed a predictive analytics model for customer behavior analysis using advanced machine learning techniques. The model achieved 85% accuracy in predicting customer churn.",
      image: "/project1.jpg",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
      github: "https://github.com/yourusername/project1",
      demo: "https://demo-project1.com"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Created an interactive dashboard for sales analytics using Plotly and Dash. The dashboard provides real-time insights into sales trends and customer behavior.",
      image: "/project2.jpg",
      technologies: ["Python", "Plotly", "Dash", "SQL"],
      github: "https://github.com/yourusername/project2",
      demo: "https://demo-project2.com"
    },
    {
      title: "Natural Language Processing",
      description: "Implemented sentiment analysis on customer feedback using NLP techniques. The system processes thousands of reviews to provide actionable insights.",
      image: "/project3.jpg",
      technologies: ["Python", "NLTK", "SpaCy", "Transformers"],
      github: "https://github.com/yourusername/project3",
      demo: "https://demo-project3.com"
    },
    {
      title: "Time Series Analysis",
      description: "Developed a time series forecasting model for stock price prediction using LSTM networks and statistical methods.",
      image: "/project4.jpg",
      technologies: ["Python", "Keras", "Statsmodels", "Pandas"],
      github: "https://github.com/yourusername/project4",
      demo: "https://demo-project4.com"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Data Science Projects</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A collection of my data science projects showcasing machine learning, data analysis, and visualization skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
                  >
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 