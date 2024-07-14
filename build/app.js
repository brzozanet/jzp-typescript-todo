const taskContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addTaskButtonElement = document.querySelector("button");
const tasks = [
    { name: "Nauczyć się Typescript", done: false },
    { name: "Nauczyć sie Next.js", done: false },
    { name: "Skończyć zaległy kurs Go IT", done: true },
    { name: "Zrobić portfolio", done: false },
    { name: "Znaleźć pracę", done: false },
];
const tasksRender = () => {
    taskContainerElement.innerText = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task.name;
        taskContainerElement.appendChild(taskElement);
    });
};
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
    console.log(tasks);
};
addTaskButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    tasksRender();
});
tasksRender();
