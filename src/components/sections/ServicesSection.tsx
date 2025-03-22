'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      title: "Web Development",
      description: "Create stunning, responsive websites with modern frameworks and cutting-edge technologies.",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
          <path d="M15 9l-6 6M9 9l6 6"/>
        </svg>
      ),
      title: "Artificial Intelligence",
      description: "Harness the power of AI to build intelligent applications and automation solutions.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
        </svg>
      ),
      title: "Machine Learning",
      description: "Implement cutting-edge ML models for data analysis and predictive insights.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V11.08zM14 4l5 5h-5V4z"/>
          <circle cx="12" cy="15" r="3"/>
        </svg>
      ),
      title: "Deep Learning",
      description: "Develop sophisticated neural networks for complex pattern recognition tasks.",
      gradient: "from-violet-500 to-fuchsia-500"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <path d="M9 12h6"/>
          <path d="M12 9v6"/>
        </svg>
      ),
      title: "IoT Solutions",
      description: "Connect and manage smart devices with secure, scalable IoT infrastructure.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h4v-6H7v-3a5 5 0 0 1 10 0v3h-2v6h4c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9z"/>
        </svg>
      ),
      title: "DevOps",
      description: "Streamline development and operations with automated CI/CD pipelines.",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  // Add infinite scroll animation
  const [scrollX, setScrollX] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setScrollX((prev) => (prev + 2) % (services.length * 400)) // Increased speed (2px per frame) and card width to 400px
    }, 30) // Decreased interval for smoother animation

    return () => clearInterval(timer)
  }, [services.length])

  return (
    <section id="services" className="py-32 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -right-40 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-fuchsia-600/5 rounded-full blur-3xl"></div>
        
        <svg className="absolute right-0 top-1/4 text-indigo-300/10 w-64 h-64" viewBox="0 0 200 200">
          <path fill="currentColor" d="M45.3,-52.9C60.9,-40.9,77.3,-28.7,79.5,-14.3C81.8,0.1,70,16.7,59.3,32.7C48.7,48.7,39.2,64.1,25.9,68.8C12.6,73.5,-4.5,67.5,-24.3,62.5C-44.1,57.5,-66.5,53.5,-77.2,39.8C-87.9,26.1,-86.8,2.8,-78.7,-14.9C-70.6,-32.6,-55.5,-44.8,-40.2,-56.8C-24.9,-68.8,-9.2,-80.7,3.2,-84.3C15.6,-87.9,29.7,-64.9,45.3,-52.9Z" transform="translate(100 100) scale(0.7)" />
        </svg>
        
        <svg className="absolute left-0 bottom-1/4 text-violet-300/10 w-64 h-64" viewBox="0 0 200 200">
          <path fill="currentColor" d="M42.7,-62.9C53.9,-53.8,60.8,-38.6,65.8,-23.1C70.8,-7.6,73.9,8.3,70.7,22.7C67.4,37,57.8,50,45.1,58.4C32.3,66.9,16.2,70.9,0.2,70.6C-15.9,70.4,-31.7,65.9,-43.9,56.6C-56,47.3,-64.5,33.1,-69.7,17.3C-74.9,1.4,-76.8,-16.2,-70.8,-30.4C-64.8,-44.6,-50.8,-55.5,-36.3,-63.5C-21.8,-71.5,-6.8,-76.6,6.9,-86.1C20.7,-95.7,31.4,-72,42.7,-62.9Z" transform="translate(100 100) scale(0.7)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block py-1 px-3 mb-3 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/10 to-violet-500/10 text-indigo-600 dark:text-indigo-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Our Services
            </motion.span>
            
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Comprehensive Solutions
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              We provide end-to-end services for your digital presence and technical requirements, 
              from concept to deployment and beyond.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="flex overflow-hidden"
          style={{
            transform: `translateX(-${scrollX}px)`,
            transition: 'transform 0.3s linear',
            width: `${services.length * 1500}px` // Increased container width to accommodate wider cards
          }}
        >
          {[...services, ...services].map((service, i) => (
            <motion.div
              key={i}
              className="relative group w-[460px] mx-5" // Increased card width and margins
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`,
                  '--tw-gradient-from': service.gradient.split(' ')[1].replace('from-', ''),
                  '--tw-gradient-to': service.gradient.split(' ')[2]
                } as React.CSSProperties}
              ></div>
              
              <div className="h-full flex flex-col bg-white/10 backdrop-blur-lg dark:bg-black/10 border border-white/20 dark:border-white/5 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:border-white/40 dark:group-hover:border-white/10">
                <div className="p-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-xl mb-8 bg-gradient-to-br ${service.gradient} text-white`}>
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <motion.button 
                      className={`flex items-center text-base font-medium bg-clip-text text-transparent bg-gradient-to-r ${service.gradient}`}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
            <span className="relative flex items-center">
              View All Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
