import { ProjectDetails } from '../utils/ProjectDetails';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectCard({ project }: { project: ProjectDetails }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
  };

  return (
    <div 
        key={project.id} 
        className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="h-48 bg-gray-200">
            <Slider {...settings}>
              {project.imagePaths.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`${project.title} - image ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </Slider>
        </div>
        <div className="py-6 px-4">
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="text-gray-600">{project.location}</p>
            <p className="text-gray-500 text-sm">
            Completed: {project.yearOfCompletion}
            </p>
        </div>
    </div>
  );
}