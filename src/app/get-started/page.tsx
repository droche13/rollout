"use client";

import { motion } from "framer-motion";
import { HiCheck, HiX, HiArrowLeft } from "react-icons/hi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function GetStartedPage() {
  const router = useRouter();

  const handleTierSelection = (tierName: string) => {
    // Here you would typically handle the subscription process
    // For now, we'll just console.log
    console.log(`Selected tier: ${tierName}`);
  };

  const handleContactSales = () => {
    // Here you would typically open a contact form or redirect to a contact page
    // For now, we'll just console.log
    console.log('Contacting sales...');
  };

  const tiers = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for trying out our platform",
      features: [
        { name: "Basic content analysis", included: true },
        { name: "3 social media posts per month", included: true },
        { name: "Standard templates", included: true },
        { name: "Community support", included: true },
        { name: "Advanced AI features", included: false },
        { name: "Custom branding", included: false },
        { name: "Priority support", included: false },
        { name: "API access", included: false },
      ],
      gradient: "from-gray-500 to-gray-700",
      popular: false
    },
    {
      name: "Pro",
      price: "29",
      description: "For growing creators and small businesses",
      features: [
        { name: "Basic content analysis", included: true },
        { name: "Unlimited social media posts", included: true },
        { name: "Premium templates", included: true },
        { name: "Priority support", included: true },
        { name: "Advanced AI features", included: true },
        { name: "Custom branding", included: true },
        { name: "API access", included: false },
        { name: "White-label solutions", included: false },
      ],
      gradient: "from-purple-600 to-pink-600",
      popular: true
    },
    {
      name: "Enterprise",
      price: "99",
      description: "For businesses requiring maximum capability",
      features: [
        { name: "Basic content analysis", included: true },
        { name: "Unlimited social media posts", included: true },
        { name: "Custom templates", included: true },
        { name: "24/7 dedicated support", included: true },
        { name: "Advanced AI features", included: true },
        { name: "Custom branding", included: true },
        { name: "API access", included: true },
        { name: "White-label solutions", included: true },
      ],
      gradient: "from-blue-600 to-purple-600",
      popular: false
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
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Choose Your Plan</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Start transforming your social media content today with our AI-powered platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden ${
                  tier.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline mb-8">
                      <span className="text-4xl font-bold">${tier.price}</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          {feature.included ? (
                            <HiCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          ) : (
                            <HiX className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                          )}
                          <span className={`${
                            feature.included ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleTierSelection(tier.name)}
                    className={`w-full px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${tier.gradient} 
                      hover:opacity-90 transition-opacity`}
                  >
                    Get Started with {tier.name}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We offer tailored solutions for large organizations with specific requirements. 
              Contact our sales team to discuss your needs.
            </p>
            <button 
              onClick={handleContactSales}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Sales
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto grid gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-left">
                <h3 className="font-bold mb-2">Can I switch plans later?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-left">
                <h3 className="font-bold mb-2">Is there a long-term commitment?</h3>
                <p className="text-gray-600 dark:text-gray-300">No, all our plans are billed monthly and you can cancel at any time.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-left">
                <h3 className="font-bold mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600 dark:text-gray-300">We offer a 14-day money-back guarantee for all paid plans if you're not satisfied with our service.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 