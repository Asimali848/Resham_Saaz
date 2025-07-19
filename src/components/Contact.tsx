import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+92 370 944 6327'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'reshamsaazofficials@gamil.com'
    },
    {
      icon: MapPin,
      title: 'Visit Store',
      content: 'Lahore, Pakistan'
    },
    {
      icon: Clock,
      title: 'Store Hours',
      content: '24/7'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-cream-50 to-white">
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
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            We'd Love to
            <span className="bg-gradient-to-r from-golden-500 to-blush-400 bg-clip-text text-transparent"> Hear From You</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div 
            //@ts-ignore
            variants={itemVariants}>
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h4>
              <p className="text-gray-600 mb-8">
                Find your perfect outfit with our expert styling team.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                key={index}
                //@ts-ignore
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                    <CardContent className="p-2">
                      <div className="flex items-start">
                        <motion.div 
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-golden-100 to-blush-100 rounded-lg flex items-center justify-center"
                        >
                          <info.icon className="w-6 h-6 text-golden-600" />
                        </motion.div>
                        <div className='flex items-center justify-center flex-col w-full'>
                          <h5 className="font-semibold text-gray-800 mb-1">{info.title}</h5>
                          <p className="text-gray-700 font-medium">{info.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h4>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="firstName" className="text-gray-700 w-full flex items-center justify-start">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name"
                        className="border-cream-300 focus:border-golden-400 focus:ring-golden-200"
                      />
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="lastName" className="text-gray-700 w-full flex items-center justify-start">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name"
                        className="border-cream-300 focus:border-golden-400 focus:ring-golden-200"
                      />
                    </motion.div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="email" className="text-gray-700 w-full flex items-center justify-start">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email"
                      className="border-cream-300 focus:border-golden-400 focus:ring-golden-200"
                    />
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="message" className="text-gray-700 w-full flex items-center justify-start">Message</Label>
                    <Textarea 
                      id="message" 
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      className="border-cream-300 focus:border-golden-400 focus:ring-golden-200 resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-golden-500 to-blush-400 hover:from-golden-600 hover:to-blush-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;