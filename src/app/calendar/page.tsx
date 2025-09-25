"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Navbar from '@/components/landing/navbar';

// TypeScript declarations for Calendly
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement; prefill?: Record<string, string>; utm?: Record<string, string>; }) => void;
      destroyBadgeWidget?: () => void;
    };
  }
}

const CalendarPage = () => {
  const [key, setKey] = useState(0);
  
  console.log('🔄 CalendarPage: Component rendered with key:', key);
  
  // Mount effect - runs only once
  useEffect(() => {
    console.log('🚀 CalendarPage: Component mounted');
    
    // Log Calendly script status
    console.log('📜 Calendly script status:', {
      scriptExists: !!window.Calendly,
      scriptMethods: window.Calendly ? Object.keys(window.Calendly) : 'N/A'
    });
    
    // Force re-render by updating key when component mounts
    console.log('🔑 Setting key from 0 to 1');
    setKey(1);
    
    return () => {
      console.log('🧹 CalendarPage: Component unmounting');
    };
  }, []); // Empty dependency array - runs only once
  
  // Key change effect - runs when key changes
  useEffect(() => {
    console.log('🔑 Key changed to:', key);
    
    if (key > 0) {
      // Log existing calendly widgets
      const existingWidgets = document.querySelectorAll('.calendly-inline-widget');
      console.log('📅 Existing calendly widgets found:', existingWidgets.length);
      existingWidgets.forEach((widget, index) => {
        console.log(`   Widget ${index}:`, {
          hasDataUrl: widget.hasAttribute('data-url'),
          dataUrl: widget.getAttribute('data-url'),
          hasIframe: !!widget.querySelector('iframe'),
          innerHTML: widget.innerHTML.length > 0 ? 'Has content' : 'Empty'
        });
      });
      
      // If Calendly script exists but widget is empty, manually initialize
      if (window.Calendly && existingWidgets.length > 0) {
        existingWidgets.forEach((widget, index) => {
          if (!widget.querySelector('iframe') && widget.getAttribute('data-url')) {
            console.log(`🔧 Manually initializing widget ${index}`);
            const dataUrl = widget.getAttribute('data-url');
            if (dataUrl) {
              // Clear and manually initialize
              widget.innerHTML = '';
              window.Calendly?.initInlineWidget({
                url: dataUrl,
                parentElement: widget as HTMLElement,
                prefill: {},
                utm: {}
              });
            }
          }
        });
      }
    }
  }, [key]); // Only depends on key
  
  // Delayed check effect - runs when key changes to check widget status
  useEffect(() => {
    if (key > 0) {
      // Check if Calendly reinitializes after key change
      const timer = setTimeout(() => {
        const widgets = document.querySelectorAll('.calendly-inline-widget');
        console.log('⏰ After 1 second, widgets status:', {
          count: widgets.length,
          widgets: Array.from(widgets).map((w, i) => ({
            index: i,
            hasIframe: !!w.querySelector('iframe'),
            content: w.innerHTML.length > 0 ? 'Has content' : 'Empty'
          }))
        });
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [key]);
  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Navbar */}
      <Navbar />
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0">
        <div className="TopGradientBg absolute -top-[241px] left-1/2 transform -translate-x-1/2 w-[381.01px] h-[382px] opacity-40 rounded-br-md blur-[132.70px]" 
             style={{
               background: "radial-gradient(circle, #ad6346 0%, rgba(255,255,255,0.6) 62%, rgba(255,255,255,0.1) 100%)"
             }} />
      </div>

      {/* Hero Top Gradient */}
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

      {/* Content Container */}
      <div className="relative z-20 pt-[100px] md:pt-[17vh] pb-16">
        <div className="container mx-auto px-4">
          
          {/* Top Pill */}
          <div className="text-center mb-6">
            <div className="TopPill inline-flex items-center h-[1.875rem] sm:h-[31.20px] md:h-[31.20px] bg-[#5353534d] rounded-3xl px-3 gap-2">
              <div className="Container w-2 h-2 sm:w-[6.90px] sm:h-[6.90px] md:w-[6.90px] md:h-[6.90px] flex-shrink-0">
                <div className="GradientShadow w-full h-full bg-gradient-to-b from-[#f2c6a6] to-[#bb835a] rounded-full shadow-[inset_0px_1.15px_1.15px_0px_rgba(255,255,255,0.09),inset_0px_1.15px_18.4px_0px_rgba(255,255,255,0.12)]" />
              </div>
              <div className="Label text-[#f2c6a6] text-[0.875rem] sm:text-sm font-medium font-['Inter'] leading-snug whitespace-nowrap">YOUR PATH TO FOUNDER FREEDOM</div>
            </div>
          </div>

          {/* Hero content */}
          <div className="text-center hero-main-content" style={{ opacity: 1 }}>
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

            {/* Calendly Embed - Force refresh on every visit */}
            <div className="mx-auto">
              <div 
                key={key}
                className="calendly-inline-widget"
                data-url="https://calendly.com/hello-avyra/dream-discovery-call?background_color=101010&text_color=ffffff&primary_color=d7b877"
                style={{ minWidth: '320px', height: '700px' }}
                onLoad={() => console.log('📅 Calendar div onLoad fired')}
                ref={(el) => {
                  if (el) {
                    console.log('📅 Calendar div ref attached, key:', key);
                    console.log('📅 Div details:', {
                      hasDataUrl: el.hasAttribute('data-url'),
                      dataUrl: el.getAttribute('data-url'),
                      className: el.className,
                      innerHTML: el.innerHTML.length > 0 ? 'Has content' : 'Empty'
                    });
                  }
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional info section */}
      <section className="bg-[#080808] pb-8 md:pb-16">
        <div className="mx-auto px-4">
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

      {/* Calendly Script - Simple async load */}
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive"
        onLoad={() => {
          console.log('📜 Calendly script loaded successfully');
          console.log('📜 window.Calendly available:', !!window.Calendly);
          if (window.Calendly) {
            console.log('📜 Calendly methods:', Object.keys(window.Calendly));
          }
        }}
        onError={(e) => {
          console.error('❌ Calendly script failed to load:', e);
        }}
      />
    </div>
  );
};

export default CalendarPage;