import { Dream } from "../models/dreams.js";
import { dreams as defaultDreams } from "../variables.js";

const dreamListElement = document.querySelector(".dream-list") as HTMLUListElement;
const nameSpan = document.getElementById("user-name") as HTMLSpanElement;

function getNameFromLS(): string {
    return localStorage.getItem("currentUser") ?? "";
};

function getDreams(): Dream[] {
    const LSdreams = localStorage.getItem("dreams");
    return LSdreams ? JSON.parse(LSdreams) : defaultDreams;
};

function createDreamListItem(dream: Dream): HTMLLIElement {
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
};

function renderDreams(dreams: Dream[]) {
    dreamListElement.innerHTML = ""; // ta bort tidigare genererade drömmar
    dreams.forEach(dream => {
        const listItem = createDreamListItem(dream);
        dreamListElement.appendChild(listItem);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    nameSpan.textContent = getNameFromLS();
    const dreams = getDreams();
    renderDreams(dreams);
});

function deleteDream(dream: Dream): void {
    console.log("Delete", dream);
    const dreams = getDreams();
    const index = dreams.findIndex(d => d.id === dream.id);
    dreams.splice(index, 1);
    localStorage.setItem("dreams", JSON.stringify(dreams));
    renderDreams(dreams);
};

function updateDream(dream: Dream): void {
    console.log("Update", dream);
    const dreams = getDreams();
    const index = dreams.findIndex(d => d.id === dream.id);
    dreams[index].checked = !dreams[index].checked;
    localStorage.setItem("dreams", JSON.stringify(dreams));
    renderDreams(dreams);
};