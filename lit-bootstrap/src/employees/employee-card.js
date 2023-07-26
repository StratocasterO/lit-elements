import { LitElement, html, css } from "lit";

class EmployeeCard extends LitElement {
    static properties = {
        name: { type: String },
        years: { type: Number },
        photo: { type: Object },
        position: { type: String },
        profile: { type: String },
        teach: { type: Boolean }
    }
    
    constructor() {
        super();
        this.name = "default"
        this.years = 10
        this.photo = {
            src: "./assets/avatar1.png", // TODO randomizar imagen por defecto
            alt: "default employee photo"
        }
        this.profile = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nibh nec nisi tempor dignissim. Sed sed mi velit."
        this.teach = false
        this.updatePosition()
    }
    
    // Definimos el CSS que se aplicará a nuestro componente
    static styles = css`
        :host {
            margin-bottom: 1em
        }
        .teach {
            border: 2px solid red;
        }
    `
    
    // Definimos el comportamiento del componente cuando alguna propiedad cambia
    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            // show changed properties
            // console.log(`Property ${propName} changed from ${oldValue} to ${this[propName]}`); 
        });
        
        if (changedProperties.has("years")) this.updatePosition()
    }
    
    // Funciones que se ejecutan al cambiar el value de un input
    updateName(event) {
        this.name = event.target.value;
    }
    
    updateYears(event) {
        this.years = event.target.value;
    }

    updatePosition() {
        if (this.years > 10) this.position = "Lead";
        else if (this.years > 7) this.position = "Senior";
        else if (this.years > 2) this.position = "Team";
        else this.position = "Junior";
    }

    deleteEmployee() {
        this.dispatchEvent(new CustomEvent("delete-employee", {
            detail: {
                employee: this.name
            }
        }))
    }

    editEmployee() {
        this.dispatchEvent(new CustomEvent("edit-employee", {
            detail: {
                name: this.name,
                years: this.years,
                photo: {
                    src: this.photo.src,
                    alt: this.photo.alt
                },
                profile: this.profile,
                teach: this.teach
            }
        }))
    }
    
    // Definimos el HTML que se renderizará en nuestra aplicación
    render() {
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

        <div class="card h-100">
            <img class="card-img-top ${this.teach === true ? 'teach' : ''}" src="${this.photo.src}" alt="${this.photo.alt}">

            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text"><small>${this.profile}</small></p>
                <ul class="list-group mb-3">
                    <li class="list-group-item py-1 px-2"><b>${this.position}</b></li>
                    <li class="list-group-item py-1 px-2">${this.years} años en la empresa</li>
                </ul>

                <!-- TODO añadir funcionalidad editar empleado -->
                <button type="button" @click="${this.editEmployee}" class="mt-auto btn btn-primary btn-sm w-100">Edit employee</button>

                <button type="button" @click="${this.deleteEmployee}" class="btn btn-danger btn-sm mt-2 w-100">Delete employee</button>
            </div>
        </div>
        `
        }
    }
    
customElements.define('employee-card', EmployeeCard);