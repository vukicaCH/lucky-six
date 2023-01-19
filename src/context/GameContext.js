import React, {createContext, useContext, useReducer} from 'react';

const initialState = {
    pickedNumbers: [],
    drawnNumbers: [],
    tickets: [],
    round: 1,
    roundStarted: false,
    seconds: 59,
    balance: 1000,
}

const gameReducer = (state, action) => {
    switch(action.type){
        case "ADD_PICKED_NUMBER":{
            const newNumbers = [...state.pickedNumbers, action.payload];
            
            return {
                ...state,
                pickedNumbers: newNumbers
            }
        }
        case "REMOVE_PICKED_NUMBER":
            const newNumbers = state.pickedNumbers.filter(number => number !== action.payload);

            return {
                ...state,
                pickedNumbers: newNumbers
            }
        case "SET_PICKED_NUMBERS":
            return {
                ...state,
                pickedNumbers: action.payload
            }
        case "SET_DRAWN_NUMBERS":
            return {
                ...state,
                drawnNumbers: action.payload
            }
        case "SET_ROUND":
            const newRound = state.round + 1;
            return {
                ...state,
                round: newRound
            }
        case "ADD_TICKET":{
            const newTickets = [...state.tickets, action.payload.ticket];
            const newBalance = state.balance - action.payload.amount
            return {
                ...state,
                tickets: [...newTickets],
                pickedNumbers: [],
                balance: newBalance
            }
        }
        case "SET_TICKETS":{

            return {
                ...state,
                tickets: [...action.payload]
            }
        }
        case "START_ROUND":
            return {
                ...state,
                roundStarted: true
            }
        case "FINISH_ROUND":
            return {
                ...state,
                roundStarted: false
            }
        case "SET_SECONDS":
            return {
                ...state,
                seconds: action.payload
            }
        case "RESET_GAME":

            return {
                ...state,
                pickedNumbers: [],
                drawnNumbers: [],
                round: state.round + 1,
                roundStarted: false,
                seconds: 59,
            }
        case "SET_BALANCE":
            const newBalance = state.balance + action.payload;
            return {
                ...state,
                balance: newBalance
            }
        default:
            return state
    }
}

const GameContext = createContext(null);
const GameDispatchContext = createContext(null);

export const useGameContext = () => useContext(GameContext);
export const useGameDispatch = () => useContext(GameDispatchContext);

export const GameProvider = ({children}) => {
    const [game, dispatch] = useReducer(gameReducer, initialState);

    return(
        <GameContext.Provider value={game}>
            <GameDispatchContext.Provider value={dispatch}>
                {children}
            </GameDispatchContext.Provider>
        </GameContext.Provider>
    )
}