import { LitElement, html, css } from "lit";

class EmisorEvento extends LitElement {
    static styles = css`
    #emisor {
        background-color: rgb(187, 194, 255);
        padding: 20px;
        border-radius: 10px;
        margin: 20px;
        max-width: 400px;
        text-align: center;
        display: inline-block;
    }
    #input {
        width: 100%;
        margin-bottom: 20px;
    }
    `

    // función que emite el evento
    emitEvent(event) {
        console.log("Botón del emisor de eventos pulsado");

        let text = this.shadowRoot.querySelector('#input').value;

        // emitimos un evento customizado
        this.dispatchEvent(new CustomEvent('evento-custom', 
            {
                detail: {
                    message: text ? text : "este es el mensaje predeterminado del emisor de eventos 🔵",
                    time: new Date()
                }
            }
        ))
    }

    render() {
        return html`
            <div id="emisor">
                <h4>Esto es nuestro emisor de eventos</h4>

                <input id="input" type="text" placeholder="el texto de tu evento aquí"><br>
                <button @click="${this.emitEvent}">Pulsar para emitir un evento</button>
            </div>
        `
    }
}

customElements.define('emisor-evento', EmisorEvento);