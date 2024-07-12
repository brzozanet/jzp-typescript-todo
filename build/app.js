const taskContainerElement = document.querySelector(".tasks");
console.log(taskContainerElement);
const addTaskInputElement = document.querySelector("#name");
console.log(addTaskInputElement.value);
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
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        taskContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => { };
tasksRender();
