// // Khai báo mảng s gồm các chuỗi bất kỳ
// let s = [
//     "Doraemon",
//     "Dorami",
//     "Nobita",
//     "Shizuka",
//     "Jaien",
//     "Suneo",
//     "123456",
//     "55555"
// ]

// // Nhập vào chuỗi text bất kì
// let text = prompt("Nhập chuỗi text:");

// // Tìm chuỗi đầu tiên ngắn nhất trong mảng
// let shortest = s[0];

// for ( let i = 1; i < s.length; i++) {
//     if (s[i].length < shortest.length) {
//         shortest = s[i]
//     }
// }

// console.log(shortest);


// //Tìm những chuỗi trong mảng có chứa giá trị text

// let Text = "a";
// let result = [];

// for (let i = 0; i < s.length; i++) {
//     if (s[i].indexOf(Text) !== -1) {
//         result.push(s[i]);
//     }
// }
// console.log(result);

//Tạo mảng mới newS với 3 kí tự đầu tiên của mảng s

// let newS = [];

// for (let i = 1; i < s.length; i++) {
//     newS.push(s[i].substring(0, 3));
// }
// console.log(newS);


// // Thay bằng dấu '-'
 
// let joined = s.join("-");
// console.log(joined);







