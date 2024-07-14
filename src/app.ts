const taskContainerElement: HTMLElement = document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addTaskButtonElement: HTMLButtonElement =
  document.querySelector("button");

const tasks: {
  name: string;
  done: boolean;
}[] = [
  { name: "Nauczyć się Typescript", done: false },
  { name: "Nauczyć sie Next.js", done: false },
  { name: "Skończyć zaległy kurs Go IT", done: true },
  { name: "Zrobić portfolio", done: false },
  { name: "Znaleźć pracę", done: false },
];

// NOTE: Opcja 1 jest bardziej tradycyjna i może być preferowana ze względów bezpieczeństwa,
// ponieważ tworzy elementy DOM programowo, co minimalizuje ryzyko ataków typu Cross-Site Scripting (XSS),
// gdy dane pochodzą z niezaufanych źródeł. Pozwala na bardziej kontrolowane tworzenie elementów i atrybutów,
// ale jest bardziej rozwlekła i wymaga więcej kodu do osiągnięcia tego samego efektu.

// const tasksRender = () => {
//   taskContainerElement.innerText = "";
//   tasks.forEach((task, index) => {
//     const taskElement: HTMLElement = document.createElement("li");
//     const taskLabelElement: HTMLLabelElement = document.createElement("label");
//     const taskCheckboxElement: HTMLInputElement =
//       document.createElement("input");
//     const id: string = `task-${index}`;
//     taskLabelElement.setAttribute("for", id);
//     taskLabelElement.innerText = task.name;
//     taskCheckboxElement.type = "checkbox";
//     taskCheckboxElement.name = task.name;
//     taskCheckboxElement.checked = task.done;
//     taskCheckboxElement.setAttribute("id", id);
//     taskElement.append(taskLabelElement, taskCheckboxElement);
//     taskContainerElement.append(taskElement);
//   });
// };

// NOTE: Opcja 2 jest nowsza i bardziej zwięzła, ponieważ pozwala na bezpośrednie wstrzyknięcie HTML
// do elementu DOM za pomocą jednej instrukcji. Używa literałów szablonowych (template literals), co sprawia,
// że jest bardziej czytelna i pozwala na łatwe włączenie zmiennych do znaczników HTML.
// Jest to szczególnie przydatne przy budowaniu skomplikowanych struktur HTML.

const tasksRender = () => {
  taskContainerElement.innerText = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerHTML = `
      <label for=task-"${index}">${task.name}</label>
      <input type="checkbox" id="task-${index}" name="${task.name}" ${
      task.done ? "checked" : ""
    }>
    `;
    taskContainerElement.append(taskElement);

    const taskCheckboxElement: HTMLInputElement = document.querySelector(
      `#task-${index}`
    );
    taskCheckboxElement.addEventListener("change", () => {
      task.done = !task.done;
    });
  });
};

const addTask = (taskName: string) => {
  tasks.push({ name: taskName, done: false });
  console.log(tasks);
};

addTaskButtonElement.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  addTask(taskNameInputElement.value);
  tasksRender();
});

tasksRender();
