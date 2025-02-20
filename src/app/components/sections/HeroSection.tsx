import { motion } from 'framer-motion';
import { AnimationControls } from 'framer-motion';
import { Dispatch, SetStateAction, FormEvent } from 'react';
import { IconBaseProps } from 'react-icons';

type DynamicIcon = React.ComponentType<IconBaseProps>;

interface HeroSectionProps {
  logoControls: AnimationControls;
  searchUrl: string;
  setSearchUrl: Dispatch<SetStateAction<string>>;
  handleSearch: (e: FormEvent) => void;
  Icons: {
    Github: DynamicIcon;
    Linkedin: DynamicIcon;
    Mail: DynamicIcon;
    Twitter: DynamicIcon;
  };
}

export default function HeroSection({ 
  logoControls, 
  searchUrl, 
  setSearchUrl, 
  handleSearch,
  Icons 
}: HeroSectionProps) {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <div className="inline-block mb-4">
          <motion.span
            className="px-4 py-1 rounded-full text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            ✨ AI-Powered Content Creation
          </motion.span>
        </div>
        <motion.h1
          initial={{ scaleX: 1 }}
          animate={logoControls}
          onHoverStart={() => {
            logoControls.start({
              scaleX: 1.15,
              transition: { duration: 0.6, ease: "easeInOut" }
            });
          }}
          onHoverEnd={() => {
            logoControls.start({
              scaleX: 1,
              transition: { type: "spring", stiffness: 500, damping: 20 }
            });
          }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6"
        >
          Rollout.ai
        </motion.h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4">
          Transform Any Content into Engaging Social Media Posts
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Upload once, share everywhere. Let AI create perfectly tailored content for each platform, 
          complete with eye-catching visuals and optimized messaging.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold"
          >
            Start Creating Free
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-lg font-semibold hover:border-purple-500 dark:hover:border-purple-400"
          >
            Watch Demo
          </motion.button>
        </div>
        <div className="flex space-x-6 justify-center">
          {[Icons.Github, Icons.Linkedin, Icons.Twitter, Icons.Mail].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 