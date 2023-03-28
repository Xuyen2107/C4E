//Bài 1: Dùng vòng lặp for, while để xuất ra các số chẵn từ 0 đến 100.

// for(let i = 0; i<=100; i++) {
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// let i = 0;
// while (i <= 100) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }



//Bài 2: Nhập vào 2 tham số a, b, in ra thông báo so sánh giữa 2 số.

// let a = Number(prompt("Nhập vào số a"));
// let b = Number(prompt("Nhập vào số b"));
// if (a > b) {
//     console.log("a lớn hơn b");
// } else {
//     console.log("a nhỏ hơn b");
// }



//Bài 3: Bài 3: Viết hàm nhập vào một số nguyên dương, in ra thông báo số đó là chẵn hay lẽ

// let n = Number(prompt("Nhập số nguyên: "));

// if (Number.isInteger(Number(n))) {
//     if (n < 0) {
//         console.log("Hãy nhập số nguyên dương");
//     } else {
//         if (n % 2 == 0) {
//             console.log("Đây là số chẵn")
//         } else {
//             console.log("Đây là số lẽ")
//         }
//     }
// } else {
//     console.log("Hãy nhập số nguyên")
// }




//Bài 4: Tính tổng các số nguyên dương từ 0 đến 100, xuất ra màn hình kết quả

// let sum = 0;
// for (let i = 0; i <= 100; i++){
//     sum += i;
// }
// console.log(sum);



// //Bài 5: Thực hiện xử lý, nhập vào một ngày, hiển thị thông báo tên thứ trong tuần
// // Khai báo đối tượng Date

// Bài này em tham khảo của anh, còn em vẫn chưa hiểu lắm ạ

// let date = new Date();
// let x = date.getDay();

// switch (x) {
//     case 0:
//         console.log("Hôm nay là Chủ Nhật");
//         break;
//     case 1:
//         console.log("Hôm nay là Thứ 2")
//         break;
//     case 2:
//         console.log("Hôm nay là Thứ 3")
//         break;
//     case 3:
//         console.log("Hôm nay là Thứ 4")
//         break;
//     case 4:
//         console.log("Hôm nay là Thứ 5")
//         break;
//     case 5:
//         console.log("Hôm nay là Thứ 6")
//         break;
//     case 6:
//         console.log("Hôm nay là Thứ 7")
//         break;
// }



//Bài 6: Nhập vào một giá trị bất kì, kiểm tra giá trị là số nguyên, số thập phân hay là chữ

// let input = prompt("Nhập giá trị: ");

// if (isNaN(input)) {
//     console.log("Giá trị nhập vào là chữ");
// } else if (Number.isInteger(Number(input))) {
//     console.log("Giá trị nhập vào là số nguyên");
// } else {
//     console.log("Giá trị nhập vào là số thập phân");
// }



//Bài 7: Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.

// let n = Number(prompt("Nhập số n:"));
// let row = "";

// if (n < 2) {
//     console.log("Vui lòng nhập số lớn hơn hoặc bằng 2")
// } else {
//     for (let i = 1; i <= n; i++) {
//         for (let j =1; j <= n; j++) {
//           row += "* ";
//         }
//         row += "\n";
//     }
//     console.log(row);
// }


//Bài 8: Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.

// let m = Number(prompt("Nhập chiều rộng m:"));
// let n = Number(prompt("Nhập chiều cao n:"));
// let row = "";

// if (m,n < 2 || m < n) {
//     console.log("m với n phải lớn hơn hoặc bằng 2 và m phải lớn hơn hoặc bằng n")
// }
// else {
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= m; j++) {
//             row += "* ";
//         }
//         row += "\n";
//     }
//     console.log(row);
// }



//Bài 9: Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.

// Bài này em chưa hiểu lắm ạ


// let n = parseInt(prompt("Nhập vào số n: "));

// if (n < 3) {
//     console.log("Vui lòng nhập số lớn hơn hoặc bằng 3")
// } else {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += "*  ";
//         }
//         for (let k = 1; k <= n - i; k++) {
//             row += " ";
//         }
//         console.log(row);
//     }
// }



//Bài 10: Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả:
// Nếu BMI < 18.5 → in ra “Nhẹ cân”
// Nếu 18.5 <= BMI < 23 → in ra “Bình thường” 
// Nếu 23 <= BMI < 25 → in ra “Thừa cân”
// Nếu BMI >= 25 → in ra “Béo phì”

// let w = Number(prompt("Nhập cân nặng (Kg):"));
// let h = Number(prompt("Nhập chiều cao (M):"));
// let BMI = w / (h * h);

// if (BMI < 18.5) {
//   console.log("Nhẹ cân");
// } else if (BMI>= 18.5 && BMI < 23) {
//   console.log("Bình thường");
// } else if (BMI >= 23 && BMI < 25) {
//   console.log("Thừa cân");
// } else {
//   console.log("Béo phì");
// }