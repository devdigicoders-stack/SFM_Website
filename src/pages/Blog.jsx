import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { usePublicData } from '../context/PublicDataContext';
import { 
  FiClock, 
  FiUser, 
  FiArrowRight, 
  FiTag, 
  FiCalendar, 
  FiX, 
  FiShare2, 
  FiBookOpen,
  FiCheckCircle 
} from 'react-icons/fi';

export default function Blog() {
  const { blogs, categories, socials, loading } = usePublicData();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeArticleModal, setActiveArticleModal] = useState(null);

  const filterCategories = [
    { id: 'all', label: 'All Articles' },
    ...categories.map(c => ({ id: c.name, label: c.name }))
  ];

  const filteredArticles = selectedCategory === 'all'
    ? blogs.filter(b => b.published !== false)
    : blogs.filter(b => b.published !== false && (b.category === selectedCategory || b.categoryId === selectedCategory));

  return (
    <AnimatedPage>
      {/* Hero */}
      <section className="relative py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="w-12 h-1 bg-[#c1121f] rounded mb-3"></div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
            Blog & Technical Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0b1d3a] font-display">
            Facility Management Knowledge Hub
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mt-3 leading-relaxed">
            Expert engineering articles, statutory compliance guidelines, and IoT predictive case studies from Spartans Facility Management.
          </p>

          {/* Dynamic Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-8">
            {filterCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0b1d3a] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && blogs.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200">
              <div className="w-10 h-10 border-4 border-slate-200 border-t-[#c1121f] rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-sm font-bold text-slate-600">Fetching live blogs from database...</p>
            </div>
          ) : filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
              <FiBookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No articles found in this category</h3>
              <p className="text-xs text-slate-500 mt-1">Select another topic above or browse all articles.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(article => (
                <div
                  key={article.id}
                  className="rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-card-hover flex flex-col justify-between group overflow-hidden"
                >
                  {/* Article Feature Image (if available) */}
                  {article.image && (
                    <Link to={`/blogs/${article.id}`} className="block relative h-48 bg-slate-900 overflow-hidden border-b border-slate-100">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/95 text-slate-900 shadow-sm border border-slate-100">
                          {article.category}
                        </span>
                      </div>
                    </Link>
                  )}

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {!article.image && (
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl p-2.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                            📰
                          </span>
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-white text-sky-800 border border-slate-200">
                            {article.category}
                          </span>
                        </div>
                      )}

                      <Link to={`/blogs/${article.id}`}>
                        <h3 className="text-xl font-bold text-[#0b1d3a] font-display mb-3 group-hover:text-[#c1121f] transition-colors leading-snug">
                          {article.title}
                        </h3>
                      </Link>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                        <span className="flex items-center gap-1.5 font-medium">
                          <FiUser className="text-slate-400" /> {article.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FiClock className="text-slate-400" /> {article.readTime || '4 min read'}
                        </span>
                      </div>

                      <Link
                        to={`/blogs/${article.id}`}
                        className="w-full py-3 px-4 rounded-xl bg-white border border-slate-200 hover:bg-[#0b1d3a] hover:text-white hover:border-[#0b1d3a] text-xs font-bold text-[#0b1d3a] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm group/btn text-center"
                      >
                        <span>Read Full Insight</span>
                        <FiArrowRight className="text-[#c1121f] group-hover/btn:text-white transition-colors" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Newsletter / Download Whitepaper Box */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#0b1d3a] text-white shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#c1121f] block">
                Technical Whitepaper
              </span>
              <h3 className="text-2xl font-bold text-white font-display">
                Download: The 2026 Facility Engineering Uptime Guide
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                Comprehensive maintenance checklists, LOTO SOP templates, and IoT sensor placement diagrams for commercial buildings.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#c1121f] hover:bg-red-700 text-white font-bold text-xs shadow-md transition-all shrink-0 flex items-center gap-2"
            >
              <span>Request Free Whitepaper PDF</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Article Detail Reader Modal */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50 sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#0b1d3a] text-white text-[10px] font-black uppercase tracking-wider">
                  {activeArticleModal.category}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Published: {activeArticleModal.date}
                </span>
              </div>
              <button
                onClick={() => setActiveArticleModal(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-[#0b1d3a] font-display leading-tight mb-4">
                  {activeArticleModal.title}
                </h1>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pb-4 border-b border-slate-100">
                  <span className="flex items-center gap-1.5">
                    <FiUser className="text-[#c1121f]" /> By {activeArticleModal.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiClock className="text-[#c1121f]" /> {activeArticleModal.readTime || '4 min read'}
                  </span>
                </div>
              </div>

              {/* Excerpt callout */}
              <div className="p-4 rounded-2xl bg-red-50/70 border-l-4 border-[#c1121f] text-xs sm:text-sm font-medium text-slate-800 italic leading-relaxed">
                "{activeArticleModal.excerpt}"
              </div>

              {/* Rendered Rich Text Content */}
              <div 
                className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 prose max-w-none font-sans [&>h2]:text-lg [&>h2]:font-black [&>h2]:text-slate-900 [&>h2]:mt-6 [&>h3]:text-base [&>h3]:font-bold [&>h3]:text-slate-800 [&>p]:mb-3 [&>ul]:list-disc [&>ul]:pl-5 [&>blockquote]:border-l-4 [&>blockquote]:border-slate-300 [&>blockquote]:pl-4 [&>blockquote]:italic"
                dangerouslySetInnerHTML={{ __html: activeArticleModal.content }}
              />

              {/* Inquire Box inside Modal */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Want to deploy these engineering solutions at your facility? {socials?.phone && <>Call: <strong className="text-slate-800">{socials.phone}</strong></>}
                </div>
                <Link
                  to="/contact"
                  onClick={() => setActiveArticleModal(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#c1121f] hover:bg-red-700 text-white font-black text-xs shadow-md transition-all flex items-center gap-2"
                >
                  <span>Book Free Technical Audit</span>
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimatedPage>
  );
}
