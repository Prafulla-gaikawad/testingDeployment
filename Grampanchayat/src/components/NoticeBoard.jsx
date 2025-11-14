import infoImage from '../images/info.jpg';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      image: infoImage,
      title: 'ग्रामपंचायत सूचना फलक 1',
      description: 'गावामध्ये रस्त्याचे काम सुरु आहे गावातील काही रस्त्यांवर काम सुरु आहे, त्यामुळे तिथून जाणे पूर्णपणे टाळावे. कामाच्या ठिकाणी...',
      date: '22 Sep 2025',
      category: 'सूचना फलक',
      village: 'शिंदे'
    },
    {
      id: 2,
      image: infoImage,
      title: 'ग्रामपंचायत सूचना फलक 2',
      description: 'आरोग्य संबंधित सूचना ताप, सर्दी किंवा इतर आजार असल्यास त्वरित जवळच्या रुग्णालयाशी किंवा आरोग्य केंद्राशी संपर्क साधावा. वैयक्तिक...',
      date: '22 Sep 2025',
      category: 'सूचना फलक',
      village: 'शिंदे'
    },
    {
      id: 3,
      image: infoImage,
      title: 'ग्रामपंचायत सूचना फलक 3',
      description: 'विजेचे काम संबंधित सूचना गावातील काही भागात विजेचे काम सुरु आहे, त्यामुळे विद्युत पुरवठा तात्पुरता बंद राहू शकतो...',
      date: '22 Sep 2025',
      category: 'सूचना फलक',
      village: 'शिंदे'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Heading */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <p className="text-sm text-teal-600 font-semibold mb-3 uppercase tracking-wider">माहिती</p>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-700 via-blue-700 to-teal-700 bg-clip-text text-transparent mb-4">
              सूचना फलक
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto"></div>
          </div>

          {/* Notice Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {notices.map((notice) => (
              <div 
                key={notice.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={notice.image} 
                    alt={notice.title} 
                    className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  {/* Notice Icon Overlapping Bottom-Left */}
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white flex items-center justify-center shadow-xl">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Metadata Bar */}
                <div className="px-6 pt-5 pb-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-50 rounded-full text-teal-700 font-medium">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>{notice.village}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 rounded-full text-blue-700 font-medium">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{notice.date}</span>
                    </div>
                  </div>
                </div>

                {/* Notice Title */}
                <div className="px-6 pb-4">
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-700 to-blue-700 bg-clip-text text-transparent mb-3">
                    {notice.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="px-6 pb-8">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {notice.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;

