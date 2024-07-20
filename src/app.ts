import { Task } from "./interfaces/interfaces";
import { Categories } from "./types/types";
import { renderCategories } from "./renderers/renderCategories.js";
import { renderTasks } from "./renderers/renderTasks.js";

const categoryContainerElement: HTMLElement =
  document.querySelector(".categories");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addTaskButtonElement: HTMLButtonElement =
  document.querySelector("button");

const categories: Categories[] = ["ogolne", "kursy", "mentoring", "softskill"];

const categoryDisplayNames: { [key: string]: string } = {
  ogolne: "Ogólne",
  kursy: "Kursy",
  mentoring: "Mentoring",
  softskill: "Soft skill",
};

const tasks: Task[] = [
  { name: "Nauczyć się Typescript", category: "kursy", done: false },
  { name: "Nauczyć sie Next.js", category: "kursy", done: false },
  { name: "Zamknąć projekt Go IT", done: true },
  { name: "Kupić nową kamerę", done: false },
  { name: "Projekt foto stock", category: "mentoring", done: false },
  { name: "Zrobić CV", category: "softskill", done: false },
];

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
  renderTasks(tasks, taskContainerElement);
});

renderCategories(categories, categoryDisplayNames, categoryContainerElement);
renderTasks(tasks, taskContainerElement);
