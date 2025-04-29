export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Record<string, Project> = {
  'tweet-recognition': {
    title: 'Tweet Recognition & Analysis',
    description: 'Deep learning models for emotion classification using LSTM, GRU, and CNN architectures. Achieved 89% accuracy in sentiment analysis.',
    image: '/projects/tweet-recognition.png',
    technologies: ['TensorFlow', 'Deep Learning', 'NLP'],
    githubUrl: 'https://github.com/shivam-singh-git/tweet-recognition',
    demoUrl: 'https://tweet-recognition-demo.vercel.app'
  },
  'brain-tumor-detection': {
    title: 'Brain Tumor Detection',
    description: 'CNN-based model achieving 93% accuracy in detecting brain tumors from MRI scans. Implemented using Keras and TensorFlow.',
    image: '/projects/brain-tumor.png',
    technologies: ['Keras', 'CNN', 'Computer Vision'],
    githubUrl: 'https://github.com/shivam-singh-git/brain-tumor-detection'
  },
  'stock-prediction': {
    title: 'Stock Market Prediction',
    description: 'LSTM-based model for stock price prediction using historical data and sentiment analysis from financial news.',
    image: '/projects/stock-prediction.png',
    technologies: ['PyTorch', 'Time Series', 'NLP'],
    githubUrl: 'https://github.com/shivam-singh-git/stock-prediction'
  },
  'object-detection': {
    title: 'Object Detection System',
    description: 'Real-time object detection system using YOLOv5 with custom training for specific object classes.',
    image: '/projects/object-detection.png',
    technologies: ['PyTorch', 'YOLO', 'Computer Vision'],
    githubUrl: 'https://github.com/shivam-singh-git/object-detection'
  }
}; 