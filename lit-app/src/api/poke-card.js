import { LitElement, html, css } from "lit";

// TODO all card

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
            margin: .6em auto 0 auto;
            height: 200px;
        }
        h3, h4, p {
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
    
    // Definimos el comportamiento del componente cuando alguna propiedad cambia
    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            console.log(`Property ${propName} changed from ${oldValue} to ${this[propName]}`);
        });
    }
    
    // Definimos el HTML que se renderizará en nuestra aplicación
    render() {
        return html`
        <div>
            <h3>${this.name}</h3>
            <h4>${this.ocu}</h4>
            <p>${this.hist}</p>
            <img src="${this.img}" alt="Image of ${this.name}">
        </div>
        `
        }
    }
    
customElements.define('simpson-card', SimpsonCard);