import { useLayoutEffect, useRef, useState } from "react"

export const PokemonCard = ({ id, name, sprites = [] }) => {

    // Sirve para tener una referencia de un elemento HTML
    // para interactuar con la referencia en otras funciones.
    // En el elemento HTML es necesario añadir el atributo 
    // ref={la referencia a useRef()} ver el código HTML más abajo.
    const pokemonInfo = useRef();
    
    // Para el ejercicio, mostrará el width y height de un componente
    // cada vez que este cambie y cambiará cada vez que cambie la propiedad
    // [name] en useLayoutEffect (cuando se ha renderizado el componente)
    const [boxSize, setBoxSize] = useState( {width: 0, height: 0} );
    
    // Hook que nos permite calcular cambios en el Layout, 
    // por ejemplo, el rectángulo de un componente, la posición x o y, etc.
    // Cada vez que cambie [name] realizará un cálculo.
    useLayoutEffect(() => {
      const { width, height } = pokemonInfo.current.getBoundingClientRect();
      setBoxSize({ width, height });
    }, [ name ])

    return (
        <>
            <section style={{ height: 200}}>
                {
                    // Se establece la ref que está apuntando a useRef
                }
                <h2 
                    ref={ pokemonInfo }
                    className="text-capitalize">#{ id } - { name }</h2>

                <ul className="list-group list-group-horizontal">
                    {
                        sprites.map( sprite => (
                           <li className="list-group-item" key={ sprite }>
                                <img src={ sprite } alt={ name } />
                            </li>
                        ))
                    }
                </ul>

                {
                // Muestra el tamaño del rectángulo width y height
                // del elemento referenciado. En este caso h2
                }
                <code>BoxSize: { JSON.stringify( boxSize )}</code>
            </section>

            

        </>
    )

}