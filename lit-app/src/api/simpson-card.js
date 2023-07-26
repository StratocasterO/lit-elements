import { LitElement, html, css } from "lit";

class SimpsonCard extends LitElement {
    static properties = {
        name: { type: String },
        ocu: { type: String },
        img: { type: String },
        hist: { type: String }
    }
    
    constructor() {
        super();
    }
    
    // Definimos el CSS que se aplicará a nuestro componente
    static styles = css`
        div {
            width: 220px;
            height: auto;
            border-radius: 10px;
            background-color: white;
            padding: 15px;
            margin: 1em;
            display: flex;
            flex-direction: column;
            box-shadow: 0px 0px 10px #888;
        }
        img {
            border-radius: 10px;
            margin: .6em auto 0 auto;
            max-height: 160px;
            width: 220px;
            object-fit: contain;
            align-self: center
        }
        h3 {
            text-align: center
        }
        h4, p {
            margin-top: 0
        }
        h4 {
            font-weight: normal;
            font-style: italic
        }
        p {
            font-size: .8em
        }
    `
    
    // Definimos el HTML que se renderizará en nuestra aplicación
    render() {
        return html`
        <div>
            <img src="${this.img}" alt="Image of ${this.name}">
            <h3>${this.name}</h3>
            <h4>${this.ocu}</h4>
            <p>${this.hist}</p>
        </div>
        `
        }
    }
    
customElements.define('simpson-card', SimpsonCard);