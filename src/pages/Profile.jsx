import React from "react";

function UserProfile() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-8 text-teal-700">User Profile</h1>

      <div className="bg-teal-400 p-8 rounded-xl shadow-xl w-full max-w-6xl flex flex-col lg:flex-row justify-between gap-8">
        {/* User Profile Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-2/5 flex flex-col items-center space-y-6">
          {/* Profile Icon */}
          <div className="bg-gradient-to-r from-teal-400 to-teal-600 rounded-full w-28 h-28 flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A3.002 3.002 0 006 21h12a3 3 0 001.879-5.195M15 9h1m-1 0a5 5 0 11-10 0m10 0H9m6 0a2 2 0 112-2m0 0a2 2 0 11-4 0m2-2a2 2 0 11-2 2"
              />
            </svg>
          </div>

          {/* User Details */}
          <div className="text-center space-y-4">
            <p className="text-2xl font-semibold text-teal-700">John Doe</p>
            <p className="text-lg text-gray-600">Contact Number: 123-456-7890</p>
            <p className="text-lg text-gray-600">Email: john.doe@example.com</p>
            <p className="text-lg text-gray-600">Department: Technical Support</p>
          </div>

          {/* Edit Icon */}
          <div className="absolute top-6 right-6 cursor-pointer hover:text-teal-600 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 hover:text-teal-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L3 14.172V17h2.828l11.586-11.586a2 2 0 000-2.828zM3.172 15L3 15.172V15h.172z" />
            </svg>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-2/5 flex flex-col items-center space-y-6">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Give Your Feedback</h2>
          <textarea
            className="w-full p-4 border-2 border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4 text-gray-700"
            rows={5}
            placeholder="Write your feedback here..."
          ></textarea>
          
          {/* Star Rating */}
          <div className="flex justify-center space-x-2 mb-6">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400 hover:text-teal-500 cursor-pointer transition duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927a1 1 0 011.902 0l1.588 3.219a1 1 0 00.753.546l3.555.517a1 1 0 01.554 1.706l-2.575 2.511a1 1 0 00-.287.885l.607 3.54a1 1 0 01-1.45 1.054l-3.177-1.67a1 1 0 00-.931 0l-3.177 1.67a1 1 0 01-1.45-1.054l.607-3.54a1 1 0 00-.287-.885L2.15 8.915a1 1 0 01.554-1.706l3.555-.517a1 1 0 00.753-.546L9.049 2.927z" />
                </svg>
              ))}
          </div>
          
          <button className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
