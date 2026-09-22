import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import RichTextEditor from '../components/RichTextEditor';
import { useAdminData } from '../context/AdminDataContext';
import { 
  FiPlus, 
  FiEdit2, 
  FiTrash2, 
  FiEye, 
  FiX, 
  FiCheck, 
  FiClock, 
  FiUser, 
  FiTag,
  FiSearch
} from 'react-icons/fi';

export default function ManageBlog() {
  const { blogs, saveBlog, deleteBlog, categories } = useAdminData();
  const [searchTerm, setSearchTerm] = useState('');
  const [editingBlog, setEditingBlog] = useState(null);
  const [showEditorModal, setShowEditorModal] = useState(false);

  // Form State for Add / Edit
  const [formData, setFormData] = useState({
    title: '',
    category: 'AI & Predictive FM',
    author: 'Pranjal Gupta',
    readTime: '4 min read',
    published: true,
    excerpt: '',
    content: ''
  });

  const handleOpenNew = () => {
    setFormData({
      title: '',
      category: categories[0]?.name || 'AI & Predictive FM',
      author: 'Pranjal Gupta',
      readTime: '4 min read',
      published: true,
      excerpt: '',
      content: ''
    });
    setEditingBlog(null);
    setShowEditorModal(true);
  };

  const handleOpenEdit = (blog) => {
    setFormData({
      id: blog.id,
      title: blog.title,
      category: blog.category,
      author: blog.author,
      readTime: blog.readTime,
      published: blog.published,
      excerpt: blog.excerpt,
      content: blog.content || ''
    });
    setEditingBlog(blog);
    setShowEditorModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.excerpt) {
      alert('Please fill in Blog Title and Excerpt.');
      return;
    }

    saveBlog(formData);
    setShowEditorModal(false);
  };

  const filteredBlogs = blogs.filter(b => 
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout title="Manage Blog & Articles">
      <div className="space-y-6">
        
        {/* Top Control Bar */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="relative w-full sm:w-80">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles by title, category..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sfm-navy font-medium"
            />
          </div>

          <button
            onClick={handleOpenNew}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#c1121f] hover:bg-[#a50f1a] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <FiPlus />
            <span>Write New Technical Blog</span>
          </button>

        </div>

        {/* Blogs List Table */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-card overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Published Technical Articles ({filteredBlogs.length})
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 uppercase font-extrabold text-[10px]">
                  <th className="pb-3 px-3">Title & Summary</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">Author & Date</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right pr-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredBlogs.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="py-12 text-center text-slate-400">
                      No blog articles found. Click "Write New Technical Blog" to create one.
                    </td>
                  </tr>
                ) : (
                  filteredBlogs.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-3 max-w-md">
                        <strong className="text-sm font-bold text-sfm-navy block font-display mb-1">
                          {b.title}
                        </strong>
                        <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                          {b.excerpt}
                        </p>
                      </td>
                      <td className="py-4">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-[11px] font-bold border border-slate-200">
                          {b.category}
                        </span>
                      </td>
                      <td className="py-4">
                        <span className="font-bold text-slate-800 block text-xs">{b.author}</span>
                        <span className="text-[10px] text-slate-400">{b.date} • {b.readTime}</span>
                      </td>
                      <td className="py-4">
                        <button
                          onClick={() => saveBlog({ ...b, published: !b.published })}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold transition-colors cursor-pointer ${
                            b.published
                              ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {b.published ? 'Published' : 'Draft'}
                        </button>
                      </td>
                      <td className="py-4 text-right pr-3 space-x-2">
                        <button
                          onClick={() => handleOpenEdit(b)}
                          className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-sfm-navy font-bold text-xs transition-colors cursor-pointer"
                          title="Edit Article"
                        >
                          <FiEdit2 />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete article: "${b.title}"?`)) {
                              deleteBlog(b.id);
                            }
                          }}
                          className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                          title="Delete Article"
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

        </div>

      </div>

      {/* Blog Editor Modal with Rich Text Editor */}
      {showEditorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8 animate-scaleUp">
            
            {/* Modal Header */}
            <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-sfm-navy font-display">
                  {editingBlog ? 'Edit Technical Article' : 'Compose New Technical Article'}
                </h3>
                <p className="text-xs text-slate-400">
                  Formatted for SEO, engineering authority & client insights.
                </p>
              </div>

              <button
                onClick={() => setShowEditorModal(false)}
                className="p-2 rounded-xl bg-white hover:bg-slate-200 text-slate-600 cursor-pointer"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. How AI Predictive Telemetry Prevents HVAC Chiller Failures"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-bold focus:outline-none focus:border-sfm-navy focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-semibold focus:outline-none focus:border-sfm-navy"
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="Pranjal Gupta"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-semibold focus:outline-none focus:border-sfm-navy"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Read Time
                  </label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    placeholder="4 min read"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-semibold focus:outline-none focus:border-sfm-navy"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Short Excerpt / Meta Description *
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Short 2-line summary for article preview cards and SEO metadata..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-sfm-navy focus:bg-white"
                ></textarea>
              </div>

              {/* Rich Text Editor for Content */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Article Full Content (Rich Text Formatting)
                </label>
                <RichTextEditor
                  value={formData.content}
                  onChange={(val) => setFormData({ ...formData, content: val })}
                  placeholder="Write the full technical details, diagrams, and case study points here..."
                />
              </div>

              {/* Publish Toggle */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <input
                  type="checkbox"
                  id="publishToggle"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-4 h-4 rounded text-sfm-navy focus:ring-sfm-navy"
                />
                <label htmlFor="publishToggle" className="text-xs font-bold text-slate-800 cursor-pointer">
                  Publish article immediately to public Knowledge Hub (`/blogs`)
                </label>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowEditorModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#c1121f] hover:bg-[#a50f1a] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  {editingBlog ? 'Save Changes' : 'Publish Article'}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </AdminLayout>
  );
}
