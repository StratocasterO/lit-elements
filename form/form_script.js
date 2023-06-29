function saludar() {
    event.preventDefault();

    let name = document.querySelector("#formNombre").value
    let email = document.querySelector("#formEmail").value
    let age = document.querySelector("#formAge").value
    let lat = document.querySelector("#formLat").value
    let long = document.querySelector("#formLong").value
    
    console.log(`Hola, ${name}, el teu email és ${email}, tens ${age} anys i et trobes a una latitud de ${lat} i una longitud de ${long}`);
}

function guardar() {
    event.preventDefault();
    
    let name = document.querySelector("#formNombre").value
    let email = document.querySelector("#formEmail").value
    let age = document.querySelector("#formAge").value
    let lat = document.querySelector("#formLat").value
    let long = document.querySelector("#formLong").value

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("age", age)

    let data = {
        name,
        email,
        age,
        location: [lat, long]
    }

    localStorage.setItem("userData", JSON.stringify(data))

    console.log(data);
}

function recuperar() {
    event.preventDefault();

    document.querySelector("#formNombre").value = localStorage.getItem("name")
    document.querySelector("#formEmail").value = localStorage.getItem("email")
    document.querySelector("#formAge").value = localStorage.getItem("age")

    console.log(JSON.parse(localStorage.getItem("userData")));
}

function comprobarNavegador() {
    let alert = document.querySelector("#formAlert")
    
    if(!navigator.geolocation) {
        alert.innerHTML = "⚠ La Geo-Localización HTML5 no está soportada en este navegador";
    } else {
        alert.style.display = "none"
    }
}

function getLocation() {
    event.preventDefault();

    navigator.geolocation.getCurrentPosition(updateLocation)
}

function updateLocation(position) {
    document.querySelector("#formLat").value = position.coords.latitude;
    document.querySelector("#formLong").value = position.coords.longitude;
}