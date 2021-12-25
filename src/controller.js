
var displayController = (()=>{
    const darkModeBtn = document.getElementById("dark-mode")
    const addBtn = document.getElementById("add")

    //siderbar tabs 
    const homeTab = document.getElementById('homeTab')
    const todayTab = document.getElementById('todayTab')
    const weekTab = document.getElementById('weekTab')
    const projectsTab = document.getElementById('projectsTab')

    // query Selectors that select elements related to the modal popup form
    const openModalButton = document.querySelector('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-modal-close]')
    const overlay = document.getElementById('overlay')
    const btnSubmit = document.getElementById('btnSubmit')

    //task container
    const taskDisplay = document.getElementById('taskDisplay')

    //deleteButtons
    const deleteButton = document.querySelectorAll('.deleteButton')
    //console.log(deleteButton)

    return{darkModeBtn,addBtn,homeTab,todayTab,weekTab,projectsTab,openModalButton,closeModalButtons,overlay,btnSubmit,taskDisplay,deleteButton}
    
})();

function dynamicController(){
    const deleteButton = document.querySelectorAll('.deleteButton')
    return(deleteButton)
}


export { displayController, dynamicController};
