const closeMessage = document.querySelector("#close-message"); // Acessando o DOM que irá pegar o id="close-message" da tag span.
const message = document.querySelector(".message"); // trazendo a class="message" via DOM com javascript.

closeMessage.addEventListener("click", () => {
    message.style.display = "none";
});

setTimeout(() => {
    message.style.display = "none";  //  setTimeout(() => {}, 5000); irá fazer a messagem desaparecer após 5s.
}, 5000);