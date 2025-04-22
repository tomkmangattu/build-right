export default function HousingPage() {
  const housingProjects = [
    { id: 1, title: "Modern Family Home", location: "Cedar Hills", year: "2024" },
    { id: 2, title: "Luxury Villa", location: "Oakridge Heights", year: "2023" },
    { id: 3, title: "Eco-Friendly Townhouses", location: "Green Valley", year: "2023" },
    { id: 4, title: "Custom Single Family Home", location: "Riverdale", year: "2022" },
    { id: 5, title: "Urban Apartment Complex", location: "Downtown", year: "2022" },
    { id: 6, title: "Suburban Estate", location: "Meadowbrook", year: "2021" },
    { id: 7, title: "Beach House", location: "Coastal Shores", year: "2021" },
    { id: 8, title: "Mountain Retreat", location: "Alpine Heights", year: "2020" },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Housing Construction</h1>
          <p className="text-lg max-w-3xl">
            From cozy family homes to luxury estates, our residential construction services
            bring your dream home to life with quality craftsmanship and attention to detail.
          </p>
        </div>
      </div>

      {/* Project Gallery */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Our Residential Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {housingProjects.map(project => (
              <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img src={`/api/placeholder/400/320`} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-gray-600">{project.location}</p>
                  <p className="text-gray-500 text-sm">Completed: {project.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services section content */}
    </div>
  );
}