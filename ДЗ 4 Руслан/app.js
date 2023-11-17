// дз-1
// var arr = ["name", "John", "lastname", "Black", "age", "23"];
// var obj = {};
//
// for (var i = 0; i < arr.length; i += 2) {
//   var key = arr[i];
//   var value = arr[i + 1];
//   obj[key] = value;
// }
// console.log(obj);


// дз-2
// function average(...numbers) {
//     if (numbers.length === 0){
//         return 0
//     }
//     const sum = numbers.reduce((acc, curr) => acc + curr, 0)
//     return  sum / numbers.length
// }
// console.log( average(34,7,54,34,4533,5433,34356))

// дз-3
// function checkType(value) {
//   console.log(typeof value);
// }
// checkType(false);
// checkType('hello worldк!');
// checkType(54);

// дз-4
// var counterInput =
//     document.getElementById('counter')
// var minus =
//     document.getElementById('minus')
// var plus =
//     document.getElementById('plus')
//
// function minusCounter(){
//     var value = +counterInput.value
//     counterInput.value = value + 1
// }