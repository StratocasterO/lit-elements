import { LitElement, html, css } from "lit";
import "./poke-card.js";
 
class PokeList extends LitElement {
    static properties = {
        data: { type: Array }
    }
    
    constructor() {
        super();
        this.data = []
        this.getData("https://pokeapi.co/api/v2/pokemon")
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
        const response = await fetch(url);
        const data = await response.json();

        console.log(data.results);

        // TODO recorrer data.results haciendo "await fetch(url)" de la URL de cada Pokemon
        // TODO guardar en nuestro array (p.e. con array.push()) los datos que queremos de cada Pokemon
    }

    render() {
        return html`
        <div>
            ${this.data.map(character => html`<simpson-card .name="${character.Nombre}" .ocu="${character.Ocupacion}" .img='${character.Imagen}' .hist="${character.Historia}"></simpson-card>`)}
        </div>
        `
    }
}

customElements.define('poke-list', PokeList);