import { faker } from "@faker-js/faker";

// simulate fetching user data using Faker
export const getUsers = async () => {
  // generate an array of 10 users with structured data
  const data = Array.from({ length: 10 }).map(() => ({
    name: faker.internet.userName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
  }));
  return data;
};
