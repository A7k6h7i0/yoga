import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Calendar, User, Tag, Flower2 } from 'lucide-react';

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['All', 'Productivity', 'Mindfulness', 'Movement', 'Nutrition', 'Culture'];
  const [activeCategory, setActiveCategory] = useState('All');

  const blogs = [
    {
      title: 'The Science of Micro-Movements: Boosting Desk Productivity',
      excerpt: 'Learn how 2-minute movement breaks can significantly enhance cognitive function and reduce physical strain during the workday.',
      category: 'Movement',
      author: 'Dr. Elena Vance',
      date: 'May 10, 2024',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80'
    },
    {
      title: 'Mindful Leadership: Leading with Clarity in a High-Stress World',
      excerpt: 'Discover the core principles of mindfulness that help leaders stay grounded, empathetic, and effective in fast-paced corporate environments.',
      category: 'Mindfulness',
      author: 'Marcus Thorne',
      date: 'May 8, 2024',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80'
    },
    {
      title: 'Brain Food: Nutritional Strategies for Sustained Mental Energy',
      excerpt: 'What you eat affects how you think. We dive into the best foods for cognitive health and focus during long office hours.',
      category: 'Nutrition',
      author: 'Dr. Sarah Li',
      date: 'May 5, 2024',
      image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80'
    },
    {
      title: 'Building a Culture of Calm: The LiveFit Approach to Work',
      excerpt: 'How integrating wellness into your company culture leads to higher retention, better morale, and long-term business success.',
      category: 'Culture',
      author: 'Julian Reed',
      date: 'May 2, 2024',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80'
    },
    {
      title: 'The Art of Disconnecting: Protecting Your Mental Shala',
      excerpt: 'Practical tips for setting digital boundaries and reclaiming your personal time in a hyper-connected world.',
      category: 'Mindfulness',
      author: 'Anya Petrov',
      date: 'April 28, 2024',
      image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80'
    },
    {
      title: 'Ergonomics vs. Energy: Why Your Chair Isn\'t the Only Problem',
      excerpt: 'Understanding the relationship between posture, energy flow, and workplace vitality for a more balanced life.',
      category: 'Movement',
      author: 'Robert Hall',
      date: 'April 25, 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
    }
  ];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pb-16 bg-brand-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-sky-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full opacity-5 pointer-events-none">
          <Flower2 className="w-full h-full text-sky-600" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif italic text-sky-950 mb-6 text-center"
          >
            The <span className="text-sky-500">LiveFit</span> Journal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-sky-700 max-w-xl mx-auto text-center mb-10 font-medium"
          >
            Scientific insights, expert wisdom, and practical guides to elevate your work and life.
          </motion.p>
          
          {/* Search & Categories */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-sky-400 group-focus-within:text-sky-600 transition-colors w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search for articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-8 py-4 rounded-2xl bg-white border border-sky-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 outline-none transition-all shadow-lg shadow-sky-100/50 text-sky-900 font-medium"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-200' 
                    : 'bg-white text-sky-500 border border-sky-100 hover:bg-sky-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-4 shadow-lg">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-bold text-sky-600 uppercase tracking-widest shadow-md">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-3 text-sky-400 text-[9px] font-bold uppercase tracking-widest mb-2">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {blog.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> {blog.author}</span>
                </div>
                <h3 className="text-lg font-bold text-sky-950 group-hover:text-sky-600 transition-colors mb-2 leading-snug">
                  {blog.title}
                </h3>
                <p className="text-xs text-sky-600 leading-relaxed font-medium mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-sky-500 group-hover:text-sky-900 transition-colors uppercase tracking-widest">
                  Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-sky-100 mx-auto mb-4" />
            <p className="text-sky-400 font-bold uppercase tracking-widest text-xs">No articles found in this path.</p>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="py-16 container mx-auto px-6">
        <div className="bg-sky-600 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="grid grid-cols-6 gap-4 h-full">
              {[...Array(12)].map((_, i) => (
                <Flower2 key={i} className="w-full h-full text-white" />
              ))}
            </div>
          </div>
          <div className="relative z-10 max-w-xl mx-auto">
            <Tag className="w-8 h-8 text-sky-200 mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-4 leading-tight">Weekly <br /> Wellness Digest</h2>
            <p className="text-base text-sky-50 mb-8 font-medium opacity-90">
              Join 20,000+ conscious professionals receiving our weekly guide to workplace harmony and personal growth.
            </p>
            <form className="flex flex-col md:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-3 rounded-full bg-white text-sky-900 focus:ring-4 focus:ring-white/20 outline-none font-bold text-sm"
              />
              <button className="px-8 py-3 bg-sky-950 text-white rounded-full font-bold hover:bg-sky-900 transition-all shadow-xl text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
