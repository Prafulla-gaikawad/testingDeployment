import mandirImage from '../images/mandir.jpg';

const News = () => {
  const newsItems = [
    {
      id: 1,
      image: mandirImage,
      title: 'तरुणांच्या पुढाकारातून गावात नव्या रोजगार संधी निर्माण झाल्या',
      description: 'गावातील तरुणांनी एकत्र येऊन उद्योजकतेचा नवा मार्ग स्वीकारला असून त्यातून रोजगाराच्या अनेक संधी निर्माण झाल्या आहेत. स्थानिक पातळीवर...',
      date: '24 Sep 2025',
      category: 'न्युज/अपडेट्स',
      village: 'शिंदे'
    },
    {
      id: 2,
      image: mandirImage,
      title: 'शेतकऱ्यांसाठी योजना आणि आर्थिक मदत',
      description: 'शेतकरी आपली शेती सुधारण्यासाठी आणि आर्थिक स्थिती मजबूत करण्यासाठी विविध सरकारी योजना आणि मदतीचा लाभ घेऊ शकतो. या...',
      date: '22 Sep 2025',
      category: 'न्युज/अपडेट्स',
      village: 'शिंदे'
    },
    {
      id: 3,
      image: mandirImage,
      title: 'गावातील पाणीपुरवठा आणि पाणी व्यवस्थापन',
      description: 'गावात पाणी हा जीवनाचा कणा आहे. पिण्यासाठी शुद्ध पाणी, शेतीसाठी सिंचन आणि दैनंदिन वापरासाठी आवश्यक पाणी योग्य प्रमाणात...',
      date: '22 Sep 2025',
      category: 'न्युज/अपडेट्स',
      village: 'शिंदे'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
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
              न्युज/अपडेट्स
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto"></div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {newsItems.map((item) => (
              <div 
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Container with Avatar Overlay */}
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  {/* News Icon Overlapping Bottom-Left */}
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full border-4 border-white flex items-center justify-center shadow-xl">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
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
                      <span>{item.village}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 rounded-full text-blue-700 font-medium">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>

                {/* News Title */}
                <div className="px-6 pb-4">
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-700 to-blue-700 bg-clip-text text-transparent mb-3">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="px-6 pb-8">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {item.description}
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

export default News;

