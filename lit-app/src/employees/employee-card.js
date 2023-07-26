import { LitElement, html, css } from "lit";

class EmployeeCard extends LitElement {
    static properties = {
        name: { type: String },
        years: { type: Number },
        photo: { type: Object },
        position: { type: String },
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
        this.teach = false
        this.updatePosition()
    }
    
    // Definimos el CSS que se aplicará a nuestro componente
    static styles = css`
        div {
            width: 200px;
            height: auto;
            border-radius: 10px;
            background-color: white;
            padding: 15px;
            margin: 1em;
            display: inline-block;
            box-shadow: 0px 0px 10px #888;
        }
        img {
            border-radius: 10px;
            margin-top: .6em;
            width: 200px;
        }
        label {
            font-size: .8em
        }
        input {
            margin-bottom: .6em;
            font-size: 1em
        }
        .teach {
            border: 2px solid red;
            width: 196px;
        }
    `
    
    // Definimos el comportamiento del componente cuando alguna propiedad cambia
    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            console.log(`Property ${propName} changed from ${oldValue} to ${this[propName]}`);
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
    
    // Definimos el HTML que se renderizará en nuestra aplicación
    render() {
        return html`
        <div>
            <label for="name">Nombre completo:</label>
            <input type="text" id="name" value="${this.name}" @change="${this.updateName}">
            
            <label for="years">Años en la empresa</label>
            <input type="number" id="years" value="${this.years}" @change="${this.updateYears}">
            
            <label for="position">Posición</label>
            <input type="text" id="position" value="${this.position}" disabled>
                        
            <img class="${this.teach === true ? 'teach' : ''}" src="${this.photo.src}" alt="${this.photo.alt}">
        </div>
        `
        // Renderizado condicional de CSS añadiendo una clase en función del valor de una propiedad. También se podría hacer renderizado condicional de un fragmento de HTML: ${this.teach === true ? html`<b>Junior coach</b>` : ''}
        }
    }
    
customElements.define('employee-card', EmployeeCard);