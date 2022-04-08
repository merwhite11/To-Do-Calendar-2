//state array passed as props
//maps through array to render individual task component
import React from 'react';
import Task from './Task.jsx';

function Tasks({tasks, openModal}) {
  return(
    tasks.map((task, i) => <Task key={i} index={i} title={task.title} openModal={openModal}/>)
  )
}

export default Tasks;