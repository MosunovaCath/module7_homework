/*
Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и
выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.
 */
const obj = {
  subject: "Series",
    name: "How I Met Your Mother",
    serias: 208
}
function  showChild(tempObj){
    for (let key in tempObj){
        console.log(key);
        console.log(tempObj[key])
        console.log('-----------')
    }
}
// const showChild = ( tempObj) =>{
//     for (let key in tempObj){
//         console.log(key);
//         console.log(tempObj[key])
//         console.log('-----------')
//     }
// }

showChild(obj)