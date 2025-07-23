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
// + 加法  - 減法  * 乘法  / 除法
// console.log(1+2); // 3
// console.log(1-2); // -1 
// console.log(1*2); // 2
// console.log(1/2); // 0.5
// console.log(1%2); // 1

// if(條件)
// 條件成立時執行的程式碼
// console.log("條件成立");

if(a == 20) {
  console.log("a is 20");
} else if(a == 15) {
  console.log("a is 15");
} else {
  console.log("a is not 20 or 15");
}

for(let i = 0; i < 5; i++) {
  console.log(i)
}
console.log("for loop ended");

let double = function(num) {
  return num * 2;
}
let c= double(2);
console.log(c);// 4 


let ii = 0;
for(let j=0; j <= 100; j++)
  {console.log(j);
}
ii=ii+j
console.log(ii); // 5050
