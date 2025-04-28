import React from "react";
import { FaSearch } from "react-icons/fa"; // <-- importing the Search Icon

function Jobs() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">

      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-8">Job Listings</h1>

      {/* Search and Filter Box */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          
          {/* Title Input */}
          <input
            type="text"
            placeholder="Title"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />

          {/* Location Input */}
          <input
            type="text"
            placeholder="Location"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />

          {/* Job Type Dropdown */}
          <select className="border border-gray-300 rounded px-4 py-2 w-full">
            <option>All Types</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Remote</option>
          </select>

          {/* Category Dropdown */}
          <select className="border border-gray-300 rounded px-4 py-2 w-full">
            <option>---------</option>
            <option>IT</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>

        </form>

        {/* Search Button (now separately below) */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="flex items-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            <FaSearch className="mr-2" /> {/* Icon */}
            Search Jobs
          </button>
        </div>
      </div>

      {/* No Jobs Found Message */}
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="text-6xl mb-4 text-gray-400">🔍</div>
        <h2 className="text-2xl font-bold mb-2">No jobs found</h2>
        <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
      </div>

    </div>
  );
};

export default Jobs;
