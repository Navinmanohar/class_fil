//var num=10
// console.log(num);
// var num=10;
// var num="hello world"



// let msg="hello world";
// msg="10"
// console.log(msg)


// const a=2;
// primitive data type  number string boolean undifined null
/*
refrence type 
array object and function 
*/
// let num=Math.random()*10;
// console.log(num)

// String
let meassage=Number("geeksforgeeks")
// console.log(typeof meassage)
let n=String(10);
// console.log(typeof n)



// what types of operator in js
// arithmetic assignment operators increment decrement bitwise shift left right
// let b=10;
// let x=10>>1;
// let y=10<<1;
// // 10100
// console.log(x)
// console.log(y)

// let a=8,b=5,c=4,d=9;
// let pasingNumber=9;

// if(a>=pasingNumber)
//  {
//     console.log("he is pass")
//     a++;
//  }
// else if(b>=pasingNumber)
//  {
//     console.log("you got the job")
//  }
//  else
//  {
//     console.log("practice more")
//  }

// console.log(2)
// console.log(4)
// console.log(6)
// console.log(8)
// ----------
// ----------
// console.log(20)
// // loop
// for (var i = 2 ;i<=20;i++)
// {
//     if(i%3==0)
//     console.log(i)
// }

// inial value
// while(condition)
// {
//     // body
//     // inciment
// }

// let i=2;
// while(i<=20)
// {
//     if(i%2==0)
//     console.log(i)
// i++;
// }
// initilization
// do{
//     // body
//     // incriment
// }while(conditon)

// let i=2;
// do{
//     if(i%2==0)
//     console.log(i)
// i++;
// }while(i<=20)

// let msg=1;
// switch(msg)
// {
//     case 3:
//         console.log("hello is executed");
//          break;
//     case 2:
//         console.log("this is other Hello");
//          break;
       
//      default:
//      console.log("this is default")       
// }


// let first_name="Navin";

// console.log(first_name.split(','));

// let ar=[1,2,3,4,5,'hello'];
// // ar.push(5)
// let a=[6,7,8]
// console.log(ar.concat(a))

// function sum(msg,a)
// {
//     console.log(msg+' inside sum function'+a)
// }

// sum("hello",4)

// function squire(num)
// {
//     return num*num;
// }

// console.log(squire(3))
function max(num1,num2,f)
{
    if(num1>num2)
     console.log(num1)
    else
    console.log(num2)

    console.log("this is other function ")
    f(num1,num2)

    
}

// max(4,7,function  min(num1,num2)
// {
//      if(num1<num2)
//       console.log(num1)
//     else
//     console.log(num2)
// })

let b=()=>{
   console.log("this is arrow function")
}
// console.log(typeof b)
b()

// class student{
  
//  get(){
//     console.log(this.name)
//   }
// }

// const st =new student("navin")
// st.get()

// const f2=new max();
// console.log(f2)
const abc=()=>
{

}

// const ab=new abc();
// console.log(ab.name)

// ab.name="navin";

// console.log(ab)

// const obj={
//     firstname:"Navin",
//     rollno:300
// }
// console.log(typeof obj)
// f()

// function f(){

// }
// console.log(obj['firstname'])

// const arr=[1,2,3,4,5]
// console.log(arr)
// const ar=arr.map((value)=>{
//      return value+1;
// })
// console.log(ar)
// const array=arr.filter((key)=>{
//     return key%2==0;
// })
// console.log(array)
