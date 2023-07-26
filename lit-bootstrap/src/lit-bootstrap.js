import { LitElement, html } from 'lit';
import "./employees/employee-header"
import "./employees/employee-main"
import "./employees/employee-footer"

class LitBootstrap extends LitElement {
  static properties = {
  }

  constructor() {
    super();
  }

  render() {
    return html`

    <employee-header></employee-header>
    <employee-main></employee-main>
    <employee-footer></employee-footer> 
    `;
  }
}

customElements.define('lit-bootstrap', LitBootstrap);