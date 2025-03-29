import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "Tweet Recognition & Analysis",
      image: "/TRT.webp",
      description: "Deep learning models for emotion classification using LSTM, GRU, and CNN architectures. Achieved 89% accuracy in sentiment analysis.",
      tags: ["TensorFlow", "Deep Learning", "NLP"],
      link: "https://github.com/shivam-singh-git/tweet-recognition"
    },
    {
      title: "Brain Tumor Detection",
      image: "/BTD.jpg",
      description: "CNN-based model achieving 93% accuracy in detecting brain tumors from MRI scans. Implemented using Keras and TensorFlow.",
      tags: ["Keras", "CNN", "Computer Vision"],
      link: "https://github.com/shivam-singh-git/brain-tumor-detection"
    },
    {
      title: "Stock Market Prediction",
      image: "/stocks.jpg",
      description: "LSTM-based model for stock price prediction using historical data and sentiment analysis from financial news.",
      tags: ["PyTorch", "Time Series", "NLP"],
      link: "https://github.com/shivam-singh-git/stock-prediction"
    },
    {
      title: "Object Detection System",
      image: "/object-detection.jpg",
      description: "Real-time object detection system using YOLOv5 with custom training for specific object classes.",
      tags: ["PyTorch", "YOLO", "Computer Vision"],
      link: "https://github.com/shivam-singh-git/object-detection"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Tweet Recognition Project */}
          <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 hover:border-red-500/30 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-slate-100">Tweet Recognition</h3>
              <p className="text-slate-300 mb-6">
                A deep learning project focused on emotion classification in tweets using LSTM, GRU, and CNN architectures.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-red-400">Key Features</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-1">
                    <li>Multi-class emotion classification</li>
                    <li>LSTM and GRU implementations</li>
                    <li>CNN for text classification</li>
                    <li>Data preprocessing pipeline</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-rose-400">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm border border-red-700/30">
                      TensorFlow
                    </span>
                    <span className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm border border-red-700/30">
                      Keras
                    </span>
                    <span className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm border border-red-700/30">
                      NLP
                    </span>
                    <span className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm border border-red-700/30">
                      Python
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brain Tumor Detection */}
          <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 hover:border-rose-500/30 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-slate-100">Brain Tumor Detection</h3>
              <p className="text-slate-300 mb-6">
                CNN-based model achieving 93% accuracy in detecting brain tumors from MRI scans.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-red-400">Key Features</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-1">
                    <li>MRI scan preprocessing</li>
                    <li>Custom CNN architecture</li>
                    <li>Data augmentation pipeline</li>
                    <li>93% detection accuracy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-rose-400">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-rose-900/30 text-rose-300 rounded-full text-sm border border-rose-700/30">
                      PyTorch
                    </span>
                    <span className="px-3 py-1 bg-rose-900/30 text-rose-300 rounded-full text-sm border border-rose-700/30">
                      OpenCV
                    </span>
                    <span className="px-3 py-1 bg-rose-900/30 text-rose-300 rounded-full text-sm border border-rose-700/30">
                      NumPy
                    </span>
                    <span className="px-3 py-1 bg-rose-900/30 text-rose-300 rounded-full text-sm border border-rose-700/30">
                      Pandas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Face Recognition */}
          <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 hover:border-red-500/30 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-slate-100">Face Recognition System</h3>
              <p className="text-slate-300 mb-6">
                Real-time face detection and recognition system using deep learning and computer vision.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-red-400">Key Features</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-1">
                    <li>Real-time face detection</li>
                    <li>Face embedding generation</li>
                    <li>Multi-face tracking</li>
                    <li>95% recognition accuracy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-rose-400">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm border border-red-700/30">
                      TensorFlow
                    </span>
                    <span className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm border border-red-700/30">
                      OpenCV
                    </span>
                    <span className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm border border-red-700/30">
                      dlib
                    </span>
                    <span className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm border border-red-700/30">
                      Python
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Object Detection */}
          <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 hover:border-rose-500/30 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-slate-100">Real-time Object Detection</h3>
              <p className="text-slate-300 mb-6">
                YOLO-based object detection system for real-time video streams and images.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-red-400">Key Features</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-1">
                    <li>Real-time object detection</li>
                    <li>Multiple object tracking</li>
                    <li>Custom model training</li>
                    <li>Video stream processing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-rose-400">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-rose-900/30 text-rose-300 rounded-full text-sm border border-rose-700/30">
                      YOLO
                    </span>
                    <span className="px-3 py-1 bg-rose-900/30 text-rose-300 rounded-full text-sm border border-rose-700/30">
                      OpenCV
                    </span>
                    <span className="px-3 py-1 bg-rose-900/30 text-rose-300 rounded-full text-sm border border-rose-700/30">
                      PyTorch
                    </span>
                    <span className="px-3 py-1 bg-rose-900/30 text-rose-300 rounded-full text-sm border border-rose-700/30">
                      Python
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 