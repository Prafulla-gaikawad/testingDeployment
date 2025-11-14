import { useHomeData } from '../hooks/useHomeData';
import kakaImage from '../images/kaka.jpg'; // Fallback image
import sarpanchImage from '../images/sarpanch.jpg';
import adhikariImage from '../images/adhikari.jpg';
import dummyImage from '../images/dummy.jpg';
// Import additional member images
import memberImage1 from '../images/IMG-20251112-WA0001.jpg';
import memberImage2 from '../images/IMG-20251112-WA0002.jpg';
import memberImage3 from '../images/IMG-20251112-WA0005.jpg';
import memberImage4 from '../images/IMG-20251112-WA0006.jpg';
import memberImage5 from '../images/IMG-20251112-WA0007.jpg';
import memberImage6 from '../images/IMG-20251112-WA0008.jpg';
import memberImage7 from '../images/IMG-20251112-WA0009.jpg';
import memberImage8 from '../images/IMG-20251112-WA0010.jpg';
import memberImage9 from '../images/IMG-20251112-WA0012.jpg';
import memberImage10 from '../images/IMG-20251112-WA0013.jpg';
import memberImage11 from '../images/IMG-20251112-WA0014.jpg';
import memberImage12 from '../images/IMG-20251112-WA0015.jpg';
import memberImage13 from '../images/IMG-20251112-WA0016.jpg';
import memberImage14 from '../images/IMG-20251112-WA0017.jpg';
import memberImage15 from '../images/IMG-20251112-WA0018.jpg';
import memberImage16 from '../images/IMG-20251112-WA0020.jpg';
import memberImage17 from '../images/IMG-20251112-WA0021.jpg';
import memberImage18 from '../images/IMG-20251112-WA0022.jpg';
import memberImage19 from '../images/IMG-20251112-WA0023.jpg';
import memberImage20 from '../images/IMG-20251112-WA0024.jpg';
import memberImage21 from '../images/IMG-20251112-WA0025.jpg';
import memberImage22 from '../images/IMG-20251112-WA0026.jpg';
import memberImage23 from '../images/IMG-20251112-WA0027.jpg';
import memberImage24 from '../images/IMG-20251112-WA0028.jpg';

