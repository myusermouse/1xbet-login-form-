const inputs = document.querySelectorAll('.in');

const openEye = document.querySelector('.open-eye');
const closeEye = document.querySelector('.close-eye');

const passInput = document.getElementById('#pass');

function showpass() {
    openEye.classList.remove('pp');
    closeEye.classList.add('pp');
    
    if (passInput.Type = "Password") {
        passInput.Type = "text"
    } else {
        passInput.Type = "Password";
    }
}