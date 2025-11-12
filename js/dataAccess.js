// array print system.
const array = [
  {
    id: 1,
    name: "mukta",
    address: "mirpur",
  },
];
console.log(array[0].name);

const library = {
  name: "city library",
  books: [
    {
      id: 1,
      title: "javaScript basic",
      price: 5000,
    },
    {
      id: 2,
      title: "python Essentials",
      price: 6000,
    },
  ],
};

console.log(library.books[1].price);

const school = {
  name: "green high school",
  students: [
    {
      id: 1,
      name: "samiha",
    },
    {
      id: 2,
      name: "kamal",
    },
  ],
};
console.log(school.students[0].name);

const shop = {
  items: [
    {
      name: "pen",
      stock: 100,
    },
    {
      name: "node-book",
      stock: 500,
    },
  ],
};
console.log(shop.items[1].name);
console.log(shop.items[1].stock);

const movie = {
  title: "inception",
  director: {
    name: "nolan",
    age: 50,
  },
  rating: 8.9,
};
console.log(movie.director.name);

const game = {
  name: "football",
  players: [
    {
      id: 1,
      name: "lionel messi",
    },
    {
      id: 2,
      name: "Gristiano ronaldo",
    },
  ],
};
console.log(game.players[0].name);

const vehicle = {
  type: "car",
  features: {
    color: "red",
    brand: {
      name: "Toyota",
      model: "corolla",
    },
  },
};
console.log(vehicle.features.brand.name);

// Nullish Coalescing

const value = 0;
const age = value ?? 18;
console.log(age);

let userValue = null;
let Name = userValue ?? "Anonymous";
console.log(Name);

const user = {
  name: "nasim",
  address: {},
  age: 20,
};
// const result = user?.address?.city ?? "City not available";
console.log(user.address.city ?? "city is not available");

// question solve

let x = null;
let y = x ?? 75;
console.log(y);

const product = {
  sunsilk: 5,
};
console.log(product.stock ?? 0);

const productDetails = {
  discount:false,
};
console.log(productDetails.discount ?? 10);

const vehicles = {
  engine: "748 r",
};
console.log(vehicles.engine ?? "g info missing");


// short cut short circuit


