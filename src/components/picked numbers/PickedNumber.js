import React from 'react';
import {setColor} from '../../helper';
import { useGameDispatch } from '../../context/GameContext';

const PickedNumber = ({number}) => {

    const dispatch = useGameDispatch();

    const handleClick = () => {
        dispatch({type: "REMOVE_PICKED_NUMBER", payload: number})
    }

    const color = setColor(number);

    return (
        <div class={`picked-number ${color}`} onClick={handleClick}>
            {number}
        </div>
    )
}

export default PickedNumber;