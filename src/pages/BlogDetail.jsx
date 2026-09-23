import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { usePublicData } from '../context/PublicDataContext';
import { 
  FiClock, 
  FiUser, 
  FiArrowLeft, 
  FiArrowRight, 
  FiCalendar, 
  FiShare2, 
  FiBookOpen, 
  FiPhone,
  FiTag,
  FiCheckCircle
} from 'react-icons/fi';

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs, socials, loading } = usePublicData();

  // Find blog by id or slug or fallback index
  const article = blogs.find(
    b => b.id === id || b.slug === id || String(b.id) === String(id)
  );

  // Suggested / related articles
  const relatedArticles = blogs
    .filter(b => b.id !== article?.id && b.published !== false)
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading && blogs.length === 0) {
    return (
      <AnimatedPage>
        <div className="py-32 max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="w-10 h-10 border-4 border-slate-200 border-t-[#c1121f] rounded-full animate-spin mx-auto"></div>
          <p className="text-slate-500 font-medium text-sm">Loading live article from database...</p>
        </div>
      </AnimatedPage>
    );
  }

  if (!article) {
    return (
      <AnimatedPage>
        <div className="py-24 max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-red-50 text-[#c1121f] flex items-center justify-center mx-auto text-2xl">
            <FiBookOpen />
          </div>
          <h2 className="text-3xl font-black text-[#0b1d3a] font-display">
            Article Not Found
          </h2>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            The technical insight or blog article you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0b1d3a] text-white font-bold text-xs shadow-md hover:bg-slate-800 transition-all"
          >
            <FiArrowLeft />
            <span>Back to Knowledge Hub</span>
          </Link>
        </div>
      </AnimatedPage>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <AnimatedPage>
      {/* Top Header / Breadcrumb */}
      <section className="bg-slate-50 border-b border-slate-200 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 mb-6">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#c1121f] transition-colors"
            >
              <FiArrowLeft />
              <span>Back to Knowledge Hub</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#0b1d3a] text-white text-[11px] font-black uppercase tracking-wider">
                {article.category}
              </span>
              <button
                onClick={handleShare}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#c1121f] hover:bg-slate-100 transition-colors text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
                title="Share Article"
              >
                <FiShare2 className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold">Share</span>
              </button>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1d3a] font-display leading-[1.2] tracking-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 mt-6 pt-6 border-t border-slate-200">
            <span className="flex items-center gap-1.5 text-slate-800 font-bold">
              <FiUser className="text-[#c1121f]" /> By {article.author || 'Pranjal Gupta'}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FiCalendar className="text-slate-400" /> Published: {article.date || 'June 2026'}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FiClock className="text-slate-400" /> {article.readTime || '4 min read'}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          
          {/* Feature Cover Image (if uploaded) */}
          {article.image && (
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 max-h-[460px] w-full">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          {/* Excerpt Lead / Callout Quote */}
          {article.excerpt && (
            <div className="p-6 sm:p-8 rounded-3xl bg-red-50/70 border-l-4 border-[#c1121f] text-sm sm:text-base font-medium text-slate-800 leading-relaxed italic shadow-xs">
              "{article.excerpt}"
            </div>
          )}

          {/* Rich Body Content */}
          <div
            className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 font-sans
              [&>h2]:text-2xl [&>h2]:font-black [&>h2]:text-[#0b1d3a] [&>h2]:mt-10 [&>h2]:mb-3 [&>h2]:font-display
              [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-2 [&>h3]:font-display
              [&>p]:text-sm sm:[&>p]:text-base [&>p]:leading-relaxed [&>p]:text-slate-700 [&>p]:mb-4
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:text-sm sm:[&>ul]:text-base [&>ul]:text-slate-700
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:text-sm sm:[&>ol]:text-base [&>ol]:text-slate-700
              [&>blockquote]:border-l-4 [&>blockquote]:border-[#c1121f] [&>blockquote]:bg-slate-50 [&>blockquote]:p-4 [&>blockquote]:rounded-r-2xl [&>blockquote]:italic [&>blockquote]:text-slate-700
              [&>a]:text-[#c1121f] [&>a]:font-bold [&>a]:underline hover:[&>a]:text-red-700"
            dangerouslySetInnerHTML={{ __html: article.content || '<p>No content written for this article.</p>' }}
          />

          {/* Free Technical Audit CTA Card */}
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#0b1d3a] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#c1121f] block">
                Engineering Consultation
              </span>
              <h3 className="text-2xl font-bold text-white font-display">
                Ready to optimize your facility's uptime & compliance?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                Spartans Facility Management provides customized Hard R&M SLAs, IoT predictive telemetry, and zero-liability certified staff.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#c1121f] hover:bg-red-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Book Free Technical Audit</span>
                <FiArrowRight />
              </Link>
              {socials?.phone && (
                <a
                  href={`tel:${socials.phone}`}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <FiPhone className="text-[#c1121f]" />
                  <span>Call {socials.phone}</span>
                </a>
              )}
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="pt-12 border-t border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                    Related Articles
                  </span>
                  <h3 className="text-2xl font-black text-[#0b1d3a] font-display">
                    More Technical Insights
                  </h3>
                </div>
                <Link
                  to="/blogs"
                  className="text-xs font-bold text-[#c1121f] hover:underline flex items-center gap-1"
                >
                  <span>View All</span>
                  <FiArrowRight />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedArticles.map((item) => (
                  <Link
                    key={item.id}
                    to={`/blogs/${item.id}`}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all shadow-xs hover:shadow-card-hover flex flex-col justify-between group"
                  >
                    <div>
                      {item.image && (
                        <div className="h-32 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-2xl bg-slate-100">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded bg-white text-sky-800 border border-slate-200 inline-block mb-3">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-bold text-[#0b1d3a] group-hover:text-[#c1121f] transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span>{item.readTime || '4 min read'}</span>
                      <span className="text-[#c1121f] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read <FiArrowRight />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </AnimatedPage>
  );
}
