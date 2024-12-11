import React, { useState } from "react";

const tickets = [
  { id: 1234, date: "13/08/21", name: "John Doe", dept: "IT", title: "Login Issue", description: "Unable to login", category: "Technical", type: "Bug", priority: "High", status: "In Progress", attachment: "No" },
  { id: 1124, date: "14/08/21", name: "Jane Smith", dept: "Operations", title: "New Ticket Issue", description: "New ticket description", category: "General", type: "Request", priority: "Medium", status: "On Hold", attachment: "Yes" },
  // Add more tickets here
];

const Modal = ({ isOpen, onClose, ticket }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
        <h2 className="text-center text-xl font-semibold mb-4">Ticket Details</h2>
        <div className="space-y-2">
          <p><strong>Ticket No:</strong> {ticket?.id}</p>
          <p><strong>Date:</strong> {ticket?.date}</p>
          <p><strong>Name:</strong> {ticket?.name}</p>
          <p><strong>Dept:</strong> {ticket?.dept}</p>
          <p><strong>Title:</strong> {ticket?.title}</p>
          <p><strong>Description:</strong> {ticket?.description}</p>
          <p><strong>Category:</strong> {ticket?.category}</p>
          <p><strong>Type:</strong> {ticket?.type}</p>
          <p><strong>Priority:</strong> {ticket?.priority}</p>
          <p><strong>Status:</strong> {ticket?.status}</p>
          <p><strong>Attachment:</strong> {ticket?.attachment}</p>
        </div>
        <button
          onClick={onClose}
          className="block mx-auto mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const openModal = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTicket(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">List of Tickets</h1>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border border-gray-300">Ticket No.</th>
            <th className="py-2 px-4 border border-gray-300">Title</th>
            <th className="py-2 px-4 border border-gray-300">Status</th>
            <th className="py-2 px-4 border border-gray-300">Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr
              key={ticket.id}
              className="text-center cursor-pointer hover:bg-gray-100"
              onClick={() => openModal(ticket)}
            >
              <td className="py-2 px-4 border border-gray-300">{ticket.id}</td>
              <td className="py-2 px-4 border border-gray-300">{ticket.title}</td>
              <td className="py-2 px-4 border border-gray-300">{ticket.status}</td>
              <td className="py-2 px-4 border border-gray-300">{ticket.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} ticket={selectedTicket} />
    </div>
  );
}

export default App;
