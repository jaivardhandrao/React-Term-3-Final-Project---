import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-16 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-indigo-900 mb-6">About ShoppGlobal</h1>
          <p className="text-xl text-gray-700 mb-8">
            Revolutionizing e-commerce with data-driven insights and cutting-edge technology
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At ShoppGlobal, we're on a mission to transform the online shopping experience by leveraging 
                big data and advanced analytics to deliver personalized recommendations and competitive pricing.
              </p>
              <p className="text-lg text-gray-700">
                We believe that everyone deserves access to the best products from around the world at the most 
                competitive prices. Our platform is designed to make global shopping simple, secure, and satisfying.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/src/assets/ourMission.avif" 
                alt="Our Mission" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Technology Stack */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Our Technology Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Frontend */}
            <div className="bg-indigo-50 p-8 rounded-xl shadow-md">
              <div className="h-16 w-16 bg-indigo-200 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Frontend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• React.js for dynamic UI components</li>
                <li>• Tailwind CSS for responsive styling</li>
                <li>• Redux for state management</li>
                <li>• React Router for navigation</li>
                <li>• Axios for API requests</li>
              </ul>
            </div>
            
            {/* Backend */}
            <div className="bg-purple-50 p-8 rounded-xl shadow-md">
              <div className="h-16 w-16 bg-purple-200 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Backend</h3>
              Coming Soon...
            </div>
            
            {/* Data Analytics */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-md">
              <div className="h-16 w-16 bg-blue-200 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Data Analytics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Kaggle Amazon dataset integration</li>
                <li>• Elasticsearch for fast product search</li>
                <li>• PapaParse for CSV File reading</li>
              </ul>
            </div>
          </div>
          
          {/* Amazon Dataset Highlight */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                <div className="h-24 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">Kaggle Amazon Dataset Integration</h3>
                <p className="text-gray-700 mb-4">
                  We leverage the comprehensive Kaggle Amazon dataset, containing millions of product reviews, ratings, and price histories to offer our customers the best products at competitive prices.
                </p>
                <p className="text-gray-700">
                  Our proprietary algorithms analyze this data to identify trending products, predict price fluctuations, and recommend items that match your preferences with remarkable accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="bg-indigo-600 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Development Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Research</h3>
              <p className="text-indigo-100">
                Data analysis and market research to identify opportunities and user needs.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Design</h3>
              <p className="text-indigo-100">
                User-centered design process with rigorous usability testing and iteration.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Development</h3>
              <p className="text-indigo-100">
                Agile development methodology with continuous integration and deployment.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Optimization</h3>
              <p className="text-indigo-100">
                Continuous performance monitoring and enhancement based on user feedback.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Our Achievements */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">-M+</div>
              <p className="text-xl text-indigo-100">Active Users</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-white mb-2">--K+</div>
              <p className="text-xl text-indigo-100">Products</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-white mb-2">--%</div>
              <p className="text-xl text-indigo-100">Customer Satisfaction</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-white mb-2">---+</div>
              <p className="text-xl text-indigo-100">Countries Served</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Ready to experience the future of shopping?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our community of smart shoppers who leverage data-driven insights to find the best products at the best prices.
          </p>
          <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300">
            Sign Up Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">ShoppGlobal</h3>
              <p className="text-indigo-200 max-w-sm">
                Bringing the world's best products to your doorstep since 2020. We believe in quality, authenticity, and exceptional customer service.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Support</h4>
                <ul className="space-y-2">
                  <li>Contact Us</li>
                  <li>FAQ</li>
                  <li>Shipping</li>
                  <li>Returns</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-200">
            <p>&copy; 2025 ShoppGlobal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;