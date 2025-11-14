const Achievements = () => {
  const stats = [
    {
      id: 1,
      value: '-',
      label: 'साक्षरता दर'
    },
    {
      id: 2,
      value: '-',
      label: 'हेक्टर जमीन'
    },
    {
      id: 3,
      value: '-',
      label: 'शिक्षण केंद्र'
    },
    {
      id: 4,
      value: '-',
      label: 'स्वच्छ पाण्याची सोय'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-teal-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Heading */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-32 border-t-2 border-dotted border-teal-400"></div>
            </div>
            <p className="text-center text-teal-600 mb-3 text-lg font-semibold">
              आमचे गाव, आमची ओळख
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-700 via-blue-700 to-teal-700 bg-clip-text text-transparent mb-4">
              एक गाव – अनेक उपलब्धी
            </h2>
            <div className="flex justify-center">
              <div className="w-32 border-t-2 border-dotted border-teal-400"></div>
            </div>
          </div>

          {/* Statistics Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.id}
                className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Decorative gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
                    {stat.value}
                  </div>
                  <div className="text-base md:text-lg text-gray-700 font-semibold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

