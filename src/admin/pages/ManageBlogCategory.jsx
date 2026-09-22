import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { useAdminData } from '../context/AdminDataContext';
import { FiPlus, FiTrash2, FiEdit2, FiFolder, FiX, FiCheck } from 'react-icons/fi';

export default function ManageBlogCategory() {
  const { categories, saveCategory, deleteCategory, blogs } = useAdminData();
  const [newCatName, setNewCatName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    const slug = newCatName.toLowerCase().replace(/\s+/g, '-');
    saveCategory({ name: newCatName.trim(), slug });
    setNewCatName('');
  };

  const handleStartEdit = (cat) => {
    setEditingId(cat.id);
    setEditName(cat.name);
  };

  const handleSaveEdit = (cat) => {
    if (!editName.trim()) return;
    const slug = editName.toLowerCase().replace(/\s+/g, '-');
    saveCategory({ ...cat, name: editName.trim(), slug });
    setEditingId(null);
  };

  return (
    <AdminLayout title="Manage Blog Categories">
      <div className="space-y-6">
        
        {/* Add Category Form */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-card">
          <h3 className="text-base font-bold text-sfm-navy font-display mb-4 flex items-center gap-2">
            <FiPlus className="text-[#c1121f]" /> Add New Category
          </h3>
          <form onSubmit={handleAdd} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              required
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
              placeholder="e.g. Chiller Energy Efficiency / Fire Safety NBC"
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 font-bold focus:outline-none focus:border-sfm-navy"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#0b1d3a] hover:bg-[#1e3a8a] text-white text-xs font-bold transition-all shadow-sm shrink-0 cursor-pointer"
            >
              Create Category
            </button>
          </form>
        </div>

        {/* Categories Grid */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-card">
          <div className="mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Active Category Taxonomies ({categories.length})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const articleCount = blogs.filter(b => b.category === cat.name || b.categoryId === cat.id).length;
              const isEditing = editingId === cat.id;

              return (
                <div
                  key={cat.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-white border border-slate-200 text-sky-700 shadow-sm">
                        <FiFolder />
                      </div>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="bg-white border border-slate-300 rounded-lg px-2 py-1 text-xs font-bold text-slate-800 focus:outline-none"
                        />
                      ) : (
                        <div>
                          <h4 className="text-sm font-bold text-sfm-navy font-display">{cat.name}</h4>
                          <span className="text-[10px] text-slate-400 font-mono">slug: {cat.slug}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-600">
                      {articleCount} {articleCount === 1 ? 'Article' : 'Articles'}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {isEditing ? (
                        <>
                          <button
                            onClick={() => handleSaveEdit(cat)}
                            className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                            title="Save"
                          >
                            <FiCheck />
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="p-1.5 rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300"
                            title="Cancel"
                          >
                            <FiX />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleStartEdit(cat)}
                            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200"
                            title="Edit"
                          >
                            <FiEdit2 />
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete category "${cat.name}"?`)) {
                                deleteCategory(cat.id);
                              }
                            }}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50"
                            title="Delete"
                          >
                            <FiTrash2 />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </AdminLayout>
  );
}
