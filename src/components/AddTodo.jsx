import React, { useState } from 'react'
import AddTodoData from '../store/todoList.json'
const AddTodo = ({todoData,setTodoData}) => {
    const [data,setData]=useState('')
  return (
    <div>
        {/* <label> */}
            {/* Add Task: */}
            <input type='text' placeholder='Enter new Task' onChange={(event)=> setData(event.target.value)} />
            <button type='button' className='px-[10px] py-[5px] bg-[#072E33] text-[#6DA5C0]' onClick={()=>{
                setTodoData([...todoData, data])
            }}>New Task</button>
        {/* </label> */}
    </div>
  )
}

export default AddTodo