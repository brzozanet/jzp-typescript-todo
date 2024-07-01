// <li>
//   <label for="task-1">Nauczyć się Typescript</label>
//   <input type="checkbox" id="task-1" name="Nauczyć się Typescript" />
// </li>

const tasksContainerElement: HTMLUListElement =
  document.querySelector(".tasks");

let tasks: Array<string> = [
  "Nauczyć się Typescript",
  "Nauczyć sie Next.js",
  "Skończyć zaległy kurs React",
  "Zrobić portfolio",
  "Znaleźć pracę",
];

// NOTE: render tasks

const renderTasks = () => {
  tasks.forEach((task) => {
    const taskElement: HTMLLIElement = document.createElement("li");
    taskElement.innerText = task;
    tasksContainerElement.append(taskElement);
  });
};

// NOTE: add task

const taskInputElement: HTMLInputElement = document.querySelector("#name");
const buttonElement: HTMLButtonElement = document.querySelector("button");

const addTask = (task: string) => {
  tasks.push(task);
};

buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
  tasks = [];
  addTask(taskInputElement.value);
  renderTasks();
});

renderTasks();
