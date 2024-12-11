import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import Sidebar from "./components/Sidebar"; // Sidebar component
import NewTicket from "./pages/new-ticket"; // NewTicket page
import MyTicket from "./pages/my-ticket"; // MyTicket page
import DashboardCard from "./pages/dashboard"; // Assuming it's part of Dashboard
import Navbar from "./components/Navbar"; // Navbar component
import UserProfile from "./pages/Profile";
import "./App.css"; // Global styles
import NotFound from "./pages/not-found"; // Optional 404 component (create one if needed)

function App() {
  return (
    <Router>
      {/* Navbar remains static across pages */}
      <Navbar />

      {/* Main layout with Sidebar and content */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Content area */}
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/dashboard" element={<DashboardCard />} />
            <Route path="/new-ticket" element={<NewTicket />} />
            <Route path="/my-ticket" element={<MyTicket />} />
            <Route path="/profile" element={<UserProfile />} />
            {/* Optional: Fallback for undefined routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
