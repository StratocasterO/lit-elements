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

  render() {
    return html`
              <div>
                <label for="fname">Nombre Completo</label>
                <input type="text" id="fname" name="fname"></input>
                <br />						
                <label for="age">Años en la empresa</label>
                <input type="text" name="yearsInCompany"></input>
                <br />			
                <img src="./img/avatar1.png" height="200" width="200" alt="Foto persona">
              </div>
	`;
  }
}

customElements.define('ficha-persona', FichaPersona)