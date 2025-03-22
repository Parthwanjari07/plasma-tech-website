'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GradientButton } from '@/components/ui/button2'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/10 backdrop-blur-xl shadow-lg dark:bg-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start">
            <Link href="/" className="relative group">
              <div className="flex items-center">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-violet-500"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="text-white font-bold text-lg relative z-10">P</span>
                </motion.div>

                <div className="ml-2">
                  <motion.span 
                    className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Plasma
                  </motion.span>
                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-300"></div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Link 
                  href={item.href}
                  className="relative group px-3 py-2 text-gray-300 hover:text-white font-medium transition-colors"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-600 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
          
          {/* Contact Button */}
          <div className="hidden md:flex">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <GradientButton>
                Get In Touch
              </GradientButton>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="flex items-center p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                className="space-y-1.5"
                animate={isMobileMenuOpen ? "open" : "closed"}
              >
                <motion.span 
                  className="block h-0.5 w-6 bg-gradient-to-r from-indigo-600 to-violet-600"
                  variants={{
                    closed: { rotate: 0, translateY: 0 },
                    open: { rotate: 45, translateY: 6 }
                  }}
                ></motion.span>
                <motion.span 
                  className="block h-0.5 w-6 bg-gradient-to-r from-indigo-600 to-violet-600"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                ></motion.span>
                <motion.span 
                  className="block h-0.5 w-6 bg-gradient-to-r from-indigo-600 to-violet-600"
                  variants={{
                    closed: { rotate: 0, translateY: 0 },
                    open: { rotate: -45, translateY: -6 }
                  }}
                ></motion.span>
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="backdrop-blur-xl bg-white/10 dark:bg-black/10 shadow-lg px-4 py-6 space-y-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={item.href}
                    className="block text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-2"
              >
                <GradientButton 
                  className="w-full"
                >
                  Get In Touch
                </GradientButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
