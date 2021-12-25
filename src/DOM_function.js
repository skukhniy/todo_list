
import { displayController } from './controller.js'
import './factory.js'
import { localArray, todoFactory } from './factory.js'
import renderTasks from './render.js'


//functions for the modal window

//will add an active class so the form pops up
displayController.openModalButton.addEventListener('click',() =>{
    const modal = document.querySelector(displayController.openModalButton.dataset.modalTarget)
    openModal(modal)
})
// removes the active class so the form goes down
displayController.closeModalButtons.forEach(button => {
    button.addEventListener('click',() =>{
    const modal = button.closest('.modal')
    closeModal(modal)
    })
})
//changes the class so that the modal css/html will appear
function openModal(modal){
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}
//changes the class so that the modal css/html will disappear
function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// on clicking submit the inputs will be gathered to create a new object.
displayController.btnSubmit.addEventListener('click',()=>{
    console.log('title =')
    var title = document.getElementById('title').value
    console.log(title)
    var description = document.getElementById('description').value
    console.log(description)
    var date = document.getElementById('date').value
    console.log(date)
    var project = document.getElementById('project').value
    console.log(project)
    var task = todoFactory(title,description,date,project) //create new task obj
    localArray.push(task) // push task to local array
    document.getElementById("taskForm").reset() //reset the form
    console.log(localArray)
    renderTasks(localArray)
})




function deleteBtnFunc(event){
    const clickedEl = event.target;
    var taskIndex = clickedEl.parentNode.parentNode.getAttribute("id"); //grab id from the parentNode
    taskIndex = cleanId(taskIndex); //clean the id to grab the index
    localArray[taskIndex] = undefined; //keep index space but remove object (delete item)

    renderTasks(localArray); //render to apply changes
}
// quick function to clean the task id's and return a useable index int.
function cleanId(id){
    const index = id.match(/\d+/)
    return parseInt(index[0]);
}

//deletes the task
function deleteBtnDOM(htmlCollection){
    Array.from(htmlCollection).forEach(button =>{
        //removes any old event listeners so that they will not repeat when elements are dynamically created
        button.removeEventListener("click",deleteBtnFunc)
        //adds the new event listener
        button.addEventListener("click",deleteBtnFunc)
    })
};



export {deleteBtnDOM};