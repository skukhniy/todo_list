
var displayController = (()=>{
    const darkModeBtn = document.getElementById("dark-mode")
    const addBtn = document.getElementById("add")

    //siderbar tabs 
    const homeTab = document.getElementById('homeTab')
    const todayTab = document.getElementById('todayTab')
    const weekTab = document.getElementById('weekTab')
    const projectsTab = document.getElementById('projectsTab')
    const projectsDropdown = document.getElementById("myDropdown")
    const addProject = document.getElementById("addProject")

    // query Selectors that select elements related to the modal popup form
    const openModalButton = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-modal-close]')
    const overlay = document.getElementById('overlay')

    // selectors for new task form values
    var title = document.getElementById('title')
    var description = document.getElementById('description')
    var date = document.getElementById('date')
    var project = document.getElementById('project')
    const taskForm = document.getElementById("taskForm")
    const btnSubmit = document.getElementById('btnSubmit')

    //selectors for the "edit task" modal
    var title2 = document.getElementById('title2')
    var description2 = document.getElementById('description2')
    var date2 = document.getElementById('date2')
    var project2 = document.getElementById('project2')
    const taskForm2 = document.getElementById("taskForm2")
    const btnSubmit2 = document.getElementById('btnSubmit2')

    //selectors for new project
    var ProjName = document.getElementById('ProjectName')
    const btnSubmit3 = document.getElementById('btnSubmit3')

    //selectors for the edit button modal form
    const editTitle = document.getElementById('title')

    //task container
    const taskDisplay = document.getElementById('taskDisplay')

    //deleteButtons
    const deleteButton = document.querySelectorAll('.deleteButton')

    return{darkModeBtn,addBtn,homeTab,todayTab,weekTab,projectsTab, projectsDropdown, addProject,
        openModalButton,closeModalButtons,overlay,btnSubmit,taskDisplay,deleteButton,
        title, description,date,project,taskForm,ProjName,btnSubmit3,
        title2, description2, date2, project2, taskForm2,btnSubmit2}
    
})();

//controller for elements that are created after the page first loads (new tasks/projects etc)
function dynamicController(){
    const editButton = document.querySelectorAll('[data-modal-target]')
    const deleteButton = document.querySelectorAll('.deleteButton')
    const projectSelectors = document.querySelectorAll('.selectProject')
    const projectHeaders = document.querySelectorAll('.selectProject')
    return ([editButton,deleteButton,projectSelectors,projectHeaders])
}

const date = new Date()

export { displayController, dynamicController,date};
