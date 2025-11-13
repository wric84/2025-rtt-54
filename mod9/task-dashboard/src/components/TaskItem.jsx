
function TaskItem({task}){
    return(
        <div>
            <p>{task.id} {task.title} {task.priority} {task.status}</p>
        </div>
    )
}

export default TaskItem