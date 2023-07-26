import { LitElement, html, css } from "lit";

class PruebaBootstrap extends LitElement {
    static properties = {
    }

    constructor() {
        super();
    }

    static styles = css`
    .page {
        max-width: 1024px;
        margin: auto;
        padding: 1.5em
    }
    .redbg {
        background-color: rgb(255, 183, 183);
    }
    .bluebg {
        background-color: rgb(187, 194, 255);
    }
    .greenbg {
        background-color: rgb(204, 255, 206);
    }
    .graybg {
        background-color: rgb(194, 194, 194);
    }
    `

    render() {
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

        <div class="page">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ut culpa eos illum, tempore, possimus iste in inventore quod architecto necessitatibus aliquam sunt velit ratione, vitae sint excepturi aperiam cum!</p>
        
            <ul>
                <li><a href="">Enlace num 1</a></li>
                <li><a href="">Enlace num 2</a></li>
                <li><a href="">Enlace num 3</a></li>
                <li><a href="">Enlace num 4</a></li>
                <li><a href="">Enlace num 5</a></li>
            </ul>
            
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta placeat perferendis natus ratione fuga asperiores deserunt laborum culpa earum quis ab dolorem ipsam reprehenderit nam unde fugiat mollitia architecto, exercitationem id. Ipsam sed obcaecati facilis magnam delectus consequatur harum, ex iure beatae recusandae eum placeat cum, saepe vero expedita tempore!</p>
            
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, repellendus eligendi ea accusantium culpa cumque?</p>
            
            <div class="p-4 row greybg">
                <div class="p-4 col redbg">Hola</div>
                <div class="p-4 col bluebg">Hola</div>
                <div class="p-4 col greenbg">Hola</div>
            </div>
            
            <div class="p-4 row greybg">
                <div class="p-4 col-2 offset-1 redbg">Hola</div>
                <div class="p-4 col-3 offset-2 bluebg">Hola</div>
                <div class="p-4 col-4 greenbg">Hola</div>
            </div>
            
            <div class="p-4 row greybg">
                <div class="p-4 col-6 col-sm-6 col-md-4 redbg">Hola</div>
                <div class="p-4 col-6 col-sm-3 col-md-4 bluebg">Hola</div>
                <div class="p-4 col-12 col-sm-3 col-md-4 greenbg">Hola</div>
            </div>
        </div>
        `
    }
}

customElements.define('prueba-bootstrap', PruebaBootstrap);

