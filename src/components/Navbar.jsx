import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return(
        <nav className="bg-blue-600 text-white py-4 shadow-md sticky top-0 z-50">
            <div className="flex items-center justify-between px-4">

                <Link className="text-3xl font-bold">Job Portal</Link>

                <ul className="flex space-x-6">
                    <li><Link to="/" className="hover:text-gray-700 font-medium ">Home</Link></li>
                    <li><Link to="/jobs" className="hover:text-gray-700 font-medium">Jobs</Link></li>
                    <li><Link to="/post-job" className="hover:text-gray-700 font-medium">Post Jobs</Link></li>
                    <li><Link to="/manage-jobs" className="hover:text-gray-700 font-medium">Manage Jobs</Link></li>
                    <li><Link to="/profile" className="hover:text-gray-700 font-medium">profile</Link></li>
                    <li><Link to="/" className="hover:text-gray-700 font-medium">Logout</Link></li>
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar