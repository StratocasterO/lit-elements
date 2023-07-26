import { LitElement, html, css } from "lit";

class HelloWorld extends LitElement {
    static properties = {
        name: { type: String },
        surname: { type: String },
        age: { type: Number },
        img: { type: String }
    }

    constructor() {
        super();
        this.name = "Default_name";
        this.surname = "Default_surname";
        this.age = 99;
        this.img = "right"
    }
    
    static styles = css`
        .negrita {
            font-weight: bold;
        }

        .cursiva {
            font-style: italic;
        }

        img {
            height: 100px;
            margin: 0 0.5em;
            border-radius: 1em
        }
    `
    
    render() {
        return html`
        <h1>Hi, ${this.name} ${this.surname}! </h1>

        <p>This is the <span class="negrita">hello world</span> component.</p>

        <p>Tienes una edad de <span class="negrita">${this.age} años</span>. </p>

        <img style="float: ${this.img}" src="https://images.unsplash.com/photo-1593288942460-e321b92a6cde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80">

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span class="cursiva">Dicta ab quas reiciendis adipisci illo quia officiis commodi fugit</span>, fugiat officia, non asperiores voluptatem dolores cupiditate exercitationem, iste explicabo corrupti. Eveniet?</p>
        `
    }
}

customElements.define('hello-world', HelloWorld);