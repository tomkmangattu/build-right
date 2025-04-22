import React, { useState } from "react";
import { Home, Building2, Factory, Users, Menu, X } from "lucide-react";
import HomePage from "./pages/HomePage";
import HousingPage from "./pages/HousingPage";
import IndustrialPage from "./pages/IndustrialPage";
import AboutPage from "./pages/AboutPage";

// Main App Component
export default function ConstructionWebsite() {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle page navigation
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  // Render the current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "housing":
        return <HousingPage />;
      case "industrial":
        return <IndustrialPage />;
      case "about":
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header with Navigation */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 mr-2" />
              <h1 className="text-2xl font-bold">BuildRight Construction</h1>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <NavButton
                icon={<Home size={18} />}
                label="Home"
                active={currentPage === "home"}
                onClick={() => navigateTo("home")}
              />
              <NavButton
                icon={<Building2 size={18} />}
                label="Housing"
                active={currentPage === "housing"}
                onClick={() => navigateTo("housing")}
              />
              <NavButton
                icon={<Factory size={18} />}
                label="Industrial"
                active={currentPage === "industrial"}
                onClick={() => navigateTo("industrial")}
              />
              <NavButton
                icon={<Users size={18} />}
                label="About Us"
                active={currentPage === "about"}
                onClick={() => navigateTo("about")}
              />
            </nav>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="mt-4 flex flex-col space-y-2 md:hidden">
              <MobileNavButton
                icon={<Home size={18} />}
                label="Home"
                active={currentPage === "home"}
                onClick={() => navigateTo("home")}
              />
              <MobileNavButton
                icon={<Building2 size={18} />}
                label="Housing"
                active={currentPage === "housing"}
                onClick={() => navigateTo("housing")}
              />
              <MobileNavButton
                icon={<Factory size={18} />}
                label="Industrial"
                active={currentPage === "industrial"}
                onClick={() => navigateTo("industrial")}
              />
              <MobileNavButton
                icon={<Users size={18} />}
                label="About Us"
                active={currentPage === "about"}
                onClick={() => navigateTo("about")}
              />
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{renderPage()}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                BuildRight Construction
              </h3>
              <p>Building tomorrow's landmarks with today's innovation.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>123 Builder Avenue</p>
              <p>Construction City, CS 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@buildright.example</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center">
            <p>&copy; 2025 BuildRight Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Navigation Button Component
function NavButton({ icon, label, active, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-3 py-2 rounded-md transition-colors ${
        active ? "bg-blue-700 text-white" : "text-blue-100 hover:bg-blue-800"
      }`}
    >
      {icon}
      <span className="ml-1">{label}</span>
    </button>
  );
}

// Mobile Navigation Button Component
interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

function MobileNavButton({ icon, label, active, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-3 py-2 rounded-md transition-colors w-full ${
        active ? "bg-blue-700 text-white" : "text-blue-100 hover:bg-blue-800"
      }`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
}
