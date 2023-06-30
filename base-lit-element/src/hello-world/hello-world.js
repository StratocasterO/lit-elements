import { LitElement, html, css } from 'lit-element';

class HelloWorld extends LitElement {
  static styles = css`
    div {
      width: 200px;
      height: 200px;
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
    <p>Hello world!</p>
    </div>
	`;
  }
}

customElements.define('hello-world', HelloWorld)