import { LitElement, html, css } from "lit";
import "./simpson-card.js";
 
class SimpsonsList extends LitElement {
    static properties = {
        data: { type: Array }
    }
    
    constructor() {
        super();
        this.data = []
        this.getData("https://apisimpsons.fly.dev/api/personajes?limit=10")
    }

    static styles = css`
        div {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 1em 0
        }
    `

    async getData(url) {
        let response = await fetch(url);
        let data = await response.json();
        this.data = data.docs;
        
        // fetch next pages
        while (data.hasNextPage) {
            response = await fetch(url + "&page=" + data.nextPage);
            data = await response.json();
            this.data = [...this.data, ...data.docs]
        }
    }

    render() {
        return html`
        <div>
            ${this.data.map(character => html`<simpson-card .name="${character.Nombre}" .ocu="${character.Ocupacion}" .img='${character.Imagen}' .hist="${character.Historia}"></simpson-card>`)}
        </div>
        `
    }
}

customElements.define('simpsons-list', SimpsonsList);