import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { usePublicData } from '../context/PublicDataContext';

export default function FloatingActions() {
  const { socials } = usePublicData();

  const rawPhone = socials?.phone || '';
  const rawWhatsApp = socials?.whatsapp || '';
  const cleanPhone = rawPhone.replace(/[^\d+]/g, '');
  const cleanWhatsApp = rawWhatsApp.replace(/[^\d]/g, '');
  const message = encodeURIComponent('Hello Spartans Facility Management, I would like to inquire about your R&M and IFM services / book a facility audit.');

  if (!cleanWhatsApp && !cleanPhone) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp Button - perfectly round, crisp circle */}
      {cleanWhatsApp && (
        <a
          href={`https://wa.me/${cleanWhatsApp}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 min-w-[48px] min-h-[48px] aspect-square rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center text-2xl shadow-xl hover:scale-110 active:scale-95 transition-all group relative shrink-0"
        >
          <FaWhatsapp className="w-6 h-6 shrink-0" />
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp ({rawWhatsApp})
          </span>
        </a>
      )}

      {/* Direct Call Button - perfectly round, crisp circle */}
      {cleanPhone && (
        <a
          href={`tel:${cleanPhone}`}
          aria-label="Direct Call"
          className="w-12 h-12 min-w-[48px] min-h-[48px] aspect-square rounded-full bg-[#c1121f] hover:bg-[#a50f1a] text-white flex items-center justify-center text-lg shadow-xl hover:scale-110 active:scale-95 transition-all group relative shrink-0"
        >
          <FaPhoneAlt className="w-5 h-5 shrink-0" />
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call: {rawPhone}
          </span>
        </a>
      )}
    </div>
  );
}
