/* Задание 5.
Переписать консольное приложение из предыдущего юнита на классы.
 */

class ElectricalDevice {
  constructor(name, power, model) {
    this.name = name;
    this.power = power;
    this.model = model;
    this.isTurnOn = false;
  }
  turnOn() {
    console.log(this.name + " " + this.model + " turned on!");
    this.isTurnOn = true;
  }
  checkPower() {
    return this.isTurnOn ? this.power : 0;
  }
}

class Computer extends ElectricalDevice {}
class KitchenDevice extends ElectricalDevice {}

const laptop = new Computer("Laptop", 45, "Ipad");
const microwave = new KitchenDevice("Microwave", 1000, "Samsung");
const fridge = new KitchenDevice("Fridge", 2000, "Beko");

function calculateCommonPower(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum = sum + element.checkPower();
  });
  return sum;
}
laptop.turnOn();
microwave.turnOn();
fridge.turnOn();

let result = calculateCommonPower([laptop, microwave, fridge]);

console.log(result);
