
const displayController = (()=>{
    const darkModeBtn = document.getElementById("dark-mode")
    const addBtn = document.getElementById("add")

    const homeTab = document.getElementById('homeTab')
    const todayTab = document.getElementById('todayTab')
    const weekTab = document.getElementById('weekTab')
    const projectsTab = document.getElementById('projectsTab')

    // query Selectors that select elements related to the modal popup form
    const openModalButton = document.querySelector('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-modal-close]')
    const overlay = document.getElementById('overlay')
    const btnSubmit = document.getElementById('btnSubmit')

    return{darkModeBtn,addBtn,homeTab,todayTab,weekTab,projectsTab,openModalButton,closeModalButtons,overlay,btnSubmit}
    
})();

export default displayController; 