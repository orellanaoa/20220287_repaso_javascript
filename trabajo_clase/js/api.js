let url = "https://dog.ceo/api/breeds/image/random";

const api = async () => {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    let contenido = document.getElementById('imagen');

    let imagen = document.createElement('img');

    imagen.src= resultado.message;
    contenido.appendChild(imagen);
    console.log(resultado);t   
}

api();
