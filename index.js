//console.log("Hello, World!");
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

//let a = 10;
//let b = 20;
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

//物件--繼承 多載 封裝

const word = "hello world";
console.log(
  word.substring(0, 1).toUpperCase() + word.substring(1, word.length)
); // Hello world

//json
//[] 陣列資料
//{} 物件資料

//const students = [{}, { name: "John", age: 20 }, { name: "Jane", age: 22 }];

//for (let i = 0; i < students.length; i++) {
//console.log(students[i].name, students[i].age);
//}

//json方法
const students = [
  {
    id: 1,
    last_name: "林",
    first_name: "美玲",
    gender: "female",
    phone: "0912-345-678",
    birthday: "1998-03-15",
    email: "meiling.lin@email.com",
  },
  {
    id: 2,
    last_name: "王",
    first_name: "俊傑",
    gender: "male",
    phone: "0923-456-789",
    birthday: "1997-11-22",
    email: "junjie.wang@email.com",
  },
  {
    id: 3,
    last_name: "張",
    first_name: "雅婷",
    gender: "female",
    phone: "0934-567-890",
    birthday: "1999-07-30",
    email: "yating.zhang@email.com",
  },
  {
    id: 4,
    last_name: "李",
    first_name: "建志",
    gender: "male",
    phone: "0945-678-901",
    birthday: "1998-09-05",
    email: "jianzhi.li@email.com",
  },
  {
    id: 5,
    last_name: "陳",
    first_name: "佳蓉",
    gender: "female",
    phone: "0956-789-012",
    birthday: "1997-05-18",
    email: "jiarong.chen@email.com",
  },
  {
    id: 6,
    last_name: "黃",
    first_name: "志明",
    gender: "male",
    phone: "0967-890-123",
    birthday: "1999-01-10",
    email: "zhiming.huang@email.com",
  },
  {
    id: 7,
    last_name: "吳",
    first_name: "芳瑜",
    gender: "female",
    phone: "0978-901-234",
    birthday: "1998-12-03",
    email: "fangyu.wu@email.com",
  },
  {
    id: 8,
    last_name: "劉",
    first_name: "家豪",
    gender: "male",
    phone: "0989-012-345",
    birthday: "1997-08-20",
    email: "jiahao.liu@email.com",
  },
  {
    id: 9,
    last_name: "蔡",
    first_name: "雅琪",
    gender: "female",
    phone: "0990-123-456",
    birthday: "1999-04-25",
    email: "yaqi.cai@email.com",
  },
  {
    id: 10,
    last_name: "楊",
    first_name: "志遠",
    gender: "male",
    phone: "0901-234-567",
    birthday: "1998-06-12",
    email: "zhiyuan.yang@email.com",
  },
];
//map方法-爭對媒體資料進行加工處理
// const result = [];
// for (let i = 0; i < students.length; i++) {
//   result.push({
//     //id: students[i].id,
//     //first_name: students[i].first_name,
//     //last_name: students[i].last_name,
//     //gender: students[i].gender,
//     //phone: students[i].phone,
//     //birthday: students[i].birthday,
//     //email: students[i].email,
//     ...students[i], // 使用展開運算符
//     age: new Date().getFullYear() - students[i].birthday.substring(0, 4), // 計算年齡
//   });
//   //console.log(2025 - parseInt(students[i].birthday.split("-")[0])); // 計算年齡
//   // console.log(new date().getFullYear() - parseInt(students[i].birthday.split("-")[0])); // 計算年齡
//   if (students[i].gender == "male") {
//     result.push(students[i]);
//   }
// }
// console.log(result); // 只顯示男性學生資料
// console.log(JSON.parse(JSON.stringify(students)));
// 使用 map 方法來處理學生資料

//reduce方法

//forEach方法--傳入函式
// // 使用 for 迴圈來處理學生資料
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].first_name);
// }
// 使用 forEach 方法來處理學生資料
// students.forEach(function (student) {
//   console.log(student.first_name);
// });

// // 使用 filter 方法來篩選男性學生
// console.log(
//   students.filter(function (student) {
//     return student.gender == "male";
//   })
// );

//filter方法--傳入函式
// const result = [];
// for (let i = 0; i < students.length; i++) {
//   if ((students[i], gender == "male")) {
//     result.push(students[i]);
//   }
// }
// console.log(result); // 只顯示男性學生資料

//reduce
//map

//fetch方法 打開api的工具
fetch("	https://tcgbusfs.blob.core.windows.net/dotapp/news.json")
  .then(function (res) {
    return res.json(); // 解析 JSON 資料
  })
  .then(function (json) {
    console.log(json); // 顯示解析後的資料
    // 在這裡可以進一步處理 json 資料
  });

//setInterval 可做動畫
let timer = setInterval(function () {
  console.log("setInterval 每秒執行一次");
}, 1000); // 每1000毫秒(1秒)執行一次
//setTimeout
setTimeout(function () {
  console.log("timeout");
}, 1000); // 1000毫秒(1秒)後執行一次
setTimeout(() => {
  clearInterval(timer); // 停止 setInterval
}, 5000); // 5秒後停止 setInterval
