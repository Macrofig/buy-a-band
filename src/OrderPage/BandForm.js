import { useState, useEffect, useMemo } from 'react';
import { useMap } from 'react-use';
import classNames from 'classnames';
import { centsToWholeDollars } from './utils';
import {CustomerDetailsForm} from './CustomerDetailsForm';
import { CardForm } from './CardForm';

const OrderTotal = ({total}) => (
  <dl className="flex justify-between uppercase text-xl font-thin mt-4 mb-6">
    <dt>Total:</dt>
    <dd className="font-bold">${centsToWholeDollars(total)}</dd>
  </dl>
  )

export const BandForm = ({ band }) => {
  const [tickets, {set, remove, reset}] = useMap({});
  const [customer, setCustomer] = useState({})
  const [card, setCard] = useState({})
  const [message, setMessage] = useState(null)
  const [pending, setPending] = useState(false);
  const onChangeCustomer = (changes) => setCustomer({...customer, ...changes});
  const onChangeCard = (changes) => setCard({...card, ...changes});
  const total = useMemo(() => {
    const prices = band.ticketTypes.reduce((acc, ticket) => {
      acc[ticket.type] = ticket.cost;
      return acc;
    }, {});
    return Object.entries(tickets).reduce((acc, [key, count]) => {
      return acc + (prices[key] * count);
    }, 0);
  }, [tickets, band]);

  useEffect(() => {
    reset();
  }, [band, reset]);

  const handleOnTicketChange = (key, count) => count > 0 ? set(key, count) : remove(key);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (total === 0) {
      setMessage('Pick some tickets, yo!')
      setTimeout(() => {
        setMessage(null)
      }, 1000);
      return;
    };
    setPending(true);
    setTimeout(() => {
      setMessage('Congrats! Your tickets are in the mail!');

      setTimeout(() => {
        setMessage(null)
      }, 3000);
      setPending(false)
    }, 1000);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold my-4">Select Tickets</h2>
      <ul>
      {band.ticketTypes.map((ticket, index) => (
        <li key={ticket.type} className={classNames("flex flex-row border-b pb-6", {'pt-4': index > 0})}>
          <div className="basis-2/3">
            <h3 className="uppercase text-xl font-thin my-2">{ticket.name}</h3>
            <p className="text-sm">{ticket.description}</p>
            <p className="text-xl font-thin my-2">${centsToWholeDollars(ticket.cost)}</p>
          </div>
          <div className="basis-1/3 flex justify-end">
            <input
              className="w-20 h-14 text-xl font-thin border border-slate-400 text-center"
              type="number"
              aria-label={ticket.type}
              name={`ticket-${ticket.type}`}
              onChange={({target: {value}}) => handleOnTicketChange(ticket.type, value)}
              value={tickets[ticket.type] ?? 0} 
              />
          </div>
        </li>
      ))}
      </ul>
      <OrderTotal total={total} />
      {message && <div className="block rounded bg-green-100 w-full h-8 my-2"><p className="m-2 p-1">{message}</p></div>}
      <CustomerDetailsForm customer={customer} onChange={onChangeCustomer} />
      <h3 className="text-xl font-bold my-4">Payment Details</h3>
      <CardForm card={card} onChange={onChangeCard} />
      <button className="bg-slate-600 text-white w-full p-2" disabled={pending} type="submit">{pending ? "Reserving seats..." : "Get Tickets"}</button>
    </form>
  );
}

export default BandForm;
