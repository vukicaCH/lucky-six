import React from 'react';
import DrawnNumber from './DrawnNumber';
import Timer from '../timer/Timer';
import { useGameContext } from '../../context/GameContext';


const DrawnNumbers = () => {

    const {drawnNumbers, roundStarted} = useGameContext();
    
    const drawnNumbersList = drawnNumbers.map(
        drawnNumber => <DrawnNumber number={drawnNumber.number} quota={drawnNumber.quota} />)

    return(
        roundStarted ?
        <div class="drawn-numbers">
            {drawnNumbersList}
        </div> :
        <div class='empty'>
            <h1>Drawn numbers will be shown here.</h1>
        </div>
    )
}

export default DrawnNumbers;