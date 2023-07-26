import { LitElement, html, css } from "lit";

class BaseComponent extends LitElement {
    // Definimos las propiedades del componente
    static properties = {
        // Aquí las propiedades con formato "propiedad: { type: String }" (String, Number, Object, etc)
    }
    
    // Definimos el constructor para dar valores iniciales a las propiedades
    constructor() {
        super();
        // Aquí inicializamos las propiedades con formato "this.propiedad = valor inicial"
    }
    
    // Definimos el CSS que se aplicará a nuestro componente
    static styles = css`
        // Aquí nuestras reglas de CSS
    `

    // Definimos lo que pasa cuando una propiedad se actualiza
    updated(changedProperties) {
        // Aquí nuestro código
    }

    // Definimos el HTML que se renderizará en nuestra aplicación
    render() {
        return html`
        <!-- Your HTML code goes here -->
        `
    }
}

customElements.define('base-component', BaseComponent);