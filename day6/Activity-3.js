//task7
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
arr1.map((num) => {
    num *= 2;
    console.log(num);
});


//task8
let even = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(even);
findeven = even.filter(num => num % 2 == 0);
console.log(findeven);

//task9
let sum = [10, 20, 30, 40, 50];
console.log(sum);
let sumofnum = sum.reduce((total, current) => total + current, 0);
console.log(sumofnum);
