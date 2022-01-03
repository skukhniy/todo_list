
import { displayController, dynamicController } from './controller.js'
import './factory.js'
import { localArray, projectArray, todoFactory } from './factory.js'
import { renderProjects,renderTasks } from './render.js'
import {date} from './controller.js'
import {format, startOfWeek, endOfWeek} from 'date-fns'

let globalIndex = 0

//change color of sidebar tab when clicked
const sidebarArray = [displayController.homeTab, displayController.todayTab, displayController.weekTab]
sidebarArray.forEach(button=>{
    button.addEventListener("click",()=>{
        document.querySelectorAll(".tabColor").forEach(header =>{
            header.classList.remove("tabColor")
        })
        displayController.projectsDropdown.classList.remove("show")
        if (button != displayController.homeTab){
            button.classList.toggle("tabColor")
    }
})});

//sidebar projects tab
function dropDown(){
    displayController.projectsDropdown.classList.toggle("show")
    sidebarArray.forEach(header =>{
        header.classList.remove("tabColor")
    })
    displayController.projectsTab.classList.toggle("tabColor")
}
displayController.projectsTab.addEventListener("click",()=>dropDown());

//func + filter for the HOME Header
displayController.homeTab.addEventListener('click',()=>{
    renderTasks(localArray)
})
//functionality + filter for the TODAY header
displayController.todayTab.addEventListener("click",()=>{
    const currentDate = date.toLocaleDateString('en-CA')
    console.log(currentDate)
    renderTasks(localArray,currentDate,"TODAY")
})
//functionality+filter for the WEEK Header
displayController.weekTab.addEventListener("click",()=>{
    const start = convertToMS(format(startOfWeek(date),'yyyy-MM-dd'))
    const end = convertToMS(format(endOfWeek(date),'yyyy-MM-dd'))
    const weekFilter = [start,end]
    renderTasks(localArray,weekFilter,"WEEK")
})
function convertToMS(dateString){
    let d = dateString.split("-");
    let dat = new Date(d[1]+"-"+d[2]+"-"+d[0]);
    return dat.getTime();
}

//add dom functionality to each project header
function filterProject(htmlCollection){
    htmlCollection.forEach(header => {
        header.addEventListener('click',()=>{
            const filter = header.innerHTML;
            console.log(localArray)
            renderTasks(localArray,filter,"PROJECT");
        })
    })}

// removes the active class so the form goes down
displayController.closeModalButtons.forEach(button => {
    button.addEventListener('click',() =>{
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})
//changes the class so that the modal css/html will appear
function openModal(modal){
    if(modal == null) return;
    modal.classList.add('active')
    displayController.overlay.classList.add('active')
}
//changes the class so that the modal css/html will disappear
function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    displayController.overlay.classList.remove('active')
}
//will add an active class so the form pops up
displayController.openModalButton.forEach(button => {
    console.log(button)
    button.addEventListener('click',() =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        console.log(modal)
        openModal(modal)
    });
})

// on clicking submit the inputs will be gathered to create a new object.
displayController.btnSubmit.addEventListener('click',()=>{
    var title = displayController.title.value
    var description = displayController.description.value
    var date = displayController.date.value
    var project = displayController.project.value
    var task = todoFactory(title,description,date,project) //create new task obj
    localArray.push(task) // push task to local array
    displayController.taskForm.reset() //reset the form
    renderTasks(localArray)
});
//Gather information for submitting the "edit Task" Modal form
displayController.btnSubmit2.addEventListener('click',()=>{
    localArray[globalIndex]['title'] = displayController.title2.value
    localArray[globalIndex]['description'] = displayController.description2.value
    localArray[globalIndex]['dueDate'] = displayController.date2.value
    localArray[globalIndex]['project'] = displayController.project2.value
    renderTasks(localArray)
});
//Gather information for submitting the "Add Project" form
displayController.btnSubmit3.addEventListener('click',()=>{
    projectArray.push(displayController.ProjName.value)
    renderProjects(projectArray)
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

//
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



export {deleteBtnDOM, editBtnDOM, filterProject,convertToMS};