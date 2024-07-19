const categoryContainerElement = document.querySelector(".categories");
const taskContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addTaskButtonElement = document.querySelector("button");
const categories = ["ogolne", "kursy", "mentoring", "softskill"];
const categoryDisplayNames = {
    ogolne: "Ogólne",
    kursy: "Kursy",
    mentoring: "Mentoring",
    softskill: "Soft skill",
};
const tasks = [
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
        const displayName = categoryDisplayNames[category] || category;
        categoryElement.innerHTML = `
      <input type="radio" id="${category}" name="category" value="${category}" />
      <label for="${category}">${displayName}</label>    
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
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        taskElement.innerHTML = `
      <label for=task-"${index}">${task.name}</label>
      <input type="checkbox" id="task-${index}" name="${task.name}" ${task.done ? "checked" : ""}>
    `;
        taskContainerElement.append(taskElement);
        const taskCheckboxElement = document.querySelector(`#task-${index}`);
        taskCheckboxElement.addEventListener("change", () => {
            task.done = !task.done;
        });
    });
};
const addTask = (task) => {
    tasks.push(task);
    console.log(tasks);
};
addTaskButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedRadioElement = document.querySelector("input[type='radio']:checked");
    console.log(selectedRadioElement.value);
    addTask({
        name: taskNameInputElement.value,
        category: selectedRadioElement.value,
        done: false,
    });
    renderTasks();
});
renderCategories();
renderTasks();
