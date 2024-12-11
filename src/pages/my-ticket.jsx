import React, { useState, useMemo, useCallback } from 'react';

const tickets = [
  { id: 1234, subject: 'Login issue', status: 'In Progress', supportBy: 'Tech support', date: '13/08/21', rate: 0 },
  { id: 1124, subject: 'New ticket issue', status: 'On hold', supportBy: 'Operation Team', date: '14/08/21', rate: 0 },
  { id: 1224, subject: 'New request', status: 'Closed', supportBy: 'Tech support', date: '13/08/21', rate: 4.5 },
  { id: 1244, subject: 'Ticket submission', status: 'In Progress', supportBy: 'Operation Team', date: '14/08/21', rate: 0 },
  { id: 1114, subject: 'Login issue', status: 'In Progress', supportBy: 'Tech support', date: '3/08/21', rate: 0 },
  { id: 1239, subject: 'Login issue', status: 'In Progress', supportBy: 'Tech support', date: '13/08/21', rate: 0 },
  { id: 1123, subject: 'New ticket issue', status: 'On hold', supportBy: 'Operation Team', date: '14/08/21', rate: 0 },
  { id: 1221, subject: 'New request', status: 'Closed', supportBy: 'Tech support', date: '13/08/21', rate: 4.5 },
  { id: 1240, subject: 'Ticket submission', status: 'In Progress', supportBy: 'Operation Team', date: '14/08/21', rate: 0 },
  { id: 1117, subject: 'Login issue', status: 'In Progress', supportBy: 'Tech support', date: '3/08/21', rate: 0 },
];

const ITEMS_PER_PAGE = 5;

const StatusBadge = React.memo(({ status }) => {
  const statusStyles = {
    'In Progress': 'bg-green-500 text-white',
    'On hold': 'bg-blue-500 text-white',
    'Closed': 'bg-gray-600 text-white',
  };
  return (
    <span className={`px-3 py-1 rounded-md ${statusStyles[status]}`}>
      {status}
    </span>
  );
});

const StarRating = React.memo(({ rate }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${i < Math.floor(rate) ? 'text-yellow-400' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927a1 1 0 011.902 0l1.588 3.219a1 1 0 00.753.546l3.555.517a1 1 0 01.554 1.706l-2.575 2.511a1 1 0 00-.287.885l.607 3.54a1 1 0 01-1.45 1.054l-3.177-1.67a1 1 0 00-.931 0l-3.177 1.67a1 1 0 01-1.45-1.054l.607-3.54a1 1 0 00-.287-.885L2.15 8.915a1 1 0 01.554-1.706l3.555-.517a1 1 0 00.753-.546L9.049 2.927z" />
      </svg>
    ));
  return <div className="flex space-x-1">{stars}</div>;
});

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <span>
        Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{' '}
        {Math.min(currentPage * ITEMS_PER_PAGE, totalPages)} of {totalPages} entries
      </span>
      <div className="flex space-x-2">
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, ticket }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-1/3 transform transition-transform duration-300 scale-90 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">Ticket Details</h2>
        <p><strong>Ticket No:</strong> {ticket.id}</p>
        <p><strong>Subject:</strong> {ticket.subject}</p>
        <p><strong>Status:</strong> {ticket.status}</p>
        <p><strong>Support By:</strong> {ticket.supportBy}</p>
        <p><strong>Date:</strong> {ticket.date}</p>
        <p><strong>Rating:</strong> {ticket.rate}</p>
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md transition-colors hover:bg-green-600"
          onClick={onClose}
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
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) =>
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);
  const currentTickets = useMemo(
    () => filteredTickets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    [filteredTickets, currentPage, itemsPerPage]
  );

  const handleRowClick = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const handleSearch = useCallback(
    (e) => {
      setSearchQuery(e.target.value);
      setCurrentPage(1);
    },
    [setSearchQuery]
  );

  const onItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div className="p-6">
      <h1 className="text-center text-3xl font-bold mb-4 text-gray-800">List of Tickets</h1>

      {/* Search bar and items per page selector */}
      <div className="mb-4 flex justify-center space-x-4">
        <input
          type="text"
          placeholder="Search tickets..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-1/2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />

        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full border border-gray-300 rounded-md shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-3 px-4 border-b">Ticket No.</th>
            <th className="py-3 px-4 border-b">Subject</th>
            <th className="py-3 px-4 border-b">Status</th>
            <th className="py-3 px-4 border-b">Support by</th>
            <th className="py-3 px-4 border-b">Date</th>
            <th className="py-3 px-4 border-b">Rate</th>
          </tr>
        </thead>
        <tbody>
          {currentTickets.map((ticket) => (
            <tr
              key={ticket.id}
              className="text-center cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleRowClick(ticket)}
            >
              <td className="py-2 px-4 border-b text-blue-500 hover:underline">{ticket.id}</td>
              <td className="py-2 px-4 border-b">{ticket.subject}</td>
              <td className="py-2 px-4 border-b">
                <StatusBadge status={ticket.status} />
              </td>
              <td className="py-2 px-4 border-b">{ticket.supportBy}</td>
              <td className="py-2 px-4 border-b">{ticket.date}</td>
              <td className="py-2 px-4 border-b">
                <StarRating rate={ticket.rate} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ticket={selectedTicket}
      />
    </div>
  );
}

export default App;
