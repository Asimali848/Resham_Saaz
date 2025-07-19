import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Crafted with Love",
      description: "Handcrafted with passion for perfection.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Finest fabrics for lasting beauty.",
    },
    {
      icon: Users,
      title: "For Every Woman",
      description: "Inclusive fashion for all styles.",
    },
  ];

  const images = [
    "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-cream-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                //@ts-ignore
                variants={itemVariants}
                className="text-sm font-semibold text-golden-600 uppercase tracking-wider"
              >
                About Resham_Saaz
              </motion.h2>
              <motion.h3
                //@ts-ignore
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight"
              >
                Where Tradition Meets
                <span className="bg-gradient-to-r from-golden-500 to-blush-400 bg-clip-text text-transparent">
                  {" "}
                  Modern Style
                </span>
              </motion.h3>
              <motion.p
                //@ts-ignore
                variants={itemVariants}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Celebrating women through exceptional clothing that blends
                heritage craftsmanship with contemporary design.
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div variants={containerVariants} className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  //@ts-ignore
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-golden-100 to-blush-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-golden-600" />
                  </div>
                  <div className="flex items-start justify-start flex-col">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  //@ts-ignore
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  className={`${index % 3 === 0 ? "col-span-2" : ""}`}
                >
                  <Card className="overflow-hidden shadow-lg border-0">
                    <CardContent className="p-0">
                      <img
                        src={image}
                        alt={`Fashion ${index + 1}`}
                        className={`w-full object-cover ${
                          index % 3 === 0 ? "h-32" : "h-48"
                        }`}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-golden-300/30 to-blush-300/30 rounded-full"
            />
            <motion.div
              animate={{
                y: [10, -10, 10],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-blush-300/20 to-golden-300/20 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
