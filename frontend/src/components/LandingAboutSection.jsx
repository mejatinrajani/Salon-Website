import React from 'react';

const LandingAboutSection = () => {
  return (
    <div className="relative overflow-x-hidden w-full min-h-screen bg-[#ece8e1] text-[#111] px-8 md:px-16 py-20 flex flex-col justify-center">

      <div className="max-w-screen-2xl mx-auto w-full">
        
        {/* Massive Header */}
        <h2 className="text-7xl md:text-[10rem] lg:text-[12rem] font-serif font-normal leading-none tracking-tight mb-8 md:mb-0 relative z-10">
          ABOUT
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 relative z-20">
          
          {/* Left Column: Image */}
          <div className="md:col-span-5 md:col-start-1 mt-8 md:-mt-20 lg:mt-24">
            <div className="w-full aspect-[4/5] bg-[#d5cec4] overflow-hidden">
              <img 
                src="/api/placeholder/800/1000" 
                alt="Aman practicing yoga outdoors" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right Column: Text & Interactions */}
          <div className="md:col-span-6 flex flex-col justify-end pb-4 md:pb-12">
            <div className="space-y-6 text-lg md:text-xl lg:text-2xl leading-relaxed font-light font-sans max-w-2xl">
              <p>
                Aman aims to make yoga impactful and accessible for everyone. Merging his unique 
                backgrounds as a former Taekwondo champion and K-Pop Recording Artist/Songwriter/Producer, 
                Aman founded the <em className="font-serif italic">'Glow Flow Yoga by Aman Method'</em>, designed to fully 
                promote connection of mind, body, and spirit through fun and intelligently sequenced flows 
                with instruction that considers proper muscle activation, spinal alignment, flexibility, mental focus, 
                and most importantly breath - bridging ancient practices of yoga and martial arts with pilates structural alignment.
              </p>
              
              <p>
                Aman's offerings also include deeply meditative and therapeutic <em className="font-serif italic">Yin</em> and <em className="font-serif italic">Restorative</em> practices, 
                and facilitates <em className="font-serif italic">Sound Baths</em> which envelops individuals in vibrations to heal on a cellular level. 
                Check out all the different types of classes and styles he offers.
              </p>
              
              <p>
                Aman's offerings also include deeply meditative and therapeutic <em className="font-serif italic">Yin</em> and <em className="font-serif italic">Restorative</em> practices, 
                and facilitates <em className="font-serif italic">Sound Baths</em> which envelops individuals in vibrations to heal on a cellular level. 
                Check out all the different types of classes and styles he offers.
              </p>
            </div>

            {/* Bottom Actions: Read More & Arrow */}
            <div className="flex justify-between items-end mt-16 lg:mt-16 w-full">
              <a href='/about' className="text-xl uppercase tracking-widest border-b border-[#111] pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAboutSection;