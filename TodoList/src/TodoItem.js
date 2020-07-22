import React, {useContext} from 'react'
import {Context} from './Context'

export default function TodoItem({title, id, completed}) {
    const {toggleTask, removeTask} = useContext(Context);
    const taskClassName = (completed) ? 'task completed' : 'task';

    return (
        <li className={taskClassName}>
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