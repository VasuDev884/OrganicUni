import { motion } from "motion/react";
const services = [
  { title: "Food Processing Consultation", description: "Solutions for new ventures, plant setup, and commissioning. 25+ years experience for food product manufacturers.", icon: "/images/consulting.png" },
  { title: "Product Development", description: "Plant setup, new product development, machinery consultation, third-party audits.", icon: "/images/productdev.png" },
  { title: "Certification Support", description: "Gap assessment, organic system plan, application prep, employee training.", icon: "/images/certsupport.png" },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="py-16 bg-green-50"
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((srv,i) => (
            <motion.div
              key={srv.title}
              whileHover={{ scale: 1.06, boxShadow: "0 4px 24px #65a30d33" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay:i*0.15 }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
              viewport={{ once: true }}
            >
              <img src={srv.icon} alt={srv.title} className="h-16 w-16 mb-4 rounded-full border-2 border-green-200 shadow" />
              <h3 className="text-lg font-bold text-green-900 mb-1">{srv.title}</h3>
              <p className="text-gray-600">{srv.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
