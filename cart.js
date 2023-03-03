(function () {


    //UI class for user interface
    class CartUI {    
        constructor (element) {
            this.container = element;

            PubSub.subscribe("updateCart", (products) => this.updateCart(products));
        }
    }

    _rowTemplate(productData) {
        return `<tr>
                    <td>${productData.name}</td>
                    <td class="has-text-right">${productData.price}</td>
                </tr>`;
    }

    _buildCartHTML(productList) {
        let cartContent = "";
        for (const product of productList) {
            cartContent += this._rowTemplate(product);
        }

        return cartContent;
    }

    updateCart(products) {
        this.container.innerHTML = this._buildCartHTML(products);
    }

    //other JS files can also use this class

    class Cart {
        constructor() {
            this.items = [];

            //subcribe to the addCart
            Pubsub.subscribe("addToCart", (item) => this.addItem(item));
        }
    }

    //API for Cart object
    // publish updated item list to updateCart topic
    // when cart content updates

    addItem(item) {
        this.items.push(item);
        PubSub.publish("updateCart", this.getItems());
    }

    getItems() {
        return this.items;
    }

    //other JS files can also use this class
    window.Cart = Cart;


})();