//task 5
let arr = [10, 20, 30, 40];
arr[2] = 70;
let newarr = [...arr];
console.log(arr, newarr);

//task 6
function sum(...num){
   return  num.reduce((total,add)=>total+add,0)
    
}
console.log(sum(1,2,3,4,5));