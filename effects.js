//Scripting for cursor effect
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX - 10;
    let y = e.clientY - 10;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";})
    

//Scripting for start game button
const startButton = document.getElementById('start_Button')
    if(startButton){
    startButton.addEventListener('click', function(e) {
        e.preventDefault();
        const button = this;
        const anchor = button.closest('a')
        button.classList.add('pulsing');

        button.addEventListener('animationend', function() {
        button.classList.remove('pulsing');
        window.location.href = anchor.href;}, { once: true });
    });
}

// Scripting for choice buttons
document.querySelectorAll('.choice').forEach(choice => {
  choice.addEventListener('click', function (e) {
    e.preventDefault();
    const value = this.dataset.value;
    console.log("You chose:", value);
    // now do something with "value"
  });
});