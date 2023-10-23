const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.getElementsByClassName("item");

console.log("Number of categories: " + categoryItems.length);

for (const categoryItem of categoryItems) {
  const categoryName = categoryItem.querySelector("h2").textContent;
  const categoryElements = categoryItem.querySelectorAll("li");

  console.log("Category: " + categoryName);
  console.log("Elements: " + categoryElements.length);
  console.log("");
}
