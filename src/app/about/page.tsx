export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          AI Engineer and Machine Learning Specialist with a focus on Computer Vision and Deep Learning
        </p>

        {/* Professional Background */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Sales Operations Analyst Intern</h3>
              <p className="text-gray-600 mb-2">Bosscoder Academy • Nov 2024 - Mar 2025</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Managed lead distribution and tracking using LeadSquared CRM, boosting sales team productivity</li>
                <li>Developed live and static dashboards for batch details and sales trends analysis</li>
                <li>Streamlined data transformation using Power Query, M language, and Python</li>
                <li>Implemented classification frameworks for lead segmentation using Python and Pandas</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">AI Engineer (Computer Vision) Intern</h3>
              <p className="text-gray-600 mb-2">Codepulse Robotics Private Limited • Oct 2024 - Nov 2024</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Developed computer vision models for object detection and segmentation</li>
                <li>Enhanced YOLOv3 and YOLOv4 models by implementing EfficientNet B3 backbone</li>
                <li>Worked with COCO dataset for model training and evaluation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Machine Learning Intern</h3>
              <p className="text-gray-600 mb-2">SecureVision Tech • July 2024 - Aug 2024</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Contributed to FaceBuddy project, developing face detection models</li>
                <li>Fine-tuned models for enhanced performance and reliability</li>
                <li>Conducted performance evaluations and integration testing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Languages & Libraries</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-24 text-gray-600">Python</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[95%]"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-24 text-gray-600">TensorFlow</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[90%]"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-24 text-gray-600">PyTorch</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[85%]"></div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Tools & Frameworks</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-24 text-gray-600">OpenCV</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[90%]"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-24 text-gray-600">Scikit-learn</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[95%]"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-24 text-gray-600">Power BI</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[85%]"></div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-24 text-gray-600">Git</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[90%]"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-24 text-gray-600">Docker</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[85%]"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-24 text-gray-600">Flask</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[85%]"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Technology in Information Technology</h3>
              <p className="text-gray-600">Bhagwan Parshuram Institute of Technology • 2021 - 2025</p>
              <p className="text-gray-600 mt-2">CGPA: 8.51</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Higher Secondary Education (CBSE)</h3>
              <p className="text-gray-600">Vandana International School • 2018 - 2020</p>
              <p className="text-gray-600 mt-2">Percentage: 84.4%</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 