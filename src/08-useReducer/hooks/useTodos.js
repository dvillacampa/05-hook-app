import { useReducer, useEffect } from 'react';
import { todoReducer } from '../todoReducer';

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' )) || [];
}

export const useTodos = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ));
    }, [ todos ]);


    const onNewTodo = ( newTodo ) => {
        dispatch( {
            type: 'ADD Todo',
            payload: newTodo       
        });

    };

    const onRemoveTodo = ( id ) => {
        dispatch({
            type:       'REMOVE Todo',
            payload:    id
        });
    };

    const onToggleTodo = ( id ) => {
        dispatch( {
            type:       'TOGGLE Todo',
            payload:    id
        });
    };

    return {
        todos,
        allTodos: todos.length,
        pendingTodos: todos.filter( todo => !todo.done).length,
        onNewTodo,
        onRemoveTodo,
        onToggleTodo
    }

}