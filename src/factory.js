// factory which creates task objects
const todoFactory = (title,description,dueDate,project) =>{
    return{
        title,description,dueDate,project
    }
};

//default objects to pop up during the first page load
var testDict = {
    title: "Finish Cold War Report",
    description: "Needs to be 8 pages.",
    dueDate: "2021-12-23",
    project:"Homework"
}
var testDict2 = {
    title: "Do Laundry",
    description: "Dry clean suit",
    dueDate: "2022-01-02",
    project:"Chores"
}
var testDict3 = {
    title: "Tennis Lessons",
    description: "",
    dueDate: "2021-12-03",
    project:"Sports"
}
var testDict4 = {
    title: "Do Research for Econ Paper",
    description: "Decide between Macro and Micro",
    dueDate: "2021-12-27",
    project:"Homework"
}

let defaultArray = [testDict,testDict2,testDict3,testDict4]
let defaultProjects = ['Chores','Homework','Sports'] //default projects

//initalize localStorage Items if localStorage is empty
if (localStorage.hasOwnProperty("projectArray") === false){
    localStorage.setItem('projectArray',JSON.stringify(defaultProjects))
}
if (localStorage.hasOwnProperty("localArray") === false){
    localStorage.setItem('localArray',JSON.stringify(defaultArray))
}
//values that will be updated each time the tasks are edited/added
let localArray = JSON.parse(localStorage.getItem("localArray"));
let projectArray = JSON.parse(localStorage.getItem("projectArray"));

export { todoFactory, localArray, testDict, projectArray};
