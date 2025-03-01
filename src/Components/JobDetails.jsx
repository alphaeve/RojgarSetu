import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";


const JobDetails = () => {
    const { jobId } = useParams(); // Get job ID from URL
    const location = useLocation(); // Get job details from state
    const navigate = useNavigate(); // Navigation hook
    const job = location.state?.job;

    if (!job) {
        return <p>Job not found!</p>;
    }

    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
            <p className="text-xl mb-2">{job.company} - {job.location}</p>
            <p className="mb-4">{job.description}</p>
            
            {/* Apply Button */}
            <button className="btn btn-success mr-4">Apply Now</button>
            {/* Back Button */}
            <button 
                className="btn btn-secondary" 
                onClick={() => navigate(-1)} // Navigate to previous page
            >
                Back
            </button>
        </div>
    );
};

export default JobDetails;
