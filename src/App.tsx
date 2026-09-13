/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TechMarquee } from './components/TechMarquee';
import { PhilosophySection } from './components/PhilosophySection';
import { ProjectsSection } from './components/ProjectsSection';
import { TelemetrySection } from './components/TelemetrySection';
import { ContactModal } from './components/ContactModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { FooterSection } from './components/FooterSection';
import { CustomCursor } from './components/CustomCursor';
import { PROJECTS } from './data/projects';
import { Project } from './types';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('projects');

  // Track active section for top nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const workEl = document.getElementById('featured-projects');
      const aboutEl = document.getElementById('about-philosophy');

      if (workEl && scrollPosition >= workEl.offsetTop) {
        setActiveSection('projects');
      } else if (aboutEl && scrollPosition >= aboutEl.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('projects');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#fef9ed] font-inter text-[#1d1c15] antialiased selection:bg-[#a23e16] selection:text-white relative min-h-screen overflow-x-hidden w-full">
      {/* Custom Kinetic Cursor */}
      <CustomCursor />

      {/* Fixed Sticky Header */}
      <Header
        onOpenContact={() => setIsContactOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Flow */}
      <main className="w-full pt-16 bg-[#fef9ed] max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col w-full">
          {/* Section 1: Hero Specification & Wordmark */}
          <HeroSection />

          {/* Continuous Stack & Toolkit Marquee Scroll */}
          <TechMarquee />

          {/* Section 2: Computational Philosophy with Scroll-Linked Word Darkening */}
          <PhilosophySection />

          {/* Section 3: Featured Engineering Work Grid */}
          <ProjectsSection
            projects={PROJECTS}
            onSelectProject={(project) => setSelectedProject(project)}
          />

          {/* Section 4A: Telemetry, Proven Benchmarks & Interactive Avatar */}
          <TelemetrySection onOpenContact={() => setIsContactOpen(true)} />
        </div>
      </main>

      {/* Section 5: Equalizer Strip, Large CTA, 3-Column Footer & Colophon */}
      <FooterSection onOpenContact={() => setIsContactOpen(true)} />

      {/* Section 4B: Overlapping Rotated Card Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Interactive Architecture & Telemetry Deep Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
