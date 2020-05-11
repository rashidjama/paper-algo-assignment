//this function is just a line that is separating my code
function separatingLine() {
  console.log("___________________")
}

function multiply(x,y){
  console.log(x);
  console.log(y);
}
b = multiply(2,3);
console.log(b);
//this function doesn't return any value therefore  b is equal undefined and result is 
//x = 2 y = 3 and b = undefined
separatingLine()

function multiply(x,y){
  return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));

//i did it with paper and result is 
// 6 and 10
separatingLine()

var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}

//i did it with paper and result is 
// 3,7
separatingLine()

var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);

//i did it with paper and result is 
// 15, 15, 10, 15
separatingLine()

for(var i=0; i<15; i+=2){
  console.log(i);
}

//i did it with paper and result is 
// 0,2,4,6,8,10,12,14
separatingLine()

for(var i=0; i<3; i++){
  for(var j=0; j<2; j++){       
      console.log(i*j);
  }
}

//i did it with paper and result is 
// 0 0 0 1 0 2

separatingLine()

function looping(x,y){
  for(var i=0; i<x; i++){
     for(var j=0; j<x; j++){      
         console.log(i*j);
     } 
  }
}
z = looping(3,3);
console.log(z);

//i did it with paper and result is 
// 0 0 0 0 1 2 0 2 4
separatingLine()

function looping(x,y){
  for(var i=0; i<x; i++){
     for(var j=0; j<y; j++){       
        console.log(i*j);
     } 
  }
  return x*y;
}
z = looping(3,5);
console.log(z);

//i did it with paper and result is 
// 0 0 0 0 0 0 1 2 3 4 0 2 4 6 8 15
separatingLine()

function printUpTo(x){
  // your code here
  for(let i=0;i<=x;i++) {
    console.log(i)
}
if(x < 0) {
  console.log('negative')
  return false;
}
}

// printUpTo(1000000); // should print all the integers from 1 to 1000000
y = printUpTo(-10); // should return false
console.log(y); // should print false

separatingLine()


function printSum(x){
  var sum = 0;
  //your code here
  for(let i=0;i<=x;i++) {
    console.log(i)
    sum += i;
  }
  return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log('the total sum is ' + y) // should print 32640

separatingLine()

function printSumArray(x){
  var sum = 0;
  for(var i=0; i<x.length; i++) {
    //your code here
    sum += x[i]
  }
  return sum;
}
console.log( printSumArray([1,2,3]) ); // should log 6


