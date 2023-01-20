import React from 'react';
import { useGameContext } from '../../context/GameContext';


const Timer = () => {

    const {roundStarted, seconds} = useGameContext();

    return (
        roundStarted ?
        "":
        <div className="announcer">
            <div class="timer">
                <span class="timer-text">Round in</span>
                <span class="timer-seconds">
                    00:{seconds < 10 ? `0${seconds}` : seconds}
                </span>
            </div>
        </div>
    )
}

export default Timer;