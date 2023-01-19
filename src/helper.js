 export function setColor(num){ // this function decides which color will ball have
    let red = [1,9,17,25,33,41];
    let green = [2,10,18,26,34,42];
    let blue = [3,11,19,27,35,43];
    let purple = [4,12,20,28,36,44];
    let brown = [5,13,21,29,37,45];
    let yellow = [6,14,22,30,38,46];
    let orange = [7,15,23,31,39,47];

    if(red.includes(num)){
        return 'red';
    }

    else if(green.includes(num)){
        return 'green';
    }

    else if(blue.includes(num)){
        return 'blue';
    }

    else if(purple.includes(num)){
        return 'purple';
    }

    else if(brown.includes(num)){
        return 'brown';
    }

    else if(yellow.includes(num)){
        return 'yellow';
    }

    else if(orange.includes(num)){
        return 'orange';
    }

    else{
        return 'black';
    }
}

export function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

export function lastPos(arr,arr2){
    let positions = [];

    for(let item of arr2){
        if(arr.includes(item)){
            positions.push(arr.indexOf(item));
        }
    }

    return Math.max(...positions);
}

export function checkTickets(round, drawnNumbers, tickets){

    const drawnNumbersOnlyNumbers = drawnNumbers.map(num => num.number);

    const checkedTickets = tickets.map(ticket => {
        if(ticket.round === round){
            if(ticket.numbers.every(num => drawnNumbersOnlyNumbers.includes(num))){
            const positionOfLastDrawnBall = lastPos(drawnNumbersOnlyNumbers, ticket.numbers);
            const amountPaid = drawnNumbers[positionOfLastDrawnBall - 1].quota * ticket.amount;
                return {
                    ...ticket,
                    amountPaid: amountPaid,
                    ticketWon: true
                }
            }
        }

        return ticket
    })

    return checkedTickets
}

export function amountToBePaid(tickets){
    let amount = 0;

    tickets.forEach(ticket => amount += ticket.amountPaid)

    return amount
}