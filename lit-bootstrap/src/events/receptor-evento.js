import { LitElement, html, css } from "lit";

class ReceptorEvento extends LitElement {
    static properties = {
        mensaje: { type: String },
        tiempo: { type: String }
    }
    
    constructor() {
        super();
        this.mensaje = 'aun no he recibido nada';
        this.tiempo = '_';
    }
    
    // Definimos el CSS que se aplicará a nuestro componente
    static styles = css`
    #receptor {
        background-color: rgb(204, 255, 206);
        padding: 20px;
        border-radius: 10px;
        max-width: 400px;
        margin: 20px;
        text-align: center;
        display: inline-block;
    }
    p{
        margin: 0
    }
    .italic {
        font-style: italic;
    }
    `

    render() {
        return html`
            <div id="receptor">
                <h4>Esto es nuestro receptor de eventos</h4>
                <p>Este es el mensaje recibido del emisor: </p>
                <p class="italic">${this.mensaje}</p><br>
                <p>Recibido en:</p>
                <p class="italic">${this.tiempo}</p>
            </div>
        `
    }
}

customElements.define('receptor-evento', ReceptorEvento);