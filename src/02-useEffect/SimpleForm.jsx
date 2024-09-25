import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        username: 'username',
        useremail: 'email@email.com'
    })

    const { username, useremail } = formState;

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

    // Controlar efectos secundarios. Útil para validar inputs, no repetir llamadas http, etc.
    // Pasando un Array vacío [] en el segundo argumento, significa 
    // que es la primera vez que se renderiza el componente.
    useEffect( () => {
        console.log( 'FormState email has changed' + formState.useremail );
        // Aquí validar el correo electrónico, por ejemplo, 
        // llamando a una función que hace una llamanda http...
    }, [ formState.useremail ] );

    return (
  
        <>
            <hr className="border border-primary border-2 opacity-50" />
            <h1>Formulario Simple</h1>

            <input  
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={ username } 
                onChange={ onInputChange }/>
            <input  
                type="email"
                className="form-control"
                placeholder="useremail"
                name="useremail"
                value={ useremail } 
                onChange={ onInputChange }/>

            { 
               ( username === 'david' ) && <Message />
            }
        
        </>


  )
}
