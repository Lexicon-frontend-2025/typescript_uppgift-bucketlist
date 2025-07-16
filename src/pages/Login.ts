// Hämta referenser till DOM-element
const loginForm = document.querySelector('form') as HTMLFormElement;
const usernameInput = document.getElementById('username') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const rememberCheckbox = document.getElementById('remember') as HTMLInputElement;

// Hämta referenser till felmeddelande-element (för validering)
const usernameErrorMessage = document.getElementById('username-error-message') as HTMLParagraphElement;
const passwordErrorMessage = document.getElementById('password-error-message') as HTMLParagraphElement;

// Hämta referens till lösenords-toggle-knappen
const togglePasswordButton = document.querySelector('.toggle-password') as HTMLButtonElement;

/**
 * Hanterar formulärsubmit för inloggning.
 * Hämtar inputdata och utför grundläggande validering.
 * @param event Submit-händelsen.
 */
function handleLoginSubmit(event: Event): void {
    event.preventDefault(); // Förhindra att formuläret laddar om sidan
    // Hämta värden från inputfälten
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    // Grundläggande validering
    let isValid = true;
    if (username === '') {
        usernameErrorMessage.textContent = 'Vänligen ange ditt användarnamn.';
        usernameErrorMessage.style.display = 'block';
        isValid = false;
    }
    if (password === '') {
        passwordErrorMessage.textContent = 'Vänligen ange ditt lösenord.';
        passwordErrorMessage.style.display = 'block';
        isValid = false;
    }
    if (password.length < 3) {
        passwordErrorMessage.textContent = 'Vänligen ange ett lösenord som är längre än 3 karaktärer.';
        passwordErrorMessage.style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        return; // Avbryt funktionen om validering misslyckas
    }

    localStorage.setItem('currentUser', username);

    // För denna övning omdirigerar vi direkt till dashboard.html
    window.location.href = 'dashboard.html';
}

/**
 * Växlar synligheten för lösenordsfältet.
 */
function togglePasswordVisibility(): void {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        // Du kan även ändra ikon så här
        togglePasswordButton.querySelector('img')!.src = '../assets/images/eye-on.png';
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.querySelector('img')!.src = '../assets/images/eye-off.png';
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
