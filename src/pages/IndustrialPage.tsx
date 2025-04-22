// Industrial Construction Page Component
export default function IndustrialPage() {
  const industrialProjects = [
    {
      id: 1,
      title: "Manufacturing Plant",
      location: "Industrial Park",
      year: "2024",
    },
    {
      id: 2,
      title: "Logistics Center",
      location: "Harbor District",
      year: "2023",
    },
    {
      id: 3,
      title: "Tech Campus",
      location: "Innovation Valley",
      year: "2023",
    },
    {
      id: 4,
      title: "Distribution Warehouse",
      location: "Commerce Center",
      year: "2022",
    },
    {
      id: 5,
      title: "Office Complex",
      location: "Business District",
      year: "2022",
    },
    {
      id: 6,
      title: "Research Facility",
      location: "Science Park",
      year: "2021",
    },
    { id: 7, title: "Data Center", location: "Tech Corridor", year: "2021" },
    {
      id: 8,
      title: "Retail Development",
      location: "Shopping District",
      year: "2020",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Industrial Construction
          </h1>
          <p className="text-lg max-w-3xl">
            We deliver large-scale industrial projects with precision
            engineering and strict adherence to safety standards,
            specifications, and timelines.
          </p>
        </div>
      </div>

      {/* Project Gallery */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Our Industrial Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrialProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200">
                  <img
                    src={`/api/placeholder/400/320`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-gray-600">{project.location}</p>
                  <p className="text-gray-500 text-sm">
                    Completed: {project.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industrial Services */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Our Industrial Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Manufacturing Facilities
              </h3>
              <p className="text-gray-600 mb-4">
                Custom-designed manufacturing plants optimized for production
                efficiency, worker safety, and regulatory compliance.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Advanced production layouts
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Specialized utility systems
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Safety-focused design
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Warehousing & Distribution
              </h3>
              <p className="text-gray-600 mb-4">
                Large-scale warehousing facilities built for efficient storage,
                logistics, and distribution operations.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  High-capacity storage systems
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Optimized loading docks
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Advanced logistics infrastructure
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Commercial Developments
              </h3>
              <p className="text-gray-600 mb-4">
                Office complexes, retail centers, and mixed-use developments
                built to enhance business operations and customer experiences.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Modern office buildings
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Retail developments
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Mixed-use complexes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
