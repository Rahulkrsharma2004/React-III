import TodoItem from "./TodoItem";
function TodoList({ tasks, ontogglestatus }) { // prop.tasks
    return (
        <table>
            <thead>
                <tr>
                    <th>Task Name</th>
                </tr>
            </thead>
            <tbody>
                <ul>
                    {
                        tasks.map((task) => (
                            <li>
                                <TodoItem key={task.id} data={task} ontogglestatus={ontogglestatus} />
                            </li>
                        ))
                    }
                </ul>

            </tbody>
        </table>
    )
}

export default TodoList;