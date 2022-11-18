//API reference en https://fakerjs.dev/api/

const { faker } = require("@faker-js/faker");
faker.locale = "es";

const fakeUser = {
  firstname: faker.name.firstName(),
  lastname: faker.name.firstName(),
  age: faker.datatype.number({ min: 18, max: 89 }),
  avatar: faker.image.avatar(),
};
console.log(fakeUser);
