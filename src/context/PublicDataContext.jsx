import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getBannersAPI,
  getHomepageAPI,
  getSocialsAPI,
  getBlogsAPI,
  getCategoriesAPI
} from '../services/api';

const PublicDataContext = createContext();

const DEFAULT_BANNERS = [
  {
    id: 'ban-1',
    title: 'Strategic Repairs & Maintenance Partner',
    subtitle: 'Pan-India B2B Hard Services & Engineering Excellence',
    tagline: 'June 2026 Corporate Profile',
    active: true,
    ctaText: 'Request Facility Health Audit',
    ctaLink: '/contact'
  },
  {
    id: 'ban-2',
    title: 'Redefining Excellence in Integrated FM',
    subtitle: 'A single accountable partner for premium technical and soft services, powered by AI.',
    tagline: 'SFM | SMS | VIGYANI.AI',
    active: true,
    ctaText: 'Explore Vigyani.ai Hub',
    ctaLink: '/ifm-services'
  }
];

const DEFAULT_HOMEPAGE = {
  heroTagline: 'Spartans Facility Management • June 2026 Corporate Profile',
  heroHeading: 'Strategic Repairs & Maintenance Partner',
  heroSubheading: 'Pan-India B2B Hard Services & Engineering Excellence',
  heroDescription: 'Transforming infrastructure upkeep into seamless operational uptime. A single accountable partner for premium technical, engineering, and soft services — powered by Vigyani.ai.',
  milestone1: '100% ITI / Diploma Verified Manpower',
  milestone2: 'Lead Technical Partner: Taj Palace Lucknow',
  milestone3: 'Central Command Hub: Lucknow',
  retentionRate: '85%+',
  costReduction: '15-20%'
};

const DEFAULT_SOCIALS = {
  phone: '+91-8299726346',
  whatsapp: '+91-8299726346',
  email: 'Sales@spartansfacility.com',
  address: 'Headquarters & Command Hub: Lucknow, Uttar Pradesh (Pan-India Presence)',
  contactPerson: 'Pranjal Gupta',
  website: 'https://digicoders.in',
  linkedin: 'https://linkedin.com',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com'
};

const DEFAULT_CATEGORIES = [
  { id: 'cat-1', name: 'AI & Predictive FM' },
  { id: 'cat-2', name: 'Hard Engineering' },
  { id: 'cat-3', name: 'Safety & Compliance' },
  { id: 'cat-4', name: 'Case Studies' }
];

const DEFAULT_BLOGS = [
  {
    id: 'blog-1',
    title: 'How AI Predictive Telemetry Prevents HVAC Chiller Failures in Luxury Hotels',
    category: 'AI & Predictive FM',
    author: 'Pranjal Gupta',
    date: '2026-06-18',
    readTime: '4 min read',
    published: true,
    excerpt: 'Traditional maintenance is reactive. Learn how Vigyani.ai IoT vibration and thermal sensors predict motor bearing degradation 72 hours before catastrophic breakdown.',
    content: '<h2>The Shift from Reactive to Predictive Asset Oversight</h2><p>Commercial chiller plants in five-star hotels operate under continuous thermal strain. When a bearing fails unexpectedly during a banquet event, the financial and reputational cost is enormous.</p><p>By deploying <strong>Vigyani.ai IoT sensor arrays</strong>, engineering heads receive real-time alerts 72 hours in advance of mechanical failure.</p>'
  },
  {
    id: 'blog-2',
    title: 'Zero Liability Transfer: Why 100% ESIC, PF & LOTO Protocols Protect Property Owners',
    category: 'Safety & Compliance',
    author: 'SFM Safety Cell',
    date: '2026-06-12',
    readTime: '5 min read',
    published: true,
    excerpt: 'Uncertified third-party contractors expose corporate facilities to severe legal liabilities. Discover how Spartans FM enforces strict Lock-Out, Tag-Out and statutory insurance backing.',
    content: '<h2>Corporate Protection through Strict Statutory Compliance</h2><p>Facility owners often face severe liabilities if uncertified third-party contractors suffer accidents on site. Spartans FM guarantees 100% ESIC and Workmen Compensation backing.</p>'
  }
];

