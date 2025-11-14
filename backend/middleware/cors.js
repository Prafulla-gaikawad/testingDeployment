const cors = require('cors');
require('dotenv').config();

/**
 * CORS Middleware Configuration
 * Allows requests from localhost (development) and production frontend URL
 */
const corsOptions = {
  origin: function (origin, callback) {
    // Define allowed origins
    const allowedOrigins = [
      'http://localhost:5173',      // Vite default dev server
      'http://localhost:3000',      // React default dev server
      'http://localhost:5174',      // Alternative Vite port
      process.env.FRONTEND_URL      // Production frontend URL from environment
    ].filter(Boolean); // Remove any undefined values (e.g., if FRONTEND_URL is not set)

    // Allow requests with no origin (like mobile apps, Postman, or curl requests)
    if (!origin) {
      return callback(null, true);
    }

    // Normalize origins by removing trailing slashes for comparison
    const normalizedOrigin = origin.replace(/\/$/, '');
    const normalizedAllowed = allowedOrigins.map(o => o.replace(/\/$/, ''));

    // Check if the origin is in the allowed list
    if (normalizedAllowed.includes(normalizedOrigin)) {
      callback(null, true);
    } else {
      console.warn(`CORS blocked origin: ${origin}`);
      callback(new Error('Not allowed by CORS policy'));
    }
  },
  credentials: true, // Allow cookies and authentication headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Village-Domain'],
  exposedHeaders: ['Content-Type', 'Authorization']
};

// Export the CORS middleware
module.exports = cors(corsOptions);

