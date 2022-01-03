import './style.css'
import './DOM_function.js'
import { localArray } from './factory'
import { renderTasks } from './render.js'
import { renderProjects } from './render.js'
import{projectArray} from './factory'

renderTasks(localArray);
renderProjects(projectArray);