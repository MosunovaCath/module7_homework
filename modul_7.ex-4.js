/*Задание 4.
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео.
Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку.
Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент).
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.
 */
function ElectricalDevice(name, power, model) {
  this.name = name;
  this.power = power;
  this.model = model;
  this.isTurnOn = false;
}
ElectricalDevice.prototype.turnOn = function () {
  console.log(this.name + " " + this.model + " turned on!");
  this.isTurnOn = true;
};
// // ElectricalDevice.prototype.turnOff = function () {
//     console.log(this.name + " " + this.model + " turned off!");
//     this.isTurnOn = false;
// };
ElectricalDevice.prototype.checkPower = function () {
  return this.isTurnOn ? this.power : 0;
};
const laptop = new ElectricalDevice("Laptop", 45, "Ipad");
const microwave = new ElectricalDevice("Microwave", 1000, "samsung");
const fridge = new ElectricalDevice("Fridge", 2000, "beko");

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

// if (result > 2100) {
//     console.log("Turn off any device");
//     refrigerator.turnOff();
// } else {
//     console.log("All is ok");
// }
// let newResult = calculateCommonPower([laptop, microwave, fridge]);
// console.log(newResult);
