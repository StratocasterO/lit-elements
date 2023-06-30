import { LitElement, html, css } from 'lit-element';

class FichaPersona extends LitElement {

  static properties = {
    name: { type: String },
    years: { type: Number },
    photo: { type: Object },
  }

  static styles = css`
    div {
      width: 200px;
      height: 300px;
      border-radius: 10px;
      background-color: white;
      padding: 15px;
      margin: 1em;
      display: inline-block
    }

    img {
      border-radius: 15px;
      margin-top: 1em;
    }
  `

  constructor() {
    super();

    this.name = "default name";
    this.years = 10;
    this.photo = {
      src: "./img/avatar1.png",
      alt: "short hair, purple tie person"
    }
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      console.log("Propiedad " + propName + " cambia valor, anterior era " + oldValue + ", nuevo es " + this[propName]);
    });

    // Si quiero mirar una propiedad concreta:
    // if (changedProperties.has("name")) {
    //   console.log("Propiedad name cambia valor anterior era " + changedProperties.get("name") + " nuevo es " + this.name);
    // }
  }

  updateName(event) {
    console.log("Name updated:");
    this.name = event.target.value;
  }

  render() {
    return html`
              <div>
                <label for="fname">Nombre Completo</label>
                <input type="text" id="fname" value=${this.name} @change="${this.updateName}"></input>
                <br />						
                <label for="years">Años en la empresa</label>
                <input type="number" id="years" value=${this.years}></input>
                <br />			
                <img src="${this.photo.src}" height="200" width="200" alt="${this.photo.alt}">
              </div>
	`;
  }
}

customElements.define('ficha-persona', FichaPersona)