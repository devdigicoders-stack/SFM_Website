import React, { useState } from 'react';
import { 
  FiBold, 
  FiItalic, 
  FiUnderline, 
  FiList, 
  FiLink, 
  FiImage, 
  FiCode, 
  FiEye, 
  FiEdit3,
  FiCornerDownLeft
} from 'react-icons/fi';

export default function RichTextEditor({ value = '', onChange, placeholder = 'Write your technical article here...' }) {
  const [previewMode, setPreviewMode] = useState(false);

  // Helper to insert formatting tags into textarea
  const insertTag = (openTag, closeTag = '') => {
    const textarea = document.getElementById('rich-text-area');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const replacement = `${openTag}${selectedText || 'Sample text'}${closeTag}`;
    const newValue = value.substring(0, start) + replacement + value.substring(end);
    
    onChange(newValue);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + openTag.length, start + replacement.length - closeTag.length);
    }, 0);
  };

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
      {/* Editor Toolbar */}
      <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1">
          <button
            type="button"
            onClick={() => insertTag('<h2>', '</h2>')}
            className="px-2.5 py-1.5 rounded-lg text-xs font-black bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 cursor-pointer"
            title="Heading 2"
          >
            H2
          </button>
          <button
            type="button"
            onClick={() => insertTag('<h3>', '</h3>')}
            className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 cursor-pointer"
            title="Heading 3"
          >
            H3
          </button>
          <div className="h-4 w-px bg-slate-300 mx-1"></div>

          <button
            type="button"
            onClick={() => insertTag('<strong>', '</strong>')}
            className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 cursor-pointer"
            title="Bold"
          >
            <FiBold />
          </button>
          <button
            type="button"
            onClick={() => insertTag('<em>', '</em>')}
            className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 cursor-pointer"
            title="Italic"
          >
            <FiItalic />
          </button>
          <button
            type="button"
            onClick={() => insertTag('<u>', '</u>')}
            className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 cursor-pointer"
            title="Underline"
          >
            <FiUnderline />
          </button>

          <div className="h-4 w-px bg-slate-300 mx-1"></div>

          <button
            type="button"
            onClick={() => insertTag('<ul>\n  <li>', '</li>\n</ul>')}
            className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 cursor-pointer"
            title="Bullet List"
          >
            <FiList />
          </button>
          <button
            type="button"
            onClick={() => insertTag('<blockquote class="p-3 my-2 border-l-4 border-red-600 bg-slate-50 italic">', '</blockquote>')}
            className="px-2 py-1 rounded-lg text-xs bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 cursor-pointer"
            title="Quote"
          >
            Quote
          </button>
          <button
            type="button"
            onClick={() => insertTag('<code class="bg-slate-100 px-1.5 py-0.5 rounded text-xs text-red-600 font-mono">', '</code>')}
            className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 cursor-pointer"
            title="Code tag"
          >
            <FiCode />
          </button>
          <button
            type="button"
            onClick={() => insertTag('<a href="#" class="text-red-600 underline">', '</a>')}
            className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 cursor-pointer"
            title="Insert Link"
          >
            <FiLink />
          </button>
        </div>

        {/* View Switcher */}
        <button
          type="button"
          onClick={() => setPreviewMode(!previewMode)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-slate-200 hover:bg-slate-100 text-sfm-navy cursor-pointer"
        >
          {previewMode ? (
            <>
              <FiEdit3 className="text-sfm-red" />
              <span>Back to Editor</span>
            </>
          ) : (
            <>
              <FiEye className="text-sky-700" />
              <span>Live Visual Preview</span>
            </>
          )}
        </button>
      </div>

      {/* Editor Body */}
      {previewMode ? (
        <div className="p-6 min-h-[220px] max-h-[400px] overflow-y-auto prose prose-slate max-w-none text-sm leading-relaxed">
          {value ? (
            <div dangerouslySetInnerHTML={{ __html: value }} />
          ) : (
            <span className="text-slate-400 italic">No content yet. Click Back to Editor to write.</span>
          )}
        </div>
      ) : (
        <textarea
          id="rich-text-area"
          rows={8}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full p-4 text-sm text-slate-800 focus:outline-none placeholder-slate-400 font-mono leading-relaxed resize-y min-h-[200px]"
        ></textarea>
      )}

      {/* Editor Footer */}
      <div className="bg-slate-50 border-t border-slate-200 px-4 py-2 text-[11px] text-slate-500 flex items-center justify-between">
        <span>HTML & Markdown tags supported.</span>
        <span>{value.length} Characters | {value.split(/\s+/).filter(Boolean).length} Words</span>
      </div>
    </div>
  );
}
