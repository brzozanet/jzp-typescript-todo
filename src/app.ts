// <li>
//   <label for="task-1">Zrobić todo listę w Typescript</label>
//   <input type="checkbox" id="task-1" name="Zrobić todo listę w Typescript" />
// </li>

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

console.log(taskNameInputElement.value);

const tasks: string[] = [
  "Zrobić todo listę w Typescript",
  "Znaleźć szablon strony portfolio",
  "Dokończyć kurs React na JZP",
  "Poprawić projekt GoIT Kapu$ta",
];

console.log(tasksContainerElement);
console.log(tasks);

const renderTasks = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement: HTMLLIElement = document.createElement("li");
    taskElement.innerText = task;
    tasksContainerElement.append(taskElement);
  });
};

const addTask = (task: string) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  addTask(taskNameInputElement.value);
  renderTasks();
});

renderTasks();
