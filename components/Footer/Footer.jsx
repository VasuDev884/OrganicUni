import { motion } from "motion/react";
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-green-600 text-white py-6 text-center"
    >
      &copy; {new Date().getFullYear()} Organic Universe Consultancy. All rights reserved.
    </motion.footer>
  );
}
