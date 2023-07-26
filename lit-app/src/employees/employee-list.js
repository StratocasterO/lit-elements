import { LitElement, html, css } from "lit";
import "./employee-card.js";

class EmployeeList extends LitElement {
    static properties = {
        employees: { type: Array }
    }
    
    constructor() {
        super();
        this.employees = [
            {
                name: "Camilo",
                years: 15,
                photo: { 
                    src: "./assets/avatar1.png", 
                    alt: "senior employee" 
                },
                teach: true
            },
            {
                name: "Edisson",
                years: 2,
                photo: { 
                    src: "./assets/avatar2.png", 
                    alt: "young employee" 
                },
                teach: false
            },
            {
                name: "Oscar",
                years: 7,
                photo: { 
                    src: "./assets/avatar1.png", 
                    alt: "senior employee" 
                },
                teach: true
            },
            {
                name: "Sandra",
                years: 3,
                photo: { 
                    src: "./assets/avatar3.png", 
                    alt: "senior employee" 
                },
                teach: false
            },
        ]
    }

    static styles = css`
        div {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 1em 0
        }
    `

    render() {
        return html`
        <div>
            ${this.employees.map(employee => html`<employee-card name="${employee.name}" years="${employee.years}" .photo='${employee.photo}' .teach="${employee.teach}"></employee-card>`)}
        </div>
        <small>(*) employees with red border can teach junior employees</small>
        `
        // Añadimos un punto (.) delante de los atributos "photo" y "teach" para indicar que son propiedades. También podríamos añadir el prefijo ? para indicar que es un atributo booleano
    }
}

customElements.define('employee-list', EmployeeList);