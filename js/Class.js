class FoodOrder {
  constructor(customer, food, price) {
    this.customer = customer;
    this.food = food;
    this.price = price;
  }
}

const oder1 = new FoodOrder("nasim", "pizza", "1000");
console.log(oder1);

class Players {
  constructor(name, wickets, runs) {
    this.vendor = "ven";
    this.name = name;
    this.wickets = wickets;
    this.runs = runs;
  }
}
const plyer1 = new Players("sakib", 4, 100);
console.log(plyer1);

console.log(oder1 instanceof Players);

class Vehicle {
  constructor(brand, model, price) {
    this.model = model;
    this.brand = brand;
    this.price = price;
  }
}
const baik1 = new Vehicle("BMW", "X5", 20000);
console.log(baik1);
const baik2 = new Vehicle("Tesla", "Model-3", 40000);
console.log(baik2);
