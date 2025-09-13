import { motion } from "motion/react";
const certifications = [
  { name: "KOR", logo: "/images/kor.png" },
  { name: "PGS", logo: "/images/pgs.png" },
  { name: "Fairtrade", logo: "/images/fairtrade.png" },
  { name: "Rainforest", logo: "/images/rainforest.png" },
  { name: "Demeter", logo: "/images/demeter.png" },
  { name: "Naturland", logo: "/images/naturland.png" },
  { name: "BioSuisse", logo: "/images/biosuisse.png" },
  { name: "KRAV", logo: "/images/krav.png" },
  { name: "JAS", logo: "/images/jas.png" },
];
export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="py-16 bg-white"
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Certification Standards</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              whileHover={{ scale: 1.12 }}
              initial={{ scale: 0.88, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay:i*0.06 }}
              className="flex flex-col items-center"
              viewport={{ once: true }}
            >
              <img src={cert.logo} alt={cert.name} className="h-16 w-auto mb-2 rounded shadow" />
              <span className="font-medium text-green-700 mt-1">{cert.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
