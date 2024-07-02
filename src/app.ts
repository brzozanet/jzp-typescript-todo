const tasksContainerElement: HTMLUListElement =
  document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");

interface Task {
  title: string;
  done: boolean;
}

// const tasks: string[] = [
//   "Nauczyć się Typescript",
//   "Nauczyć sie Next.js",
//   "Skończyć zaległy kurs React",
//   "Zrobić portfolio",
//   "Znaleźć pracę",
// ];

// const tasks: {
//   title: string;
//   done: boolean;
// }[] = [

const tasks: Task[] = [
  {
    title: "Skończyć kurs GO IT",
    done: true,
  },
  {
    title: "Nauczyć się Typescript",
    done: false,
  },
  {
    title: "Nauczyć sie Next.js",
    done: false,
  },
  {
    title: "Skończyć zaległy kurs React",
    done: false,
  },
  {
    title: "Zrobić portfolio",
    done: false,
  },
  {
    title: "Znaleźć pracę",
    done: false,
  },
];

// NOTE: Opcja 1 jest bardziej tradycyjna i może być preferowana ze względów bezpieczeństwa,
// ponieważ tworzy elementy DOM programowo, co minimalizuje ryzyko ataków typu Cross-Site Scripting (XSS),
// gdy dane pochodzą z niezaufanych źródeł. Pozwala na bardziej kontrolowane tworzenie elementów i atrybutów,
// ale jest bardziej rozwlekła i wymaga więcej kodu do osiągnięcia tego samego efektu.

// const renderTasks = () => {
//   tasksContainerElement.innerHTML = "";
//   tasks.forEach((task, index) => {
//     const taskElement: HTMLLIElement = document.createElement("li");
//     const labelElement: HTMLLabelElement = document.createElement("label");
//     const taskId: string = `task-${index}`;
//     const checkboxElement: HTMLInputElement = document.createElement("input");

//     labelElement.setAttribute("for", taskId);
//     labelElement.innerText = task.title;

//     checkboxElement.type = "checkbox";
//     checkboxElement.name = task.title;
//     checkboxElement.id = taskId;
//     checkboxElement.checked = task.done;

//     checkboxElement.addEventListener("change", () => {
//       task.done = !task.done;
//     });

//     taskElement.append(labelElement, checkboxElement);
//     tasksContainerElement.append(taskElement);
//   });
// };

// NOTE: Opcja 2 jest nowsza i bardziej zwięzła, ponieważ pozwala na bezpośrednie wstrzyknięcie HTML
// do elementu DOM za pomocą jednej instrukcji. Używa literałów szablonowych (template literals), co sprawia,
// że jest bardziej czytelna i pozwala na łatwe włączenie zmiennych do znaczników HTML.
// Jest to szczególnie przydatne przy budowaniu skomplikowanych struktur HTML.

const renderTasks = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLLIElement = document.createElement("li");
    const taskId: string = `task-${index}`;

    taskElement.innerHTML = `
      <label for="${taskId}">${task.title}</label>
      <input type="checkbox" id="${taskId}" name="${task.title}" ${
      task.done ? "checked" : ""
    } />
    `;

    tasksContainerElement.append(taskElement);

    const checkboxElement: HTMLInputElement = document.querySelector(
      `#${taskId}`
    );
    checkboxElement.addEventListener("change", () => {
      task.done = !task.done;
    });
  });
};

// const addTask = (task: { title: string; done: boolean }) => {
//   tasks.push(task);
// };

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({ title: taskNameInputElement.value, done: false });
  renderTasks();
});

renderTasks();
