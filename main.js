const loaderContainer = document.querySelector(".loader-container")
const mainButton = document.getElementById("main-button")

function showLoader() {
    loaderContainer.style.display = "flex"
}

function hideLoader() {
    loaderContainer.style.display = "none"
}

function makeAFakeRequest() {
    return new Promise((resolve) => {
        // Simula que una API está tardando X segundos en responder
        setTimeout(() => {
            resolve("termina llamada a API")
        }, 5000);
    })
}

async function getInfo() {
    showLoader();
    const res = await makeAFakeRequest();
    console.log(res);
    hideLoader();
}

mainButton.addEventListener("click", getInfo);

// function saludar(nombre) {
//     //
//     console.log(nombre)
//     //
// }

// // aqui se ejecuta esta funcion
// saludar('Fran')
