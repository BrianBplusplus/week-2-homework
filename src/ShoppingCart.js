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
    return this.cart = [];
  };

  total() {
    return this.cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.pricePerUnit * currentItem.quantity;       
    }, 0);
  };
};

module.exports = ShoppingCart