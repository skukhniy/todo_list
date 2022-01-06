import './style.css'
import './DOM_function.js'
import { localArray,projectArray } from './factory'
import { renderTasks,renderProjects } from './render.js'

renderTasks(localArray);
renderProjects(projectArray);