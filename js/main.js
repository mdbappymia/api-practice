function loadData() {
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res) => res.json())
    .then((data) => showData(data));
}

const divContainer = document.getElementById("container");
console.log(divContainer);
function showData(foods) {
  //   console.log(foods.categories);
  const allFoods = foods.categories;
  for (food of allFoods) {
    console.log(food);
    const div = document.createElement("div");
    // div.classList.add("col-lg-4");
    div.className = "col-lg-4 mb-3";
    div.innerHTML = `<div class="card">
      <img src="${food.strCategoryThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title fw-bold">${food.strCategory}</h5>
        <p class="card-text" style="height:200px; overflow:scroll">${food.strCategoryDescription}</p>
        <a href="#" class="btn btn-primary">Order Now</a>
      </div>
    </div> `;
    divContainer.appendChild(div);
  }
}
