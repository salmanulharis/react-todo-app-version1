import React, { useState } from 'react'

export const EditTodoForm = ({editTask, task}) => {
    const [value, setValue] = useState(task.task);
    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(value, task.id);
        setValue("");
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' value={value} className='todo-input' placeholder='Update Task' onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