const Leadership = () => {
  const { data, loading } = useHomeData();
  const language = 'mr'; // Default to Marathi

  // Array of member images for fallback
  const memberImages = [
    memberImage1, memberImage2, memberImage3, memberImage4, memberImage5,
    memberImage6, memberImage7, memberImage8, memberImage9, memberImage10,
    memberImage11, memberImage12, memberImage13, memberImage14, memberImage15,
    memberImage16, memberImage17, memberImage18, memberImage19, memberImage20,
    memberImage21, memberImage22, memberImage23, memberImage24, kakaImage,
    adhikariImage, dummyImage
  ];

  // Helper to get fallback image for team members
  const getMemberFallbackImage = (index) => {
    return memberImages[index % memberImages.length];
  };

  // Helper to get full image URL
  const getImageUrl = (imageUrl, fallbackImage = null) => {
    if (!imageUrl) {
      return fallbackImage || sarpanchImage;
    }
    if (imageUrl.startsWith('http')) return imageUrl;
    
    // API returns URLs like "/api/images/..." 
    // VITE_API_BASE_URL is "http://localhost:5000/api"
    // So we need to remove /api from base URL if URL already starts with /api
    const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
    if (imageUrl.startsWith('/api')) {
      // Remove /api from base URL to avoid double /api
      const baseWithoutApi = baseUrl.replace(/\/api$/, '');
      return `${baseWithoutApi}${imageUrl}`;
    }
    return `${baseUrl}${imageUrl}`;
  };

  // Get leadership data from API
  const leadershipData = data?.leadership;
  const sarpanch = leadershipData?.sarpanch;
  const teamMembers = leadershipData?.teamMembers || [];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading with horizontal lines */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-teal-600"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mx-6 tracking-wide">
              नेतृत्व
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-teal-400 to-teal-600"></div>
          </div>

          {/* Descriptive Paragraph */}
          <p className="text-lg md:text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
            आमचे आदरणीय सरपंच नेतृत्व समर्पण, प्रामाणिकपणा आणि विकासाच्या दृष्टिकोनाने करतात.
          </p>
          
          {loading ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">लोड होत आहे...</p>
            </div>
          ) : (
            <>
              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                {/* Left Column - Sarpanch Card */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="p-2 bg-gradient-to-br from-teal-50 to-blue-50">
                    <div className="bg-white rounded-lg p-4">
                      <div className="mb-6 overflow-hidden rounded-lg shadow-md">
                          <img 
                            src={getImageUrl(sarpanch?.image)} 
                            alt={sarpanch?.role?.[language] || sarpanch?.role?.mr || 'सरपंच'} 
                            className="w-full h-[400px] object-cover object-center hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            style={{ imageRendering: 'auto' }}
                          />
                      </div>
                      <div className="text-center space-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
                          {sarpanch?.name?.[language] || sarpanch?.name?.mr || 'सौ शिल्पा अतुल ठोंबरे '}
                        </h3>
                        <div className="inline-block px-4 py-1 bg-teal-100 rounded-full mb-2">
                          <p className="text-lg font-semibold text-teal-800">
                            {sarpanch?.role?.[language] || sarpanch?.role?.mr || 'सरपंच'}
                          </p>
                        </div>
                        {sarpanch?.village && (
                          <p className="text-base text-gray-600 font-medium">
                            {sarpanch.village?.[language] || sarpanch.village?.mr || ''}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Leadership Description Block */}
                <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-xl shadow-xl p-8 md:p-10 flex items-center border border-teal-800">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-12 bg-white rounded-full"></div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">आमचे नेतृत्व</h3>
                    </div>
                    <p className="text-white text-lg md:text-xl leading-relaxed text-left">
                      {sarpanch?.description?.[language] || sarpanch?.description?.mr || 'गावाच्या सर्वांगीण विकासासाठी, शेतकऱ्यांच्या प्रगतीसाठी, महिला बालकांच्या कल्याणासाठी तसेच सामाजिक ऐक्य राखण्यासाठी आमचे सरपंच नेहमीच पुढाकार घेतात. ग्रामस्थांच्या सक्रिय सहभागाने, पंचायत प्रगती आणि एकतेसाठी काम करते.'}
                    </p>
                    <div className="pt-4 flex items-center gap-2">
                      <div className="w-8 h-0.5 bg-white"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-16 h-0.5 bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Members Section - Three Cards */}
              <div className="mt-24 md:mt-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {teamMembers.length > 0 ? (
                    teamMembers.map((member, index) => (
                      <div 
                        key={member.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                      >
                        <div className="overflow-hidden">
                          <img 
                            src={getImageUrl(member.image, getMemberFallbackImage(index))} 
                            alt={member.role?.[language] || member.role?.mr || 'सदस्य'} 
                            className="w-full h-[350px] object-cover object-center hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                            style={{ imageRendering: 'auto' }}
                          />
                        </div>
                        <div className="p-6 text-center space-y-2">
                          <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">
                            {member.name?.[language] || member.name?.mr || 'संपूर्ण नाव'}
                          </h3>
                          <div className="inline-block px-3 py-1 bg-teal-100 rounded-full mb-1">
                            <p className="text-base font-semibold text-teal-800">
                              {member.role?.[language] || member.role?.mr || 'सदस्य'}
                            </p>
                          </div>
                          {member.village && (
                            <p className="text-sm text-gray-600 font-medium">
                              {member.village?.[language] || member.village?.mr || ''}
                            </p>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    // Show 3 default placeholder cards when no team members
                    [1, 2, 3].map((index) => (
                      <div 
                        key={`placeholder-${index}`}
                        className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                      >
                        <div className="overflow-hidden">
                          <img 
                            src={index === 2 ? adhikariImage : dummyImage} 
                            alt="सदस्य" 
                            className="w-full h-[350px] object-cover object-center hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-6 text-center space-y-2">
                          <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">
                            प्रकाश मिलू सुर्यवंशी 
                          </h3>
                          <div className="inline-block px-3 py-1 bg-teal-100 rounded-full mb-1">
                            <p className="text-base font-semibold text-teal-800">
                              {index === 1 ? 'उपसरपंच' : index === 2 ? 'ग्राम पंचायत अधिकारी' : 'सदस्य'}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
