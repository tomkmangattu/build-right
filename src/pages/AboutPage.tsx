import { COMPANY_NAME, COMPANY_NAME_SHORT } from "../globals";


export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About {COMPANY_NAME}</h1>
          <p className="text-lg max-w-3xl">
            With over 30 years of experience, we've established ourselves as a leading construction 
            company dedicated to quality, innovation, and client satisfaction.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1995 by John , our company began as a small residential 
                construction firm with a vision to build homes that families would cherish for generations.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we expanded our services to include industrial and commercial construction, 
                bringing the same commitment to quality and customer satisfaction to every project.
              </p>
              <p className="text-gray-600">
                Today, {COMPANY_NAME} stands as a testament to our founder's vision, 
                with hundreds of successful projects completed and a reputation for excellence 
                in the construction industry.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img src="/api/placeholder/600/400" alt="Company History" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Values */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At {COMPANY_NAME}, we're guided by a set of core principles that drive 
              every aspect of our business and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-800 mb-4">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Excellence</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our work, using only the finest materials 
                and employing skilled professionals who take pride in their craftsmanship.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-800 mb-4">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">
                The safety of our workers, clients, and the public is paramount. We maintain 
                strict safety protocols and regular training to ensure accident-free project sites.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-800 mb-4">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">
                We believe in building lasting relationships with our clients through transparent 
                communication, excellent service, and delivering projects that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Leadership Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden h-40 w-40 mx-auto bg-gray-300">
                <img src="/api/placeholder/200/200" alt="CEO" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Michael BuildRight</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden h-40 w-40 mx-auto bg-gray-300">
                <img src="/api/placeholder/200/200" alt="Operations Director" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-gray-600">Operations Director</p>
            </div>

            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden h-40 w-40 mx-auto bg-gray-300">
                <img src="/api/placeholder/200/200" alt="Chief Engineer" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold">David Chen</h3>
              <p className="text-gray-600">Chief Engineer</p>
            </div>

            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden h-40 w-40 mx-auto bg-gray-300">
                <img src="/api/placeholder/200/200" alt="Project Manager" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Lisa Rodriguez</h3>
              <p className="text-gray-600">Lead Project Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your next construction project and discover how 
            {COMPANY_NAME_SHORT} can bring your vision to life.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}