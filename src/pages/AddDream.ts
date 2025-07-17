import { Dream } from "../models/dreams.js";
import { getDreamsFromLocalStorage, getNameFromLocalStorage, saveDreamsToLocalStorage } from "../utils/storage.js";
import { themes } from "../variables.js";

const dreamForm = document.querySelector('form') as HTMLFormElement;
const dreamInput = document.getElementById('dream-name') as HTMLInputElement;
const dreamSelect = document.getElementById('dream-theme') as HTMLSelectElement;
const nameSpan = document.getElementById("user-name") as HTMLSpanElement;
const dreamErrorMessage = document.getElementById('dream-error-message') as HTMLParagraphElement;
const themeErrorMessage = document.getElementById('theme-error-message') as HTMLParagraphElement;

document.addEventListener("DOMContentLoaded", () => {
    nameSpan.textContent = getNameFromLocalStorage();
    renderThemeOptions();
    dreamForm.addEventListener('submit', handleAddDream);
});

function renderThemeOptions(): void {
    themes.forEach(theme => {
        const option = document.createElement('option');
        option.value = theme.value; // Det korta värdet
        option.textContent = theme.label; // Den användarvänliga texten
        dreamSelect.appendChild(option);
    });
};

function handleAddDream(event: Event): void {
    event.preventDefault();
    dreamErrorMessage.style.display = 'none';
    themeErrorMessage.style.display = 'none';
    // validera att namn och tema är valt
    const dreamDescription = dreamInput.value.trim();
    const dreamTheme = dreamSelect.value;

    let isValid = true;
    if (dreamDescription === '') {
        dreamErrorMessage.textContent = 'Vänligen ange en drömtitel.';
        dreamErrorMessage.style.display = 'block';
        isValid = false;
    }
    if (dreamTheme === '') { // Kontrollerar om standardvärdet "-- Välj ett tema --" valts
        themeErrorMessage.textContent = 'Vänligen välj ett tema för din dröm.';
        themeErrorMessage.style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        return; // Avbryt funktionen om validering misslyckas
    }

    // få in hur dröm-listan ser ut nu innan du lägger till
    const currentDreams = getDreamsFromLocalStorage();

    // Skapa ett unikt ID för den nya drömmen
    const newId = currentDreams.length > 0 ? Math.max(...currentDreams.map(d => d.id)) + 1 : 1;

    // spara det långa värdet istället för korta
    const theme = themes.filter(t => t.value === dreamTheme);
    
    // Skapa det nya drömobjektet
    const newDream: Dream = {
        id: newId,
        name: dreamDescription,
        theme: theme[0].label,
        checked: false
    };

    currentDreams.push(newDream);
    saveDreamsToLocalStorage(currentDreams);

    dreamInput.value = '';
    dreamSelect.value = '';
}