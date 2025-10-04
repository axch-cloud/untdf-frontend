import { LitElement, html, css } from 'lit';
import './ProductoItem.js';

class ProductosList extends LitElement {
    static properties = {
        apiUrl: { type: String, attribute: 'api-url' },
        apiToken: { type: String, attribute: 'api-token' },
        products: { type: Array, state: true },
        error: { type: Object, state: true },
        tagID: { type: Number, attribute: 'tag-id' },

    };

    constructor() {
        super();
        this.products = [];
        this.error = null;
        this.tagID = null;
    }

    connectedCallback() {
        super.connectedCallback();
        
        if (this.apiUrl && this.apiToken) {
            fetch(this.apiUrl, {
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Bearer ' + this.apiToken
                }
            })
            .then(res => res.json())
            .then(products => {
                this.products = products;
            })
            .catch(err => {
                this.error = err;
            });
        }
    }

    createRenderRoot() {
        return this;
    }

    render() {
        if (this.error) {
            return this.renderError(this.error);
        }

        return html`
            ${this.products.map(product => {
                if (product.tags == undefined) return;

                for (let i = 0; i < product.tags.length; i++) {
                    if (product.tags[i].id === this.tagID) {

                        // Multiplicamos product.price x 1000 y le quitamos los decimales
                        const price = Math.floor(product.price * 1000);
            
                        return html`
                                <producto-item
                                title="${product.title}"
                                picture="http://161.35.104.211:8000${product.pictures[0]}"
                                description="${product.description}"
                                price="${price}"
                                id="ficha.html?producto=${product.id}">
                            </producto-item>
        
                        `;

                        }
                }


            })}
        `;
    }

    renderError(error) {
        return html`
            <div class="text-red-600 font-semibold">Error loading product: ${error.message}</div>
        `;
    }
}

customElements.define('etiquetas-list', ProductosList);
