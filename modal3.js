// const user = {
//   name: "name",
//   cardName: "private",
//   balance: 2000,
//   getSum() {
//     console.log(this.balance);
//   },
//   addSum(sum) {
//     this.balance += sum;
//     user.getSum.call(this);
//   },
// };
// user.getSum();
// user.addSum(1000);
// const user2 = {
//   name: "Anna",
//   cardName: "private",
//   balance: 1500,
// };
// const user3 = {
//   name: "Mikki",
//   cardName: "private",
//   balance: 1500,
// };
// user.getSum.call(user2);
// user.addSum.call(user2, 1500);
// user.getSum.apply(user3);
// user.addSum.apply(user3, [1500]);
// const balanceBind = user.getSum.bind(user3);
// balanceBind;()
// const user = {
//   name: "Miki",
//   age: 30,
// };
// const admin = Object.create(user);
// console.log((admin.name = "anna"));
class User {
  #password;
  constructor(name, email, password) {
    (this.name = name), (this.email = email), (this.#password = password);
  }
  get password() {
    console.log(this.#password);
  }
  set password(newPassword) {
    if (newPassword.length > 7) {
      this.#password = newPassword;
      console.log(this.#password);
    } else {
      console.log("Довжина пароля має містити більше 7 символів");
    }
  }
}
// const user1 = new User("Miki", "miki@gmail.com", "qwerty123");
// console.log(user1);
// console.log(user1.name);
// // user1.password;
// // user1.password = "qaz";
// // user1.password = "qazqaz123";
// user1.password = "qas";
// console.log(user1);
class Human extends User {
  constructor(name, email, password, hp, demmage) {
    super(name, email, password);
    this.hp = hp;
    this.demmage = demmage;
  }
  arrowShot() {
    console.log(`Citikill = ${this.demmage * 0.6}`);
  }
}

// console.log(user1);
// user1.password = " qweqwe";
class Warior extends Human {
  constructor(name, email, password, hp, demmage, armor) {
    super(name, email, password, hp, demmage);
    this.armor = armor;
  }
  atack() {
    console.log(`Atack ${this.demmage}`);
  }
  block(demmage) {
    const value = Math.random();
    if (value > 0.5) {
      console.log("Attack block");
    } else {
      console.log(`Miss atack with ${demmage}`);
    }
  }
}

class Magic extends Human {
  constructor(name, email, password, hp, demmage, mana) {
    super(name, email, password, hp, demmage);
    this.mana = mana;
  }
  spell() {
    this.mana -= 20;
    console.log(`Atack with ${this.demmage}, cost 20 ${this.mana}`);
  }
}
const user1 = new Warior("Miki", "miki@gmail.com", "qwerty123", 1000, 250, 200);
console.log(user1);
user1.block(200);
user1.block(200);
user1.block(200);
user1.arrowShot();
user1.password = "9999999999";
console.log(user1);
