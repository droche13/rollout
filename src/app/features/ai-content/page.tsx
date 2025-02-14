"use client";

import { motion } from "framer-motion";
import { HiOutlinePhotograph, HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";

export default function AIContentPage() {
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
          href="/features"
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
          <div className="text-center mb-12">
            <HiOutlinePhotograph className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">AI Content Creation</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Let AI transform your content into platform-optimized posts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">Content Settings</h2>
              <div className="space-y-4">
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Target Platforms</h3>
                  <div className="space-y-2">
                    {["Twitter", "Instagram", "LinkedIn", "Facebook"].map((platform) => (
                      <label key={platform} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-purple-600" />
                        {platform}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Tone & Style</h3>
                  <select className="w-full p-2 border dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-900">
                    <option>Professional</option>
                    <option>Casual</option>
                    <option>Humorous</option>
                    <option>Educational</option>
                  </select>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium"
                >
                  Generate Content
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">Preview</h2>
              <div className="space-y-4">
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 text-sm">T</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Twitter Thread</h3>
                      <p className="text-sm text-gray-500">4 tweets</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <p>🧵 1/4 Exciting news! We've just launched...</p>
                    <p>2/4 Our AI-powered platform helps you...</p>
                    <p>3/4 Key features include...</p>
                    <p>4/4 Try it out today at...</p>
                  </div>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white text-sm">I</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Instagram Post</h3>
                      <p className="text-sm text-gray-500">Carousel • 3 slides</p>
                    </div>
                  </div>
                  <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg mb-2"></div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-medium">Caption Preview:</p>
                    <p>✨ Transform your content game with AI-powered magic...</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">AI Capabilities</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Platform Optimization",
                  description: "Content tailored for each social platform's unique requirements"
                },
                {
                  title: "Tone Matching",
                  description: "Maintains your brand voice across all generated content"
                },
                {
                  title: "Hashtag Generation",
                  description: "Smart hashtag suggestions based on content and trends"
                },
                {
                  title: "Multi-Format",
                  description: "Creates threads, carousels, and long-form content"
                },
                {
                  title: "SEO Optimization",
                  description: "Optimizes content for better visibility and reach"
                },
                {
                  title: "Engagement Analysis",
                  description: "Predicts and optimizes for maximum engagement"
                }
              ].map((capability, index) => (
                <div
                  key={index}
                  className="border dark:border-gray-700 rounded-lg p-4"
                >
                  <h3 className="font-medium mb-2">{capability.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 