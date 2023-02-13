//Structure module selects html tags and have the methods to modify the content of html elements:

class shopShelf {

   
    //store elements selected by classes
    //selected based on the node (html element)
    //to which the selected elements appended as child
    
    constructor (node) {
        this.node = node;
        this.productImageElement = this.node.querySelector(".js-product-image");
        this.productNameElement = this.node.querySelector(".js-product-name");
        this.productCategoryElement = this.node.querySelector(".js-product-category");
        this.productDescriptionElement = this.node.querySelector(".js-product-description");
        this.productPriceElement = this.node.querySelector(".js-product-price");            
    }

    setProductImage (src) {
        this.productImageElement.src = src;
    };

    setProductName (name) {
        this.productNameElement.textContent = name;
    };


    setProductCategory (category) {
        this.productCategoryElement.textContent = category;
    };

    setProductDescription (description) {
        this.productDescriptionElement.textContent = description;
    };

    setProductPrice (price) {
        this.productPriceElement.textContent = price;
    };
}; 


//Product objects which property values are the html element contents and methodes to return them:

class Product {

    constructor (productInfo) {
        
        this.img = productInfo.img;
        this.name = productInfo.name;
        this.category = productInfo.category;
        this.description = productInfo.description;
        this.price = productInfo.price;

    }

    getImage () {
        return this.img;
    }

    getName () {
        return this.name;
    }

    getCategory () {
        return this.category;
    }

    getDescription () {
        return `${this.name} is ${this.description}.`;
    }

    getPrice = function () {
        return `${this.price}EUR` ;
    }
        
};



const discgolfProduct = new Product ({
    img: "images/discatcher.jpg",
    name: "DisCatcher Target",
    category: "Discgolf",
    description: "a chain grid that catches fast and slow putts, heavy and light discs like no other target",
    price: 399
});

const shopShelf1 = new shopShelf (document.querySelector(".shop-shelf"));

shopShelf1.setProductImage(discgolfProduct.getImage());
shopShelf1.setProductName(discgolfProduct.getName());
shopShelf1.setProductCategory(discgolfProduct.getCategory());
shopShelf1.setProductDescription(discgolfProduct.getDescription());
shopShelf1.setProductPrice(discgolfProduct.getPrice());

