function TodoItem({data,ontogglestatus}){
    return(
        <tr onClick={()=> ontogglestatus(data.id)}>
            <td>{data.todo}</td>
        </tr>
    )
}

export default TodoItem;