// import { motion } from 'framer-motion';
// import { Heart, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';

// const Footer = () => {
//   const footerLinks = {
//     'Quick Links': ['Home', 'About Us', 'Collections', 'Size Guide'],
//     'Customer Care': ['Contact Us', 'Shipping Info', 'Returns', 'FAQ'],
//     'Collections': ['Silk Sarees', 'Lehengas', 'Kurtas', 'Fusion Wear'],
//     'Company': ['Our Story', 'Careers', 'Press', 'Privacy Policy']
//   };

//   const socialLinks = [
//     { icon: Instagram, href: '#', label: 'Instagram' },
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Youtube, href: '#', label: 'YouTube' }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };

//   return (
//     <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-20 pb-8">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Newsletter Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="bg-gradient-to-r from-golden-500 to-blush-400 rounded-3xl p-8 md:p-12 mb-16 text-center"
//         >
//           <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//             Stay Updated with Latest Collections
//           </h3>
//           <p className="text-white/90 mb-8 max-w-2xl mx-auto">
//             Subscribe for new arrivals and exclusive offers.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//             <Input 
//               placeholder="Enter your email"
//               className="bg-white/90 border-0 text-gray-800 placeholder:text-gray-600"
//             />
//             <Button 
//               variant="secondary"
//               className="bg-white text-golden-600 hover:bg-gray-50 font-semibold"
//             >
//               Subscribe
//             </Button>
//           </div>
//         </motion.div>

//         {/* Main Footer Content */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12"
//         >
//           {/* Brand Section */}
//           <motion.div 
//           //@ts-ignore
//           variants={itemVariants} className="lg:col-span-2 space-y-6">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-golden-500 via-golden-600 to-blush-400 bg-clip-text text-transparent mb-4">
//                 Resham_Saaz
//               </h2>
//               <p className="text-gray-600 leading-relaxed">
//                 Celebrating women through timeless fashion that blends traditional artistry with contemporary style.
//               </p>
//             </div>
            
//             {/* Social Links */}
//             <div>
//               <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
//               <div className="flex space-x-4 items-center justify-center">
//                 {socialLinks.map((social, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ scale: 1.1, y: -2 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <Button
//                       variant="outline"
//                       size="icon"
//                       className="rounded-full border-golden-300 text-golden-600 hover:bg-golden-50 hover:border-golden-400 transition-colors duration-200"
//                       asChild
//                     >
//                       <a href={social.href} aria-label={social.label}>
//                         <social.icon className="w-4 h-4" />
//                       </a>
//                     </Button>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Footer Links */}
//           {Object.entries(footerLinks).map(([category, links]) => (
//             <motion.div 
//               key={category}
//               //@ts-ignore
//               variants={itemVariants}
//               className="space-y-4"
//             >
//               <h4 className="font-semibold text-gray-800">{category}</h4>
//               <ul className="space-y-2">
//                 {links.map((link, index) => (
//                   <motion.li 
//                     key={index}
//                     whileHover={{ x: 5 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <a 
//                       href="#" 
//                       className="text-gray-600 hover:text-golden-600 transition-colors duration-200 text-sm"
//                     >
//                       {link}
//                     </a>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom Footer */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="border-t border-gray-200 pt-8"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <div className="flex items-center space-x-2 text-gray-600 text-sm">
//               <span>Made with</span>
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 1, repeat: Infinity }}
//               >
//                 <Heart className="w-4 h-4 text-blush-400 fill-current" />
//               </motion.div>
//               <span>for women who love fashion</span>
//             </div>
            
//             <div className="text-sm text-gray-600">
//               © 2024 Resham_Saaz. All rights reserved.
//             </div>
            
//             <div className="flex space-x-6 text-sm">
//               <a href="#" className="text-gray-600 hover:text-golden-600 transition-colors duration-200">
//                 Terms of Service
//               </a>
//               <a href="#" className="text-gray-600 hover:text-golden-600 transition-colors duration-200">
//                 Privacy Policy
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerLinks = {
    'Quick Links': ['Home', 'About', 'Collections', 'Gallery'],
    'Customer Care': ['Contact Us', 'Shipping Info'],
    'Company': ['Our Story',  'Privacy Policy']
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
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

  const scrollToSection = (sectionId : any) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-golden-500 to-blush-400 rounded-3xl p-8 md:p-12 mb-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Updated with Latest Collections
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe for new arrivals and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              className="bg-white/90 border-0 text-gray-800 placeholder:text-gray-600"
            />
            <Button 
              variant="secondary"
              className="bg-white text-golden-600 hover:bg-gray-50 font-semibold"
            >
              Subscribe
            </Button>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div 
          //@ts-ignore
            variants={itemVariants} 
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-golden-500 via-golden-600 to-blush-400 bg-clip-text text-transparent mb-4">
                Resham_Saaz
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Celebrating women through timeless fashion that blends traditional artistry with contemporary style.
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4 items-center justify-center">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-golden-300 text-golden-600 hover:bg-golden-50 hover:border-golden-400 transition-colors duration-200"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <social.icon className="w-4 h-4" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div 
              key={category}
              //@ts-ignore
              variants={itemVariants}
              className="space-y-4"
            >
              <h4 className="font-semibold text-gray-800">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {category === 'Quick Links' ? (
                      <button
                        onClick={() => scrollToSection(link)}
                        className="text-gray-600 hover:text-golden-600 transition-colors duration-200 text-sm"
                      >
                        {link}
                      </button>
                    ) : (
                      <a 
                        href="#" 
                        className="text-gray-600 hover:text-golden-600 transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-200 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-blush-400 fill-current" />
              </motion.div>
              <span>for women who love fashion</span>
            </div>
            
            <div className="text-sm text-gray-600">
              © 2024 Resham_Saaz. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-golden-600 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-golden-600 transition-colors duration-200">
                Privacy Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;