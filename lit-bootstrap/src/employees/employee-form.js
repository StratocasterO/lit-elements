import { LitElement, html, css } from "lit";

class EmployeeForm extends LitElement {
    static properties = {
        display: { type: Boolean },
        employee: { type: Object },
        title: { type: String }
    }
    
    
    constructor() {
        super();
        this.display = false;
        this.title = "Add new employee";
    }

    static styles = css`
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            margin: 20px auto;
        }
        .form-group,
        .form-check  {
            margin-bottom: 20px;
        }
    `

    resetEmployee(){
        this.employee = { name: "",
                          years: 5,
                          profile: "",
                          teach: false,
                          photo: { src: "", alt: "" }
                        }
    }

    updated(changedProperties) {
        if (changedProperties.has('display')) {
            if (this.display) {
                this.shadowRoot.querySelector('.container').style.display = 'block';
                this.shadowRoot.querySelector('.container').scrollIntoView();
                if (this.mode == "add") {
                    this.resetEmployee();
                    this.title = "Add new employee"
                    this.shadowRoot.querySelector("form").reset();
                    this.shadowRoot.querySelector('#name').disabled = false;
                }
            } else {
                this.shadowRoot.querySelector('.container').style.display = 'none';
            }
        }
        
        if (changedProperties.has('employee') && this.employee.name != "") { 
            this.title = "Edit employee"
            this.shadowRoot.querySelector('.container').scrollIntoView();
            this.shadowRoot.querySelector('#name').disabled = true;
            this.shadowRoot.querySelector('#name').value = this.employee.name;
            this.shadowRoot.querySelector('#years').value = this.employee.years;
            this.shadowRoot.querySelector('#img').value = this.employee.photo.src;
            this.shadowRoot.querySelector('#alt').value = this.employee.photo.alt;
            this.shadowRoot.querySelector('#desc').value = this.employee.profile;
            this.shadowRoot.querySelector('#teach').checked = this.employee.teach;
        }
    }

    cancel(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('form-cancelled'));
    }

    saveEmployee(event) {
        event.preventDefault();

        // validate and dispatch an event with the new employee object, then reset form
        if (this.employee.name && this.employee.years && this.employee.photo.src && this.employee.photo.alt && this.employee.profile) {
            if (this.title == "Edit employee") {
                this.dispatchEvent(new CustomEvent('employee-edited', {
                    detail: this.employee
                }))
            } else {
                this.dispatchEvent(new CustomEvent('employee-added', {
                    detail: this.employee
                }))
            }
            this.shadowRoot.querySelector("form").reset();
        }
    }

    updateName(event) {
        this.employee.name = event.target.value;
    }

    updateYears(event) {    
        this.employee.years = event.target.value;
    }

    updateImg(event) {
        this.employee.photo.src = event.target.value;
    }

    updateAlt(event) {
        this.employee.photo.alt = event.target.value;
    }

    updateDesc(event) {
        this.employee.profile = event.target.value;
    }

    updateTeach(event) {
        this.employee.teach = event.target.checked;
    }

    render() {
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>


        <div class="container col-12 offset-md-3 col-md-6">
            <h4 class="text-center">${this.title}</h4>
            <form>
                <div class="form-group">
                    <label for="name">Employee name</label>
                    <input @input="${this.updateName}" type="text" class="form-control" id="name" placeholder="Employee full name">
                </div>
                <div class="form-group">
                    <label for="years">Years in the company</label>
                    <input @input="${this.updateYears}" type="number" class="form-control" id="years" value="5">
                </div>
                <div class="form-group">
                    <label for="img">Employee photo</label>
                    <input @input="${this.updateImg}" type="text" class="form-control" id="img" placeholder="URL to the employee photo">
                </div>
                <div class="form-group">
                    <label for="alt">Alternative text</label>
                    <input @input="${this.updateAlt}" type="text" class="form-control" id="alt" placeholder="Alternative text for the photo">
                </div>
                <div class="form-group">
                    <label for="desc">Description</label>
                    <textarea @input="${this.updateDesc}" class="form-control" id="desc" cols="30" rows="5" placeholder="Employee description"></textarea>
                </div>
                <div class="form-check">
                    <input @input="${this.updateTeach}" type="checkbox" class="form-check-input" id="teach">
                    <label class="form-check-label" for="teach">This employee can <b>teach</b> junior employees</label>
                </div>
                <button class="btn btn-primary w-100" @click="${this.saveEmployee}">Save employee</button>
                <button class="btn btn-danger w-100 mt-2" @click="${this.cancel}">Cancel</button>
            </form>
        </div>
        `
    }
}

customElements.define('employee-form', EmployeeForm);