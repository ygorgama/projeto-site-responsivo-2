const form = document.getElementById("form");

function getName(event) {
  event.preventDefault();
  const input_name = document.getElementById("inputName").value;
  if (input_name.length > 2) {
    localStorage.setItem("textvalue", JSON.stringify(input_name));
    location.href = "./order-page.html";
  } else {
    alert("Name has less than 2 caracter");
  }
}

form.addEventListener("submit", getName);
