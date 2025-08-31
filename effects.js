const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX - 10;
    let y = e.clientY - 10;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";})
    


document.getElementById('start_Button').addEventListener('click', function() {
const button = this;
button.classList.add('pulsing');

button.addEventListener('animationend', function() {
    button.classList.remove('pulsing');}, { once: true });
});