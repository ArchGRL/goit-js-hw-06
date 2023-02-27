const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const galleryListEl = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.textContent = `${ingredient}`;
  ingredientItemEl.classList.add("item");
  galleryListEl.append(ingredientItemEl);
});
