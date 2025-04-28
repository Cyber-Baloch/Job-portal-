import React from 'react'

function PostJob() {
  
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Post a New Job</h1>
      
      <form className="space-y-6">
        <div>
          <label className="block mb-1 font-semibold">Title*</label>
          <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Description*</label>
          <textarea className="w-full border border-gray-300 rounded-md p-2 h-32"></textarea>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Location*</label>
          <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Job Type*</label>
          <select className="w-full border border-gray-300 rounded-md p-2">
            <option value="">Select Job Type</option>
            <option value="fulltime">Full Time</option>
            <option value="parttime">Part Time</option>
            <option value="internship">Internship</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select className="w-full border border-gray-300 rounded-md p-2">
            <option value="">Select Category</option>
            <option value="tech">Technology</option>
            <option value="health">Health</option>
            <option value="finance">Finance</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Salary</label>
          <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Deadline*</label>
          <input type="date" className="w-full border border-gray-300 rounded-md p-2" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Requirements*</label>
          <textarea className="w-full border border-gray-300 rounded-md p-2 h-32"></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
          Post Job
        </button>
      </form>
    </div>
  )
}

export default PostJob
