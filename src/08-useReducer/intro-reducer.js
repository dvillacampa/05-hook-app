// El estado inicial es un Array de objetos {id, todo, done}
const todoInitialState = [{
    id:     1,
    todo:   'Encontrar la piedra del alma',
    done:   false
}];

// Si no se pasa un estado, tomará el estado inicial definido 
// si no recibe una action, no hará nada devolviendo el estado actual
const todoReducer = ( state = todoInitialState, action = {} ) => {

    switch( action.type ) {
        // Añade el payload al state (Array de objetos)
        case '[TODO] add todo':
            return [ ...state, action.payload ];
    }

    return state; // Si no ha encontado la action, devuelve el estado actual.
}

const newTodo = {
    id:     2,
    todo:   'Encontrar la piedra del poder',
    done:   false
}

// Action que añadirá un objeto al estado (colección de objetos)
const addTodoAction = {
    type:       '[TODO] add todo',
    payload:    newTodo,
}

let todos = todoReducer(); // Obtiene el estado actual.
// Añade la addTodoAction
todos = todoReducer( todos, addTodoAction );

console.log( { state: todos } );