import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Link as LinkIcon, Share2, Mail, MapPin, Phone } from 'lucide-react';
import Navigation from './Navigation';
import Logo from './Logo';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-brand-white flex flex-col w-full">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-white pt-24 pb-12 border-t border-sky-50 relative overflow-hidden">
        <div className="w-full px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
            {/* Brand Section */}
            <div className="lg:col-span-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-8">
                <Link to="/">
                  <Logo />
                </Link>
              </div>
              <p className="text-sky-800 font-medium leading-relaxed mb-10 max-w-sm mx-auto md:mx-0 opacity-70">
                Elevating corporate consciousness through ancient wisdom and modern technology. We build resilient, healthy, and high-performance teams worldwide.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                {[Globe, LinkIcon, Share2].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500 hover:bg-sky-600 hover:text-white transition-all shadow-sm group">
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-2 text-center md:text-left">
              <h4 className="font-bold text-sky-950 mb-8 uppercase tracking-widest text-[10px]">Ecosystem</h4>
              <ul className="space-y-4">
                <li><Link to="/workfit" className="text-sky-600 hover:text-sky-950 transition-colors text-sm font-bold">WorkFit</Link></li>
                <li><Link to="/" className="text-sky-600 hover:text-sky-950 transition-colors text-sm font-bold">Our Story</Link></li>
                <li><Link to="/blog" className="text-sky-600 hover:text-sky-950 transition-colors text-sm font-bold">Wellness Journal</Link></li>
                <li><Link to="/" className="text-sky-600 hover:text-sky-950 transition-colors text-sm font-bold">Voices</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2 text-center md:text-left">
              <h4 className="font-bold text-sky-950 mb-8 uppercase tracking-widest text-[10px]">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-sky-600 hover:text-sky-950 transition-colors text-sm font-bold">Help Center</a></li>
                <li><a href="#" className="text-sky-600 hover:text-sky-950 transition-colors text-sm font-bold">Careers</a></li>
                <li><a href="#" className="text-sky-600 hover:text-sky-950 transition-colors text-sm font-bold">Partnerships</a></li>
                <li><a href="#" className="text-sky-600 hover:text-sky-950 transition-colors text-sm font-bold">Press Kit</a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-4 text-center md:text-left">
              <h4 className="font-bold text-sky-950 mb-8 uppercase tracking-widest text-[10px]">Connect</h4>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center justify-center md:justify-start gap-4 text-sky-800 text-sm font-bold">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  hello@livefit.io
                </li>
                <li className="flex items-center justify-center md:justify-start gap-4 text-sky-800 text-sm font-bold">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  +1 (555) 012-3456
                </li>
                <li className="flex items-center justify-center md:justify-start gap-4 text-sky-800 text-sm font-bold">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-sky-50 flex flex-col md:flex-row justify-between items-center gap-8 text-center">
            <p className="text-sky-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              © 2024 LiveFit. Designed for the Conscious Professional.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-sky-400 hover:text-sky-600 text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy Policy</a>
              <a href="#" className="text-sky-400 hover:text-sky-600 text-[10px] font-bold uppercase tracking-widest transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Subtle Decorative Gradient */}
        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-sky-50/50 rounded-full blur-[120px] -z-10" />
      </footer>
    </div>
  );
};

export default Layout;
