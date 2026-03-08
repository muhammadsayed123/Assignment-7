import React, { use, useState } from 'react';
import SelectedTickets from '../SelectedTickets/SelectedTickets';
import States from '../States/States';
import ProgressCard from '../ProgressCard/ProgressCard';
import { toast } from 'react-toastify';


const AvailableTickets = ({ infoPromise }) => {
    const ticketData = use(infoPromise);
    const [tickets, setTickets] = useState(ticketData);

    const [allTickets, setAllTickets] = useState([]);
    const [allResolved, setAllResolved] = useState([]);

    const handleTicket = (ticket) => {
        toast.success('In Progress!');
        const taskTickets = [...allTickets, ticket];
        setAllTickets(taskTickets);
    }
    const handleResolved = (ticket) => {
        toast.success('Completed!');
        const resolvedTickets = [...allResolved, ticket];
        setAllResolved(resolvedTickets);

        const remainingTickets = allTickets.filter((card => card.id !== ticket.id));
        setAllTickets(remainingTickets);

        const remaining = tickets.filter((card => card.id !== ticket.id));
        setTickets(remaining);
    }

    return (
        <div className='bg-[#E9E9E9] min-h-screen '>
            <States inProgress={allTickets.length} resolvedTotal={allResolved.length}></States>
            <section className="max-w-[1200px] mx-auto py-10 grid grid-cols-1 md:grid-cols-12 gap-5 ">
                <div className="md:col-span-7">
                    <h2 className="font-semibold mb-4 text-black">Customer Tickets</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            tickets.map(ticket => (
                                <SelectedTickets handleTicket={handleTicket} key={ticket.id} ticket={ticket}></SelectedTickets>
                            ))
                        }
                    </div>
                </div>
                <div className="md:col-span-5 space-y-5">
                    <h2 className="font-semibold text-black">Task Status</h2>
                    <div className='shadow p-10 space-y-5'>
                        {allTickets.length === 0 && <p className='text-black'>Select a ticket to add to Task Status</p>}
                        {
                            allTickets.map(ticket =>
                            (
                                <ProgressCard handleResolved={handleResolved} key={ticket.id} ticket={ticket}></ProgressCard>
                            ))
                        }
                    </div>
                    <h2 className="font-semibold text-black">Resolved Task</h2>
                    <div className='shadow p-10 space-y-5'>
                        {allResolved.length === 0 && <p className='text-black'>No task has been resolved</p>}
                        {
                            allResolved.map(ticket =>
                                <div key={ticket.id} className='bg-[#E0E7FF] shadow p-3 rounded-md text-black font-semibold'>
                                    <h2>{ticket.title}</h2>
                                </div>
                                )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AvailableTickets;
