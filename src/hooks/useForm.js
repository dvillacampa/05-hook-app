import { useState } from 'react';

// Este useForm nos puede servir para cualquier formulario
// inicialmente compuesto por elementos <input>
export const useForm =  ( initialForm = {} ) => {
    
    // En el argumento initialForm nos llegan los nombres de los <input>
    const [ formState, setFormState ] = useState( initialForm );

    // Recibe el evento que ha lanzado el onChange
    // Desestructuramos para tomar el valor de target.
    const onInputChange = ( { target } ) => {
        // Desestructura target, para obtener el valor de name y value
        const { name, value } = target;
        // Establece el cambio (setFormState)
        // Estado actual ...formState
        // El cambio 
        //      [name]  el nombre del atributo que coincide
        //              on el nombre del input que envía el evento onChange
        //      value el valor del input que envía el evento onChange
        setFormState({
            ...formState,
            [ name ]:  value
        });
          
    };

    const onResetForm = () => {
        setFormState( initialForm );
    }

    // Expone formState que contine los valores de los <input> y la 
    // función onInputChange para el comportamiento de los <input>
    return {
        formState,
        onInputChange,
        onResetForm
    };

};