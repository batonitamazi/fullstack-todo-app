import React, { useEffect, useState } from 'react'
import { todoService } from '../../models/todo/service';
import { Todo } from '../../models/todo/Todo';




function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const getTodos = () => {
        todoService.listWithCounter().then((r: any) => {
            setTodos(r.results)
        })
    }
    useEffect(() => {
        getTodos();
    }, [])
    console.log(todos)
    return (
        <div>
            {todos.map((todo) => (
                <div>{todo.title}</div>
            ))}
        </div>
    )
}

export default TodoList