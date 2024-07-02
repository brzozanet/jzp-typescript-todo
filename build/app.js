// <li>
//   <label for="task-1">Nauczyć się Typescript</label>
//   <input type="checkbox" id="task-1" name="Nauczyć się Typescript" />
// </li>
const tasksContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
// const tasks: string[] = [
//   "Nauczyć się Typescript",
//   "Nauczyć sie Next.js",
//   "Skończyć zaległy kurs React",
//   "Zrobić portfolio",
//   "Znaleźć pracę",
// ];
const tasks = [
    {
        name: "Skończyć kurs GO IT",
        done: true,
    },
    {
        name: "Nauczyć się Typescript",
        done: false,
    },
    {
        name: "Nauczyć sie Next.js",
        done: false,
    },
    {
        name: "Skończyć zaległy kurs React",
        done: false,
    },
    {
        name: "Zrobić portfolio",
        done: false,
    },
    {
        name: "Znaleźć pracę",
        done: false,
    },
];
const renderTasks = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task.name;
        tasksContainerElement.append(taskElement);
    });
};
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    renderTasks();
});
renderTasks();
