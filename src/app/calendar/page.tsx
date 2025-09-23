"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Script from 'next/script';

const CalendarPage = () => {
  useEffect(() => {
    // Hero content fade-in animation
    const heroTl = gsap.timeline();
    heroTl.to(".hero-main-content", {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    });

    // Calendar fade-in animation with slight delay
    heroTl.to(".calendar-content", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4");

  }, []);

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Background Gradients - Fixed positioning */}
      <div className="fixed inset-0 z-0">
        {/* Top Gradient */}
        <div className="TopGradientBg absolute -top-[241px] left-1/2 transform -translate-x-1/2 w-[381.01px] h-[382px] opacity-40 rounded-br-md blur-[132.70px]" 
             style={{
               background: "radial-gradient(circle, #ad6346 0%, rgba(255,255,255,0.6) 62%, rgba(255,255,255,0.1) 100%)"
             }} />
      </div>

      {/* Hero Top Gradient - Fixed positioning */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <Image
          src="/images/hero-top-gradient.png"
          alt=""
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Content Container - Normal flow */}
      <div className="relative z-20 pt-[80px] md:pt-[12vh] pb-16">
        <div className="container mx-auto px-4">
          
          {/* Top Pill */}
          <div className="text-center mb-6">
            <div className="TopPill inline-flex items-center h-[1.875rem] sm:h-[31.20px] md:h-[31.20px] bg-[#1a1b2038] rounded-3xl px-3 gap-2">
              <div className="Container w-2 h-2 sm:w-[6.90px] sm:h-[6.90px] md:w-[6.90px] md:h-[6.90px] flex-shrink-0">
                <div className="GradientShadow w-full h-full bg-gradient-to-b from-[#f2c6a6] to-[#bb835a] rounded-full shadow-[inset_0px_1.15px_1.15px_0px_rgba(255,255,255,0.09),inset_0px_1.15px_18.4px_0px_rgba(255,255,255,0.12)]" />
              </div>
              <div className="Label text-[#f2c6a6] text-[0.875rem] sm:text-sm font-medium font-['Inter'] leading-snug whitespace-nowrap">YOUR PATH TO FOUNDER FREEDOM</div>
            </div>
          </div>

          {/* Hero content */}
          <div className="text-center opacity-0 hero-main-content">
            {/* Hero Header */}
            <div className="flex h-[6.25rem] sm:h-[130px] md:h-[160px] lg:h-[194px] flex-col justify-center self-stretch mb-[1rem] sm:mb-6 md:mb-8">
              <h1 
                style={{
                  background: "radial-gradient(86% 99% at 50% 50%, #D5DBE6 28.39%, #04070D 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                  fontFamily: "Inter"
                }}
                className="text-center text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-medium leading-[3rem] sm:leading-[4rem] md:leading-[5rem] lg:leading-[5.5rem] tracking-[-0.05rem] sm:tracking-[-0.07rem] md:tracking-[-0.09rem] lg:tracking-[-0.11rem] capitalize max-w-full"
              >
                Book Your Founder<br />
                Freedom Call
              </h1>
            </div>
            
            {/* Subheader */}
            <div className="max-w-[506px] mx-auto mb-8">
              <p 
                className="text-[#D5DBE6] text-center text-[1rem] sm:text-sm md:text-base font-normal font-['Inter'] leading-[1.425rem] sm:leading-[22px] md:leading-[25.6px] tracking-[-0.015rem] sm:tracking-[-0.28px] md:tracking-[-0.32px]"
              >
                Unlock AI agents that handle sales, support, and ops 24/7, so you can focus on building your vision, not running the grind.
              </p>
            </div>

            {/* Calendly Embed - Full width with proper height */}
            <div className="calendar-content opacity-0 w-full">
              <div className="calendly-inline-widget w-full" 
                   data-url="https://calendly.com/dreamflowlabs/dream-discovery-call-1?hide_gdpr_banner=1&background_color=090909&text_color=f0f0f0&primary_color=e3be7e" 
                   style={{ 
                     minWidth: '320px', 
                     height: '700px',
                     width: '100%'
                   }}>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional info section - separate from calendar */}
      <section className="bg-[#080808] pb-8 md:pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#D5DBE6] text-sm opacity-70">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>30 min</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Web conferencing details provided upon confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Script */}
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive"
      />
    </div>
  );
};

export default CalendarPage;
