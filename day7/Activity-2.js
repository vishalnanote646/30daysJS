// task 3
const book={
    title: "The Midnight Library",
    author : "Matt Haig",
    published : 2020,
     hemant : function(string){
        console.log(book.title,book.author);
     }
};

book.hemant();

//task 4

const book2={
    title: "The Midnight Library",
    author : "Matt Haig",
    published : 2020,
    update : function(year){
        console.log(year);
    }
     
};
book2.update(2024);

