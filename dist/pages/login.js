"use strict";
// src/pages/login.ts
// Hämta referenser till DOM-element
const loginForm = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('remember');
// Hämta referenser till felmeddelande-element (för validering)
const usernameErrorMessage = document.getElementById('username-error-message');
const passwordErrorMessage = document.getElementById('password-error-message');
// Hämta referens till lösenords-toggle-knappen
const togglePasswordButton = document.querySelector('.toggle-password');
/**
 * Hanterar formulärsubmit för inloggning.
 * Hämtar inputdata och utför grundläggande validering.
 * @param event Submit-händelsen.
 */
function handleLoginSubmit(event) {
    event.preventDefault(); // Förhindra att formuläret laddar om sidan
    // Återställ felmeddelanden och eventuella felklasser
    usernameErrorMessage.style.display = 'none';
    passwordErrorMessage.style.display = 'none';
    usernameInput.classList.remove('border-red-500'); // Antar Tailwind-klass för röd kantlinje
    passwordInput.classList.remove('border-red-500'); // Antar Tailwind-klass för röd kantlinje
    // Hämta värden från inputfälten
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const rememberMe = rememberCheckbox.checked; // För en checkbox är det .checked som gäller
    // Grundläggande validering
    let isValid = true;
    if (username === '') {
        usernameErrorMessage.textContent = 'Vänligen ange ditt användarnamn.';
        usernameErrorMessage.style.display = 'block';
        usernameInput.classList.add('border-red-500');
        isValid = false;
    }
    if (password === '') {
        passwordErrorMessage.textContent = 'Vänligen ange ditt lösenord.';
        passwordErrorMessage.style.display = 'block';
        passwordInput.classList.add('border-red-500');
        isValid = false;
    }
    if (!isValid) {
        return; // Avbryt funktionen om validering misslyckas
    }
    // Om valideringen lyckas:
    // Här kan du nu använda 'username', 'password' och 'rememberMe'
    // för att t.ex. skicka till en server, spara i localStorage, etc.
    console.log('Användarnamn:', username);
    console.log('Lösenord:', password); // OBS! Skicka aldrig lösenord i klartext i verkliga appar!
    console.log('Kom ihåg mig:', rememberMe);
    // Exempel: Spara användarnamn i localStorage (om "Kom ihåg mig" är ikryssad)
    if (rememberMe) {
        localStorage.setItem('currentUser', username);
    }
    else {
        localStorage.removeItem('currentUser'); // Ta bort om användaren avmarkerar
    }
    // I en riktig app skulle du här skicka inloggningsuppgifterna till en server
    // och sedan, vid framgångsrik inloggning, omdirigera användaren.
    // För denna övning omdirigerar vi direkt till dashboard.html
    window.location.href = 'dashboard.html';
}
/**
 * Växlar synligheten för lösenordsfältet.
 */
function togglePasswordVisibility() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        // Du kan även ändra ikon här
        // togglePasswordButton.querySelector('img').src = '../assets/images/eye-open-icon.png';
    }
    else {
        passwordInput.type = 'password';
        // togglePasswordButton.querySelector('img').src = '../assets/images/eye-closed-icon.png';
    }
}
// Lägg till händelselyssnare när DOM är laddad
document.addEventListener('DOMContentLoaded', () => {
    // Koppla submit-händelsen till vår funktion
    loginForm.addEventListener('submit', handleLoginSubmit);
    // Koppla klick-händelsen till lösenords-toggle-knappen
    if (togglePasswordButton) {
        togglePasswordButton.addEventListener('click', togglePasswordVisibility);
    }
});
//# sourceMappingURL=Login.js.map