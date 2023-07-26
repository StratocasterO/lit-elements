import { LitElement, html, css } from "lit";
import "./emisor-evento.js";
import "./receptor-evento.js";


class GestorEvento extends LitElement {    
    static styles = css`
        #gestor {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            margin: 20px auto;
            max-width: 1024px;
            text-align: center;
        }
    `

    // función que procesa el evento del emisor
    processEvent(event) {
        console.log("Recibido evento de emisor-evento");
        console.log(event);

        // le añade un atributo a nuestro receptor
        this.shadowRoot.querySelector("#receptor").mensaje = event.detail.message;
        this.shadowRoot.querySelector("#receptor").tiempo = event.detail.time;
    }

    render() {
        return html`
            <div id="gestor">
                <h3>Esto es nuestro gestor de eventos</h3>

                <emisor-evento @evento-custom="${this.processEvent}"></emisor-evento>
                <receptor-evento id="receptor"></receptor-evento>
            </div>
        `
    }
}

customElements.define('gestor-evento', GestorEvento);