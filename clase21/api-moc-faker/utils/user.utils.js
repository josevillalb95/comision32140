const { faker } = require("@faker-js/faker");
faker.locale = "es";

const createFakeUser = (id) => {
  return {
    id,
    nombre:faker.name.firstName(),
    apellido:faker.name.lastName(),
    color:faker.color.human(),
    mi_gato:faker.image.cats()
  }
};
module.exports = {
  createFakeUser,
};
