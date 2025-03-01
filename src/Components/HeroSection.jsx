import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
  "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
  "https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg",
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="h-screen w-full flex flex-col items-center justify-center text-center text-white py-10 px-4"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <br />
      <h1 className="text-4xl font-bold bg-black bg-opacity-10 p-4 rounded-lg">
        Bridging the Gap Between Job Seekers & Employers!
      </h1>
      <p className="mt-2 text-lg bg-black bg-opacity-10 p-2 rounded-lg">
        Find your dream job or hire top talent easily.
      </p>
      <button
        className="btn btn-primary mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        onClick={() => navigate("/jobs")}
      >
        Find Jobs
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </section>
  );
};

export default HeroSection;
