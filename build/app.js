import { renderCategories } from "./renderers/renderCategories.js";
import { renderTasks } from "./renderers/renderTasks.js";
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
    renderTasks(tasks, taskContainerElement);
});
renderCategories(categories, categoryDisplayNames, categoryContainerElement);
renderTasks(tasks, taskContainerElement);
