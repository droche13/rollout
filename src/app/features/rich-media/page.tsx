"use client";

import { motion } from "framer-motion";
import { HiOutlineShare, HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";

export default function RichMediaPage() {
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
            <HiOutlineShare className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Rich Media Generation</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Create stunning visuals and graphics for your content
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">Media Generator</h2>
              <div className="space-y-4">
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Media Type</h3>
                  <select className="w-full p-2 border dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-900">
                    <option>Social Media Image</option>
                    <option>Infographic</option>
                    <option>Quote Card</option>
                    <option>Thumbnail</option>
                  </select>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Style Preferences</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-purple-600" defaultChecked />
                      Include branding
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-purple-600" defaultChecked />
                      Auto-optimize for platform
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-purple-600" />
                      Add animation
                    </label>
                  </div>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Custom Text</h3>
                  <textarea
                    className="w-full p-2 border dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-900 h-24"
                    placeholder="Enter text to include in your media..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium"
                >
                  Generate Media
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
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Preview will appear here</p>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Generated Variations</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg"
                      />
                    ))}
                  </div>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Export Options</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="p-2 border dark:border-gray-700 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                      Download PNG
                    </button>
                    <button className="p-2 border dark:border-gray-700 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                      Download JPG
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Media Types</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Social Posts",
                  description: "Optimized for each platform's requirements",
                  dimensions: "Multiple sizes"
                },
                {
                  title: "Infographics",
                  description: "Data visualization and storytelling",
                  dimensions: "Custom sizes"
                },
                {
                  title: "Quote Cards",
                  description: "Highlight key messages and testimonials",
                  dimensions: "1080x1080px"
                },
                {
                  title: "Thumbnails",
                  description: "Eye-catching video and article previews",
                  dimensions: "1280x720px"
                },
                {
                  title: "Story Graphics",
                  description: "Vertical format for stories and reels",
                  dimensions: "1080x1920px"
                },
                {
                  title: "Banner Images",
                  description: "Headers for websites and profiles",
                  dimensions: "Multiple sizes"
                },
                {
                  title: "Carousel Posts",
                  description: "Multi-slide presentations",
                  dimensions: "1080x1080px"
                },
                {
                  title: "Ad Creatives",
                  description: "Optimized for ad platforms",
                  dimensions: "Multiple sizes"
                }
              ].map((type, index) => (
                <div
                  key={index}
                  className="border dark:border-gray-700 rounded-lg p-4"
                >
                  <h3 className="font-medium mb-1">{type.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {type.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    {type.dimensions}
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