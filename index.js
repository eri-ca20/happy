console.log("Hello, World!");
// let number=1;
// const name=eri;
// number=2;
// let a=10
// let b=20
// let temp=a
// a = b;
// b = temp;
// console.log(a,b);

// 邏輯運算符
// == 等於 // != 不等於// === 全等於
// !== 不全等於
// > 大於   // < 小於      // >= 大於等於   // <= 小於等於
// && 並且
// || 或者// ! 取反

let a = 10;
let b = 20;
// console.log(a==10)// true
// console.log(a!=10)// false
// console.log(a==10 && b==10)// false
// console.log(a==10 || b==10)// true
// console.log(a<=10&&b>20)// true

// 算術運算子
// +-* / %
// + 加法  - 減法  * 乘法  / 除法 % 餘數
// console.log(1+2); // 3
// console.log(1-2); // -1
// console.log(1*2); // 2
// console.log(1/2); // 0.5
// console.log(1%2); // 1

// if(條件)
// 條件成立時執行的程式碼
// console.log("條件成立");

// if(a == 20) {
//   console.log("a is 20");
// } else if(a == 15) {
//   console.log("a is 15");
// } else {
//   console.log("a is not 20 or 15");
// }

// for(let i = 0; i < 5; i++) {
//   console.log(i)
// }
// console.log("for loop ended");

// let double = function(num) {
//   return num * 2;
// }
// let c= double(2);
// console.log(c);// 4

// let ii = 0;
// for(let j=0; j <= 100; j++)
//   {console.log(j);
// }
// ii=ii+j
// console.log(ii); // 5050

//方法
// window.onload = function () {
//   console.log(document.querySelector("#year"));
//   document.querySelector("#year_btn").addEventListener("click", function () {
//     const year = parseInt(document.querySelector("#year").value);
//     let result;
//     if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//       result = "閏年";
//     } else {
//       result = "平年";
//     }
//     console.log(year);
//     document.querySelector("#answer").innerHTML = result;
//   });
// };

// // 判斷
// const isTriangle = function (a, b, c) {
//   return a + b > c && a + c > b && b + c > a;
// };
// //三角形特性 兩邊相加大於第三邊;
// console.log(isTriangle(1, 2, 3)); // false
// console.log(isTriangle(3, 4, 5)); // true

// // BMI計算
// const countBMI = function (weight, height) {
//   return weight / (height * height);
// };

// // let bmi= countBMI(60, 1.7);
// // console.log(bmi); // 20.76
// console.log(countBMI(60, 1.7)); // 20.76
// console.log(countBMI(70, 1.8)); // 21.6
// //體重/身高平方(M)

// // 計算BMI
// window.onload = function () {
//   document
//     .querySelector("#countBMI_btn")
//     .addEventListener("click", function () {
//       const height =
//         parseFloat(document.querySelector("#countBMI").value) / 100; // 公分轉公尺
//       const weight = parseFloat(document.querySelector("#countBMI2").value);
//       let bmiResult = countBMI(weight, height);
//       document.querySelector("#bmi_answer").innerHTML =
//         "BMI: " + bmiResult.toFixed(2);
//     });
// };

// // 比較兩個數字，返回較大的數字
// const whichIsBig = function (a, b) {
//   if (a > b) {
//     return a;
//   } else if (a < b) {
//     return b;
//   } else a == b;
//   {
//     return;
//   }
// };
// a = 10;
// b = 20;
// console.log(whichIsBig(a, b)); // 20

// //用for迴圈做99乘法表
// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// //成績的計算方式 95以上=a+ 90-94 A 80=89 B 70-79=C 60-69=D
// const checkScore = function (score) {
//   if (score >= 95 && score <= 100) {
//     return "A+";
//   } else if (score >= 90 && score < 95) {
//     return "A";
//   } else if (score >= 80 && score < 90) {
//     return "B";
//   } else if (score >= 70 && score < 80) {
//     return "C";
//   } else if (score >= 60 && score < 70) {
//     return "D";
//   } else {
//     return "F";
//   }
// };
// // 測試成績計算
// console.log(checkScore(95)); // A+
