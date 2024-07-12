const taskContainerElement = document.querySelector(".tasks");
console.log(taskContainerElement);
const taskNameInputElement = document.querySelector("#name");
console.log(taskNameInputElement.value);
const addTaskButtonElement = document.querySelector("button");
console.log(addTaskButtonElement);
const tasks = [
    "Nauczyć się Typescript",
    "Nauczyć sie Next.js",
    "Skończyć zaległy kurs React",
    "Zrobić portfolio",
    "Znaleźć pracę",
];
const tasksRender = () => {
    taskContainerElement.innerText = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        taskContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addTaskButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    tasksRender();
});
tasksRender();
