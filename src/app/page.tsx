'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/ui/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TeamSection from '@/components/sections/TeamSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/ui/Footer'
import { BackgroundPaths } from '@/components/ui/background-paths'

export default function Home() {
  return (
    <main className="min-h-screen relative isolate overflow-hidden">
      <div className="fixed inset-0 z-0 bg-white dark:bg-[#020218]">
        <BackgroundPaths title="" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
