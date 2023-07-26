import { LitElement, html, css } from "lit";

class EmployeeHeader extends LitElement {
    static properties = {
    }
    
    constructor() {
        super();
    }

    static styles = css`
        .cont {
            background-color: #d3d2ce;
            padding: 1em;
        }
        .header-container {
            display: flex;
            align-items: center;
            margin: auto;
            max-width: 1400px
        }
        img {
            height: 120px;
        }
        .title {
            flex-grow: 1;
            text-align: center;
        }
    `

    render() {
        return html`
        <div class="cont">
            <div class="header-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Rebel_Alliance_logo.svg/768px-Rebel_Alliance_logo.svg.png" alt="">
                <div class="title">
                    <h1>Directorio Skywalker Inc.</h1>
                    <h3>✨ All your Jedi and Sith in a single place ✨</h3>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('employee-header', EmployeeHeader);