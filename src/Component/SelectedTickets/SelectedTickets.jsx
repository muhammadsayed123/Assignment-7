import React from 'react';

const SelectedTickets = ({ ticket, handleTicket }) => {
  return (
    <div
      onClick={() => handleTicket(ticket)}
      className="text-black bg-white shadow-sm p-4 rounded-md h-full flex flex-col justify-between hover:shadow-md transition-shadow duration-200 cursor-pointer"
      key={ticket.id}
    >
      {/* Header */}
      <div className="flex gap-2 sm:flex-row sm:justify-between sm:items-center">
        <h2 className="font-semibold text-lg">{ticket.title}</h2>
        <span
          className={`px-3 py-1 text-sm rounded-full w-max 
            ${ticket.status === 'Open' ? 'bg-green-200 text-green-800' :
              ticket.status === 'Resolved' ? 'bg-blue-200 text-blue-800' :
              ticket.status === 'In Progress' ? 'text-yellow-700' :
              'bg-gray-200 text-gray-600'}`}
        >
          <small>{ticket.status}</small>
        </span>
      </div>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-700">{ticket.description}</p>

      {/* Footer */}
      <div className="flex flex-col gap-3 mt-4">
        {/* ID & Priority */}
        <div className="flex gap-3 items-center text-sm">
          <p className="text-gray-600">#{ticket.id}</p>
          <span
            className={`font-medium 
              ${ticket.priority === 'High' ? 'text-red-500' :
              ticket.priority === 'Medium' ? 'text-yellow-500' :
              ticket.priority === 'Low' ? 'text-green-500' :
              ticket.priority === 'Critical' ? 'text-purple-500' : 'text-gray-500'}`}
          >
            {ticket.priority}
          </span>
        </div>

        {/* Customer & Date */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
          <p className="whitespace-nowrap"><small>{ticket.customer}</small></p>
          <div className="flex items-center gap-1">
            <img
              src="https://i.ibb.co.com/kVDgXTzd/ri-calendar-line.png"
              alt="Calendar"
              className="w-3 h-3"
            />
            <p className="whitespace-nowrap"><small>{ticket.createdAt}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedTickets;
