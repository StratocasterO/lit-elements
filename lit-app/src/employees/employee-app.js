import { LitElement, html, css } from "lit";
import "./employee-header.js";
import "./employee-main.js";
import "./employee-footer.js";
import "../api/simpsons-list.js"

class EmployeeApp extends LitElement {
    static properties = {
    }
    
    constructor() {
        super();
    }

    static styles = css`
        :host {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            background-color: #ededed;
        }
    `

    render() {
        return html`
            <employee-header></employee-header>
            <employee-main></employee-main>
            <simpsons-list></simpsons-list>
            <employee-footer></employee-footer>
        `
    }
}

customElements.define('employee-app', EmployeeApp);