// <li>
//   <label for="task-1">Zrobić todo listę w Typescript</label>
//   <input type="checkbox" id="task-1" name="Zrobić todo listę w Typescript" />
// </li>
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
console.log(taskNameInputElement.value);
const tasks = [
    "Zrobić todo listę w Typescript",
    "Znaleźć szablon strony portfolio",
    "Dokończyć kurs React na JZP",
    "Poprawić projekt GoIT Kapu$ta",
];
console.log(tasksContainerElement);
console.log(tasks);
const renderTasks = () => {
    // NOTE: read about void
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.append(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    renderTasks();
});
renderTasks();
