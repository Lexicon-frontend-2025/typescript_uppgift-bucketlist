import { clearChildren } from "../utils/domHelpers.js";
import { getDreamsFromLocalStorage, getNameFromLocalStorage } from "../utils/storage.js";
const dreamListElement = document.querySelector(".dream-list");
const nameSpan = document.getElementById("user-name");
function createDreamListItem(dream) {
    const listItem = document.createElement("li");
    listItem.className = "dream-list_item";
    listItem.dataset.id = dream.id.toString();
    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "dream-check";
    checkbox.id = `dream-check-${dream.id}`;
    checkbox.checked = dream.checked;
    checkbox.addEventListener("click", () => updateDream(dream));
    // Label
    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.innerHTML = `${dream.name}, <span class="dream-theme">${dream.theme}</span>`;
    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerHTML = `<img src="../assets/images/trash_delete.png">`;
    deleteButton.addEventListener("click", () => deleteDream(dream));
    // Assemble
    listItem.append(checkbox, label, deleteButton);
    return listItem;
}
;
function renderDreams(dreams) {
    clearChildren(dreamListElement); // ta bort tidigare genererade drömmar
    dreams.forEach(dream => {
        const listItem = createDreamListItem(dream);
        dreamListElement.appendChild(listItem);
    });
}
;
document.addEventListener("DOMContentLoaded", () => {
    nameSpan.textContent = getNameFromLocalStorage();
    const dreams = getDreamsFromLocalStorage();
    renderDreams(dreams);
});
function deleteDream(dream) {
    console.log("Delete", dream);
    const dreams = getDreamsFromLocalStorage();
    const index = dreams.findIndex(d => d.id === dream.id);
    dreams.splice(index, 1);
    localStorage.setItem("dreams", JSON.stringify(dreams));
    renderDreams(dreams);
}
;
function updateDream(dream) {
    console.log("Update", dream);
    const dreams = getDreamsFromLocalStorage();
    const index = dreams.findIndex(d => d.id === dream.id);
    dreams[index].checked = !dreams[index].checked;
    localStorage.setItem("dreams", JSON.stringify(dreams));
    renderDreams(dreams);
}
;
//# sourceMappingURL=Dashboard.js.map