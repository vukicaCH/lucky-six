import React from 'react';
import PickedNumber from './PickedNumber';

const PickedNumbers = ({pickedNumbers}) => {

    const pickedNumbersList = pickedNumbers.map((pickedNumber,index) => {
        return <PickedNumber number={pickedNumber} key={index} />
    })

    return(
        <div class="picked-numbers">
            {
                pickedNumbers.length ?
                pickedNumbersList :
                <h1 className='pick-numbers-h1'>Pick 6 numbers</h1>
            }
        </div>
    )
}

export default PickedNumbers;