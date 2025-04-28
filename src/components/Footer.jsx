import React from "react";

function Footer() {

    return(
        <footer className="bg-slate-800 text-white py-6">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                <div>
                    <h3 className="text-lg font-bold mb-3">Job Portal</h3>
                    <p>Connecting talented job seekers with top employes around the Globe.</p>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-3">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><a href="/"className="hover:underline">Home</a></li>
                        <li><a href="/jobs" className="hover:underline">Browse Jobs</a></li>
                        <li><a href="/profile" className="hover:underline">Profile</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-3">Contact Us</h3>
                    <ul className="space-y-1">
                        <li>Email: info@jobportal.com</li>
                        <li>Phone:+1(123)456-7890</li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
                                  © 2025 JobPortal. All rights reserved.
                </div>
        </footer>
    )
}

export default Footer