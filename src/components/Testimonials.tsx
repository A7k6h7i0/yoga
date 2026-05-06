import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Using a spring for a more organic flowing scroll effect
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);

  const reviews = [
    { text: "Yoga completely transformed my morning routine. I feel more centered and energized than ever before.", author: "Elena R." },
    { text: "The personalized flows adapt perfectly to how my physical body is feeling each day. Highly recommended.", author: "Marcus T." },
    { text: "A truly sacred experience. The spiritual guidance and the quality of the asanas are unmatched.", author: "Sophia W." },
    { text: "I've never been able to stick to meditation until I found this digital sanctuary.", author: "Julian H." },
    { text: "Yoga completely transformed my morning routine. I feel more centered and energized than ever before.", author: "Elena R." },
    { text: "The personalized flows adapt perfectly to how my body is feeling each day. Highly recommended.", author: "Marcus T." },
  ];

  return (
    <section ref={containerRef} className="bg-[#111] py-32 text-white relative overflow-hidden">
      <div className="mb-24 px-6 md:px-12 text-center">
        <h2 className="text-5xl md:text-8xl font-light italic tracking-tighter">voices of the sangha</h2>
        <p className="text-white/50 mt-6 text-xl font-light max-w-2xl mx-auto">discover how our community is transforming their lives through dedicated practice and mindful breathing.</p>
      </div>

      <motion.div style={{ x }} className="flex gap-8 px-6 whitespace-nowrap">
        {reviews.map((review, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", rotateZ: idx % 2 === 0 ? 2 : -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="shrink-0 w-[400px] md:w-[600px] bg-white/5 border border-white/10 rounded-3xl p-10 md:p-12 transition-colors duration-300 whitespace-normal backdrop-blur-md"
          >
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#FACC15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8">"{review.text}"</p>
            <p className="text-white/60 font-medium tracking-widest uppercase text-sm">— {review.author}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
