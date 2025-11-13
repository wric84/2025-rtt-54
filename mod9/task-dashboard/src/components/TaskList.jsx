import TaskItem from "./TaskItem"
import { useState } from "react"

function TaskList() {

    const dummyTasks = [
        {id: 1, title: "Learn React", status: "In Progress", priority: "High"},
        {id: 2, title: "Make a billion bucks", status: "Pending", priority: "Medium"},
        {id: 3, title: "Eat lots of good food", status: "Completed", priority: "Low"},
        {id: 4, title: "Learn React", status: "In Progress", priority: "High"},
        {id: 5, title: "Finally get a good nights rest", status: "In Progress", priority: "High"},
    ]

    const [tasks, setTasks] = useState(dummyTasks)

    function sortByPriority(){
        const priorityOrder = {High: 1, Medium: 2, Low: 3}
        const sortedPriorities = [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
        setTasks(sortedPriorities)
    }

    return(
        <div>
            <h1>TaskList</h1>
            <button onClick={sortByPriority}>Sort by Priority</button>
            {tasks.map((item)=>(
                <TaskItem key={item.id} task={item}/>
            ))}
        </div>
    )
}

// const Tasklist = () => {
//     return(
//         <div>
//             <h1>TaskList</h1>
//         </div>
//     )
// }

export default TaskList