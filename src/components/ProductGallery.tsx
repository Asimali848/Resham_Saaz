import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductGallery = () => {
  const products = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Silk Sarees'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Lehengas'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Kurtas'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Fusion Wear'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Bridal'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Party Wear'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Traditional'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Designer'
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Casual'
    },
    {
      id: 10,
      image: 'https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Elegant'
    },
    {
      id: 11,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Festive'
    },
    {
      id: 12,
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Contemporary'
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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-cream-50">
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
            Product Gallery
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Beautiful
            <span className="bg-gradient-to-r from-golden-500 to-blush-400 bg-clip-text text-transparent"> Collections</span>
          </h3>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              //@ts-ignore
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.category}
                      className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                        >
                          <Heart className="w-5 h-5 text-gray-700" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-golden-500 p-3 rounded-full shadow-lg hover:bg-golden-600 transition-colors duration-200"
                        >
                          <ShoppingBag className="w-5 h-5 text-white" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                        {product.category}
                      </span>
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
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGallery;