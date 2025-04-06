import React , {useContext , useState , useEffect} from 'react'


const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-16 pb-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-indigo-900 mb-6">
              Discover Global Shopping Excellence
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Experience shopping without boundaries. ShoppGlobal brings you premium products from around the world right to your doorstep.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300">
                Explore Collections
              </button>
              <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-300">
                Learn More about our TechStack 😉
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img 
              src="/api/placeholder/600/400" 
              alt="Shopping Experience" 
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
            Why Choose ShoppGlobal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-8 rounded-xl shadow-md">
              <div className="h-16 w-16 bg-purple-200 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Global Products</h3>
              <p className="text-gray-700">
                Access unique products from over 50 countries around the world, carefully curated for quality and authenticity.
              </p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-xl shadow-md">
              <div className="h-16 w-16 bg-indigo-200 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-700">
                State-of-the-art logistics network ensures your products arrive at your doorstep in record time.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl shadow-md">
              <div className="h-16 w-16 bg-blue-200 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Secure Shopping</h3>
              <p className="text-gray-700">
                Advanced encryption and secure payment methods protect your information and transactions at all times.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/64/64" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-indigo-900">Emma Thompson</h4>
                  <p className="text-gray-600">Loyal Customer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "ShoppGlobal has transformed how I shop. The variety of products and the quality is unmatched. I've discovered so many amazing items that I couldn't find anywhere else!"
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/64/64" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-indigo-900">Michael Chen</h4>
                  <p className="text-gray-600">Frequent Shopper</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The delivery is incredibly fast even for international products. The packaging is always secure and the customer service team is responsive and helpful. Highly recommend!"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="bg-indigo-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Global Shopping Revolution
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Sign up today and get exclusive access to special offers, new arrivals, and limited-edition products from around the world.
          </p>
          <button className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:bg-indigo-50 transition duration-300">
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

export default HomePage;