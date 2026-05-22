import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Calendar, User, MonitorPlay, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ZoomSessions = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [typedHeading, setTypedHeading] = useState('');

  const headingText = 'Your Wellness,\nAnywhere';

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) {
      setTypedHeading('');
      return;
    }

    let index = 0;
    setTypedHeading('');

    const timer = window.setInterval(() => {
      index += 1;
      setTypedHeading(headingText.slice(0, index));

      if (index >= headingText.length) {
        window.clearInterval(timer);
      }
    }, 75);

    return () => window.clearInterval(timer);
  }, [isInView]);

  const headingLines = typedHeading.split('\n');

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#F8F5F1] bg-[url('/workflow-bg.jpg')] bg-cover bg-center bg-no-repeat relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          {/* Left Column - Content */}
          <motion.div
            className="lg:w-5/12"
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={{
              hidden: { opacity: 0, x: -70 },
              show: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1.45,
                  ease: [0.23, 1, 0.32, 1],
                  staggerChildren: 0.12,
                  delayChildren: 0.15,
                },
              },
            }}
          >
            <motion.h2
              className="text-5xl md:text-5xl font-bold mb-6 text-slate-900 leading-[1.1]"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1] },
                },
              }}
            >
              <span className="block whitespace-pre-line">
                {headingLines[0] || ''}
                {isInView && typedHeading.length < headingText.length ? (
                  <span className="inline-block w-[2px] h-[0.9em] translate-y-[0.1em] bg-orange-500 align-middle animate-pulse ml-1" />
                ) : null}
              </span>
              <span className="block text-orange-500">
                {headingLines[1] || ''}
              </span>
            </motion.h2>

            <motion.p
              className="text-[17px] text-slate-600 mb-12 leading-relaxed max-w-md"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.2 },
                },
              }}
            >
              Live small-group wellness sessions designed for modern living - accessible from home,
              office, travel, or anywhere your day begins.
            </motion.p>

            <motion.div
              className="space-y-8 mb-12"
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: [0.23, 1, 0.32, 1],
                    staggerChildren: 0.1,
                    delayChildren: 0.25,
                  },
                },
              }}
            >
              <motion.div
                className="flex items-start gap-5"
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
                }}
              >
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-md">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-slate-900 mb-1">Small Groups</h3>
                  <p className="text-[14px] text-slate-600">Personal attention. Real connection.</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-5"
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.08 } },
                }}
              >
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-slate-900 mb-1">Join From Anywhere</h3>
                  <p className="text-[14px] text-slate-600">Home, office, travel, or outdoors.</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-5"
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.16 } },
                }}
              >
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-md">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-slate-900 mb-1">Flexible & Consistent</h3>
                  <p className="text-[14px] text-slate-600">Sessions throughout the day<br />to fit your routine.</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.35 }}
              onClick={() => navigate('/livefitinquiry')}
              className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 uppercase tracking-wide text-sm hover:-translate-y-0.5"
            >
              Join a Live Session
            </motion.button>
          </motion.div>

          {/* Right Column - Image */}
          <div className="lg:w-7/12 w-full relative">
            <motion.div
              className="relative w-full drop-shadow-2xl rounded-[2rem] overflow-hidden"
              initial={{ opacity: 0, x: 120, scale: 0.96, rotate: 1.5 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1, rotate: 0 } : { opacity: 0, x: 120, scale: 0.96, rotate: 1.5 }}
              transition={{ duration: 1.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <motion.img
                src="/zoom.png"
                alt="Live Wellness Session"
                className="w-full h-full object-contain"
                animate={isInView ? { y: [0, -10, 0] } : { y: 0 }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 relative z-10"
        >
          <div className="flex items-start gap-4 flex-1">
            <div className="shrink-0">
              <User className="w-9 h-9 text-orange-500" strokeWidth={1} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-[15px] mb-1">Expert Instructors</h4>
              <p className="text-[13px] text-slate-600 leading-tight">Learn from certified<br />wellness professionals.</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-orange-100 shrink-0"></div>

          <div className="flex items-start gap-4 flex-1">
            <div className="shrink-0">
              <MonitorPlay className="w-9 h-9 text-orange-500" strokeWidth={1} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-[15px] mb-1">Live & Interactive</h4>
              <p className="text-[13px] text-slate-600 leading-tight">Real-time guidance.<br />Real-time support.</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-orange-100 shrink-0"></div>

          <div className="flex items-start gap-4 flex-1">
            <div className="shrink-0">
              <Users className="w-9 h-9 text-orange-500" strokeWidth={1} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-[15px] mb-1">Supportive Community</h4>
              <p className="text-[13px] text-slate-600 leading-tight">Stay motivated with like-minded<br />people on the same journey.</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-orange-100 shrink-0"></div>

          <div className="flex items-start gap-4 flex-1">
            <div className="shrink-0">
              <Sparkles className="w-9 h-9 text-orange-500" strokeWidth={1} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-[15px] mb-1">Holistic Approach</h4>
              <p className="text-[13px] text-slate-600 leading-tight">Yoga, fitness, breathwork,<br />meditation & more.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ZoomSessions;
