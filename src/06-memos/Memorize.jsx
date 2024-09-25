import { useCounter } from '../hooks';
import { SmallCase } from './SmallCase';
import {useState} from 'react';

export const Memorize = () => {

    const {counter, increment, decrement} = useCounter( 1 );
    const [show, setShow] = useState(true);


    return (
        <>
        
            <hr className="border border-primary border-2 opacity-50" />
            <h1>Momorize</h1>
            <hr />
            <h2>Counter: <SmallCase counter={ counter } /> </h2>
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