import { todoList } from './data';
import { renderToDos } from './render';
import './style.css';
renderToDos(todoList);
let updatedToDos = todoList;

window.handleDelete = function handleDelete(id) {
    updatedToDos = updatedToDos.filter(obj => obj.id != id);
    renderToDos(updatedToDos);
}

window.handleUpdate = function handleDelete(id) {
    const selectedTodo = updatedToDos.find(obj => obj.id == id);
    selectedTodo.done =! selectedTodo.done;
    renderToDos(updatedToDos);
}

window.handleAdd = function handleAdd() {
    const name = document.getElementById("newtodo").value 
    if (name.trim().length == 0) return;
    const id = Date.now();
    const newitem = {id, name, done: false};
    updatedToDos = [...updatedToDos, newitem];
    renderToDos(updatedToDos);
    document.getElementById("newtodo").value = "";
}