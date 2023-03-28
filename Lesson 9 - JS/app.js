//Bài tập ngày 21/3/2023
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


// //Bài tập ngày 21/3/2023

// //Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ","

// let d1 = [1, 4, 7, 3, 10, -5];
// let d2 = [5, 3, 6, 8, 11, 14,];

// //Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
// let allValuesInD2 = d1.every(num => d2.includes(num));

// if (allValuesInD2) {
//   console.log("Tất cả các giá trị số trong d1 đều nằm trong d2");
// } else {
//   console.log("Có ít nhất một giá trị số trong d1 không nằm trong d2");
// }

// //Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// let sumD1 = d1.reduce((a, b) => a + b);
// let kiemTra = d2.some(num => num % sumD1 == 0);

// if (kiemTra) {
//   console.log("Có phần tử trong d2 chia hết cho tổng của các phần tử trong d1");
// } else {
//   console.log("Không có phần tử nào trong d2 chia hết cho tổng của các phần tử trong d1");
// }

// //Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
// let chia2InD1 = d1.filter(num => num % 2 == 0);
// let chia2InD2 = d2.filter(num => num % 2 == 0);

// let newArray = chia2InD1.concat(chia2InD2);

// console.log(newArray);

// //Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. 
// //Hãy tạo ra 1 dãy sốtheo thứ tự tăng dần bao gồm các số của d1 và d2 
// //(Sử dụng core của thuật toán Merge Sort).
    
// function merge(d1, d2) {
//     let res = [];
//     let i = 0;
//     let j = 0;
//     while (i < d1.length && j < d2.length) {
//         if (d1[i] <= d2[j]) {
//             res.push(d1[i]);
//             i++;
//         } else {
//             res.push(d2[j]);
//             j++;
//         }
//     }
//     res = res.concat(d1.slice(i), d2.slice(j));
//     return res;
// }
  
// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }
  

  
// let res = mergeSort([...d1, ...d2]);
// console.log(res);
  


//Bài tập ngày 26/3/2023

// //1. Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0).
// //Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0
// //đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình

// function inputNumber(label) {
//   let input = NaN;
//   do {
//     input = Number(prompt("Nhập vào số " + label + ": "));
//   } while (isNaN(input));

//   return input;
// }

// function giaiPhuongTrinhBacHai(a, b, c) {
  
//   let delta = b*b - 4*a*c;

//   if (delta < 0) {
//     return ["Phương trình vô nghiệm"]; //Phương trình vô nghiệm

//   } else if (delta === 0) {
//     let x = -b / (2*a);
//     return [x]; //Phương trình có nghiệm kép

//   } else {
//     let x1 = (-b + Math.sqrt(delta)) / (2*a);
//     let x2 = (-b - Math.sqrt(delta)) / (2*a);
//     return [x1, x2]; //Phương trình có 2 nghiệm phân biệt
//   }
// }

// let a = inputNumber('a');
// let b = inputNumber('b');
// let c = inputNumber('c');
// let nghiem = giaiPhuongTrinhBacHai(a, b, c);

// if (a === 0) {
//   console.log("Phương trình không hợp lệ do a = 0");
// } else {
//   console.log(nghiem);
// }



//2. Khai báo 1 function với đầu vào là 3 số a, b, c. 
//Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không. 
//Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.

// function inputNumber(label) {
//   let input = NaN;
//   do {
//     input = Number(prompt("Nhập vào số " + label + ": "));
//   } while (isNaN(input));
  
//   return input;
// }

// function kiemTra(a, b, c) {
//   if (a + b > c && a + c > b && b + c > a) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let a = inputNumber('a');
// let b = inputNumber('b');
// let c = inputNumber('c');
// let ketQua = kiemTra(a, b, c);
// console.log(ketQua);


// //3. Khai báo 1 function với đầu vào là day, month, year. 
// //Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.

// function inputDate(label) {
//   let input = NaN;
//   do {
//     input = Number(prompt("Nhập vào số " + label + ": "));
//   } while (isNaN(input));
    
//   return input;
// }
  

// function valueDate (day, month, year) {
//   let date = new Date(year, month - 1, day);
//   return (
//     date.getFullYear() === year &&
//     date.getMonth() === month - 1 &&
//     date.getDate() === day
//   );
// }

