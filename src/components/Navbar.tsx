import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-bold text-primary hover:text-secondary">
              theAali Touch 
            </span>
       

<span className="text-2xl font-bold text-secondary hover:text-primary">
  ₍^
  <motion.span
    animate={{ color: ["#ec4899", "yellow", "#ec4899"] }}
    transition={{ duration: 1, repeat: Infinity }}
  >
    .{" "} 
  </motion.span>
  <motion.span
    animate={{ color: ["#ec4899", "yellow", "#ec4899"] }}
    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
  >
    .
  </motion.span>
  ^₎
</span>

          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-lg font-medium text-gray-300 hover:text-primary"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}