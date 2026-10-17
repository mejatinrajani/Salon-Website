
import React from 'react';

const AboutSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#ece8e1] text-[#111] font-sans overflow-x-hidden selection:bg-[#d5cec4]">
      
      {/* Navigation (Simplified from previous) */}
      <nav className="relative z-50 flex justify-between items-center px-12 py-8 w-full sticky top-0 bg-[#ece8e1]/90 backdrop-blur-sm">
        <div className="w-16 h-16 rounded-full bg-[#d5cec4] flex items-center justify-center text-3xl">✿</div>
        <div className="cursor-pointer space-y-2">
          <div className="w-8 h-[2px] bg-[#111]"></div>
          <div className="w-8 h-[2px] bg-[#111]"></div>
        </div>
      </nav>

      <main className="max-w-screen-2xl mx-auto px-8 md:px-16 py-20">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 relative">
          
          {/* LEFT COLUMN: Sticky Header & Images */}
          <div className="md:col-span-5 relative">
            <div className="sticky top-40 space-y-16">
              <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-serif font-normal leading-[0.9] tracking-tight uppercase">
                Aman<br/>Mishra
              </h1>
              
              {/* Example Image Placement */}
              <div className="w-full aspect-[3/4] bg-[#d5cec4] overflow-hidden mt-12">
                <img 
                  src="/api/placeholder/600/800" 
                  alt="Aman practicing yoga" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Scrolling Text & Quotes */}
          <div className="md:col-span-7 flex flex-col gap-12 text-lg md:text-xl leading-relaxed font-light mt-40">
            
            <p>
              Aman's vivacious personality and zeal for life comes through in his unique teaching methods. 
              Aman has been practicing and observing the science of yoga since 2006. Initially practicing yoga 
              as a form of exercise and stress relief, Aman quickly realized that the practice far exceeded his expectations.
            </p>

            <p>
              It was the ancient texts, philosophies and science behind consciousness and awareness of self that 
              made him fall in love with being on the mat and finding home.
            </p>

            {/* Large Quote Block */}
            <div className="py-12 my-8 border-l border-[#111] pl-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                'Touching people's lives, one posture, one breath, one vibration at a time'.
              </h2>
            </div>

            <p>
              At 15 years old, Aman moved to Los Angeles and continued a career as an accomplished actor, 
              singer, dancer, and model in Hollywood. Scouted by top South Korean record labels, he eventually 
              signed with Yedang Entertainment and moved to Seoul, Korea to pursue a career in K-Pop where he wrote, 
              composed, and co-produced his debut album.
            </p>

            {/* Inline Image in Right Column */}
             <div className="w-3/4 aspect-square bg-[#d5cec4] my-12 self-end overflow-hidden">
                <img 
                  src="/api/placeholder/600/600" 
                  alt="Dynamic pose" 
                  className="w-full h-full object-cover grayscale"
                />
            </div>

            <p>
              In 2019 Aman humbly accepted a calling in servitude, and was inspired to become a devoted yoga educator, 
              completing his 200 hour Yoga Teacher Training at The Collective - Desa Seni School of Yoga in Bali, Indonesia.
            </p>

            {/* Second Quote Block */}
            <div className="py-12 my-8">
               <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight text-right">
                "the go-to yoga teacher for a dynamic yoga class."
              </h2>
            </div>

            <p>
              Aman passes down the philosophies and knowledge he has gained from his beloved teachers, interwoven with 
              his own personal experiences and expressions of the practice to nurture connection with self and others.
            </p>

            {/* Circular Spinning Badge Section */}
            <div className="flex justify-center items-center py-20 relative">
              <div className="relative w-64 h-64 flex items-center justify-center group cursor-pointer">
                {/* Spinning Text SVG */}
                <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#111] overflow-visible">
                    <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                    <text fontSize="11" letterSpacing="2.5" className="uppercase font-sans">
                      <textPath href="#circlePath" startOffset="0%">
                        • Focus • Heal • Relax • Strengthen • Balance
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* Center Black Circle */}
                <div className="w-32 h-32 bg-[#111] rounded-full flex items-center justify-center text-[#ece8e1] text-center p-4 transition-transform duration-500 group-hover:scale-110">
                  <span className="text-sm uppercase tracking-widest font-medium">Explore<br/>Aman's<br/>Classes</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutSection;