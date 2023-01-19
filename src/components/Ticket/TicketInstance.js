import React from 'react';

const TicketInstance = ({round, numbers, amount, amountPaid, ticketWon}) => {

    const pickedNumbersString = numbers.map(number => ` ${number} `);

    return (
        <div className='ticket-instance'>
            <span className='ticket-round'>Round: <b>{round}</b></span>
            <span className='ticket-numbers'>Numbers: <b>{pickedNumbersString}</b></span>
            <span className='ticket-amount'>Amount : <b>{amount}rsd</b></span>
            <span className={`ticket-amount-paid ${ticketWon ? "won" : "lost" }`}>
                Amount paid: <b>{amountPaid}rsd</b>
            </span>
        </div>
    )
}

export default TicketInstance;