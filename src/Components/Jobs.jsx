import React, { useState } from "react";
import FeaturedJobs from "./FeaturedJobs";

const allJobs = [
  { id: 1, title: "Software Engineer", company: "Google", location: "Remote" },
  { id: 2, title: "Data Analyst", company: "Microsoft", location: "New York" },
  { id: 3, title: "Web Developer", company: "Amazon", location: "San Francisco" },
  { id: 4, title: "Electrical Engineer", company: "Amazon", location: "San Francisco" },
  { id: 5, title: "Mechanical Engineer", company: "Amazon", location: "San Francisco" },
  { id: 6, title: "Technician", company: "Amazon", location: "San Francisco" },
  { id: 7, title: "Manager", company: "Amazon", location: "San Francisco" },
  { id: 8, title: "Accountant", company: "Amazon", location: "San Francisco" },
];

function Jobs() {
  const [filteredJobs, setFilteredJobs] = useState(allJobs);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event) {
    event.preventDefault(); // Prevent page reload

    const query = searchTerm.trim().toLowerCase();

    if (query) {
      const filtered = allJobs.filter(job => 
        job.title.toLowerCase().includes(query) || 
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query)
      );
      setFilteredJobs(filtered);
    } else {
      alert("Please enter a search term.");
      setFilteredJobs(allJobs); // Reset when empty
    }
  }

  return (
    <>
      <br />
      <form className="d-flex justify-content-end" onSubmit={handleSearch}>
        <input
          className="form-control me-2 w-25"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

      {/* Pass filtered jobs to FeaturedJobs */}
      <FeaturedJobs jobs={filteredJobs} />
    </>
  );
}

export default Jobs;









// import React from 'react'
// import { Link } from 'react-router-dom'
// import FeaturedJobs from './FeaturedJobs'

// function Jobs() {
//     function handleSearch(event) {
//         event.preventDefault(); // Prevent page reload
//         let query = document.getElementById("searchInput").value;
//         if (query.trim() !== "") {
//           console.log("Searching for:", query);
//           // You can redirect or filter results here
//           // window.location.href = `https://www.google.com/search?q=${query}`;
//         } else {
//           alert("Please enter a search term.");
//         }
//       }
//   return (
//     <>
//     <br />
   
//     <form class="d-flex justify-content-end">
//   <input class="form-control me-2 w-25" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
//       </form>
//     <FeaturedJobs/>
//     </>
//   )
// }

// export default Jobs