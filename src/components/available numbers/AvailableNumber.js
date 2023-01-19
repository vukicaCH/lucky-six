import React from 'react';
import { setColor } from '../../helper';
import { useGameContext, useGameDispatch } from '../../context/GameContext';

const AvailableNumber = ({number}) => {

    const {pickedNumbers} = useGameContext();
    const dispatch = useGameDispatch();

    const color = setColor(number);

    const handleClick = () => {
        if(pickedNumbers.includes(number)){
            return;
        }

        if(pickedNumbers.length > 5 ){
            return;
        }
        dispatch({type: "ADD_PICKED_NUMBER", payload: number}) 
    }

    return (
        <div
            className={`available-number ${color}`}
            onClick={handleClick}
        >
            {number}
        </div>
    )
}

export default AvailableNumber;