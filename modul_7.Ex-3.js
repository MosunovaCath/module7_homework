/*
Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.
 */
function createObgWithoutProto() {
    return Object.create(null);
}
 const emptyObj = createObgWithoutProto();
 console.log(emptyObj);