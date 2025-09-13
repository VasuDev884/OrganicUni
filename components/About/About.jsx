import { motion } from "motion/react";
export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16 bg-white"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-6">About Us</h2>
        <p className="text-lg text-gray-700 mb-2">
          In 2019 Gaurav combined his experience and knowledge to form <span className="font-bold">Organic Universe Consultancy</span>. Our consultancy guides organic producers through every step: evaluation, development, training, and verification, helping you overcome organic certification obstacles, ensure compliance, and access new markets.
        </p>
        <p className="text-md text-gray-600">
          Members keep their education current, so you always get accurate, up-to-date advice.
        </p>
      </motion.div>
    </motion.section>
  );
}
