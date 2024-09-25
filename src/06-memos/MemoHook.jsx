import { useCounter } from '../hooks';
import {useState, useMemo } from 'react';

const heavyStuff = ( iterationNumber = 100 ) => {
    for (let i = 0; i < iterationNumber; i++ ){
        console.log( 'MemoHook: ahí vamos...');
    }
    return `${ iterationNumber } iteraciones realizadas`;
};

export const MemoHook = () => {

    const {counter, increment, decrement} = useCounter( 100 );
    const [show, setShow] = useState(true);
    const memorizedValue = useMemo( () => heavyStuff( counter ), [ counter ] );


    return (
        <>
        
            <hr className="border border-primary border-2 opacity-50" />
            <h1>Memo Hook</h1>
            <hr />
            <h4>{ memorizedValue }</h4>
            <h2>Counter: <small>{ counter }</small> </h2>
            <button
                className="btn btn-primary mt-2"
                onClick={() => increment( 1 )}
            >+1</button>
            <button
                className="btn btn-primary mt-2"
                onClick={() => decrement( 1 )}
            >-1</button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show ) }
            >Show/hide { JSON.stringify( show ) }

            </button>
            
            <hr />
        
        </>
    )
}