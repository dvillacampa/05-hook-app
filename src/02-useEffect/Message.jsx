import { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    // En este caso, useEffect también nos puede valer
    // para hacer alguna limpieza en memoria
    // el código escrito dentro de return() solo se ejecturá 
    // cuando el componente haya sido quitado.
    useEffect( () => {

        // Desestructura event, toma x e y de todos los atributos de event
        const onMouseMove = ({ x, y }) => {
            // Establece el estado del componente para que se renderice
            setCoords({ x, y })
        }

        // Crea el Listener que estará escuchando el evento mousemove
        // Por defecto, cuando llama a onMouseMove le pasa el primer argumento, event
        window.addEventListener( 'mousemove', onMouseMove);

        return () => {
            window.removeEventListener( 'mousemove', onMouseMove);
        }

    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
            <p>{ JSON.stringify( coords ) }</p>
        </>
    );
}
