import { PropTypes } from 'prop-types'
import { TodoItem } from '../index';

export const TodoList = ( { todoList = [], onRemoveTodo, onToggleTodo } ) => {

    return (
        <ul className="list-group">
            {
                todoList.map( todo => (
                    <TodoItem 
                        key={ todo.id } 
                        todo={ todo } 
                        onRemoveTodo={ onRemoveTodo } 
                        onToggleTodo={ onToggleTodo }
                    />
                ))
            }
        </ul>
    )

}

TodoList.propType = {
    todoList:       PropTypes.array.isRequired,
    onRemoveTodo:   PropTypes.func.isRequired,
    onToggleTodo:   PropTypes.func.isRequired
}