"use client";

import { motion } from "framer-motion";
import { HiLightningBolt, HiUserGroup, HiCube, HiArrowLeft } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: HiLightningBolt,
      title: "Innovation First",
      description: "Pushing the boundaries of AI to transform content creation and social media management.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: HiUserGroup,
      title: "User-Centric",
      description: "Built by creators, for creators. Every feature is designed with your success in mind.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: HiCube,
      title: "Future-Ready",
      description: "Constantly evolving our platform to stay ahead of social media trends and AI capabilities.",
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Transforming Social Media
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're on a mission to democratize AI-powered content creation, making it accessible to creators, businesses, and innovators worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Born from the challenges faced by modern content creators, our platform combines cutting-edge AI technology with intuitive design to revolutionize how social media content is created and managed.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We understand that creating engaging content across multiple platforms can be overwhelming. That's why we've built a comprehensive suite of tools that streamline your workflow and enhance your creative process.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4">Platform Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">10x</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Faster content creation</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">50%</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Higher engagement rates</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">24/7</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">AI-powered assistance</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${value.gradient} text-white mb-4`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Content?</h2>
            <Link 
              href="/get-started"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 