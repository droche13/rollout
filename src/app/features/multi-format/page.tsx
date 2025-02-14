"use client";

import { motion } from "framer-motion";
import { BiMoviePlay } from "react-icons/bi";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";

export default function MultiFormatPage() {
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
            <BiMoviePlay className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Multi-Format Support</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Transform any type of content into engaging social media posts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">Sample Processing</h2>
              <div className="space-y-4">
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-medium mb-2">YouTube Video</h3>
                  <input
                    type="text"
                    placeholder="https://youtube.com/watch?v=..."
                    className="w-full p-2 border dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-900"
                  />
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Blog Post</h3>
                  <input
                    type="text"
                    placeholder="https://yourblog.com/post/..."
                    className="w-full p-2 border dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-900"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium"
                >
                  Process Content
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">Sample Results</h2>
              <div className="space-y-4">
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Content Analysis</span>
                    <span className="text-green-500">Complete</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    • Main topics extracted
                    <br />
                    • Key points identified
                    <br />
                    • Sentiment analyzed
                  </div>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Generated Posts</span>
                    <span className="text-blue-500">In Progress</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    • Twitter thread: 2/5 complete
                    <br />
                    • Instagram post: Pending
                    <br />
                    • LinkedIn article: Pending
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Supported Formats</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "YouTube Videos", status: "Active" },
                { name: "Blog Posts", status: "Active" },
                { name: "PDFs", status: "Active" },
                { name: "Podcasts", status: "Coming Soon" },
                { name: "Twitter Threads", status: "Active" },
                { name: "Instagram Posts", status: "Active" },
                { name: "LinkedIn Articles", status: "Active" },
                { name: "Medium Stories", status: "Coming Soon" },
              ].map((format, index) => (
                <div
                  key={index}
                  className="border dark:border-gray-700 rounded-lg p-4"
                >
                  <h3 className="font-medium mb-2">{format.name}</h3>
                  <span
                    className={`text-sm ${
                      format.status === "Active"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {format.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 