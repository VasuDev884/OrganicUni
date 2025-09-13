import { motion } from "motion/react";
const clients = [
  "ITC Agribusiness Limited.",
  "Chandigarh Agritech (Baddi)",
  "Body Cupid (wow), Zirakpur, Bangalore",
  "Manohar food products (Jammu)",
  "Planet Ayurveda (Chandigarh)",
  "Thakur Farms (Himachal Pradesh)",
  "Bhagwati Agro (Gujarat)",
  "Wild Himalayas (Himachal Pradesh)",
  "Individual farming projects (Himachal & Maharashtra)",
  "Earthy Foods-Haldwani (Uttrakhand)",
  "Landmark Traders and Exporters (Mumbai)",
  "Diwan Jaggeries (M.P.)"
];
export default function Clients() {
  return (
    <motion.section
      id="clients"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="py-16 bg-green-50"
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Our Satisfied Clients</h2>
        <ul className="grid md:grid-cols-2 gap-y-3 text-lg">
          {clients.map((client,i) => (
            <motion.li
              key={client}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i*0.06 }}
              className="mb-2 text-green-900"
              viewport={{ once: true }}
              whileHover={{ color: "#f59e42", scale: 1.04 }}
            >
              {i+1}. {client}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
