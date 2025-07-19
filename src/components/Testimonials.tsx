import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Noor',
      location: 'Lahore',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Absolutely in love with my silk saree! The quality is exceptional.',
      purchase: 'Banarasi Silk Saree'
    },
    {
      id: 2,
      name: 'Areeba',
      location: 'Lahore',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Perfect fit and stunning embroidery work. Great service!',
      purchase: 'Designer Lehenga'
    },
    {
      id: 3,
      name: 'Kaval',
      location: 'Lahore',
      avatar: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Outstanding quality. Resham_Saaz understands modern women.',
      purchase: 'Ethnic Kurta Set'
    },
    {
      id: 4,
      name: 'Anabia',
      location: 'Islamabad',
      avatar: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'My bridal outfit made my wedding day even more special.',
      purchase: 'Bridal Ensemble'
    },
    {
      id: 5,
      name: 'Maya',
      location: 'Lahore',
      avatar: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Amazing fusion wear collection! Perfect for any occasion.',
      purchase: 'Fusion Kurta'
    },
    {
      id: 6,
      name: 'urbba',
      location: 'Lahore',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Exceptional quality and beautiful designs. Always get compliments!',
      purchase: 'Party Wear Saree'
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
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-cream-50">
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
            Customer Stories
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            What Our Customers
            <span className="bg-gradient-to-r from-golden-500 to-blush-400 bg-clip-text text-transparent"> Say</span>
          </h3>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              //@ts-ignore
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  >
                    <Quote className="w-8 h-8 text-golden-500" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                      >
                        <Star className="w-4 h-4 text-golden-500 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-r from-golden-100 to-blush-100 text-golden-700">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                      <p className="text-xs text-golden-600 font-medium">{testimonial.purchase}</p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div 
                    animate={{ 
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-golden-200/20 to-blush-200/20 rounded-full"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-cream-200"
        >
          {[
            { value: '10,000+', label: 'Happy Customers', color: 'text-golden-600' },
            { value: '4.9/5', label: 'Average Rating', color: 'text-blush-500' },
            { value: '1,247', label: 'Reviews', color: 'text-golden-600' },
            { value: '98%', label: 'Satisfaction', color: 'text-blush-500' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;