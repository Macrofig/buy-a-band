import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'

import { OrderPage } from ".";
import bandData from '../band-json/kpop-band.json'

describe('Order Page', () => {
    it('check happy path', async () => {
        render(<OrderPage band={bandData} />)

        // add ticket
        fireEvent.change(screen.getByLabelText(bandData.ticketTypes[0].type), {target: {value: 1}});
        // fill out customer info
        fireEvent.change(screen.getByLabelText('First name'), {target: {value: 'Juan'}})
        fireEvent.change(screen.getByLabelText('Last name'), {target: {value: 'Orozco'}})
        fireEvent.change(screen.getByLabelText('Address'), {target: {value: 'Crescent City, CA'}})

        // fill out card info
        fireEvent.change(screen.getByLabelText('Credit card number'), {target: {value: '4242424242424242'}})
        fireEvent.change(screen.getByLabelText('Expire date'), {target: {value: '1224'}})
        fireEvent.change(screen.getByLabelText('CVV code'), {target: {value: '123'}})

        // save
        const submit = screen.getByText('Get Tickets');
        fireEvent.click(screen.getByText('Get Tickets'))
        // Asserts we get the pending message
        screen.getByText('Reserving seats...')
        // Asserts we get the success message when timer is done
        await screen.findByText('Congrats! Your tickets are in the mail!')
    });
});