import { useState } from "react"
import SearchTask from "./SearchTask"
import TaskActions from "./TaskActions"
import TaskList from "./TaskList"
import AddTaskModal from './AddTaskModal'

function TaskBoard() {
    const defaultTask = {
        id: crypto.randomUUID(),
        title: 'React lession',
        description: 'I want to learn react js. Then I will learn node.js.',
        tags: ["web", "react", "zip"],
        priority: "High",
        isFavourite: true
    }
    const [ tasks, setTasks ] = useState([defaultTask])
    const [ showModal, setShowModal ] = useState(false)
    const handleAddTask = () => {
        console.log('add task')
    }
  return (
    <section className="mb-20" id="tasks">
        {showModal && <AddTaskModal handleClick={setShowModal}/>}
    <div className="container">
   
    <div className="p-2 flex justify-end">
        <SearchTask/>
    </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions onAddClick={() => setShowModal(true)}/>
            <TaskList tasks={tasks}/>
        </div>
    </div>
</section>
  )
}

export default TaskBoard