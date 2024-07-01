// <li>
//   <label for="task-1">Nauczyć się Typescript</label>
//   <input type="checkbox" id="task-1" name="Nauczyć się Typescript" />
// </li>
const tasksContainerElement = document.querySelector(".tasks");
let tasks = [
    "Nauczyć się Typescript",
    "Nauczyć sie Next.js",
    "Skończyć zaległy kurs React",
    "Zrobić portfolio",
    "Znaleźć pracę",
];
// NOTE: render tasks
const renderTasks = () => {
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.append(taskElement);
    });
};
// NOTE: add task
const taskInputElement = document.querySelector("#name");
const buttonElement = document.querySelector("button");
const addTask = (task) => {
    tasks.push(task);
};
buttonElement.addEventListener("click", (event) => {
    event.preventDefault();
    tasks = [];
    addTask(taskInputElement.value);
    renderTasks();
});
renderTasks();
