const btnCreate = document.querySelector(".btn-main");
const headline = document.getElementById("headline");
const btnToggle = document.querySelector(".btn-toggle");
const btnRemove = document.querySelector(".btn-remove");


btnCreate.addEventListener('click', () => {
  const input = document.querySelector(".input-main");   
  const list = document.querySelector("ul");

  list.insertAdjacentHTML(
  'afterbegin',
   `<li>${input.value} </li>` 
  );
                                 
  input.value  = "";
  });
                          
btnToggle.addEventListener("click", () => {
const listContain = document.querySelector(".list-container");

if(listContain.style.display === "none") {
  btnToggle.textContent = "Hide List";
  listContain.removeAttribute("style");
}
else {
  btnToggle.textContent = "Show List";
  listContain.style.display = "none";
}
});

btnRemove.addEventListener("click", () => {
                       
const lastChild = document.querySelector('li:last-child');                   lastChild.remove();                                                      
});

