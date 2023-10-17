// var fruits = ["Banana","Orange","Apple"];
// console.log(fruits);
// console.log(fruits[1]);
// fruits[1]= "Mango";
// console.log(fruits);
// var fruits=new Array("Jackfruit","Dragonfruit","mango")
// console.log(fruits);
var x = [[1,2,3],['a','b','c']]
console.log(x.indexOf('c'));
console.log(x[1][2]);


var y = [ ];
y[99]='f';
console.log(y);

console.log('      *      ');
console.log('     * *    ');
console.log('    * * *   ');
console.log('   * * * *   ');
console.log('  * * * * *    ');
console.log(' * * * * * *    ');



var number = [1, 2, 3, 4];
var number1 = number.toString();
console.log(number1);

console.log(typeof(number1));


//join
var fruits = ["Banana","Orange","Apple"];
var fruits1 = fruits.join("/and/")
console.log(fruits1);


//pop
var fruitss = ["Banana","Orange","Apple"];
// var fruitsss = fruitss.reverse()
console.log(fruitss)
fruitss.pop();
console.log(fruitss);


//push 
var fruits3 = ["Banana","Orange","Apple","Avakoda"];
// console.log(fruits3);
// fruits3.push('Kiwi');
// console.log(fruits3);
// var fruits5=["Banana",["kiwi"],{name:"avakod"}] ;
// console.log(fruits5);
// fruits3.push(fruitss)
// console.log(fruits3);
fruits3.unshift('kiwi');
console.log(fruits3);
console.log(fruits3.length);
//shift
fruits3.shift();
console.log(fruits3);
//slice
console.log(fruits3.slice(6))
//splice
fruits3.splice(0,1,'mango','apple')
console.log(fruits3);
//sort
var numbers = (1,32,23,44,556,6,89,9,8754,3)
numbers.sort((a,b)=>{
    return a-b;
    })
    console.log(numbers);
    //reverse
    numbers.reverse();
    console.log(numbers);
    




