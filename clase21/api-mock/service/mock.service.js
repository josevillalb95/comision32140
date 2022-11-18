const { createFakeUser } = require("../utils/user.utils");
class MockService   {
    items
    constructor(){}
  getAll(qty = 10) {
    this.items = [];
    for (let i = 1; i <= qty; i++) {
      const newItem = createFakeUser();
      this.items.push(newItem);
    }
    return this.items;
  }
  save(_item) {
    const newUser = createFakeUser();
    this.items.push(newUser);
    return newUser;
  }
}

module.exports = MockService;
