import { motion } from 'framer-motion';
import { IconBaseProps } from 'react-icons';

type DynamicIcon = React.ComponentType<IconBaseProps>;

interface AboutSectionProps {
  Icons: {
    DocumentText: DynamicIcon;
    Photograph: DynamicIcon;
    Share: DynamicIcon;
  };
}

export default function AboutSection({ Icons }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Icons.DocumentText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Upload Your Content</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Drop in your YouTube video, blog post, PDF, or any other content. Our AI analyzes 
                    and understands your message.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-pink-100 dark:bg-pink-900 rounded-lg">
                  <Icons.Photograph className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. AI Magic Happens</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our AI creates platform-specific content, generates matching visuals, and optimizes 
                    everything for maximum engagement.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Icons.Share className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Share & Grow</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Review, schedule, and share your content across platforms. Track performance and 
                    optimize your reach.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.div
                className="bg-gradient-to-br from-purple-600 to-pink-600 h-[500px] rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <form className="w-full max-w-md space-y-4">
                  <input
                    type="text"
                    placeholder="Enter your content URL..."
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-white dark:bg-gray-900 text-purple-600 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Rollout
                  </motion.button>
                </form>
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <p className="text-sm font-medium">Live Processing</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Processing content in real-time...
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 