import React, {useState, useEffect} from 'react';
import Categories from './Categories.jsx';
import Category from './Category.jsx';
import Tasks from './Tasks.jsx';
import TestModal from './testModal.jsx';
import {example} from '../../../.././database/example.js';
import { Button } from '@material-ui/core';


function ToDoList() {
  //a state prop that's an array that has an element for everytime + task or + category is clicked
  const [categorizedTasks, setCategorizedTasks] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(false)

  const deleteTask = (e) => {
    // var target = e.target;
    // console.log(target);
    // e.target.parentNode.style.display = 'none';
    console.log('deletetask called');
  }

  const openModal = () => {
    console.log('openModal called')
    setModalOpen(true)
  }

  const handleEditClick = () => {
    setEditing(!editing)
  }

  const sampleCategories = () => {
    let storage = []
    example.forEach((el) => {
      var category = {}
      var id = el.category
      // var categoryTasks = tasks.filter(task => task.category_id === el.id)
      category['tasks'] = el.tasks
      category['name'] = id
      storage.push(category)
    })
    // console.log('storage AFTER', storage)
    setCategorizedTasks(storage)
  }

  useEffect(() => {
    sampleCategories()
  }, [])


  return (
    <div id="todo-list" style={{width: '45%', display: 'inline-block'}}>
      <div style={{display: 'flex', height: '50px', width: '100%'}}>
        <div style={{width: '80%'}}>To-Do List</div>
        {modalOpen && <TestModal/>}
        <Button variant="contained" onClick={() => setNewCategories(newCategories => newCategories.concat('New'))}>Add Category</Button>
        <Button variant="contained" onClick={() => setNewTasks(newTasks => newTasks.concat('New task'))}>Add Task</Button>
      </div>
      <div>
        <Categories deleteTask={deleteTask} categorizedTasks={categorizedTasks} openModal={openModal} editClick={handleEditClick} editing={editing}/>
      </div>
    </div>
  )
}
//don't forget empty array parameter for useEffect !!!

export default ToDoList;