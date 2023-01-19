import React from 'react';
import NextNumber from './NextNumber';
import Timer from '../timer/Timer'

const DrawnBallAndTimer = () => {

    return(
        <div class="drawn-number-and-announcer">
            <NextNumber />
            <Timer />
        </div>
    )
}

export default DrawnBallAndTimer;