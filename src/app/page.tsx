"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons';

// Dynamically import heavy components
const Sidebar = dynamic(() => import('./components/Sidebar'), {
  loading: () => <div className="w-16 h-screen bg-gray-100 dark:bg-gray-800" />
});

// Helper type for dynamic icons
type DynamicIcon = React.ComponentType<IconBaseProps>;

// Dynamically import icons
const Icons = {
  Github: dynamic(() => import('react-icons/fi').then(mod => mod.FiGithub)) as DynamicIcon,
  Linkedin: dynamic(() => import('react-icons/fi').then(mod => mod.FiLinkedin)) as DynamicIcon,
  Mail: dynamic(() => import('react-icons/fi').then(mod => mod.FiMail)) as DynamicIcon,
  Twitter: dynamic(() => import('react-icons/fi').then(mod => mod.FiTwitter)) as DynamicIcon,
  ArrowDown: dynamic(() => import('react-icons/bs').then(mod => mod.BsArrowDown)) as DynamicIcon,
  DocumentText: dynamic(() => import('react-icons/hi').then(mod => mod.HiOutlineDocumentText)) as DynamicIcon,
  Photograph: dynamic(() => import('react-icons/hi').then(mod => mod.HiOutlinePhotograph)) as DynamicIcon,
  Share: dynamic(() => import('react-icons/hi').then(mod => mod.HiOutlineShare)) as DynamicIcon,
  MoviePlay: dynamic(() => import('react-icons/bi').then(mod => mod.BiMoviePlay)) as DynamicIcon
};

// Create loading components for sections
const SectionLoading = () => (
  <div className="w-full h-96 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg" />
);

// Split sections into separate components
const HeroSection = dynamic(() => import('./components/sections/HeroSection'), {
  loading: () => <SectionLoading />
});

const AboutSection = dynamic(() => import('./components/sections/AboutSection'), {
  loading: () => <SectionLoading />
});

const FeaturesSection = dynamic(() => import('./components/sections/FeaturesSection'), {
  loading: () => <SectionLoading />
});

const CTASection = dynamic(() => import('./components/sections/CTASection'), {
  loading: () => <SectionLoading />
});

export default function Home() {
  const logoControls = useAnimation();
  const mainRef = useRef<HTMLElement>(null);
  const [searchUrl, setSearchUrl] = useState('');
  const router = useRouter();

  // Optimize animation by using requestAnimationFrame
  useEffect(() => {
    const animateLogo = () => {
      requestAnimationFrame(() => {
        logoControls.start({
          scaleX: [1, 1.5, 1],
          transition: { duration: 0.6, ease: "easeInOut", times: [0, 0.5, 1] }
        });
      });
    };
    animateLogo();
  }, [logoControls]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchUrl) {
      console.log('Processing URL:', searchUrl);
    }
  };

  const navigateToFeature = (feature: string) => {
    router.push(`/features/${feature.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <main ref={mainRef} className="min-h-screen w-full overflow-x-hidden bg-transparent dark:bg-gray-900">
      <Suspense fallback={<div className="w-16 h-screen bg-gray-100 dark:bg-gray-800" />}>
        <Sidebar />
      </Suspense>

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

      <Suspense fallback={<SectionLoading />}>
        <HeroSection 
          logoControls={logoControls} 
          searchUrl={searchUrl} 
          setSearchUrl={setSearchUrl} 
          handleSearch={handleSearch}
          Icons={Icons}
        />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <AboutSection Icons={Icons} />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <FeaturesSection Icons={Icons} navigateToFeature={navigateToFeature} />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <CTASection />
      </Suspense>
    </main>
  );
}
