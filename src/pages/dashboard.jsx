import DashboardCard from "../components/DashboardCard";

const DashboardPanel = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Dashboard Heading */}
      <h1 className="text-3xl font-bold text-teal-700 mb-6">Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Tickets"
          count="250"
          bgColor="bg-blue-500 hover:bg-blue-600"
        />
        <DashboardCard
          title="Total Solved"
          count="175"
          bgColor="bg-green-500 hover:bg-green-600"
        />
        <DashboardCard
          title="Awaiting Approval"
          count="30"
          bgColor="bg-yellow-500 hover:bg-yellow-600"
        />
        <DashboardCard
          title="In Progress"
          count="45"
          bgColor="bg-red-500 hover:bg-red-600"
        />
      </div>
    </div>
  );
};

export default DashboardPanel;
