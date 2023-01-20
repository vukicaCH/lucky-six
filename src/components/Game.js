/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import DrawnBallAndTimer from './drawn ball and timer/DrawnBallAndTimer';
import PickedNumbers from './picked numbers/PickedNumbers';
import AvailableNumbers from './available numbers/AvailableNumbers';
import DrawnNumbers from './drawn numbers/DrawnNumbers';
import TicketForm from './Ticket/TicketForm';
import TicketEvidence from './Ticket/TicketEvidence';
import { randomRange, checkTickets, amountToBePaid } from '../helper';
import { useGameContext, useGameDispatch } from '../context/GameContext';
import { usePopup } from '../popup/PopupContext'


const quotas = [
    "", "", "", "", "", 10000, 7500, 5000, 2500, 1000, 500, 300, 200, 150, 100,
    90, 80, 70, 60, 50, 40, 30, 25, 20, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
]

const Game = () => {

    const { pickedNumbers, drawnNumbers, tickets, round, seconds, balance } = useGameContext();
    const dispatch = useGameDispatch();

    const { setPopup } = usePopup();

    const [isEvidenceOpened, setIsEvidenceOpened] = useState(false);

    const openEvidence = () => {
        setIsEvidenceOpened(true);
    }

    const closeEvidence = () => {
        setIsEvidenceOpened(false);
    }

    const addNewDrawnNumber = () => {
        const number = randomRange(1, 48);
        const drawnNumbersOnlyNumbers = drawnNumbers.map(num => num.number)

        if (drawnNumbers.length === 35) {
            return;
        }

        if (!drawnNumbersOnlyNumbers.includes(number)) {
            const newNumbers = drawnNumbers;
            const newNumber = {
                number: number,
                quota: quotas[drawnNumbers.length]
            }
            newNumbers.push(newNumber)
            dispatch({ type: "SET_DRAWN_NUMBERS", payload: newNumbers })
            setTimeout(addNewDrawnNumber, 1500);
        } else {
            addNewDrawnNumber();
        }
    }

    useEffect(() => {

        if (seconds === 0) {
            dispatch({ type: "START_ROUND" })
            addNewDrawnNumber();
            return;
        }

        const myInterval = setInterval(() => {
            dispatch({ type: "SET_SECONDS", payload: seconds - 1 })
        }, 1000)

        return () => clearInterval(myInterval);

    }, [seconds]);

    useEffect(() => {

        const myTimeout = setTimeout(() => {
            if (drawnNumbers.length === 35) {
                dispatch({ type: "RESET_GAME" })
            }
        }, 3000)

        if (drawnNumbers.length === 35) {
            const checkedTickets = checkTickets(round, drawnNumbers, tickets);
            const ticketsFromThisRound = checkedTickets.filter(ticket => ticket.round === round);
            const amountWon = amountToBePaid(ticketsFromThisRound);
            dispatch({ type: "SET_TICKETS", payload: checkedTickets })
            dispatch({ type: "SET_BALANCE", payload: amountWon})
            if(amountWon){
                setPopup(`You won ${amountWon} rsd in this round!`, "success");
            }
        }

        return () => { clearTimeout(myTimeout) }

    }, [drawnNumbers.length])


    return (
        <section class="main-section">
            <div className='navbar'>
                <div className='round'>
                    Round: <b>{round}</b>
                </div>
                <div className='balance'>
                    Balance : <b>{balance}</b> rsd
                </div>
                <div className="ticket-badge-div">
                    <StickyNote2Icon
                        fontSize="large"
                        className="badge"
                        onClick={openEvidence}
                    />
                </div>
            </div>
            <DrawnBallAndTimer />
            <DrawnNumbers />
            <PickedNumbers pickedNumbers={pickedNumbers} />
            <AvailableNumbers />
            <TicketForm />
            <TicketEvidence
                isEvidenceOpened={isEvidenceOpened}
                closeEvidence={closeEvidence}
            />
        </section>
    )
}

export default Game