import { TodoList, TodoAdd } from '../index';
import { useTodos } from './hooks/useTodos';

export const TodoApp = () => {

    const { todos, allTodos, pendingTodos, onNewTodo, onRemoveTodo, onToggleTodo } = useTodos();

    return (

        <>
            <h1>TodoApp</h1>
            <h5>Total ({ allTodos }), pendientes ({ pendingTodos })  </h5>
            <hr/>
            <div className="row">
                <div className="col-7">       
                    <TodoList 
                        todoList={ todos } 
                        onRemoveTodo={ onRemoveTodo }
                        onToggleTodo={ onToggleTodo }/>
                </div>
                <div className="col-5">
                    <h4>Agregar ToDo</h4>
                    <hr />
                    <TodoAdd onNewTodo={ onNewTodo } />
                </div>

            </div>
        </>
    );
};