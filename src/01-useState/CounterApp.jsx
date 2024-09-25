import { useState } from "react"

export const CounterApp = () => {

    const [ state, setCounter ] = useState( {
        counter1: 1,
        counter2: 10,
        counter3: 100   
    } );

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <h1>Counter 1: { counter1 }</h1>
            <h1>Counter 2: { counter2 }</h1>
            <h1>Counter 3: { counter3 }</h1>

            <hr className="border border-danger border-2 opacity-50" />

            <button id="Counter 1" className="btn btn-light" 
                onClick={ () => setCounter({
                        ...state, counter1: counter1 + 1,
                    }) 
                }>+1 Counter 1</button>
            <button id="Counter 2" className="btn btn-light" 
                onClick={ () => setCounter({
                    ...state, counter2: counter2 + 10,
                    }) 
                }>+10 Counter 2</button>
            <button id="Counter 3" className="btn btn-light" 
                onClick={ () => setCounter({
                    ...state, counter3: counter3 + 100,
                    }) 
                }>+100 Counter 3</button>
            <button id="-1" className="btn btn-dark" 
                onClick={ () => setCounter({
                    ...state, counter1: counter1 - 1,
                    }) 
                }>-1 Counter 1</button>
        
            <button id="-10" className="btn btn-dark" 
                onClick={ () => setCounter({
                    ...state, counter2: counter2 - 10,
                    }) 
                }>-10 Counter 2</button>
            <button id="-100" className="btn btn-dark" 
                onClick={ () => setCounter({
                    ...state, counter3: counter3 - 100,
                    }) 
                }>-100 Counter 3</button>
        </>
    )
}