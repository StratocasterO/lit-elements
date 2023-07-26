import { LitElement, html, css } from "lit";
import "./employee-card.js";

class EmployeeList extends LitElement {
    static properties = {
        employees: { type: Array },
        newEmployee: { type: Object },
        editedEmployee: { type: Object }
    }
    
    constructor() {
        super();
        if (JSON.parse(window.localStorage.getItem("employees"))) {
            this.employees = JSON.parse(window.localStorage.getItem("employees"))
        } else {
            this.employees = [
                {
                "name": "Camilo García",
                "years": 15,
                "photo": { 
                    "src": "./assets/avatar1.png", 
                    "alt": "senior employee"
                    },
                "profile": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "teach": true
                },
                {
                "name": "Edisson Rodríguez",
                "years": 2,
                "photo": { 
                    "src": "./assets/avatar2.png", 
                    "alt": "young employee"
                    },
                "profile": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "teach": false
                },
                {
                "name": "Oscar López",
                "years": 7,
                "photo": { 
                    "src": "./assets/avatar1.png", 
                    "alt": "senior employee"
                    },
                "profile": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
                "teach": true
                },
                {
                "name": "Sandra Gutiérrez",
                "years": 3,
                "photo": { 
                    "src": "./assets/avatar3.png", 
                    "alt": "senior employee"
                    },
                "profile": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "teach": false
                },
                {
                "name": "Omar Olmedo",
                "years": 15,
                "photo": { 
                    "src": "./assets/avatar2.png", 
                    "alt": "senior employee"
                    },
                "profile": "Profesor de programación: frontend, backend y data science.",
                "teach": true
                },
                {
                "name": "Maria Martínez",
                "years": 8,
                "photo": { 
                    "src": "./assets/avatar3.png", 
                    "alt": "senior employee"
                    },
                "profile": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit.",
                "teach": false
                }
            ]
        }
    }

    updated(changedProperties) {
        if (changedProperties.has("newEmployee") && this.newEmployee != null) {
            this.employees = [...this.employees, this.newEmployee];
            window.localStorage.setItem("employees", JSON.stringify(this.employees))
            console.log(this.newEmployee.name + " ha sido añadido");
        }
        if (changedProperties.has("editedEmployee") && this.editedEmployee.name != "") {
            this.employees = this.employees.map(employee => employee.name === this.editedEmployee.name ? this.editedEmployee : employee);
            window.localStorage.setItem("employees", JSON.stringify(this.employees))
            console.log(this.editedEmployee.name + " ha sido modificado");
        }
    }

    deleteEmployee(event) {
        this.employees = this.employees.filter(employee => employee.name !== event.detail.employee);
        window.localStorage.setItem("employees", JSON.stringify(this.employees))
        console.log(event.detail.employee + " ha sido eliminado");
    }

    editEmployee(event) {
        this.dispatchEvent(new CustomEvent("edit-employee", { detail: event.detail }))
    }

    render() {
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
                ${this.employees.map(employee => html`<employee-card name="${employee.name}" years="${employee.years}" .photo='${employee.photo}' .teach="${employee.teach}" .profile="${employee.profile}" @delete-employee="${this.deleteEmployee}" @edit-employee="${this.editEmployee}"></employee-card>`)}
            </div>
        </div>
 
        <p class="text-center"><small>(*) employees with red border can teach junior employees</small></p>
        `
    }
}

customElements.define('employee-list', EmployeeList);