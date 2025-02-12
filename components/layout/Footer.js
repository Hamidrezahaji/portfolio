import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-white py-12 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-400 text-lg">There's more</p>
        <p className="text-gray-300 text-sm mt-2">
          There’s a lot more, in case you are interested in taking a look at in-depth case studies from my previous projects.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <motion.a
            href="https://www.linkedin.com/in/hamidreza-haji"
            target="_blank"
            className="text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="/resume/Hamidreza_Haji_UXUI_Designer.pdf"
            className="text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
          >
            Download Resume
          </motion.a>
          <motion.a
            href="mailto:your.email@example.com"
            className="text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
          >
            Email
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}