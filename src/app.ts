const categoryContainerElement: HTMLElement =
  document.querySelector(".categories");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addTaskButtonElement: HTMLButtonElement =
  document.querySelector("button");

type Categories = "ogolne" | "kursy" | "mentoring" | "softskill";

interface Task {
  name: string;
  category?: Categories;
  done: boolean;
}

const categories: Categories[] = ["ogolne", "kursy", "mentoring", "softskill"];

const tasks: Task[] = [
  { name: "Nauczyć się Typescript", category: "kursy", done: false },
  { name: "Nauczyć sie Next.js", category: "kursy", done: false },
  { name: "Zamknąć projekt Go IT", done: true },
  { name: "Kupić nową kamerę", done: false },
  { name: "Projekt foto stock", category: "mentoring", done: false },
  { name: "Zrobić CV", category: "softskill", done: false },
];

const renderCategories = () => {
  categories.forEach((category) => {
    const categoryElement = document.createElement("li");
    categoryElement.innerHTML = `
      <input type="radio" id="${category}" name="category" value="${category}" />
      <label for="${category}">${category}</label>    
    `;
    categoryContainerElement.append(categoryElement);
  });
};

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

const renderTasks = () => {
  taskContainerElement.innerText = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }
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

const addTask = (task: Task) => {
  tasks.push(task);
  console.log(tasks);
};

addTaskButtonElement.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  const selectedRadioElement: HTMLInputElement = document.querySelector(
    "input[type='radio']:checked"
  );

  console.log(selectedRadioElement.value);

  addTask({
    name: taskNameInputElement.value,
    category: selectedRadioElement.value as Categories,
    done: false,
  });
  renderTasks();
});

renderCategories();
renderTasks();
