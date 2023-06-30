import { LitElement, html, css } from 'lit-element';

class HelloWorld extends LitElement {
  static styles = css`
    div {
      width: 400px;
      height: 140px;
      background-color: white;
      border-radius: 10px;
      text-align: center;
      margin: 1em auto
    }

    p {
      padding: 4em 0;
    }
  `

  render() {
    return html`
		<div>
    <p>This is a directory of people from The Company™</p>
    </div>
	`;
  }
}

customElements.define('hello-world', HelloWorld)