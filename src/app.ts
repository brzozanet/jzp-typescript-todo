const taskContainerElement: HTMLElement = document.querySelector(".tasks");
console.log(taskContainerElement);

const addTaskInputElement: HTMLInputElement = document.querySelector("#name");
console.log(addTaskInputElement.value);

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
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerText = task;
    taskContainerElement.appendChild(taskElement);
  });
};

const addTask = (task: string) => {};

tasksRender();
