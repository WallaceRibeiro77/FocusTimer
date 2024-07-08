let darkMode = true;

let buttonMode = document.getElementById("toggle-mode");

buttonMode.addEventListener('click', (event) =>{
    document.documentElement.classList.toggle('light');

    const mode = darkMode ? 'light' : 'dark'

    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`

    darkMode = !darkMode
}
)