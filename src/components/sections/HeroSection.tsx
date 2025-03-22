'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Title text to animate
  const words = ["Plasma Tech"]

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Enhanced Particle Effect */}
      <div className="absolute inset-0 z-10 opacity-40 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-indigo-400' : i % 3 === 1 ? 'bg-violet-400' : 'bg-blue-400'}`}
            style={{
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              filter: `blur(${Math.random() * 2}px)`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${i % 3 === 0 ? 'rgba(129, 140, 248, 0.6)' : i % 3 === 1 ? 'rgba(167, 139, 250, 0.6)' : 'rgba(96, 165, 250, 0.6)'}`
            }}
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3
            }}
            animate={{
              x: [null, `${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
              y: [null, `${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [null, Math.random() * 0.7 + 0.3, Math.random() * 0.7 + 0.3, Math.random() * 0.7 + 0.3],
              scale: [null, Math.random() * 2 + 1, Math.random() * 3 + 0.5, Math.random() * 2 + 1]
            }}
            transition={{
              duration: Math.random() * (60 - 20) + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Light beam effect */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-[-20%] left-[30%] w-[300px] h-[800px] rotate-[-35deg] bg-gradient-to-b from-indigo-500/10 via-blue-500/5 to-transparent blur-3xl"></div>
        <div className="absolute top-[-30%] right-[20%] w-[400px] h-[1000px] rotate-[40deg] bg-gradient-to-b from-violet-500/10 via-indigo-500/5 to-transparent blur-3xl"></div>
      </div>

      {/* Content with float effect */}
      <AnimatePresence>
        {isLoaded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-20 text-center max-w-5xl px-4 sm:px-6 lg:px-8"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Decorative elements */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
              
              {/* Main heading with gradient effect */}
              <div ref={titleRef} className="mb-10">
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                  {words.map((word, wordIndex) => (
                    <span
                      key={wordIndex}
                      className="inline-block mr-4 last:mr-0"
                    >
                      {word.split("").map((letter, letterIndex) => (
                        <motion.span
                          key={`${wordIndex}-${letterIndex}`}
                          initial={{ y: 100, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: wordIndex * 0.1 + letterIndex * 0.03,
                            type: "spring",
                            stiffness: 150,
                            damping: 25,
                          }}
                          className="inline-block text-transparent bg-clip-text 
                            bg-gradient-to-r from-indigo-800 to-violet-700
                            dark:from-indigo-300 dark:to-violet-200
                            drop-shadow-sm"
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </span>
                  ))}
                </h1>
              </div>

              <div
                ref={subtitleRef}
                className="text-xl sm:text-2xl md:text-3xl text-gray-200 space-y-5 mb-10 max-w-3xl mx-auto font-light"
              >
                <motion.p 
                  className="leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Your One-Stop Solution for 
                  <span className="relative inline-block mx-2 px-2">
                    <span className="relative z-10">Web, App, & ML</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-md -z-10"></span>
                  </span>
                  Projects.
                </motion.p>

                <motion.div 
                  className="flex items-center justify-center space-x-3 py-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                  <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
                </motion.div>

                <motion.p 
                  className="leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  We provide sophisticated software solutions
                  <br/>tailored for innovative businesses and ambitious students.
                </motion.p>
              </div>

              {/* Location indicator with modern styling */}
              <motion.div 
                className="flex justify-center items-center space-x-6 text-gray-300 text-sm mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2"></span>
                  <span className="tracking-wide">Mumbai</span>
                </div>
                <div className="h-3 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-violet-400 mr-2"></span>
                  <span className="tracking-wide">Bangalore</span>
                </div>
              </motion.div>

              {/* Modern, elevated CTA button */}
              <motion.div 
                className="mt-14 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
                  

                  <Button
                            variant="ghost"
                            className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                            bg-white hover:bg-white/100 dark:bg-slate-900 dark:hover:bg-slate-800
                            text-indigo-800 dark:text-indigo-200 transition-all duration-300 
                            group-hover:-translate-y-0.5 border border-indigo-200/30 dark:border-indigo-500/20
                            hover:shadow-md dark:hover:shadow-indigo-900/30"
                        >
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                Discover Excellence
                            </span>
                            <span
                                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
                            >
                                →
                            </span>
                    </Button>
                  {/* Main button */}
                  {/* <button className="relative px-12 py-5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full font-medium tracking-wide transition-all duration-200 shadow-lg shadow-indigo-500/25">
                    <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-indigo-600/80 to-violet-600/80 blur-md"></span>
                    <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"></span>
                    <span className="relative flex items-center">
                      <span className="mr-2 text-lg">Get Started for ₹1,000</span>
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </motion.svg>
                    </span>
                  </button> */}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
    </section>
  )
}