import React from "react";
import { Routes, Route,} from 'react-router-dom';
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from "./components/Navbar";
import Jobs from "./pages/Jobs";
import PostJob from './pages/PostJob';
import ManageJobs from './pages/ManageJobs';
import Profile from './pages/Profile'
import Logout from "./pages/Logout";


function App() {

  return (
    <div className="min-h-screen flex flex-col gap-6">
      <Navbar />
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/manage-jobs" element={<ManageJobs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
