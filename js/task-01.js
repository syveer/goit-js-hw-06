const categoriesList = document.querySelectorAll("ul#categories > li.item");

let totalCategories = 0;
categoriesList.forEach((category) => {
  const categoryElements = category.querySelectorAll("ul li");
  console.log(`Elements: ${categoryElements.length}`);
  totalCategories += 1;
});

console.log(`Number of categories: ${categoryElements.length}`);
