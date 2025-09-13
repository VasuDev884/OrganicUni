import { motion } from "motion/react";
export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-white"
      viewport={{ once: true }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h2>
        <p className="mb-6 text-gray-800">Get organic certified and grow your business. Reach out for expert guidance.</p>
        <form className="flex flex-col gap-4">
          <motion.input type="text" required placeholder="Name" className="border-b-2 border-green-700 py-2"
            whileFocus={{ scale: 1.03, borderColor: "#34d399" }}
          />
          <motion.input type="email" required placeholder="Email" className="border-b-2 border-green-700 py-2"
            whileFocus={{ scale: 1.03, borderColor: "#34d399" }}
          />
          <motion.textarea required placeholder="Your Message" className="border-b-2 border-green-700 py-2 min-h-[100px]"
            whileFocus={{ scale: 1.01, borderColor: "#34d399" }}
          />
          <motion.button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded-lg shadow hover:bg-green-800 font-bold transition"
            whileHover={{ scale: 1.08, backgroundColor: "#065f46" }}
            whileTap={{ scale: 0.96 }}
          >Send Message</motion.button>
        </form>
      </div>
    </motion.section>
  );
}
