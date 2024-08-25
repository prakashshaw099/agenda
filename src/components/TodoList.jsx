import React from 'react'

const TodoList = ({todoData}) => {

    console.log('todoData', todoData)
  return (
    todoData?.map((data)=>{
        return <div>{data}</div>
    })
  )
}

export default TodoList