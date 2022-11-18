const { faker } = require("@faker-js/faker");
faker.locale = "es";
const createFakeUser = () => {
  return {
    id:faker.datatype.uuid(),
    nombre:faker.name.firstName(),
    apellido:faker.name.lastName(),
    color:faker.color.human(),
    mi_gato:faker.image.cats()
  }
};
module.exports = {
  createFakeUser,
};
