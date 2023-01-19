import React, { useState } from 'react';
import { useGameContext, useGameDispatch } from '../../context/GameContext';
import { usePopup } from '../../popup/PopupContext'

const TicketForm = () => {

    const { setPopup } = usePopup();

    const { pickedNumbers, round, roundStarted, balance } = useGameContext();
    const dispatch = useGameDispatch();

    const [amount, setAmount] = useState(0);

    const handleChange = (e) => {
        setAmount(e.target.value);
    }

    const handleClick = () => {
        if(amount > balance){
            setPopup("You don't have enough money", "error");
            return;
        }

        if (amount < 30) {
            setPopup("Amount can't be less than 30rsd", "error");
            return;
        }

        if (pickedNumbers.length < 6) {
            setPopup("Please pick 6 numbers", "error");
            return;
        }

        const newRound = roundStarted ? round + 1 : round;
        const newTicket = {
            round: newRound,
            numbers: pickedNumbers,
            amount: amount,
            amountPaid: null,
            ticketWon: false
        }
        
        dispatch({ type: "ADD_TICKET", payload: {ticket: newTicket, amount: amount} })
        setPopup("Ticket is created successfully", "success");
        setAmount(0);
    }

    return (
        <div class="ticket-form">
            <input
                type="number"
                placeholder='Enter amount'
                value={amount}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Pay in</button>
        </div>
    )
}

export default TicketForm;