import React, {useContext} from 'react'
import {Context} from './Context'

export default function TodoItem({title, id, completed}) {
    const {toggleTask, removeTask} = useContext(Context)
    let completedTasks = ['todo']

    if (completed) {
        completedTasks.push('completed')
    }

    return (
        <li className={completedTasks.join(' ')}>
            <label>
                <input type="checkbox" onChange={() => toggleTask(id)} checked={completed} />
                <span>{title}</span>
                <i onClick={() => removeTask(id)}>
                    Delete
                </i>
            </label>
        </li>
    )
}