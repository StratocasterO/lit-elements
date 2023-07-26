import { LitElement, html, css } from "lit";
import "./employee-list.js";

class EmployeeMain extends LitElement {
    static properties = {
    }

    constructor() {
        super();
    }

    static styles = css`
    div {
        max-width: 1024px;
        margin: auto;
        padding: 1.5em
    }
    `

    render() {
        return html`
        <div>
            <h4>Lista de empleados</h4>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, dolor dolore impedit blanditiis dolorum pariatur facilis quia earum sequi reprehenderit perferendis quidem, molestias ratione, ad iusto officiis modi? Recusandae, repudiandae!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia consectetur, autem minus quasi doloremque cum aperiam iste ratione nam! Laborum quod veniam hic iste nulla officia eum magni explicabo.</p>

            <employee-list></employee-list>
        </div>
        `
    }
}

customElements.define('employee-main', EmployeeMain);