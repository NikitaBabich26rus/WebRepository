import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({tasks}) {
  return (
    <ul>
      {tasks.map(item => <TodoItem key={item.id} {...item} />)}
    </ul>
  )
}