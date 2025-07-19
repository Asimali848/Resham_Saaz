import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: 'Silk Sarees',
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: 'From ₹15,000',
      rating: 4.9
    },
    {
      id: 2,
      title: 'Designer Lehengas',
      image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: 'From ₹25,000',
      rating: 4.8
    },
    {
      id: 3,
      title: 'Ethnic Kurtas',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: 'From ₹3,500',
      rating: 4.7
    },
    {
      id: 4,
      title: 'Fusion Wear',
      image: 'https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: 'From ₹5,000',
      rating: 4.9
    },
    {
      id: 5,
      title: 'Bridal Collection',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: 'From ₹50,000',
      rating: 5.0
    },
    {
      id: 6,
      title: 'Party Wear',
      image: 'https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: 'From ₹8,000',
      rating: 4.8
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="collections" className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-golden-600 uppercase tracking-wider mb-4">
            Our Collections
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Discover Your Perfect
            <span className="bg-gradient-to-r from-golden-500 to-blush-400 bg-clip-text text-transparent"> Style</span>
          </h3>
        </motion.div>

        {/* Collections Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              //@ts-ignore
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Content */}
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="absolute bottom-4 left-4 right-4"
                    >
                      <Button 
                        size="sm" 
                        className="w-full bg-white/90 text-gray-800 hover:bg-white"
                      >
                        View Collection
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-800">{collection.title}</h4>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-golden-500 fill-current" />
                        <span className="text-sm text-gray-600">{collection.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-golden-600">{collection.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-golden-500 to-blush-400 hover:from-golden-600 hover:to-blush-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All Collections
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;