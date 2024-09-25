import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter( 1 );

    return (
        <>
        
            <hr className="border border-primary border-2 opacity-50" />
            <h1>Counter with Custom Hook: { counter }</h1>
            <hr className="border border-danger border-2 opacity-50" />

            <button id="+Counter" className="btn btn-primary"
                onClick={ () => increment( 5 ) }>+ 5</button>
            <button id="Reset" className="btn btn-success"
                onClick={ reset }>Reset</button>
            <button id="-Counter" className="btn btn-danger"
                onClick={ () => decrement( 3 ) }>- 3</button>
        </>
    )
}
