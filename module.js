//UI module selects html tags and have the methods to modify the content of html elements:

const UI = (() => {

    //private variables
    //store elements selected by classes

    const productImageElement = document.querySelector(".js-product-image");
    const productNameElement = document.querySelector(".js-product-name");
    const productCategoryElement = document.querySelector(".js-product-category");
    const productDescriptionElement = document.querySelector(".js-product-description");
    const productPriceElement = document.querySelector(".js-product-price");

    //methods to set the content of the html elements:

    return {

        setProductImage: (src) => {
            productImageElement.src = src;
        },

        setProductName: (name) => {
            productNameElement.textContent = name;
        },

        setProductCategory: (category) => {
            productCategoryElement.textContent = category;
        },

        setProductDescription: (description) => {
            productDescriptionElement.textContent = description;
        },

        setProductPrice: (price) => {
            productPriceElement.textContent = price;
        }

    }; 

    
})(); 

//Product objects which property values are the html element contents and methodes to return them:

const Product = (() => {

    //private variables:

    const img = "images/discatcher.jpg";
    const name = "DisCatcher Target";
    const category = "Discgolf";
    const description = "a chain grid that catches fast and slow putts, heavy and light discs like no other target";
    const price = 399;

    //public methodes, these are the arguments when calling the setProductX methodes:

    return {

        getImage: () => {
            return img;
        },

        getPrice: () => {
            return price;
        },

        getName: () => {
            return name;
        },

        getCategory: () => {
            return category;
        },

        getDescription: () => {
            return description;
        },

        getPrice: () => {
            return price;
        }
    }
})();

//call the setX e.g. setProductName() methodes of UI object, 
//the parameters are the methods of the Product object 
//that return the Product object values for the html elements content:

UI.setProductImage(Product.getImage());
UI.setProductName(Product.getName());
UI.setProductCategory(Product.getCategory());
UI.setProductDescription(Product.getDescription());
UI.setProductPrice(Product.getPrice());