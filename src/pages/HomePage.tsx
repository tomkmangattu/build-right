
export default function HomePage() {
    return (
      <div>
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Building Excellence Since 1995</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              From residential projects to industrial complexes, we deliver quality construction 
              solutions that stand the test of time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-md transition-colors">
                Get a Free Quote
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-6 rounded-md transition-colors">
                Our Projects
              </button>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Construction Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Cards */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
                <div className="h-48 bg-gray-200">
                  <img src="/api/placeholder/400/320" alt="Residential Construction" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Residential Construction</h3>
                  <p className="text-gray-600 mb-4">
                    Custom homes built with attention to detail and quality craftsmanship.
                  </p>
                  <button 
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More →
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
                <div className="h-48 bg-gray-200">
                  <img src="/api/placeholder/400/320" alt="Industrial Construction" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Industrial Construction</h3>
                  <p className="text-gray-600 mb-4">
                    Large-scale industrial facilities built to precise specifications and timelines.
                  </p>
                  <button 
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More →
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
                <div className="h-48 bg-gray-200">
                  <img src="/api/placeholder/400/320" alt="Renovations" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Renovations & Remodeling</h3>
                  <p className="text-gray-600 mb-4">
                    Transform your existing space with our expert renovation services.
                  </p>
                  <button 
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other sections similar to before... */}
      </div>
    );
  }
