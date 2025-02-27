import React from "react";

const FeaturedJobs = ({ jobs }) => {
  return (
    <section className="py-5 px-10">
      <h2 className="text-2xl font-bold mb-3">Featured Jobs</h2>

      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="border p-4 rounded shadow">
              <h3 className="font-bold">{job.title}</h3>
              <p>{job.company} - {job.location}</p>
              <button class="btn btn-primary">Apply</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedJobs;











// import React from "react";

// const jobs = [
//   { id: 1, title: "Software Engineer", company: "Google", location: "Remote" },
//   { id: 2, title: "Data Analyst", company: "Microsoft", location: "New York" },
//   { id: 3, title: "Web Developer", company: "Amazon", location: "San Francisco" },
//   { id: 3, title: "Elctrical Engineer", company: "Amazon", location: "San Francisco" },
//   { id: 3, title: "mechanical engineer", company: "Amazon", location: "San Francisco" },
//   { id: 3, title: "Technisian", company: "Amazon", location: "San Francisco" },
//   { id: 3, title: "Manager", company: "Amazon", location: "San Francisco" },
//   { id: 3, title: "Accountant", company: "Amazon", location: "San Francisco" },
// ];

// const FeaturedJobs = () => {
//   return (
//     <section className="py-5 px-10">
//       <h2 className="text-2xl font-bold mb-3">Featured Jobs</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {jobs.map((job) => (
//           <div key={job.id} className="border p-4 rounded shadow">
//             <h3 className="font-bold">{job.title}</h3>
//             <p>{job.company} - {job.location}</p>
//             <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">Apply</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturedJobs;
