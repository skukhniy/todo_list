import { displayController,dynamicController } from "./controller.js";
import { editBtnDOM,deleteBtnDOM,filterProject,convertToMS } from "./DOM_function.js";

//function that will filter which tasks need to be created
function renderTasks(array,filter=null,filterType){
    if (array.length === 0){ //returns an empty display if the array is empty
        return;
    }else{
        document.querySelectorAll('.task').forEach(e => e.remove())//resets the display
        array.forEach((task,index)=>{
            if (task === undefined || task === null){return;} //skip over deleted tasks
            else if(filter === null){ //if there is no filter, render all tasks
                renderTask(task,index)
            }else if(task.dueDate === filter && filterType =="TODAY"){
                renderTask(task,index)
            }else if(convertToMS(task.dueDate) >= filter[0] && filter[1] >= convertToMS(task.dueDate) && filterType =="WEEK"){
                renderTask(task,index)
            }else if(task.project === filter && filterType =="PROJECT"){// if there is a filter, only render that task
                renderTask(task,index)
            }else{//if there are no tasks that match the filter, make nothing
                console.log('filter doesnt match any tasks')
            }
        })
        //adds event listeners for the new edit buttons
        const editSelectors = dynamicController()[0];
        editBtnDOM(editSelectors)
    
        //adds event listeners for the new delete buttons
        const deleteSelectors = dynamicController()[1];
        deleteBtnDOM(deleteSelectors); 
    }
}

//function that creates html elements that will render the new tasks from the array
function renderTask(task,index){
    //create the checkbox label
    const newLabel = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    const span = document.createElement('span');
    span.innerHTML = task.title; //displays the title of the task
    newLabel.appendChild(checkbox); //append the checkbox/span to the label element
    newLabel.appendChild(span)

    // create rightAlign div (includes date, edit button, delete button)
    const rightAlign = document.createElement ('div')
    rightAlign.classList.add('taskRightAlign')
    rightAlign.innerHTML = "<p class='taskDate'>" + task.dueDate + '</p>'
    rightAlign.innerHTML += "<button data-modal-target='#modal2' class= 'editButton'><i class='fa fa-pencil ' ></i></button>"
    // rightAlign.innerHTML += "<div data-modal-target='#modal'><button class= 'editButton'><i class='fa fa-pencil ' ></i></button>"
    rightAlign.innerHTML += "<button class= 'deleteButton'>X</button>"

    //create the task child div
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.id = 'index #' + index
    newTask.appendChild(newLabel)
    newTask.appendChild(rightAlign)            

    //append children to the container
    const taskContainer = displayController.taskDisplay
    taskContainer.appendChild(newTask)
}

//renders projects on the sidebar and in the selection part of the modal window
function renderProjects(array){
    if (array.length === 0){
        console.log("project array is empty")
        return;
    }else{
        displayProjects(array)
        appendProjects(array)
    }
}
//loops through each project in the array and adds it to the sidebar
function displayProjects(array){
    document.querySelectorAll('.projectFolder').forEach(e => e.remove()) //reset project display
    //loop to append new projects to the sidebar div
    array.forEach((project,index)=>{
        const newDiv = document.createElement('div')
        newDiv.classList.add('projectFolder')
        newDiv.innerHTML = "<h4 class='selectProject'>" + project + "</h4>"
        const dropDown = displayController.projectsDropdown
        dropDown.appendChild(newDiv)
    })
    //adds dom events to the new headers in the sidebar.
    filterProject(dynamicController()[3]);

}
//loops through each project in the array and adds selection options for the modal windows
function appendProjects(array){
    //reset project selection
    displayController.project.innerHTML = "<option>Choose a Project:</option>"
    displayController.project2.innerHTML = "<option>Choose a Project:</option>"
    //append each project as a selection option
    array.forEach(project => {
        displayController.project.innerHTML += "<option>" + project + "</option"
        displayController.project2.innerHTML += "<option>" + project + "</option"
    })
}

export {renderTasks,renderProjects}

// x.classList.add('')
// document.createElement('')
//x.innterHTML = x
// x.appendChild(x)
