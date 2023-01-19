import React from 'react';
import TicketInstance from './TicketInstance';
import CloseIcon from '@mui/icons-material/Close';
import { useGameContext } from '../../context/GameContext';

const TicketEvidence = ({isEvidenceOpened, closeEvidence}) => {

    const {tickets} = useGameContext();

    const ticketsList = tickets
                            .map(ticket => 
                                <TicketInstance
                                    round={ticket.round}
                                    numbers={ticket.numbers}
                                    amount={ticket.amount}
                                    amountPaid={ticket.amountPaid}
                                    ticketWon={ticket.ticketWon}
                                />)

    return(
        isEvidenceOpened ?
        <div className='ticket-evidence'>
            <CloseIcon
                className='close-icon'
                onClick={closeEvidence}
            />
            {ticketsList.length ?
                ticketsList :
                <h1 className='ticket-h1'>NO TICKETS CREATED</h1>}
        </div> :
        ""
    )
}

export default TicketEvidence;