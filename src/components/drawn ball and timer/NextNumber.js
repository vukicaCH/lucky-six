import React from 'react';
import {setColor} from '../../helper';
import { useGameContext } from '../../context/GameContext';

const NextNumber = () => {

    const {drawnNumbers, roundStarted} = useGameContext();

    const number = drawnNumbers[drawnNumbers.length - 1]?.number;

    const color = setColor(number);

    return(
        roundStarted ?
        <div className="next-number">
                <div className={`drawn-ball ${color}`}>{number}</div>
        </div> :
        ""
    )
}

export default NextNumber;