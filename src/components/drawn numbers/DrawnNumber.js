import React from 'react';
import { setColor } from '../../helper';


const DrawnNumber = ({ number, quota }) => {

    const color = setColor(number);

    return (
        <div class={`drawn-number ${color}`}>
            <div class="drawn-number-square">
                {quota}
            </div>
            {number}
        </div>
    )
}

export default DrawnNumber;