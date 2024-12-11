import React from 'react';
import { FaBell, FaUserCircle, FaSync } from 'react-icons/fa'; // Import icons from react-icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleProfileClick = () => {
    navigate('/profile'); // Redirect to the profile page
  };

  return (
    <div className="bg-teal-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Help Desk</h1>
      <div className="flex items-center space-x-4">
        <button className="bg-white text-black px-2 py-1 rounded">BM</button>
        <FaBell className="text-white cursor-pointer" title="Notifications" />
        <FaUserCircle
          className="text-white cursor-pointer"
          title="Profile"
          onClick={handleProfileClick} // Add click handler for navigation
        />
        <FaSync className="text-white cursor-pointer" title="Sync" />
      </div>
    </div>
  );
};

export default Navbar;
