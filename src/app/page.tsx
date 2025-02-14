"use client";

import { motion, useAnimation } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { BsArrowDown, BsChevronRight } from "react-icons/bs";
import { HiOutlineDocumentText, HiOutlinePhotograph, HiOutlineShare } from "react-icons/hi";
import { BiMoviePlay } from "react-icons/bi";
import Sidebar from "./components/Sidebar";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const logoControls = useAnimation();
  const mainRef = useRef<HTMLElement>(null);
  const [searchUrl, setSearchUrl] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Run the mount animation: elastic stretch then back
    logoControls.start({
      scaleX: [1, 1.5, 1],
      transition: { duration: 0.6, ease: "easeInOut", times: [0, 0.5, 1] }
    });
  }, [logoControls]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchUrl) {
      // Here you would typically validate the URL
      console.log('Processing URL:', searchUrl);
      // You can add loading state and processing animation here
    }
  };

  const navigateToFeature = (feature: string) => {
    router.push(`/features/${feature.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <main ref={mainRef} className="min-h-screen w-full overflow-x-hidden bg-transparent dark:bg-gray-900">
      <Sidebar />
      
      {/* Auth Navigation */}
      <nav className="fixed top-0 right-0 p-4 z-50 flex gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/login')}
          className="px-6 py-2 text-gray-700 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-700 rounded-full text-sm font-semibold hover:border-purple-500 dark:hover:border-purple-400"
        >
          Log In
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/signup')}
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold"
        >
          Sign Up
        </motion.button>
      </nav>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          console.log('Scroll to top using ref');
          if (mainRef.current) {
            mainRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            console.error('mainRef is not defined');
          }
        }}
        className="fixed bottom-8 right-8 z-50 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded-full shadow-sm hover:shadow-md transition-all group"
      >
        <BsArrowDown className="w-6 h-6 rotate-180 text-purple-600 group-hover:text-purple-800" />
      </motion.button>

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

      {/* Hero Section */}
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
              // On hover start, stretch out
              logoControls.start({
                scaleX: 1.15,
                transition: { duration: 0.6, ease: "easeInOut" }
              });
            }}
            onHoverEnd={() => {
              // On hover end, snap back with a spring effect
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
            {[FiGithub, FiLinkedin, FiTwitter, FiMail].map((Icon, index) => (
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

      {/* About Section */}
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
                    <HiOutlineDocumentText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
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
                    <HiOutlinePhotograph className="w-6 h-6 text-pink-600 dark:text-pink-400" />
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
                    <HiOutlineShare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
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
                  <form onSubmit={handleSearch} className="w-full max-w-md space-y-4">
                    <input
                      type="text"
                      value={searchUrl}
                      onChange={(e) => setSearchUrl(e.target.value)}
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

      {/* Features Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Platform Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
              Everything you need to transform your content into engaging social media posts that drive results
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BiMoviePlay,
                  title: "Multi-Format Support",
                  description: "Videos, articles, PDFs, podcasts - we process it all with advanced AI understanding",
                  features: ["YouTube videos", "Blog posts", "PDFs", "Podcasts"],
                  path: "multi-format"
                },
                {
                  icon: HiOutlinePhotograph,
                  title: "AI Content Creation",
                  description: "Intelligent analysis and transformation for maximum social media impact",
                  features: ["Platform-specific formatting", "Engagement optimization", "Tone matching", "Hashtag suggestions"],
                  path: "ai-content"
                },
                {
                  icon: HiOutlineShare,
                  title: "Rich Media Generation",
                  description: "Create stunning visuals and graphics to support your message",
                  features: ["Custom images", "Infographics", "Quote cards", "Thumbnails"],
                  path: "rich-media"
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => navigateToFeature(feature.path)}
                >
                  <feature.icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-6" />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Content?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are saving time and growing their audience with AI-powered content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full text-lg font-semibold"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
