import { LitElement, html, css } from "lit";
import "./employee-list.js";
import "../other/prueba-bootstrap.js"
import "../events/gestor-evento.js"
import "./employee-form.js"

class EmployeeMain extends LitElement {
    static properties = {
        displayForm: {type: Boolean},
        newEmployee: {type: Object},
        editedEmployee: {type: Object},
        finishedEmployee: {type: Object},
        mode: { type: String }
    }

    constructor() {
        super();
        this.displayForm = false
        this.editedEmployee = { name: "",
                          years: 5,
                          profile: "",
                          teach: false,
                          photo: { src: "", alt: "" }
                        }
        this.finishedEmployee = this.editedEmployee
    }
    
    static styles = css`
    .page {
        max-width: 1024px;
        margin: auto;
        padding: 1.5em
    }
    .redbg {
        background-color: rgb(255, 183, 183);
    }
    .bluebg {
        background-color: rgb(187, 194, 255);
    }
    .greenbg {
        background-color: rgb(204, 255, 206);
    }
    .graybg {
        background-color: rgb(194, 194, 194);
    }
    employee-form {

    }
    `

    addForm() {
        this.displayForm = true;
        this.mode = "add"
        this.shadowRoot.querySelector("#add").style.display = "none";
    }
    
    editForm(){
        this.displayForm = true;
        this.mode = "edit"
        this.shadowRoot.querySelector("#add").style.display = "none";
    }

    cancelForm() {
        this.displayForm = false;
        this.shadowRoot.querySelector("#add").style.display = "block";
    }
    
    employeeAdded(event) {
        this.newEmployee = event.detail;
        this.cancelForm();
    }
    
    employeeEdited(event) {
        this.editedEmployee = event.detail;
        this.editForm();
    }
    
    employeeEditionFinished(event) {
        this.finishedEmployee = event.detail;
        this.cancelForm();
    }

    render() {
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

            <!-- Descomentar estas líneas para ver el gestor de eventos y la prueba de Bootstrap
            <gestor-evento></gestor-evento>
            <prueba-bootstrap></prueba-bootstrap>
            -->

            <div class="container mt-4">
                <h4 class="text-center mb-4">Lista de empleados</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, dolor dolore impedit blanditiis dolorum pariatur facilis quia earum sequi reprehenderit perferendis quidem, molestias ratione, ad iusto officiis modi? Recusandae, repudiandae!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia consectetur, autem minus quasi doloremque cum aperiam iste ratione nam! Laborum quod veniam hic iste nulla officia eum magni explicabo.</p>
            </div>

            <div id="add" class="container  col-12 offset-md-3 col-md-6 mb-4 mt-4">
                <button class="btn btn-primary w-100" @click=${this.addForm}>Add employee</button>
            </div>

            <employee-form .mode="${this.mode}" .display="${this.displayForm}" .employee="${this.editedEmployee}" @employee-added="${this.employeeAdded}" @employee-edited="${this.employeeEditionFinished}" @form-cancelled="${this.cancelForm}"></employee-form>

            <employee-list .editedEmployee="${this.finishedEmployee}" .newEmployee="${this.newEmployee}" @edit-employee="${this.employeeEdited}"></employee-list>
        `
    }
}

customElements.define('employee-main', EmployeeMain);