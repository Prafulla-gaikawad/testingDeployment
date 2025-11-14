import { useState, useEffect } from 'react';
import { useHomeData } from '../hooks/useHomeData';
import gavImage from '../images/gav.jpg'; // Fallback image
import back from '../images/back.jpg';

const Hero = () => {
  const { data, loading } = useHomeData();
  const language = 'mr'; // Default to Marathi, can be made dynamic later
  const [imageError, setImageError] = useState(false);

  // Get hero data from API or use fallback
  const heroData = data?.hero;
  // If image is a relative URL from API, construct full URL, otherwise use as-is
  const heroImageUrl = heroData?.image;
  
  const getImageUrl = (url) => {
    if (!url) return back;
    if (url.startsWith('http')) return url;
    
    // API returns URLs like "/api/images/..." 
    // VITE_API_BASE_URL is "http://localhost:5000/api"
    // So we need to remove /api from base URL if URL already starts with /api
    const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
    let finalUrl;
    if (url.startsWith('/api')) {
      // Remove /api from base URL to avoid double /api
      const baseWithoutApi = baseUrl.replace(/\/api$/, '');
      finalUrl = `${baseWithoutApi}${url}`;
    } else {
      finalUrl = `${baseUrl}${url}`;
    }
    
    // Add cache busting parameter for development to force reload
    // Use image ID as version to avoid constant reloads but still bust cache when image changes
    if (import.meta.env.DEV && url) {
      const separator = finalUrl.includes('?') ? '&' : '?';
      // Extract image ID from URL for stable cache busting
      const imageId = url.split('/').pop();
      finalUrl = `${finalUrl}${separator}v=${imageId}`;
    }
    
    // Debug logging
    console.log('Hero Image URL:', {
      original: url,
      final: finalUrl,
      baseUrl: baseUrl
    });
    
    return finalUrl;
  };
  
  const heroImage = getImageUrl(heroImageUrl);
  
  // Reset error when image URL changes
  useEffect(() => {
    setImageError(false);
  }, [heroImageUrl]);
  const villageName = heroData?.villageName?.[language] || heroData?.villageName?.mr || 'ग्रामपंचायत';
  const descriptions = heroData?.descriptions || [];

  return (
    <section id="home" className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: imageError ? `url(${gavImage})` : `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Hidden img tag to detect load errors */}
        <img 
          src={heroImage} 
          alt="" 
          style={{ display: 'none' }}
          onError={() => {
            console.error('Hero image failed to load:', heroImage);
            setImageError(true);
          }}
          onLoad={() => {
            console.log('Hero image loaded successfully:', heroImage);
            setImageError(false);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-white z-10">
        <div className="container mx-auto px-4 text-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 drop-shadow-2xl text-white">
              {loading ? 'लोड होत आहे...' : villageName}
            </h1>
          </div>
          {!loading && (
            <div className="space-y-6 max-w-4xl mx-auto">
              {descriptions.length > 0 ? (
                descriptions.map((desc, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                    <p className="text-xl md:text-2xl mb-3 font-bold drop-shadow-lg text-white">
                      {desc.subtitle?.[language] || desc.subtitle?.mr || ''}
                    </p>
                    <p className="text-lg md:text-xl drop-shadow-md text-gray-100 leading-relaxed">
                      {desc.description?.[language] || desc.description?.mr || ''}
                    </p>
                  </div>
                ))
              ) : (
                // Fallback content if no descriptions
                <>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                    <p className="text-xl md:text-2xl mb-3 font-bold drop-shadow-lg text-white">आपला अभिमान</p>
                    <p className="text-lg md:text-xl drop-shadow-md text-gray-100 leading-relaxed">
                      एक समृद्ध शांत गाव – जिथे परंपरा, संस्कृती आणि शेतीचा अभिमान जपला जातो.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                    <p className="text-xl md:text-2xl mb-3 font-bold drop-shadow-lg text-white">विकासाच्या दिशेने</p>
                    <p className="text-lg md:text-xl drop-shadow-md text-gray-100 leading-relaxed">
                      आत्मनिर्भर आणि प्रगत गावाची निर्मिती.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                    <p className="text-xl md:text-2xl mb-3 font-bold drop-shadow-lg text-white">वारसा आणि भक्ती</p>
                    <p className="text-lg md:text-xl drop-shadow-md text-gray-100 leading-relaxed">
                      मंदिरे, संस्कृती आणि अखंड श्रद्धेचे स्थान.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Curved Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 md:h-24"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 120L60 100C120 80 240 40 360 30C480 20 600 40 720 50C840 60 960 60 1080 50C1200 40 1320 20 1380 10L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
