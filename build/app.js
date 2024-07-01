// <li>
//   <label for="task-1">Nauczyć się Typescript</label>
//   <input type="checkbox" id="task-1" name="Nauczyć się Typescript" />
// </li>
const tasksContainerElement = document.querySelector(".tasks");
const tasks = [
    "Nauczyć się Typescript",
    "Nauczyć sie Next.js",
    "Skończyć zaległy kurs React",
    "Zrobić portfolio",
    "Znaleźć pracę",
];
const renderTasks = () => {
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.append(taskElement);
    });
};
renderTasks();
