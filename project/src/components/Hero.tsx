import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-100 to-blush-100">
        <motion.div
          //@ts-ignore
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-golden-300/20 to-blush-300/20 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          //@ts-ignore
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-40 right-10 w-full h-72 bg-gradient-to-r from-blush-300/20 to-golden-300/20 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          //@ts-ignore
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-golden-400/20 to-cream-400/20 rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                //@ts-ignore
                variants={itemVariants}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-golden-100 to-blush-100 rounded-full text-sm font-medium text-golden-700"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Premium Women's Fashion
              </motion.div>

              <motion.h1
                //@ts-ignore
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-gray-800 via-golden-600 to-blush-500 bg-clip-text text-transparent">
                  Elegance
                </span>
                <br />
                <span className="text-gray-800">Redefined</span>
              </motion.h1>

              <motion.p
                //@ts-ignore
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-600 max-w-2xl"
              >
                Exquisite clothing that celebrates the modern woman.
              </motion.p>
            </div>

            <motion.div
              //@ts-ignore
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-golden-500 to-golden-600 hover:from-golden-600 hover:to-golden-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Collection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blush-300 text-blush-500 hover:bg-blush-50 hover:border-blush-400 transition-all duration-300"
              >
                Watch Our Story
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              //@ts-ignore
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-2xl sm:text-3xl font-bold text-golden-600"
                >
                  10K+
                </motion.div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="text-2xl sm:text-3xl font-bold text-blush-500"
                >
                  500+
                </motion.div>
                <div className="text-sm text-gray-600">Unique Designs</div>
              </div>
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="text-2xl sm:text-3xl font-bold text-golden-600"
                >
                  15+
                </motion.div>
                <div className="text-sm text-gray-600">Years Legacy</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-tr from-golden-400/20 to-blush-400/20 rounded-3xl"
              />
              <div className="relative bg-gradient-to-br from-cream-100 to-cream-200 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Elegant Woman in Traditional Wear"
                  className="w-full h-96 sm:h-[500px] object-cover rounded-2xl"
                />

                {/* Floating Elements */}
                <motion.div
                  //@ts-ignore
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
                >
                  <Sparkles className="w-6 h-6 text-golden-500" />
                </motion.div>

                <motion.div
                  //@ts-ignore
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blush-400 to-blush-500 rounded-full p-4 shadow-lg"
                >
                  <span className="text-white font-bold text-sm">New</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
