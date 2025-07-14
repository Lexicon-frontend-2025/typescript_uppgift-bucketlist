import { dreams } from "../variables.js";
const dreamList = document.querySelector(".dream-list");
const nameSpan = document.getElementById("user-name");
// få in namnet till headern
nameSpan.innerText = getNameFromLS();
function getNameFromLS() {
    let userString = localStorage.getItem("currentUser");
    if (userString) {
        return userString;
    }
    else {
        return "";
    }
}
dreams === null || dreams === void 0 ? void 0 : dreams.forEach(dream => {
    const listItem = document.createElement("li");
    listItem.dataset.id = dream.id.toString();
    listItem.className = "dream-list_item";
    listItem.innerHTML = `
        <input class="dream-check" type="checkbox" name="dream-check" id="dream-check-${dream.id}" ${dream.checked ? "checked" : null}>
        <label for="dream-check-${dream.id}">${dream.name}, <span class="dream-theme">${dream.theme}</span></label>
        <button type="button"><img src="../assets/images/trash_delete.png"></button>
    `;
    dreamList.appendChild(listItem);
});
//# sourceMappingURL=Dashboard.js.map