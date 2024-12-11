import { Link, useLocation } from "react-router-dom";  // Import from react-router-dom
import { FaTachometerAlt, FaTicketAlt, FaFolder } from "react-icons/fa";  // Import icons from react-icons

const Sidebar = () => {
  const location = useLocation();  // Get the current route path to add active class

  return (
    <div className="bg-gray-200 text-gray-800 h-screen w-1/5 p-4">
      <nav>
        <ul>
          <li className="mb-4">
            <Link 
              to="/dashboard" 
              className={`flex items-center p-2 rounded-lg transition-all duration-300 ${location.pathname === "/dashboard" ? 'bg-teal-300 text-teal-900' : 'hover:bg-teal-100 hover:text-teal-900'}`}
            >
              <FaTachometerAlt className="mr-2" /> Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link 
              to="/new-ticket" 
              className={`flex items-center p-2 rounded-lg transition-all duration-300 ${location.pathname === "/new-ticket" ? 'bg-teal-300 text-teal-900' : 'hover:bg-teal-100 hover:text-teal-900'}`}
            >
              <FaTicketAlt className="mr-2" /> New Ticket
            </Link>
          </li>
          <li>
            <Link 
              to="/my-ticket" 
              className={`flex items-center p-2 rounded-lg transition-all duration-300 ${location.pathname === "/my-ticket" ? 'bg-teal-300 text-teal-900' : 'hover:bg-teal-100 hover:text-teal-900'}`}
            >
              <FaFolder className="mr-2" /> My Ticket
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
