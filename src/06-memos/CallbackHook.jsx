import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [ counter, setCounter ] = useState( 1 );

    // Para que funcione useCallBack junto con Memo
    // necesitamos pasar la función increment de forma que 
    // no cambie la referencia, pero si podamos actualizar el valor 
    // para ello a la función setCounter le pasamos una función callback
    // que recibe el argumento (value) y en su cuerpo se incrementa el valor en 1
    // De esta forma en el componente que pinta el botón y llama a la función incrementar
    // y que hemos envuelto con un React.memo (...) la referencia a la función
    // será siempre la misma.

    // Solamente con poner un parámetro dentro de la función setCounter( (value))
    // se interpreta como una función callback que retorna un valor.
    // Programación Funcional. Esta magia es muy compleja de entender, 
    // necesitamos confiar en que es así como funciona.
    const increment = useCallback(
        ( incrementValue ) => {
            setCounter( ( value ) => value + incrementValue );
            }, [],
    );
   
    return (
        <>
            <h1>Callback Hook in Action { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment }/>
        </>
    )

}