import { Categories } from "../types/types";

export interface Task {
  name: string;
  category?: Categories;
  done: boolean;
}
