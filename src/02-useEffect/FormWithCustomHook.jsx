import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

   // useForm expone (return) el objeto { formState, onInputChange }
    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        useremail: '',
        password: ''
   });

   // Desestructutizamos formState con los mismos atributos que el objeto 
   // que se ha pasado como valor inicial del useForm (ver arriba)
   const { username, useremail, password } = formState;

    return (
  
        <>
            <hr className="border border-primary border-2 opacity-50" />
            <h1>Formulario con Custom Hook</h1>

            <input  
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={ username } 
                onChange={ onInputChange }
                autoComplete="on"/>
            <input  
                type="email"
                className="form-control"
                placeholder="useremail"
                name="useremail"
                value={ useremail } 
                onChange={ onInputChange }
                autoComplete="on"/>

            <input  
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={ password } 
                onChange={ onInputChange }/>

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Reset</button>
        
        </>


  )
}