// let day = inputDate('day');
// let month = inputDate('month');
// let year = inputDate('year');
// let ketQua = valueDate(day, month, year);
// console.log(ketQua);


//4. Cho bộ dữ liệu về users như sau:


// let users = [
//   {
//       "id": 1,
//       "first_name": "Kenton",
//       "last_name": "Samples",
//       "email": "ksamples0@washingtonpost.com",
//       "gender": "Male",
//       "age": 35,
//       "job": "Worker",
//       "country": "UK",
//       "is_married": false
//   }, {
//       "id": 2,
//       "first_name": "Marc",
//       "last_name": "Jurries",
//       "email": "mjurries1@flavors.me",
//       "gender": "Female",
//       "age": 54,
//       "job": "Teacher",
//       "country": "Vietnam",
//       "is_married": false
//   }, {
//       "id": 3,
//       "first_name": "Bruis",
//       "last_name": "McBeath",
//       "email": "bmcbeath2@cam.ac.uk",
//       "gender": "Female",
//       "age": 59,
//       "job": "Developer",
//       "country": "UK",
//       "is_married": false
//   }, {
//       "id": 4,
//       "first_name": "Kennett",
//       "last_name": "Lammert",
//       "email": "klammert3@sun.com",
//       "gender": "Female",
//       "age": 22,
//       "job": "Dentist",
//       "country": "Vietnam",
//       "is_married": false
//   }, {
//       "id": 5,
//       "first_name": "Feodora",
//       "last_name": "Clemot",
//       "email": "fclemot4@craigslist.org",
//       "gender": "Female",
//       "age": 46,
//       "job": "Dentist",
//       "country": "Vietnam",
//       "is_married": false
//   }, {
//       "id": 6,
//       "first_name": "Betta",
//       "last_name": "Bittlestone",
//       "email": "bbittlestone5@digg.com",
//       "gender": "Female",
//       "age": 15,
//       "job": "Project Manager",
//       "country": "Russia",
//       "is_married": false
//   }, {
//       "id": 7,
//       "first_name": "Tedda",
//       "last_name": "Surfleet",
//       "email": "tsurfleet6@shutterfly.com",
//       "gender": "Male",
//       "age": 19,
//       "job": "Farmer",
//       "country": "US",
//       "is_married": true
//   }, {
//       "id": 8,
//       "first_name": "Alva",
//       "last_name": "Cathcart",
//       "email": "acathcart7@twitter.com",
//       "gender": "Female",
//       "age": 28,
//       "job": "Developer",
//       "country": "Vietnam",
//       "is_married": true
//   }, {
//       "id": 9,
//       "first_name": "Francesca",
//       "last_name": "Sprionghall",
//       "email": "fsprionghall8@tumblr.com",
//       "gender": "Female",
//       "age": 32,
//       "job": "Farmer",
//       "country": "Vietnam",
//       "is_married": false
//   }, {
//       "id": 10,
//       "first_name": "Stanfield",
//       "last_name": "Huc",
//       "email": "shuc9@amazon.co.jp",
//       "gender": "Genderfluid",
//       "age": 60,
//       "job": "Doctor",
//       "country": "US",
//       "is_married": false
//   }, {
//       "id": 11,
//       "first_name": "Drugi",
//       "last_name": "Hatliff",
//       "email": "dhatliffa@php.net",
//       "gender": "Female",
//       "age": 42,
//       "job": "Project Manager",
//       "country": "Vietnam",
//       "is_married": false
//   }, {
//       "id": 12,
//       "first_name": "Farica",
//       "last_name": "Rutley",
//       "email": "frutleyb@moonfruit.com",
//       "gender": "Female",
//       "age": 28,
//       "job": "Developer",
//       "country": "Vietnam",
//       "is_married": false
//   }, {
//       "id": 13,
//       "first_name": "Ania",
//       "last_name": "Perllman",
//       "email": "aperllmanc@virginia.edu",
//       "gender": "Female",
//       "age": 57,
//       "job": "Project Manager",
//       "country": "UK",
//       "is_married": false
//   }, {
//       "id": 14,
//       "first_name": "Dallas",
//       "last_name": "Hans",
//       "email": "dhansd@photobucket.com",
//       "gender": "Female",
//       "age": 53,
//       "job": "Farmer",
//       "country": "UK",
//       "is_married": true
//   }, {
//       "id": 15,
//       "first_name": "Lissie",
//       "last_name": "Lebreton",
//       "email": "llebretone@fc2.com",
//       "gender": "Female",
//       "age": 36,
//       "job": "Developer",
//       "country": "UK",
//       "is_married": false
//   }, {
//       "id": 16,
//       "first_name": "Casandra",
//       "last_name": "World",
//       "email": "cworldf@columbia.edu",
//       "gender": "Female",
//       "age": 19,
//       "job": "Worker",
//       "country": "US",
//       "is_married": true
//   }, {
//       "id": 17,
//       "first_name": "Alane",
//       "last_name": "O'Kelly",
//       "email": "aokellyg@deliciousdays.com",
//       "gender": "Polygender",
//       "age": 48,
//       "job": "Farmer",
//       "country": "Russia",
//       "is_married": false
//   }, {
//       "id": 18,
//       "first_name": "Ethan",
//       "last_name": "Revill",
//       "email": "erevillh@photobucket.com",
//       "gender": "Female",
//       "age": 15,
//       "job": "Teacher",
//       "country": "Russia",
//       "is_married": false
//   }, {
//       "id": 19,
//       "first_name": "Kellina",
//       "last_name": "Kleinmintz",
//       "email": "kkleinmintzi@chron.com",
//       "gender": "Female",
//       "age": 34,
//       "job": "Developer",
//       "country": "US",
//       "is_married": false
//   }, {
//       "id": 20,
//       "first_name": "Reagan",
//       "last_name": "Bamlett",
//       "email": "rbamlettj@timesonline.co.uk",
//       "gender": "Female",
//       "age": 32,
//       "job": "Project Manager",
//       "country": "US",
//       "is_married": false
//   }, {
//       "id": 21,
//       "first_name": "Sena",
//       "last_name": "Teck",
//       "email": "steckk@omniture.com",
//       "gender": "Male",
//       "age": 31,
//       "job": "Farmer",
//       "country": "US",
//       "is_married": false
//   }, {
//       "id": 22,
//       "first_name": "Ugo",
//       "last_name": "Knivett",
//       "email": "uknivettl@typepad.com",
//       "gender": "Male",
//       "age": 44,
//       "job": "Developer",
//       "country": "Japan",
//       "is_married": false
//   }, {
//       "id": 23,
//       "first_name": "Lenora",
//       "last_name": "Trower",
//       "email": "ltrowerm@latimes.com",
//       "gender": "Female",
//       "age": 26,
//       "job": "Doctor",
//       "country": "Vietnam",
//       "is_married": true
//   }, {
//       "id": 24,
//       "first_name": "Nickola",
//       "last_name": "Di Boldi",
//       "email": "ndiboldin@devhub.com",
//       "gender": "Male",
//       "age": 44,
//       "job": "Teacher",
//       "country": "US",
//       "is_married": false
//   }, {
//       "id": 25,
//       "first_name": "Melissa",
//       "last_name": "Davenhall",
//       "email": "mdavenhallo@google.co.jp",
//       "gender": "Female",
//       "age": 19,
//       "job": "Teacher",
//       "country": "Russia",
//       "is_married": true
//   }, {
//       "id": 26,
//       "first_name": "Daron",
//       "last_name": "Nias",
//       "email": "dniasp@flavors.me",
//       "gender": "Female",
//       "age": 16,
//       "job": "Developer",
//       "country": "Japan",
//       "is_married": false
//   }, {
//       "id": 27,
//       "first_name": "Osbert",
//       "last_name": "Bevens",
//       "email": "obevensq@github.com",
//       "gender": "Female",
//       "age": 43,
//       "job": "Developer",
//       "country": "Russia",
//       "is_married": false
//   }, {
//       "id": 28,
//       "first_name": "Nicolle",
//       "last_name": "Tanby",
//       "email": "ntanbyr@rediff.com",
//       "gender": "Female",
//       "age": 23,
//       "job": "Farmer",
//       "country": "US",
//       "is_married": false
//   }, {
//       "id": 29,
//       "first_name": "Kiley",
//       "last_name": "Le - Count",
//       "email": "klecounts@aboutads.info",
//       "gender": "Female",
//       "age": 24,
//       "job": "Developer",
//       "country": "Vietnam",
//       "is_married": true
//   }, {
//       "id": 30,
//       "first_name": "Wynnie",
//       "last_name": "Damper",
//       "email": "wdampert@springer.com",
//       "gender": "Non-binary",
//       "age": 47,
//       "job": "Teacher",
//       "country": "Japan",
//       "is_married": false
//   }, {
//       "id": 31,
//       "first_name": "Raimund",
//       "last_name": "Cobbledick",
//       "email": "rcobbledicku@surveymonkey.com",
//       "gender": "Male",
//       "age": 31,
//       "job": "Teacher",
//       "country": "US",
//       "is_married": false
//   }, {
//       "id": 32,
//       "first_name": "Shaylyn",
//       "last_name": "Chadderton",
//       "email": "schaddertonv@amazon.co.jp",
//       "gender": "Female",
//       "age": 28,
//       "job": "Doctor",
//       "country": "Russia",
//       "is_married": false
//   }, {
//       "id": 33,
//       "first_name": "Hilary",
//       "last_name": "Moine",
//       "email": "hmoinew@nasa.gov",
//       "gender": "Male",
//       "age": 21,
//       "job": "Farmer",
//       "country": "Japan",
//       "is_married": true
//   }, {
//       "id": 34,
//       "first_name": "Fleming",
//       "last_name": "Fredi",
//       "email": "ffredix@berkeley.edu",
//       "gender": "Male",
//       "age": 26,
//       "job": "Teacher",
//       "country": "Vietnam",
//       "is_married": false
//   }, {
//       "id": 35,
//       "first_name": "Cherye",
//       "last_name": "Huckerby",
//       "email": "chuckerbyy@dmoz.org",
//       "gender": "Male",
//       "age": 59,
//       "job": "Developer",
//       "country": "US",
//       "is_married": false
//   }, {
//       "id": 36,
//       "first_name": "Mindy",
//       "last_name": "Campany",
//       "email": "mcampanyz@theglobeandmail.com",
//       "gender": "Female",
//       "age": 55,
//       "job": "Worker",
//       "country": "UK",
//       "is_married": true
//   }, {
//       "id": 37,
//       "first_name": "Esta",
//       "last_name": "Craythorn",
//       "email": "ecraythorn10@timesonline.co.uk",
//       "gender": "Male",
//       "age": 39,
//       "job": "Farmer",
//       "country": "Japan",
//       "is_married": false
//   }, {
//       "id": 38,
//       "first_name": "Burty",
//       "last_name": "Stobbes",
//       "email": "bstobbes11@latimes.com",
//       "gender": "Male",
//       "age": 32,
//       "job": "Doctor",
//       "country": "Japan",
//       "is_married": true
//   }, {
//       "id": 39,
//       "first_name": "Ofelia",
//       "last_name": "de Almeida",
//       "email": "odealmeida12@booking.com",
//       "gender": "Male",
//       "age": 56,
//       "job": "Doctor",
//       "country": "US",
//       "is_married": true
//   }, {
//       "id": 40,
//       "first_name": "Debor",
//       "last_name": "Wrettum",
//       "email": "dwrettum13@desdev.cn",
//       "gender": "Female",
//       "age": 31,
//       "job": "Teacher",
//       "country": "Japan",
//       "is_married": true
//   }, {
//       "id": 41,
//       "first_name": "Archibald",
//       "last_name": "Dufaur",
//       "email": "adufaur14@pinterest.com",
//       "gender": "Female",
//       "age": 15,
//       "job": "Developer",
//       "country": "Vietnam",
//       "is_married": true
//   }, {
//       "id": 42,
//       "first_name": "Susanetta",
//       "last_name": "Ratnege",
//       "email": "sratnege15@reverbnation.com",
//       "gender": "Male",
//       "age": 30,
//       "job": "Dentist",
//       "country": "Vietnam",
//       "is_married": true
//   }, {
//       "id": 43,
//       "first_name": "Opalina",
//       "last_name": "Nann",
//       "email": "onann16@tinyurl.com",
//       "gender": "Female",
//       "age": 47,
//       "job": "Developer",
//       "country": "Japan",
//       "is_married": false
//   }, {
//       "id": 44,
//       "first_name": "Wiley",
//       "last_name": "MacGuigan",
//       "email": "wmacguigan17@go.com",
//       "gender": "Female",
//       "age": 19,
//       "job": "Teacher",
//       "country": "UK",
//       "is_married": false
//   }, {
//       "id": 45,
//       "first_name": "Johnathan",
//       "last_name": "McGown",
//       "email": "jmcgown18@ezinearticles.com",
//       "gender": "Male",
//       "age": 49,
//       "job": "Dentist",
//       "country": "Japan",
//       "is_married": false
//   }, {
//       "id": 46,
//       "first_name": "Analise",
//       "last_name": "Davenall",
//       "email": "adavenall19@earthlink.net",
//       "gender": "Female",
//       "age": 23,
//       "job": "Developer",
//       "country": "Vietnam",
//       "is_married": true
//   }, {
//       "id": 47,
//       "first_name": "Ulrika",
//       "last_name": "Kobsch",
//       "email": "ukobsch1a@blogspot.com",
//       "gender": "Female",
//       "age": 32,
//       "job": "Dentist",
//       "country": "Japan",
//       "is_married": true
//   }, {
//       "id": 48,
//       "first_name": "Esther",
//       "last_name": "Aldie",
//       "email": "ealdie1b@virginia.edu",
//       "gender": "Male",
//       "age": 35,
//       "job": "Project Manager",
//       "country": "UK",
//       "is_married": true
//   }, {
//       "id": 49,
//       "first_name": "Lemmie",
//       "last_name": "Guidotti",
//       "email": "lguidotti1c@elpais.com",
//       "gender": "Bigender",
//       "age": 20,
//       "job": "Worker",
//       "country": "Russia",
//       "is_married": true
//   }, {
//       "id": 50,
//       "first_name": "Nolana",
//       "last_name": "Ivory",
//       "email": "nivory1d@cbsnews.com",
//       "gender": "Female",
//       "age": 32,
//       "job": "Doctor",
//       "country": "Russia",
//       "is_married": false
//   }
// ];


