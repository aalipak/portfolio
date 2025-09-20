import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
  <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-5xl md:text-7xl font-bold mb-6 text-primary flex justify-center items-center"
>
  Hi, I'm{' '}
  <span className="ml-2 flex">
  
    <span className="flex">
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-pink-500"
      >
        A
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-purple-500 ml-1"
      >
        amna
      </motion.span>
    </span>

 
    <motion.span
      initial={{ x: -190 }}
      animate={{ x: 10}} 
      transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
      className="text-pink-500 ml-2"
    >
      Ali
    </motion.span>
  </span>
</motion.h1>




        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          Software Developer & Creative Problem Solver
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          Details Guarded with Cat Eyes
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            onClick={() => scrollToSection('projects')}
            className="inline-block px-8 py-3 rounded-full text-white font-semibold mr-4 bg-primary  hover:bg-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          
          <motion.a
  onClick={() => scrollToSection('contact')}
  className="inline-block px-8 py-3 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Get In Touch
</motion.a>

        </motion.div>
      </div>
    </section>
  );
}