// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
const VILLAGE_DOMAIN = import.meta.env.VITE_VILLAGE_DOMAIN || window.location.hostname;

/**
 * Get village domain from current URL
 */
export const getVillageDomain = () => {
  return VILLAGE_DOMAIN || window.location.hostname;
};

/**
 * Get API headers with village domain
 */
export const getHeaders = (includeAuth = false) => {
  const headers = {
    'Content-Type': 'application/json',
    'X-Village-Domain': getVillageDomain(),
  };

  if (includeAuth) {
    const token = localStorage.getItem('adminToken');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return headers;
};

/**
 * API request wrapper
 */
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = getHeaders(options.requireAuth || false);

  const config = {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * API Methods
 */
export const api = {
  // Public endpoints
  getHomeData: () => apiRequest('/v1/data/home'),

  getImage: (imageId) => `${API_BASE_URL}/images/${imageId}`,

  submitComplaint: (complaintData) =>
    apiRequest('/complaints', {
      method: 'POST',
      body: JSON.stringify(complaintData),
    }),

  // Admin endpoints
  admin: {
    login: (email, password) =>
      apiRequest('/admin/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),

    register: (email, password) =>
      apiRequest('/admin/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),

    getHero: () => apiRequest('/admin/hero', { requireAuth: true }),

    updateHero: (data) =>
      apiRequest('/admin/hero', {
        method: 'PUT',
        body: JSON.stringify(data),
        requireAuth: true,
      }),

    getAbout: () => apiRequest('/admin/about', { requireAuth: true }),

    updateAbout: (data) =>
      apiRequest('/admin/about', {
        method: 'PUT',
        body: JSON.stringify(data),
        requireAuth: true,
      }),

    getOfficials: () => apiRequest('/admin/officials', { requireAuth: true }),

    createOfficial: (data) =>
      apiRequest('/admin/officials', {
        method: 'POST',
        body: JSON.stringify(data),
        requireAuth: true,
      }),

    updateOfficial: (id, data) =>
      apiRequest(`/admin/officials/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        requireAuth: true,
      }),

    deleteOfficial: (id) =>
      apiRequest(`/admin/officials/${id}`, {
        method: 'DELETE',
        requireAuth: true,
      }),

    getComplaints: (page = 1, limit = 20, status = null) => {
      const params = new URLSearchParams({ page, limit });
      if (status) params.append('status', status);
      return apiRequest(`/admin/complaints?${params}`, { requireAuth: true });
    },

    getComplaint: (id) =>
      apiRequest(`/admin/complaints/${id}`, { requireAuth: true }),

    updateComplaintStatus: (id, status) =>
      apiRequest(`/admin/complaints/${id}/status`, {
        method: 'PUT',
        body: JSON.stringify({ status }),
        requireAuth: true,
      }),

    uploadImage: async (file, component, category = null, altText = '', order = 0) => {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('component', component);
      if (category) formData.append('category', category);
      formData.append('altText', altText);
      formData.append('order', order);

      const headers = getHeaders(true);
      delete headers['Content-Type']; // Let browser set Content-Type for FormData

      const response = await fetch(`${API_BASE_URL}/admin/images/upload`, {
        method: 'POST',
        headers,
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Image upload failed');
      }
      return data;
    },

    getImages: (component) =>
      apiRequest(`/admin/images/component/${component}`, { requireAuth: true }),

    updateImage: (id, data) =>
      apiRequest(`/admin/images/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        requireAuth: true,
      }),

    deleteImage: (id) =>
      apiRequest(`/admin/images/${id}`, {
        method: 'DELETE',
        requireAuth: true,
      }),
  },
};

export default api;

