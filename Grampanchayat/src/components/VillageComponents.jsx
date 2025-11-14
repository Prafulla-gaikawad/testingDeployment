import { useState } from 'react';

// Language translations
const translations = {
  mr: {
    qrPayment: {
      title: 'QR पेमेंट',
      description: 'QR कोड स्कॅन करून पेमेंट करा',
      scanQR: 'QR कोड स्कॅन करा',
      amount: 'रक्कम',
      payNow: 'पेमेंट करा'
    },
    statistics: {
      title: 'आकडेवारी डॅशबोर्ड',
      totalPopulation: 'एकूण लोकसंख्या',
      literacyRate: 'साक्षरता दर',
      totalLand: 'एकूण जमीन',
      educationCenters: 'शिक्षण केंद्र'
    },
    casteTable: {
      title: 'जातीनुसार मतदार सारणी',
      caste: 'जात',
      male: 'पुरुष',
      female: 'महिला',
      total: 'एकूण'
    },
    villageStats: {
      title: 'गावाची आकडेवारी'
    }
  },
  en: {
    qrPayment: {
      title: 'QR Payment',
      description: 'Scan QR code to make payment',
      scanQR: 'Scan QR Code',
      amount: 'Amount',
      payNow: 'Pay Now'
    },
    statistics: {
      title: 'Statistics Dashboard',
      totalPopulation: 'Total Population',
      literacyRate: 'Literacy Rate',
      totalLand: 'Total Land',
      educationCenters: 'Education Centers'
    },
    casteTable: {
      title: 'Caste Wise Voter Table',
      caste: 'Caste',
      male: 'Male',
      female: 'Female',
      total: 'Total'
    },
    villageStats: {
      title: 'Village Statistics'
    }
  }
};

// QR Payment Section Component
export const QRPaymentSection = ({ language = 'mr' }) => {
  const t = translations[language] || translations.mr;
  const [amount, setAmount] = useState('');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-4 text-teal-800">
              {t.qrPayment.title}
            </h2>
            <p className="text-center text-gray-700 mb-6">
              {t.qrPayment.description}
            </p>
            
            <div className="bg-white rounded-lg p-6 mb-6 flex justify-center">
              <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                  <path d="M8 6h4v4H8V6zm0 6h4v4H8v-4z" />
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t.qrPayment.amount}
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <button className="w-full bg-teal-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-teal-700 transition duration-300">
                {t.qrPayment.payNow}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Statistics Dashboard Component
export const StatisticsDashboard = ({ language = 'mr' }) => {
  const t = translations[language] || translations.mr;
  
  const stats = [
    { label: t.statistics.totalPopulation, value: '1853', icon: '👥' },
    { label: t.statistics.literacyRate, value: '76%', icon: '📚' },
    { label: t.statistics.totalLand, value: '500+', icon: '🌾' },
    { label: t.statistics.educationCenters, value: '6+', icon: '🏫' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {t.statistics.title}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-teal-700 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Caste Wise Voter Table Component
export const CasteWiseVoterTable = ({ language = 'mr' }) => {
  const t = translations[language] || translations.mr;
  
  const casteData = [
    { caste: 'अनुसुचीत जाती (SC)', male: 72, female: 68, total: 140 },
    { caste: 'अनुसुचीत जमाती(ST)', male: 12, female: 16, total: 28 },
    { caste: 'इतर मागास वग(OBC)', male: 78, female: 55, total: 133 },
    { caste: 'विशेष मागास प्रवर्ग (SBC)', male: 66, female: 90, total: 150 },
    { caste: 'भटक्या जमाती -अ (VJ)', male: 120, female: 110, total: 230 },
    { caste: 'भटक्या जमाती - ब(NT-B)', male: 72, female: 95, total: 162 },
    { caste: 'भटक्या जमाती - क (NT-C)', male: 100, female: 88, total: 188 },
    { caste: 'भटक्या जमाती - ड (NT-D)', male: 80, female: 65, total: 145 },
    { caste: 'खुला प्रवर्ग(OPEN)', male: 75, female: 92, total: 167 }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {t.casteTable.title}
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">{t.casteTable.caste}</th>
                  <th className="px-4 py-3 text-left">{t.casteTable.male}</th>
                  <th className="px-4 py-3 text-left">{t.casteTable.female}</th>
                  <th className="px-4 py-3 text-left">{t.casteTable.total}</th>
                </tr>
              </thead>
              <tbody>
                {casteData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-3 font-medium">{row.caste}</td>
                    <td className="px-4 py-3">{row.male}</td>
                    <td className="px-4 py-3">{row.female}</td>
                    <td className="px-4 py-3 font-semibold">{row.total}</td>
                  </tr>
                ))}
                <tr className="bg-teal-50 font-bold">
                  <td className="px-4 py-3">एकूण</td>
                  <td className="px-4 py-3">665</td>
                  <td className="px-4 py-3">679</td>
                  <td className="px-4 py-3">1344</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

// Village Statistics Components (Combined)
export const VillageStatisticsComponents = ({ language = 'mr' }) => {
  return (
    <div>
      <StatisticsDashboard language={language} />
      <CasteWiseVoterTable language={language} />
      <QRPaymentSection language={language} />
    </div>
  );
};

