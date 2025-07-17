import { getNameFromLS } from "../utils/storage.js";
import { dreams, themes } from "../variables.js";

const dreamForm = document.getElementById('dream-form') as HTMLFormElement;
const dreamInput = document.getElementById('dream-input') as HTMLInputElement;
const dreamTheme = document.getElementById('dream-theme') as HTMLSelectElement;
const dreamSelect = document.getElementById('dream-theme') as HTMLSelectElement;
const nameSpan = document.getElementById("user-name") as HTMLSpanElement;

document.addEventListener("DOMContentLoaded", () => {
    nameSpan.textContent = getNameFromLS();
    renderThemeOptions();
});

function renderThemeOptions(): void {
    themes.forEach(theme => {
        const option = document.createElement('option');
        option.value = theme.value; // Det korta värdet
        option.textContent = theme.label; // Den användarvänliga texten
        dreamSelect.appendChild(option);
    });
};