import React from 'react';

const ProCard = ({ticket, handleResolved}) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4 max-w-[300px]">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
                {ticket.title}
            </h3>
            <button onClick={()=>handleResolved(ticket)} className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md">
                Complete
            </button>
        </div>
    );
};

export default ProCard;