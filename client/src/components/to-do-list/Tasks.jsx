//state array passed as props
//maps through array to render individual task component
import React from 'react';
import Task from './Task.jsx';

function Tasks({tasks, openModal, editClick, editing, deleteTask}) {
  // console.log('tasks in tasks', tasks)
  return(
    tasks.map((task, i) => {
      if (task.inCalendar === false) {
        console.log('TASKS task: ', task);
        return (<Task style={{display: 'inline-block'}} key={i} task={task} openModal={openModal} editClick={editClick} editing={editing} deleteTask={deleteTask}/>)      
      }
    })
  )
}

export default Tasks;

// category = {
//   1: [{id: 1, title: 'Trip to China'},
//       {id: 2, title: 'Trip to LA'}],
//   id: 1,
//   name: 'Travel'
// }