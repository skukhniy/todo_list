
//let localArray = []

var testDict = {
    title: "test",
    description: "wee",
    dueDate: "12.23.21",
    project:""
}
let localArray = [testDict,testDict,testDict,testDict]
console.log(localArray)

const todoFactory = (title,description,dueDate,project) =>{
    return{
        title,description,dueDate,project
    }
};

export { todoFactory, localArray, testDict};