export function PublicDataProvider({ children }) {
  const [banners, setBanners] = useState(() => {
    try {
      const saved = localStorage.getItem('sfm_admin_banners');
      return saved ? JSON.parse(saved) : DEFAULT_BANNERS;
    } catch {
      return DEFAULT_BANNERS;
    }
  });

  const [homepage, setHomepage] = useState(() => {
    try {
      const saved = localStorage.getItem('sfm_admin_homepage');
      return saved ? JSON.parse(saved) : DEFAULT_HOMEPAGE;
    } catch {
      return DEFAULT_HOMEPAGE;
    }
  });

  const [socials, setSocials] = useState(() => {
    try {
      const saved = localStorage.getItem('sfm_admin_socials');
      return saved ? JSON.parse(saved) : DEFAULT_SOCIALS;
    } catch {
      return DEFAULT_SOCIALS;
    }
  });

  const [blogs, setBlogs] = useState(() => {
    try {
      const saved = localStorage.getItem('sfm_admin_blogs');
      return saved ? JSON.parse(saved) : DEFAULT_BLOGS;
    } catch {
      return DEFAULT_BLOGS;
    }
  });

  const [categories, setCategories] = useState(() => {
    try {
      const saved = localStorage.getItem('sfm_admin_categories');
      return saved ? JSON.parse(saved) : DEFAULT_CATEGORIES;
    } catch {
      return DEFAULT_CATEGORIES;
    }
  });

  // Sync dynamically with Backend REST API on mount
  useEffect(() => {
    const fetchAllDynamicData = async () => {
      try {
        const [banRes, homeRes, socRes, blogRes, catRes] = await Promise.allSettled([
          getBannersAPI(),
          getHomepageAPI(),
          getSocialsAPI(),
          getBlogsAPI(),
          getCategoriesAPI()
        ]);

        if (banRes.status === 'fulfilled' && banRes.value?.data !== undefined) {
          setBanners(banRes.value.data);
          localStorage.setItem('sfm_admin_banners', JSON.stringify(banRes.value.data));
        }
        if (homeRes.status === 'fulfilled' && homeRes.value?.data) {
          setHomepage(homeRes.value.data);
          localStorage.setItem('sfm_admin_homepage', JSON.stringify(homeRes.value.data));
        }
        if (socRes.status === 'fulfilled' && socRes.value?.data) {
          setSocials(socRes.value.data);
          localStorage.setItem('sfm_admin_socials', JSON.stringify(socRes.value.data));
        }
        if (blogRes.status === 'fulfilled' && blogRes.value?.data !== undefined) {
          // Only replace blogs if API returned data (avoid wiping cache with empty array on first boot)
          const blogsFromApi = blogRes.value.data;
          if (Array.isArray(blogsFromApi) && blogsFromApi.length > 0) {
            setBlogs(blogsFromApi);
            localStorage.setItem('sfm_admin_blogs', JSON.stringify(blogsFromApi));
          } else if (Array.isArray(blogsFromApi) && blogsFromApi.length === 0) {
            // API returned empty - clear local cache too (blogs genuinely deleted from DB)
            setBlogs([]);
            localStorage.setItem('sfm_admin_blogs', JSON.stringify([]));
          }
        }
        if (catRes.status === 'fulfilled' && catRes.value?.data !== undefined) {
          setCategories(catRes.value.data);
          localStorage.setItem('sfm_admin_categories', JSON.stringify(catRes.value.data));
        }
      } catch (err) {
        console.warn('Backend dynamic sync error:', err.message);
      }
    };

    fetchAllDynamicData();
  }, []);

  return (
    <PublicDataContext.Provider
      value={{
        banners,
        homepage,
        socials,
        blogs,
        categories
      }}
    >
      {children}
    </PublicDataContext.Provider>
  );
}

export function usePublicData() {
  return useContext(PublicDataContext);
}

