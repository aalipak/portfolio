import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SocialLink } from '../types';

export const Contact: FC = () => {
  const contacts: SocialLink[] = [
    {
      platform: 'GitHub',
      icon: FaGithub,
      link: 'https://github.com/aalipak',
    },
    {
      platform: 'LinkedIn',
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/aamna-ali-b7b128382/',
    },
    {
      platform: 'Email',
      icon: FaEnvelope,
      link: 'mailto:aliaamna12@gmail.com',
    },
    {
      platform: 'Whatsapp',
      icon: FaWhatsapp,
      link: 'https://wa.me/+923141863047',
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-lg mb-8 text-white">
  I'm always open to new opportunities and collaborations. 
  Feel free to reach out if you'd like to work together!
</p>

        </motion.div>

        <div className="flex justify-center space-x-8">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.platform}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-4xl text-primary hover:text-secondary"
            >
              <contact.icon />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}