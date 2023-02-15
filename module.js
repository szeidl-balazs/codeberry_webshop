//shopShelf class selects html tags and have the methods to modify the content of html elements:

class shopShelf {


    //store elements selected by classes
    //selected based on the node (html element, a div with shop-shelf class)
    //to which the selected elements appended as child
    
    constructor (node) {
        this.node = node;
        this.productImageElement = this.node.querySelector(".js-product-image");
        this.productNameElement = this.node.querySelector(".js-product-name");
        this.productCategoryElement = this.node.querySelector(".js-product-category");
        this.productDescriptionElement = this.node.querySelector(".js-product-description");
        this.productPriceElement = this.node.querySelector(".js-product-price");            
    }

    //the methodes receives values from Product object through parameters
    //this parameters will be the content of the above selected html tags
    //and these methodes pass these parameters to those html tags
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

    appendTo (listElement) {
        listElement.appendChild(this.node);
    };
}; 


//Product objects template which property values are the html element contents and methodes to return them:

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

// instance of the product object with values
const discgolfProduct1 = new Product ({
    img: "images/discatcher.jpg",
    name: "DisCatcher Target",
    category: "Discgolf",
    description: "a chain grid that catches fast and slow putts, heavy and light discs like no other target",
    price: 399
});

//the div which is the parent of the html tags with the Product instance value content selected
const shopShelfParent = document.querySelector(".shop-shelf");

//and that selected div will be the instance of the shopShelf template object with the values of Product object instance
const shopShelf1 = new shopShelf(shopShelfParent);


//the values of the Product template instance are invoked by the shopShelf template instance:
shopShelf1.setProductImage(discgolfProduct1.getImage());
shopShelf1.setProductName(discgolfProduct1.getName());
shopShelf1.setProductCategory(discgolfProduct1.getCategory());
shopShelf1.setProductDescription(discgolfProduct1.getDescription());
shopShelf1.setProductPrice(discgolfProduct1.getPrice());

const discgolfProduct2 = new Product({
    name: "Hero SuperAero",
    category: " Discgolf",
    description: "a disc that floats like a butterfly, holds up like a SuperHero",
    img: "images/dog.jpg",
    price: 14
  });

  //The div with shop-shelf class has to be cloned to have a new div to include the new Product instance
  const shopShelfParent2 = shopShelfParent.cloneNode(true);
  const shopShelf2 = new shopShelf(shopShelfParent2);

  shopShelf2.setProductImage(discgolfProduct2.getImage());
  shopShelf2.setProductName(discgolfProduct2.getName());
  shopShelf2.setProductCategory(discgolfProduct2.getCategory());
  shopShelf2.setProductDescription(discgolfProduct2.getDescription());
  shopShelf2.setProductPrice(discgolfProduct2.getPrice());

  shopShelf2.appendTo(document.querySelector(".shop-rack"));

