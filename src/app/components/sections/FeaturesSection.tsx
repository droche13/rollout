import { motion } from 'framer-motion';
import { IconBaseProps } from 'react-icons';

type DynamicIcon = React.ComponentType<IconBaseProps>;

interface FeaturesSectionProps {
  Icons: {
    MoviePlay: DynamicIcon;
    Photograph: DynamicIcon;
    Share: DynamicIcon;
  };
  navigateToFeature: (feature: string) => void;
}

export default function FeaturesSection({ Icons, navigateToFeature }: FeaturesSectionProps) {
  const features = [
    {
      icon: Icons.MoviePlay,
      title: "Multi-Format Support",
      description: "Videos, articles, PDFs, podcasts - we process it all with advanced AI understanding",
      features: ["YouTube videos", "Blog posts", "PDFs", "Podcasts"],
      path: "multi-format"
    },
    {
      icon: Icons.Photograph,
      title: "AI Content Creation",
      description: "Intelligent analysis and transformation for maximum social media impact",
      features: ["Platform-specific formatting", "Engagement optimization", "Tone matching", "Hashtag suggestions"],
      path: "ai-content"
    },
    {
      icon: Icons.Share,
      title: "Rich Media Generation",
      description: "Create stunning visuals and graphics to support your message",
      features: ["Custom images", "Infographics", "Quote cards", "Thumbnails"],
      path: "rich-media"
    },
  ];

  return (
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
            {features.map((feature, index) => (
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
  );
} 