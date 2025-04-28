import { Link } from "react-router-dom";

function ManageJobs() {
  return (
    <div className="p-8">
      {/* Heading and Post Job Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Jobs</h1>
        <Link
          to="/post-job"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-bold"
        >
          + Post New Job
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6">Title</th>
              <th className="py-3 px-6">Type</th>
              <th className="py-3 px-6">Location</th>
              <th className="py-3 px-6">Posted</th>
              <th className="py-3 px-6">Deadline</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td colSpan="7" className="text-center py-8">
                No jobs posted yet.{" "}
                <Link to="/post-job" className="text-blue-600 underline">
                  Post your first job.
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageJobs;
