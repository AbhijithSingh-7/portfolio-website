import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const App = () => (
  <div className="p-10 max-w-5xl mx-auto bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-lg shadow-lg">
    <motion.div className="text-center my-16"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1 className="text-7xl font-extrabold text-purple-700 tracking-wide">Abhijith Singh Thakur</h1>
      <p className="text-3xl text-gray-800 mt-4 font-light">Senior Data Engineer | Cloud Specialist | ML Enthusiast</p>
      <div className="flex justify-center gap-10 text-5xl mt-6">
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-500"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-500"><FaLinkedin /></a>
        <a href="mailto:abhijthsnght@gmail.com" className="text-gray-700 hover:text-purple-500"><FaEnvelope /></a>
      </div>
    </motion.div>

    <motion.section className="my-16 p-8 rounded-xl bg-white shadow-md" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <h2 className="text-5xl font-bold text-purple-600">About Me</h2>
      <p className="text-xl mt-4 text-gray-700 leading-relaxed">Innovative and passionate Data Engineer with 5 years of experience in cloud-based data architectures, big data processing, and machine learning solutions. I specialize in crafting efficient ETL pipelines and optimizing large-scale data workflows.</p>
    </motion.section>

    <motion.section className="my-16 p-8 rounded-xl bg-white shadow-md" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <h2 className="text-5xl font-bold text-purple-600">Skills</h2>
      <ul className="grid grid-cols-2 gap-4 mt-6 text-xl text-gray-800 font-light">
        <li>Python, R, Java, C, C++</li>
        <li>AWS, Azure, GCP</li>
        <li>Data Warehousing (Redshift, Snowflake)</li>
        <li>Apache Kafka, Spark, Airflow</li>
        <li>Machine Learning: TensorFlow, PyTorch</li>
        <li>ETL & Data Pipelines</li>
      </ul>
    </motion.section>

    <motion.section className="my-16 p-8 rounded-xl bg-white shadow-md" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <h2 className="text-5xl font-bold text-purple-600">Projects & Experience</h2>
      <div className="space-y-8 mt-6">
        <div>
          <h3 className="text-3xl font-semibold text-purple-500">ERP State of Texas (Data Engineer II)</h3>
          <p className="text-lg text-gray-700">Designed scalable data lakes, automated ETL pipelines, and improved reporting efficiency.</p>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-purple-500">Mars (Data Engineer)</h3>
          <p className="text-lg text-gray-700">Optimized cloud migration from Azure to AWS, ensuring 25% faster data retrieval.</p>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-purple-500">Molina Healthcare (Data Engineer)</h3>
          <p className="text-lg text-gray-700">Implemented secure healthcare ETL pipelines, adhering to HIPAA regulations.</p>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-purple-500">Zerodha (Data Engineer)</h3>
          <p className="text-lg text-gray-700">Built real-time financial data processing systems for high-frequency trading.</p>
        </div>
      </div>
    </motion.section>

    <motion.section className="my-16 p-8 rounded-xl bg-white shadow-md" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <h2 className="text-5xl font-bold text-purple-600">Education</h2>
      <p className="text-2xl text-gray-700">Master of Science in Computer Science - Lamar University</p>
    </motion.section>

    <motion.section className="my-16 p-8 rounded-xl bg-white shadow-md" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <h2 className="text-5xl font-bold text-purple-600">Contact</h2>
      <p className="text-xl text-gray-700">Email: abhijthsnght@gmail.com</p>
      <p className="text-xl text-gray-700">Phone: (503) 749-5437</p>
      <p className="text-xl text-gray-700">LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" className="text-purple-500">Your Profile</a></p>
    </motion.section>
  </div>
);

export default App;
