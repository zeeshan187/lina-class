let inputValue = document.getElementById("ingredient_input");
let ingredienrt_one = document.getElementById("ingredienrt_one");
let ingredienrt_two = document.getElementById("ingredienrt_two");
let ingredienrt_three = document.getElementById("ingredienrt_three");
let ingredienrt_four = document.getElementById("ingredienrt_four");
let ingredienrt_five = document.getElementById("ingredienrt_five");

function UpdateIngredient(event) {
  if (event) event.preventDefault();
    let first = 600 * inputValue.value;
    let second = 2 * inputValue.value;
    let third = 1 * inputValue.value;
    let fourth = 1 * inputValue.value;
    let ffith = 80 * inputValue.value;

    ingredienrt_one.textContent = `${first} g`;
    ingredienrt_two.textContent = `${second}`;
    ingredienrt_three.textContent = `${third} EL`;
    ingredienrt_four.textContent = `${fourth} `;
    ingredienrt_five.textContent = `${ffith} g`;
}

UpdateIngredient();
