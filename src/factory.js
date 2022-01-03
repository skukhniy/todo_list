
//let localArray = []

var testDict = {
    title: "test",
    description: "wee",
    dueDate: "2021-12-23",
    project:"Project 1"
}
var testDict2 = {
    title: "test2",
    description: "weeweeweewee",
    dueDate: "2022-01-23",
    project:"Project 2"
}
var testDict3 = {
    title: "test",
    description: "wee",
    dueDate: "2021-12-23",
    project:"Project 3"
}
var testDict4 = {
    title: "test",
    description: "wee",
    dueDate: "2021-12-23",
    project:"Project 3"
}
let localArray = [testDict,testDict2,testDict3,testDict4]
let projectArray = ['Project 1','Project 2','Project 3']
console.log(projectArray)

const todoFactory = (title,description,dueDate,project) =>{
    return{
        title,description,dueDate,project
    }
};

export { todoFactory, localArray, testDict, projectArray};
