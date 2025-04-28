import React from "react";

function Profile() {
  
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <form className="space-y-8">

        {/* Personal Information Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Username*</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
            </div>

            <div>
              <label className="block font-medium mb-1">Email*</label>
              <input type="email" className="w-full border border-gray-300 rounded-md p-2" />
            </div>

            <div>
              <label className="block font-medium mb-1">Phone number*</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
            </div>

            <div>
              <label className="block font-medium mb-1">Profile picture</label>
              <input type="file" className="w-full border border-gray-300 bg-gray-100 rounded-md p-2" />
                            {/* choose file from device ....choose file....no choosen file*/}
            </div>
          </div>
        </div>

        {/* Company Information Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Company Information</h2>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Company name*</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
            </div>

            <div>
              <label className="block font-medium mb-1">Company description</label>
              <textarea className="w-full border border-gray-300 rounded-md p-2 h-32"></textarea>
            </div>

            <div>
              <label className="block font-medium mb-1">Company website</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
            </div>

            <div>
              <label className="block font-medium mb-1">Company logo</label>
              <input type="file" className="w-full" />
            </div>
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
          Save Changes
        </button>

      </form>
    </div>
  );
}

export default Profile;
