const DashboardCard = ({ title, count, bgColor }) => {
    return (
      <div
        className={`w-full h-48 sm:h-56 lg:h-64 shadow-2xl p-6 rounded-xl text-center text-white ${bgColor} transition-all duration-300 transform hover:scale-105 hover:shadow-3xl`}
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-4xl mt-2 font-bold">{count}</p>
      </div>
    );
  };
  
  export default DashboardCard;
  