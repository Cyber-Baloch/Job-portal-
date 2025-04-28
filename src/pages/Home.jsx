import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center ml-4 mr-4">
        <h1 className="text-5xl font-bold mb-4">Find Your Dream Job Today</h1>
        <p className="text-lg mb-6">
          Browse thousands of job listings and find the perfect match for your skills and experience.
        </p>
        <Link
          to="/jobs"
          className="bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-gray-200 transition"
        >
          Browse Jobs
        </Link>
      </section>

      {/* Popular Categories */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Popular Categories</h2>
        {/* (Later we'll add category cards here) */}
      </section>

      {/* Featured Jobs */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Featured Jobs</h2>
        <Link
          to="/jobs"
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition"
        >
          View All Jobs
        </Link>
      </section>

      {/* Are You Hiring Section */}
      <section className="bg-blue-600 text-white py-20 text-center ml-4 mr-4">
        <h2 className="text-4xl font-bold mb-4">Are You Hiring?</h2>
        <p className="text-lg mb-6">
          Post your job openings and find the best candidates for your company.
        </p>
        <Link
          to="/post-job"
          className="bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-gray-200 transition"
        >
          Post a Job
        </Link>
      </section>

    </div>
  );
};

export default Home;
