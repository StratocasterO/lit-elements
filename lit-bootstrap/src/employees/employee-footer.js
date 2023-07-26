import { LitElement, html, css } from "lit";

class EmployeeFooter extends LitElement {
    static properties = {
    }

    constructor() {
        super();
    }

    static styles = css`
        div {
            background-color: #d3d2ce;
            text-align: center;
            padding: 1em
        }
        h5 {
            text-align: center;
            margin: 1em;
        }
        a {
            padding: 0 20px;
            text-decoration: none;
            color: black
        }
    `

    render() {
        return html`
        <div>
            <div>
                <a href="#">About us</a>
                <a href="#">Contact</a>
                <a href="#">Terms and conditions</a>
                <a href="#">Legal</a>
            </div>
            <h5>© 2023 Lucas Films - Omar Olmedo Ferrer</h5>
        </div>
        `
    }
}

customElements.define('employee-footer', EmployeeFooter);