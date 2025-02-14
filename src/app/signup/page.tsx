"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SignInWithGoogle from '@/components/SignInWithGoogle';
import { HiArrowLeft } from 'react-icons/hi';

export default function SignUpPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-8 left-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
        >
          <HiArrowLeft className="w-5 h-5" /> Back
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-gray-600 dark:text-gray-300">Join Rollout.ai today</p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6">
          <SignInWithGoogle />
          
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{' '}
            <Link href="/login" className="text-purple-600 hover:text-purple-500 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
} 