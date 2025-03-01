import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedJobs = ({ jobs = [] }) => {  // Provide a default empty array
    const navigate = useNavigate();

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
                            <button className="btn btn-primary" onClick={() => navigate("/Application")}>Apply</button>
                            <div className="details">
                                <p>{job.description}</p>
                                <button 
                                    className="btn btn-primary" 
                                    onClick={() => navigate(`/jobs/${job.id}`, { state: { job } })}
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default FeaturedJobs;
