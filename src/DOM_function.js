
import { displayController } from './controller.js'
import './factory.js'
import { localArray, todoFactory } from './factory.js'
import renderTasks from './render.js'


let globalIndex = 0

//functions for the modal window



// displayController.openModalButton.addEventListener('click',() =>{
//     const modal = document.querySelector(displayController.openModalButton.dataset.modalTarget)
//     console.log(modal)
//     openModal(modal)
// })
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
    var title = displayController.title.value
    // console.log(title)
    var description = displayController.description.value
    // console.log(description)
    var date = displayController.date.value
    // console.log(date)
    var project = displayController.project.value
    // console.log(project)
    var task = todoFactory(title,description,date,project) //create new task obj
    localArray.push(task) // push task to local array
    displayController.taskForm.reset() //reset the form
    console.log(localArray)
    renderTasks(localArray)
});

displayController.btnSubmit2.addEventListener('click',()=>{
    localArray[globalIndex]['title'] = displayController.title2.value
    localArray[globalIndex]['description'] = displayController.description2.value
    localArray[globalIndex]['dueDate'] = displayController.date2.value
    localArray[globalIndex]['project'] = displayController.project2.value
    console.log(globalIndex)
    console.log(localArray[globalIndex])
    console.log(localArray)
    renderTasks(localArray)
});

//will add an active class so the form pops up
displayController.openModalButton.forEach(button => {
    console.log(button)
    button.addEventListener('click',() =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        console.log(modal)
        openModal(modal)
    });
})

//function to pass through the event listener for the edit buttons
function editBtnFunc(event){
    const button = event.target.closest('button');
    if(button == null) return;
    console.log(button)
    const modal = document.querySelector(button.dataset.modalTarget)
    console.log(modal)
    const taskId = cleanId(button)
    globalIndex = taskId //adjusts the global index variable

    console.log(displayController.title2.value)

    displayController.title2.value = localArray[taskId].title
    displayController.description2.value = localArray[taskId].description
    displayController.date2.value = localArray[taskId].dueDate
    displayController.project2.value = localArray[taskId].project

    openModal(modal)
};

function editBtnDOM(htmlCollection){
    Array.from(htmlCollection).forEach(button =>{
        button.removeEventListener("click",editBtnFunc)
        button.addEventListener("click",editBtnFunc)
    })
}

//function to pass through the event listened for the delete buttons
function deleteBtnFunc(event){
    const clickedEl = event.target; //returns the selector of the clicked item
    const taskIndex = cleanId(clickedEl); //clean the id to grab the index
    localArray[taskIndex] = undefined; //keep index space but remove object (delete item)

    renderTasks(localArray); //render to apply changes
}
// quick function to clean the task id's and return a useable index int.
function cleanId(elem){
    const id = elem.parentNode.parentNode.getAttribute("id");//grab id from the parentNode
    const index = id.match(/\d+/);
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



export {deleteBtnDOM, editBtnDOM};