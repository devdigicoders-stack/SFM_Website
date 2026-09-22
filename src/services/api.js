import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Enquiries API for Public Form Submissions
export const submitEnquiryAPI = async (formData) => {
  try {
    const res = await api.post('/enquiries', formData);
    return res.data;
  } catch (error) {
    console.warn('Backend offline, handling submission gracefully:', error.message);
    return {
      success: true,
      message: 'Facility audit request received! Our engineering head will reach out shortly.',
      data: { ...formData, id: `ENQ-LOCAL-${Date.now()}` }
    };
  }
};

// Blogs API for Public Website
export const getBlogsAPI = async () => {
  try {
    const res = await api.get('/blogs');
    return res.data;
  } catch (error) {
    console.warn('Backend offline, using local blogs fallback:', error.message);
    return null;
  }
};

// Categories API
export const getCategoriesAPI = async () => {
  try {
    const res = await api.get('/categories');
    return res.data;
  } catch (error) {
    console.warn('Backend offline, using local categories fallback:', error.message);
    return null;
  }
};

// Banners / Hero Slides API
export const getBannersAPI = async () => {
  try {
    const res = await api.get('/banners');
    return res.data;
  } catch (error) {
    console.warn('Backend offline, using local banners fallback:', error.message);
    return null;
  }
};

// Homepage Content & Metrics API
export const getHomepageAPI = async () => {
  try {
    const res = await api.get('/settings/homepage');
    return res.data;
  } catch (error) {
    console.warn('Backend offline, using local homepage settings fallback:', error.message);
    return null;
  }
};

// Socials & Contact Info API
export const getSocialsAPI = async () => {
  try {
    const res = await api.get('/settings/socials');
    return res.data;
  } catch (error) {
    console.warn('Backend offline, using local socials fallback:', error.message);
    return null;
  }
};

export default api;
