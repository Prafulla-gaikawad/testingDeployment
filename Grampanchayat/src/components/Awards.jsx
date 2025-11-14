// You can replace these with actual award images
import awardImage1 from '../images/gav.jpg';
import awardImage2 from '../images/gav.jpg';
import awardImage3 from '../images/gav.jpg';

const Awards = () => {
  const awards = [
    {
      id: 1,
      image: awardImage1,
      title: 'सौर ऊर्जेवर पुरस्कार',
      description: 'सौर ऊर्जा यशस्वी उपक्रम, नवीन ऊर्जा आणि घर आणि शाळांसाठी पर्यावरणास अनुकूल योजना.',
      date: '22 Sep 2025',
      category: 'पुरस्कार / यशोगाथा',
      village: 'शिंदे'
    },
    {
      id: 2,
      image: awardImage2,
      title: 'जलसंधारणातील गौरव',
      description: 'यशस्वी जलसंधारणामुळे पाण्याची उपलब्धता सुधारली, पाण्याच्या स्रोतांची शुद्धी, विहिरींचे संरक्षण आणि पाणी साठवणूक वाढवणे.',
      date: '22 Sep 2025',
      category: 'पुरस्कार / यशोगाथा',
      village: 'शिंदे'
    },
    {
      id: 3,
      image: awardImage3,
      title: 'TB मुक्त पंचायत पुरस्कार',
      description: 'TB मुक्त पंचायत पुरस्कार हा एक सकारात्मक आणि प्रेरणादायी उदाहरण आहे, गावातील आरोग्य सेवा आणि सार्वजनिक सहभागाचे परिणाम.',
      date: '22 Sep 2025',
      category: 'पुरस्कार / यशोगाथा',
      village: 'शिंदे'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-teal-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
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
              पुरस्कार / यशोगाथा
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto"></div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {awards.map((award) => (
              <div 
                key={award.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Container with Avatar Overlay */}
                <div className="relative overflow-hidden">
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  {/* Trophy Icon Overlapping Bottom-Left */}
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-4 border-white flex items-center justify-center shadow-xl">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
                      <span>{award.village}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 rounded-full text-blue-700 font-medium">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{award.date}</span>
                    </div>
                  </div>
                </div>

                {/* Award Title */}
                <div className="px-6 pb-4">
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-700 to-blue-700 bg-clip-text text-transparent mb-3">
                    {award.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="px-6 pb-8">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {award.description}
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

export default Awards;

