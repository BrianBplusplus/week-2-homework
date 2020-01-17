class ShoppingCart {
  constructor() {
    this.cart = [];
  };

  getItems() {
    return this.cart;
  };

  addItem(itemName, quantity, price) { 
    const object = {
      name: itemName,
      quantity: quantity,
      pricePerUnit: price,
    };
    this.cart.push(object);
  };
  
  clear() {
    return this.cart = []
  }
};

const henk = new ShoppingCart;
henk.addItem('sandwich', 3, 2)
console.log(henk.getItems())

module.exports = ShoppingCart