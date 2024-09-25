import { useFetch, useCounter } from '../hooks';
import { LoadingMessage, PokemonCard } from '../index'

export const Layout = () => {

    const { counter, increment, decrement } = useCounter( 1 );

    const url = 'https://pokeapi.co/api/v2/pokemon/' + counter;
    const { data, isLoading, hasError } = useFetch( url );

    return (

        <>
            <h1>Información de Pokémon (Layout)</h1>
            <hr />
            {
                (isLoading) && <LoadingMessage />
            }

            <PokemonCard 
                id={ data?.id } 
                name={ data?.name } 
                sprites={[
                    data?.sprites.front_default,
                    data?.sprites.front_shiny,
                    data?.sprites.back_default,
                    data?.sprites.back_shiny,
                ]}/>

            <button 
                onClick={ () => counter > 1 ? decrement( 1 ) : null }
                className="btn btn-primary mt-2">Anterior</button>

            <button 
                onClick={ () => counter < 10 ? increment( 1 ) : null }
                className="btn btn-primary mt-2">Siguiente</button>

            
        </>

    );

};