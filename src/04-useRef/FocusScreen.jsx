import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClickFocus = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1></h1>
            <hr/>
            <input
                ref={ inputRef }
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Escriba su nombre"
                autoComplete="on"
            />

            <button
                className="btn btn-primary mt-2"
                onClick={ onClickFocus }
                >Set focus</button>
        </>
    );

}