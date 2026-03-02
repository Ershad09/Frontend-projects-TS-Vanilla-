
const input = document.querySelector<HTMLInputElement>(".input")!;
const button = document.querySelector<HTMLButtonElement>(".btn")!;
const list = document.querySelector<HTMLUListElement>(".list_con")!;


function addTodo() {

    const text = input.value.trim();

    if (text === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
      <img class="icon">
      <span>${text}</span>
      `;

    list.appendChild(li);

    input.value = "";
}


button.addEventListener("click", addTodo);


input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});



list.addEventListener("click", (e) => {

    const target = e.target as HTMLElement;
    const li = target.closest("li");

    if (!li) return;

    li.classList.toggle("checked");

});