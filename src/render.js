import { displayController } from "./controller.js";
import { editBtnDOM } from "./DOM_function.js";
import { deleteBtnDOM } from "./DOM_function.js";
import { dynamicController } from "./controller.js";

function renderTasks(array){
    if (array.length === 0){ //returns an empty display if the array is empty
        return;
    }else{
        //resets the display
        document.querySelectorAll('.task').forEach(e => e.remove())
        array.forEach((task,index)=>{
            if (task === undefined){return;} //skip over deleted tasks
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

            //adds event listeners for the new edit buttons
            const editSelectors = dynamicController()[0];
            editBtnDOM(editSelectors)
        
            //adds event listeners for the new delete buttons
            const deleteSelectors = dynamicController()[1];
            deleteBtnDOM(deleteSelectors); 

        })
    }
}

export default renderTasks

// x.classList.add('')
// document.createElement('')
//x.innterHTML = x
// x.appendChild(x)
