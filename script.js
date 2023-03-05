(function() {

    // Product and ProductUI are stored on window / in global variables,
    // so we can use them here as well

    //create first product
    const DiscgolfProduct = new Product ({
        imageSrc: "images/discatcher.jpg",
        name: "DisCatcher Target",
        category: "Discgolf",
        description: "a chain grid that catches fast and slow putts, heavy and light discs like no other target",
        price: 399
    });

    //store the object values in a variable
    const productInfo = DiscgolfProduct.getInfo();

    //store the .js-product class html div in the UITemplate variable
    //UITemplate stores all the html nodes of a product (name, category, description, price)
    const UITemplate = document.querySelector(".js-product");
    //store the .js-product-list class html div in the ProductListElement variable
    //this is the div that contains the product details html nodes
    const ProductListElement = document.querySelector(".js-product-list");
    const shopUI = new ProductUI(UITemplate, ProductListElement);

    //in product.js getInfo() methodes returns
    shopUI.setUp(productInfo);

    const DiscgolfProduct2 = new Product({
        name: "Hero SuperAero",
        category: " Discgolf",
        description: "a disc that floats like a butterfly, holds up like a SuperHero",
        imageSrc: "images/dog.jpg",
        price: 14
      });
      
      const productInfo2 = DiscgolfProduct2.getInfo();
      const ShopUI2 = new ProductUI(UITemplate, ProductListElement);
      ShopUI2.setUp(productInfo2);
      
      // we no longer need the template, so we can clean it up now
      UITemplate.remove();
      
      // initialize cart
      const cartContainer = document.querySelector(".js-cart");
      const cartUI = new CartUI(cartContainer);
      const cart = new Cart();


})();