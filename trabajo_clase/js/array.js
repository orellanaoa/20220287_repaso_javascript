const usuarios = [
    {
        name: "Wallows",
        imagen: "../img/wallows.jpg"
    },
    {
        name: "Avicii",
        imagen: "../img/avicii.jpg"
    },
    {
        name: "Caifanes",
        imagen: "../img/caifanes.jpg"
    },
    {
        name: "Danny Ocean",
        imagen: "../img/danny.jpg"
    },
    {
        name: "Gregory Alan Isakov",
        imagen: "../img/gregory.jpg"
    },
    {
        name: "Heroes del silencio",
        imagen: "../img/heroes.jpg"
    },
    {
        name: "Fito Paez",
        imagen: "../img/fito.jpg"
    },
    {
        name: "Gustavo Cerati",
        imagen: "../img/gustavo.jpg"
    },
    {
        name: "Mac de Marco",
        imagen: "../img/mac.jpg"
    },
    {
        name: "The lumineers",
        imagen: "../img/lumineers.jpg"
    },
];

const contenedor = document.getElementById('contenedorCards');

const cards = usuarios.map(user =>
    `<div class="card mt-2 mb-2 ms-2 text-bg-secondary p-3" style="width: 18rem;">
    <img src="${user.imagen}" class="card-img" alt="..." width="100px">
    <div class="card-body">
        <h6 class="card-text">${user.name}</h6>
    </div>
</div>

`
);


// Agregar los cards al contenedor
contenedor.innerHTML = cards.join('');