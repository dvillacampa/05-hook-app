import { useEffect, useState } from "react";

const localCache = {};


export const useFetch = ( url ) => {

    const fetchApi = url;

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        errorMessage: null,
    });

    useEffect( () => {
        
        getFetch();

    }, [ url ]); // Se ejecutará sólo si cambia la URL

    const setInitialState = () => {
        setState( {
            data: null,
            isLoading: true,
            hasError: false,
            errorMessage: null,
    
        });
    };

    const getFetch = async() => {

        // Comprueba si la petición está en Cache
        if ( localCache[url] ) {
            // Si existe la url en memoria, cambia el estado del Hook
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                errorMessage: null
            });
            // Sale de la función
            return;
        }

        // Inicializa el stado del Hook
        setInitialState();
        
        // Fuerza un pequeño tiempo para probar el comportamiento
        // del componente con relación a (isLoading)
        await new Promise( resolve => setTimeout( resolve, 100 ) );

        const resp = await fetch(fetchApi);

        // Primero controla que la petición haya ido bien.
        // Si algo falla, establece el error en setState.
        if ( !resp.ok ) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                errorMessage: {
                    code: resp.status,
                    message: resp.statusText,
                }
            });
            return; // No es necesario ejecutar más código.
        }

        const data = await resp.json();

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            errorMessage: null,
        });
        
        localCache[url] = data;
    }


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };

};