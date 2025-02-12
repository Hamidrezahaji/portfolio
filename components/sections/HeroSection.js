import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa"; 

export default function HeroSection() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#F5F5F5] border-b border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-5xl font-bold text-gray-900">Hi, I’m Hamidreza Haji</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-lg">
        UX/UI Designer with a passion for creating intuitive and user-friendly experiences.
      </p>
      
      {/* دکمه با آوت‌لاین و فلش بالا */}
      <motion.a
        href="#projects"
        className="mt-6 px-6 py-3 border border-gray-900 text-gray-900 rounded-md flex items-center gap-2 text-lg font-medium hover:bg-gray-900 hover:text-white transition duration-200"
        whileHover={{ scale: 1.05 }}
      >
        See My Work
        <FaArrowUp className="text-gray-900 hover:text-white transition duration-200" />
      </motion.a>
    </motion.section>
  );
}