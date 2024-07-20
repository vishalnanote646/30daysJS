//task 8
let book = {
    
        title: "rich dad poor dad",
        auther: "robbert kiyosaki",
        year: 1997
}

for(let use in book){
    console.log(use,book[use]);
} 



let book2 = {
    
    title: "rich dad poor dad",
    auther: "robbert kiyosaki",
    year: 1997
}
console.log("keys:")
console.log(Object.keys(book2));
console.log(Object.values(book2));
