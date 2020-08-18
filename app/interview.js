/* 1st question */
function foo() {
    let  b = a = 0;
    b++;
   return b;
}

foo();

//console.log(typeof a);
//console.log(typeof b);

/* 2nd question */

const clothes = ['jacket','shubham','t-shirt'];
//clothes.length = 0;
//console.log(clothes.length)
//console.log(clothes[0]);

//clothes.splice(1,0,'test','test1');
//clothes.slice(0);
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice();
console.log(citrus);