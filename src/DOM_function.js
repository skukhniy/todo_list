
import displayController from './controller.js'
import './factory.js'
import { localArray, todoFactory } from './factory.js'


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
function openModal(modal){
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}
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
    var priority = document.getElementById('priority').value
    console.log(priority)
    var project = document.getElementById('project').value
    console.log(project)
    var task = todoFactory(title,description,date,priority,project) //create new task obj
    localArray.push(task) // push task to local array
    document.getElementById("bookForm").reset() //reset the form
    console.log(localArray)
})

