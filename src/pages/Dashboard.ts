import { dreams } from "../variables.js";
const dreamList = document.querySelector(".dream-list") as HTMLUListElement;
console.log(dreamList);

dreams?.forEach(dream => {
const listItem = document.createElement("li") as HTMLLIElement;
listItem.dataset.id = dream.id.toString();
listItem.className = "dream-list_item";
listItem.innerHTML = `
        <input class="dream-check" type="checkbox" name="dream-check" id="dream-check-${dream.id}" ${dream.checked ? "checked" : null}>
        <label for="dream-check-${dream.id}">${dream.name}, <span class="dream-theme">${dream.theme}</span></label>
        <button type="button"><img src="../assets/images/trash_delete.png"></button>
    `;
    dreamList.appendChild(listItem);
});