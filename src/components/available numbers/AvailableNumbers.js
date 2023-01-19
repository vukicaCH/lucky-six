import React from 'react';
import AvailableNumber from './AvailableNumber';

const AvailableNumbers = () => {

    const availableNumbers = Array(48).fill(0).map((num, index) => {
        return (
            <AvailableNumber
                number={index + 1}
                key={index}
            />
        )
    })

    return (
        <div className='available-numbers'>
            {availableNumbers}
        </div>
    )
}

export default AvailableNumbers;