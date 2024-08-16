import { Categories } from "./../types/types.js";

export class TaskClass {
  name: string;
  category?: Categories;
  done: boolean;

  constructor(name: string, category: Categories, done: boolean) {
    this.name = name;
    this.category = category;
    this.done = done;
  }
}
