const { createFakeUser } = require("../utils/user.utils");
class MockService   {
    items=[]
    constructor(){}
  getAll(qty = 10) {
    for (let i = 1; i <= qty; i++) {
      const newItem = createFakeUser(i);
      this.items.push(newItem);
    }
    return this.items;
  }
 
}

module.exports = MockService;
