//task 8
let info = {
    name : "vishal",
    age : 18,
    stream :"bca", 

     total() {
         result= (`${this.name},${this.age}`)
         return result
    }
};
console.log(info.total());

//task 9
const e_name = "name";
const e_id = "ID_";
const salary = "salary is:";

const info2 = {
 [`${e_name} of employee is :`] : "vishal",
 [`${e_id} of emploee`]: 1111,
 [`${salary}`] : 100000 

}
console.log(info2)