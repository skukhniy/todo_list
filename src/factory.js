
let localArray = []

const todoFactory = (title,description,dueDate,priority,project) =>{
    return{
        title,description,dueDate,priority,project
    }
};

export { todoFactory, localArray };