//Nhập vào 1 số n. Hãy tìm 1 user có id bằng n

// function findUserById(users) {
//   let n = Number(prompt("Nhập id của user cần tìm:"));
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].id == n) {
//       return users[i];
//     }
//   }
//   return null;
// }

// let foundUser = findUserById(users);
// if (foundUser) {
//   console.log("Thông tin user tìm thấy:", foundUser);
// } else {
//   console.log("Không tìm thấy user có id là", n);
// }



// //Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.

// // Hàm lấy email của các user có tên chứa keyword
// function getEmail() {
//     // Nhập chuỗi keywword tìm tên từ người dùng
//     let keyword = prompt("Nhập vào tên:");
  
//     // Lọc ra các user có tên chứa keyword
//     let filteredUsers = users.filter(user => {
//       let fullName = user.first_name.toLowerCase() + user.last_name.toLowerCase();
//       return fullName.includes(keyword.toLowerCase());
//     });
  
//     // Lấy ra danh sách email tương ứng
//     let emails = filteredUsers.map(user => user.email);
  
//     return emails;
//   }
  
  
// let emails = getEmail();
  
// console.log(emails);


// //Đếm số lượng user có age > 50

// function countUsersByAge(users, age) {
//     let filteredUsers = users.filter(user => user.age > age);
//     return filteredUsers.length;
// }

// let count = countUsersByAge(users, 50);
// console.log(count);
  

// //Đếm số lượng user đã kết hôn và chưa kết hôn.

// let initial = {
//     married: 0,
//     single: 0
// };
  
// let result = users.reduce(function(acc, user) {
//     if (user.is_married) {
//       acc.married++;
//     } else {
//       acc.single++;
//     }
//     return acc;
// }, initial);
  
// console.log(result);

// //Đếm số lượng user theo từng ngành nghề tương ứng

// function countUserByJob(users) {
//     let result = {};
  
//     users.forEach(function(user) {
//         let job = user.job;
//         if (result[job]) {
//             result[job]++;
//         } else {
//             result[job] = 1;
//         }
//     });
  
//     return result;
// }

// let result = countUserByJob(users);
// console.log(result);  
  
  

// //Bài tập ngày 26/3/2023
// //5. Xây dựng chương trình quản lý kho hàng như sau:
// //Cửa hàng gồm các thông tin: tên kho hàng, địa chỉ, người sở hữu, các mặt hàng trong kho.

// let storage = {
//     name: 'Real Storage',
//     address: 'Ho Chi Minh',
//     owner: 'Xuyen',
//     items: [
//         { id: 1, name: 'product1', category: 'Furniture', price: 200 },
//         { id: 2, name: 'product2', category: 'Device', price: 400 },
//         { id: 3, name: 'product3', category: 'Cloth', price: 600 },
//     ]
// };

// //Xây dựng chương trình tương tác với kho hàng. 
// //Nhập vào action là yêu cầu ứng với các thao tác:
// let actions = [
//     { id: 1, description: "Sửa thông tin kho hàng" },
//     { id: 2, description: "Tạo mặt hàng trong kho" },
//     { id: 3, description: "Tìm kiếm mặt hàng" },
//     { id: 4, description: "Xóa mặt hàng" }
// ];

// // Hỏi người dùng lựa chọn action
// const actionId = prompt(`Chọn action:\n${actions.map(a => `${a.id}. ${a.description}`).join('\n')}`);
  
// // Tìm action tương ứng với actionId
// const action = actions.find(a => a.id === parseInt(actionId));
  
// // Thực hiện action
// if (action) {
//     switch (action.id) {
//         case 1:
//             // Yêu cầu nhập lại thông tin kho hàng
//             storage.name = prompt('Nhập tên kho hàng:');
//             storage.address = prompt('Nhập địa chỉ kho hàng:');
//             storage.owner = prompt('Nhập người sở hữu kho hàng:');
//             // In ra thông tin mới của kho hàng
//             console.log(`Thông tin kho hàng sau khi cập nhật:\nTên: ${storage.name}\nĐịa chỉ: ${storage.address}\nNgười sở hữu: ${storage.owner}`);
//         break;
//         case 2:
//             // Yêu cầu nhập thông tin mặt hàng
//             const id = prompt('Nhập mã mặt hàng:');
//             const name = prompt('Nhập tên mặt hàng:');
//             const category = prompt('Nhập loại mặt hàng:');
//             const price = prompt('Nhập giá mặt hàng:');
  
//             // Kiểm tra xem sản phẩm đã tồn tại trong kho chứa hay chưa
//             const existingItem = storage.items.find(item => item.id === parseInt(id));
//             if (existingItem) {
//                 alert('Mã mặt hàng đã tồn tại, vui lòng nhập lại.');
//             } else {
//                 // Thêm sản phẩm vào kho chứa
//                 storage.items.push({ id: parseInt(id), name, category, price: parseInt(price) });
//                 // In ra thông tin các mặt hàng đang có trong kho
//                 console.log('Các mặt hàng trong kho:');
//                 storage.items.forEach(item => console.log(`${item.name} (${item.category}) - ${item.price} VNĐ`));
//             }
//         break;
//         case 3:
//             // Yêu cầu nhập từ khóa tìm kiếm
//             const keyword = prompt('Nhập từ khóa tìm kiếm:');
//             // Tìm kiếm mặt hàng có tên chứa từ khóa tìm kiếm
//             const foundItems = storage.items.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
//             // In ra thông tin các mặt hàng được tìm thấy
//             console.log(`Kết quả tìm kiếm cho từ khóa "${keyword}":`);
//             if (foundItems.length > 0) {
//                 foundItems.forEach(item => console.log(`${item.name} (${item.category}) - ${item.price} VNĐ`));
//             } else {
//                 console.log('Không tìm thấy mặt hàng nào.');
//             }
//         break;
//         case 4:
//             // Yêu cầu nhập mã mặt hàng để xóa
//             const itemId = prompt('Nhập mã mặt hàng cần xóa:');
//             // Tìm mặt hàng có mã tương ứng để xóa
//             const itemIndex = storage.items.findIndex(item => item.id === parseInt(itemId));
//             if (itemIndex !== -1) {
//                 // Xóa mặt hàng khỏi kho chứa
//                 storage.items.splice(itemIndex, 1);
//                 console.log(`Mặt hàng có mã ${itemId} đã bị xóa khỏi kho chứa.`);
//             } else {
//                 console.log(`Không tìm thấy mặt hàng có mã ${itemId}.`);
//             }
//         break;
//         default:
        
//     }  
// } else {
//     alert('Action không hợp lệ.')
// }
