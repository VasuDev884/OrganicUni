import { motion } from "motion/react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const navItems = [
    {name: "AdminLogin", path: "/AdminLogin"},
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "services", path: "/services" },
    { name: "certifications", path: "/certifications" },
    { name: "clients", path: "/clients" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="bg-green-600 text-white px-6 py-4 flex justify-between items-center fixed w-full z-20 shadow-lg"
    >
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="text-2xl font-extrabold tracking-wide"
      >
        <Link to="/">Organic Universe Consultancy</Link>
      </motion.div>
      <div className="flex space-x-4 font-semibold">
        {navItems.map(({ name, path }, i) => (
          <motion.div
            key={name}
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * i + 0.3, duration: 0.6 }}
          >
            <Link
              to={path}
              className="hover:text-yellow-200"
              style={{ textTransform: "capitalize" }}
            >
              {name}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}
