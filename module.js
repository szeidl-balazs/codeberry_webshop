//Structure module selects html tags and have the methods to modify the content of html elements:

const Structure = function () {

    //private variables
    //store elements selected by classes
    this.productImageElement = document.querySelector(".js-product-image");
    this.productNameElement = document.querySelector(".js-product-name");
    this.productCategoryElement = document.querySelector(".js-product-category");
    this.productDescriptionElement = document.querySelector(".js-product-description");
    this.productPriceElement = document.querySelector(".js-product-price");
    
}; 

Structure.prototype.setProductImage = function (src) {
    this.productImageElement.src = src;
};

Structure.prototype.setProductName = function (name) {
    this.productNameElement.textContent = name;
};

Structure.prototype.setProductCategory = function (category) {
    this.productCategoryElement.textContent = category;
};

Structure.prototype.setProductDescription = function (description) {
    this.productDescriptionElement.textContent = description;
};

Structure.prototype.setProductPrice = function (price) {
    this.productPriceElement.textContent = price;
};

//Product objects which property values are the html element contents and methodes to return them:

const Content = function () {

    //private variables:

    this.img = "images/discatcher.jpg";
    this.name = "DisCatcher Target";
    this.category = "Discgolf";
    this.description = "a chain grid that catches fast and slow putts, heavy and light discs like no other target";
    this.price = 399;
        
};

Content.prototype.getImage = function () {
    return this.img;
};

Content.prototype.getName = function () {
    return this.name;
};

Content.prototype.getCategory = function () {
    return this.category;
};

Content.prototype.getDescription = function () {
    return `${this.name} is ${this.description}.`;
},

Content.prototype.getPrice = function () {
    return `${this.price}EUR` ;
}

const DisCatcher = new Content();


const ShopStructure = new Structure();

// A html elemeket módosító setProductX metódusokat meg kell hívni
// a Product object értékeivel, amik akkor érvényesülnek, ha őket is meghívjuk a getX() metódusokkal.
ShopStructure.setProductImage(DisCatcher.getImage());
ShopStructure.setProductName(DisCatcher.getName());
ShopStructure.setProductCategory(DisCatcher.getCategory());
ShopStructure.setProductDescription(DisCatcher.getDescription());
ShopStructure.setProductPrice(DisCatcher.getPrice());