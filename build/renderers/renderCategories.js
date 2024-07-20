export const renderCategories = (categories, categoryDisplayNames, categoryContainerElement) => {
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
