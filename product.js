(function () {

    //UI class to change user interface
    class ProductUI {

        constructor(templateElement, parentElement) {
            this.productImageSelector = ".js-product-image";
            this.productNameSelector = ".js-product-name";
            this.productCategorySelector = ".js-product-category";
            this.productDescriptionSelector = ".js-product-description";
            this.productPriceSelector = ".js-product-price";
            this.productButtonSelector = ".js-product-button";

            // clone the template to create a new DOM element
            this.node = templateElement.cloneNode(true);
            // and append the new DOM element to the end of the product list
            parentElement.appendChild(this.node);

            // using the selectors above, we store the elements in private variables
            this.productImageElement = this.node.querySelector(this.productImageSelector);
            this.productNameElement = this.node.querySelector(this.productNameSelector);
            this.productCategoryElement = this.node.querySelector(this.productCategorySelector);
            this.productDescriptionElement = this.node.querySelector(this.productDescriptionSelector);
            this.productPriceElement = this.node.querySelector(this.productPriceSelector);
            this.productButtonElement = this.node.querySelector(this.productButtonSelector);

            //add event listener
            this.productButtonElement.addEventListener("click", this.handleClick);

        }

        handleClick () {
            const productData = this.dataset;
            PubSub.publish("addToCart", productData);
        }

        // this is the API for our UI objects:
        // methods to change the UI by only changing the
        // content of the stored elements
        setProductImage (src) {
            this.productImageElement.src = src;
        }

        setProductName (name) {
            this.productNameElement.textContent = name;
        }

        setProductCategory (category) {
            this.productCategoryElement.textContent = category;
        }

        setProductDescription (description) {
            this.productDescriptionElement.textContent = description;
        }

        setProductPrice (price) {
            this.productPriceElement.textContent = price;
        }

        //methods to setu UI

        setUp (productInfo) {
            this.productImageElement.src = productInfo.image;
            this.productNameElement.textContent = productInfo.name;
            this.productCategoryElement.textContent = productInfo.category;
            this.productDescriptionElement.textContent = productInfo.description;
            this.productPriceElement.textContent = productInfo.price;

            //data for the event handler
            this.productButtonElement.dataset.name = productInfo.name;
            this.productButtonElement.dataset.price = productInfo.price;
        }
    };

    //tis way the other JS files can also use this class
    window.ProductUI = ProductUI;

    // Product class for gathering product related info

    class Product {

        constructor (productInfo) {
            this.name = productInfo.name;
            this.category = productInfo.category;
            this.description = productInfo.description;
            this.imageSrc = productInfo.imageSrc;
            this.price = productInfo.price;
        }

        getName () {
            return this.name;
        }

        getCategory () {
            return this.category;
        }

        getDescription () {
            return this.description;
        }

        getImage () {
            return this.imageSrc;
        }

        getPrice () {
            return `${this.price} EUR`;
        }

        getInfo () {
            return {
                name: this.name,
                category: this.category,
                description: `${this.name} is ${this.description}.`,
                image: this.imageSrc,
                price: `${this.price} EUR`
            };
        }
        
    };

    window.Product = Product;

})();