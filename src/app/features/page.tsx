"use client";

import { motion } from "framer-motion";
import { BiMoviePlay } from "react-icons/bi";
import { HiOutlinePhotograph, HiOutlineShare, HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";

export default function FeaturesPage() {
  const router = useRouter();

  const features = [
    {
      icon: BiMoviePlay,
      title: "Multi-Format Support",
      description: "Transform any type of content into engaging social media posts. Support for videos, articles, PDFs, and more.",
      benefits: [
        "Automatic content analysis",
        "Cross-platform optimization",
        "Format conversion",
        "Real-time processing"
      ],
      path: "multi-format",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: HiOutlinePhotograph,
      title: "AI Content Creation",
      description: "Let AI transform your content into platform-optimized posts with intelligent analysis and optimization.",
      benefits: [
        "Platform-specific formatting",
        "Tone matching",
        "Hashtag generation",
        "Engagement optimization"
      ],
      path: "ai-content",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: HiOutlineShare,
      title: "Rich Media Generation",
      description: "Create stunning visuals and graphics to support your message across all platforms.",
      benefits: [
        "Custom image generation",
        "Infographic creation",
        "Quote cards",
        "Thumbnail optimization"
      ],
      path: "rich-media",
      gradient: "from-pink-500 to-red-500"
    }
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
        >
          <HiArrowLeft className="w-5 h-5" /> Back
        </Link>
      </motion.div>
      
      {/* Sidebar Indicator Pill */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed left-3 top-1/2 -translate-y-1/2 z-10"
      >
        <motion.div
          animate={{
            x: [0, 2, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-1 h-12 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer group hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
        >
          <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Open Menu
          </span>
        </motion.div>
      </motion.div>
      
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-3"
            >
              Platform Features
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Explore our comprehensive suite of AI-powered tools designed to transform your content strategy
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => router.push(`/features/${feature.path}`)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow h-full"
              >
                <div className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="space-y-4 flex-1">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} text-white`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {feature.title}
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                          {feature.description}
                        </p>
                      </div>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <div className="w-1 h-1 rounded-full bg-purple-600 dark:bg-purple-400" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 text-sm mt-6"
                    >
                      Let's Rollout
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold mb-3">Ready to Transform Your Content?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Start with any feature and discover how our AI-powered platform can revolutionize your social media presence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg"
              onClick={() => router.push('/features/multi-format')}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 