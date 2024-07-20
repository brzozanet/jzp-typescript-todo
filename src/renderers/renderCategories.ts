import { Categories } from "../types/types";

export const renderCategories = (
  categories: Categories[],
  categoryDisplayNames: { [key: string]: string },
  categoryContainerElement: HTMLElement
) => {
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
