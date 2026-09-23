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

const DEFAULT_CATEGORIES = [];
const DEFAULT_BLOGS = [];

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

  // Pure dynamic state from Database API
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Always fetch live data from MongoDB Atlas Database API
  useEffect(() => {
    const fetchAllDynamicData = async () => {
      setLoading(true);
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
        }
        if (homeRes.status === 'fulfilled' && homeRes.value?.data) {
          setHomepage(homeRes.value.data);
        }
        if (socRes.status === 'fulfilled' && socRes.value?.data) {
          setSocials(socRes.value.data);
        }
        if (blogRes.status === 'fulfilled' && blogRes.value?.data !== undefined) {
          const apiBlogs = blogRes.value.data;
          setBlogs(Array.isArray(apiBlogs) ? apiBlogs : []);
        }
        if (catRes.status === 'fulfilled' && catRes.value?.data !== undefined) {
          const apiCategories = catRes.value.data;
          setCategories(Array.isArray(apiCategories) ? apiCategories : []);
        }
      } catch (err) {
        console.warn('Backend dynamic fetch error:', err.message);
      } finally {
        setLoading(false);
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
        categories,
        loading
      }}
    >
      {children}
    </PublicDataContext.Provider>
  );
}

export function usePublicData() {
  return useContext(PublicDataContext);
}

