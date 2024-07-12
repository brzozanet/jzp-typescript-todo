const taskContainerElement: HTMLElement = document.querySelector(".tasks");
console.log(taskContainerElement);

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
console.log(taskNameInputElement.value);

const addTaskButtonElement: HTMLButtonElement =
  document.querySelector("button");
console.log(addTaskButtonElement);

const tasks: string[] = [
  "Nauczyć się Typescript",
  "Nauczyć sie Next.js",
  "Skończyć zaległy kurs React",
  "Zrobić portfolio",
  "Znaleźć pracę",
];

const tasksRender = () => {
  taskContainerElement.innerText = "";
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerText = task;
    taskContainerElement.appendChild(taskElement);
  });
};

const addTask = (task: string) => {
  tasks.push(task);
};

addTaskButtonElement.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  addTask(taskNameInputElement.value);
  tasksRender();
});

tasksRender();
