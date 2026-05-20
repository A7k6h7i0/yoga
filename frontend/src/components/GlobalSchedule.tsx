import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GlobalSchedule = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Sun rises first, then moon rises after it. The reverse happens naturally on scroll up.
  const sunY = useTransform(scrollYProgress, [0, 0.22, 0.38, 0.52, 1], [240, 0, 0, -120, -260]);
  const sunOpacity = useTransform(scrollYProgress, [0, 0.12, 0.32, 0.48, 0.62, 1], [0, 1, 1, 1, 0.5, 0]);

  const moonY = useTransform(scrollYProgress, [0, 0.36, 0.54, 0.7, 1], [260, 260, 0, -120, -260]);
  const moonOpacity = useTransform(scrollYProgress, [0, 0.3, 0.42, 0.68, 1], [0, 0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[190vh] md:h-[220vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between pt-10 pb-0 overflow-hidden">
        
        {/* Heading Section */}
        <div className="text-center w-full z-[100] px-4 pt-2 md:pt-4 mb-2 md:mb-4">
          <motion.h3 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-extrabold text-slate-900 font-serif leading-tight mb-2 md:mb-4"
          >
            Our schedule runs Round-the-Clock
          </motion.h3>
        </div>

        {/* Animation Visual Section */}
        <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center px-4">
          
          {/* SVG & Phone Wrapper */}
          <div className="relative w-[200px] md:w-[300px] aspect-[601/1204] z-10">
            
            
            <svg width="100%" height="100%" viewBox="0 0 601 1204" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
              <g clipPath="url(#clip0_2078_272)">
                
                {/* Sun Path Group */}
                <motion.g style={{ y: sunY, opacity: sunOpacity }}>
                  <path 
                    className="sun" 
                    d="M413.453 748.429C476.103 748.616 527.042 697.98 527.228 635.33C527.415 572.68 476.779 521.741 414.129 521.555C351.479 521.368 300.54 572.005 300.354 634.655C300.167 697.304 350.803 748.243 413.453 748.429Z" 
                    fill="#FFA000" 
                  />
                </motion.g>

                {/* Moon Path Group */}
                <motion.g style={{ y: moonY, opacity: moonOpacity }}>
                  <path 
                    className="moon" 
                    d="M520.304 682.838C503.495 692.592 483.953 698.152 463.116 698.09C400.466 697.904 349.83 646.965 350.016 584.316C350.056 571.037 352.375 558.298 356.603 546.468C322.872 566.041 300.141 602.503 300.016 644.316C299.83 706.965 350.466 757.904 413.116 758.09C462.487 758.237 504.585 726.822 520.304 682.838Z" 
                    fill="url(#paint0_linear_2078_272)" 
                  />
                </motion.g>

                <g filter="url(#filter0_b_2078_272)">
                  <rect className="blur-schedule" x="83.9844" y="96" width="393.617" height="665.885" rx="8.62855" fill="#EAE4DF" fillOpacity="0.3"></rect>
                </g>

                <text transform="translate(132.691 156.564)" fill="black" style={{ whiteSpace: 'pre', fontFamily: 'serif', fontSize: '38px', fontWeight: 600 }}>
                  <tspan x="0" y="35">Thursday</tspan>
                </text>
                <text transform="translate(132.512 216.958)" fill="black" style={{ whiteSpace: 'pre', fontFamily: 'sans-serif', fontSize: '32px', fontWeight: 400 }}>
                  <tspan x="0" y="30">5:00pm</tspan>
                </text>
                <text transform="translate(132.348 271.353)" fill="black" style={{ whiteSpace: 'pre', fontFamily: 'sans-serif', fontSize: '26px' }}>
                  <tspan x="0" y="23">Yoga Nidra</tspan>
                  <tspan x="0" dy="1.2em">with Anand Patel</tspan>
                </text>

                <rect x="132.54" y="352.944" width="180" height="53" rx="24" stroke="#808080" strokeWidth="0.8"></rect>
                <text transform="translate(166.074 366.527)" fill="#4D4D4D" style={{ whiteSpace: 'pre', fontFamily: 'sans-serif', fontSize: '22px', fontWeight: 500 }}>
                  <tspan x="0" y="20.6">Book Class</tspan>
                </text>

                <path d="M14.114 412.361C6.12405 411.086 3.88479 408.076 3.9064 400.817C3.98243 375.288 4.05846 349.758 4.13523 323.978C4.16057 315.468 5.91664 312.971 14.166 310.994L14.2212 292.471C13.222 292.468 12.4733 292.216 11.4749 291.963C7.23124 290.949 4.24405 287.436 4.25673 283.182C4.33872 255.65 4.4207 228.118 4.50195 200.837C4.5176 195.581 7.77396 192.586 14.7721 191.356L14.7855 186.851C14.8966 149.558 15.0084 112.014 15.1195 74.7209C15.1784 54.9481 21.7246 37.6978 35.5054 23.7225C49.7874 9.24819 67.2943 2.29194 87.7781 2.35294C148.979 2.5352 210.181 2.71745 271.632 2.90046C333.083 3.08346 434.003 3.384 515.189 3.62577C543.416 3.70983 564.862 16.289 578.778 40.8589C584.99 51.8902 587.452 63.9108 587.415 76.4252C587.304 113.718 587.193 151.011 587.082 188.054L587.069 192.56C595.556 194.588 597.297 197.095 597.272 205.605C597.147 247.653 597.022 289.703 596.897 331.501C596.872 340.011 595.116 342.257 586.617 344.234L586.602 349.24C585.829 608.789 585.056 868.589 584.283 1128.14C584.219 1149.41 577.42 1167.66 561.889 1182.39C547.61 1195.86 530.355 1202.06 511.12 1202.01C369.233 1201.58 227.096 1201.16 85.2085 1200.74C53.9833 1200.65 28.0561 1183.05 17.1468 1155.48C13.4274 1146.21 12.2074 1136.45 12.2373 1126.43C12.5742 1013.3 12.9103 900.424 13.2472 787.294L14.3645 412.111L14.114 412.361ZM34.5346 601.392C34.3199 673.475 34.106 745.307 33.8913 817.39C33.7162 876.208 33.5402 935.276 33.3651 994.094C33.2346 1037.89 33.1042 1081.7 32.9738 1125.5C32.9313 1139.76 37.3912 1152.04 46.352 1162.83C58.7988 1177.38 75.0181 1183.44 94.003 1183.49C229.895 1183.9 365.787 1184.3 501.679 1184.71C505.176 1184.72 508.673 1184.73 511.922 1184.24C540.659 1181.32 562.965 1156.61 563.05 1127.82C564.092 777.921 565.134 428.268 566.176 78.365C566.22 63.598 561.012 50.8169 551.302 40.0255C539.35 26.9748 524.129 21.1728 506.393 21.1199C369.752 20.713 233.11 20.3061 96.4689 19.8992C95.4697 19.8962 94.2207 19.8925 93.2215 19.8895C58.7482 20.0371 35.6792 49.2534 35.8426 78.2877C36.0515 175.902 35.2604 273.762 34.9698 371.375L34.2855 601.14L34.5346 601.392Z" fill="black"></path>
              </g>
              <defs>
                <filter id="filter0_b_2078_272" x="66.7273" y="78.7429" width="428.131" height="700.399" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="8.62855"></feGaussianBlur>
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2078_272"></feComposite>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2078_272" result="shape"></feBlend>
                </filter>
                <linearGradient id="paint0_linear_2078_272" x1="413.157" y1="743.955" x2="413.677" y2="569.205" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#002A9C"></stop>
                  <stop offset="1" stopColor="#7DC4FF"></stop>
                </linearGradient>
                <clipPath id="clip0_2078_272">
                  <rect width="600.511" height="1203.19" fill="white" transform="translate(0.332031 0.585938)"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>

        </div>

        {/* Yoga Lady Image - Fixed lower body to the bottom of the sticky section */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-center pointer-events-none">
           <motion.img 
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             src="/round.avif"
             alt="Yoga Lady"
             className="w-full max-w-[750px] md:max-w-[950px] h-auto max-h-[60vh] md:max-h-[68vh] object-contain object-bottom"
           />
        </div>

      </div>
    </section>
  );
};

export default GlobalSchedule;
