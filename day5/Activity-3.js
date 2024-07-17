//task 5

const Addnums = (a, b) => {
    let sum = a + b;
    console.log(sum)
}
Addnums(5, 5);

//task 6
const Checkchar = (string, char) => {
    for (let i=0; i <= string.length; i++) {
        if(string[i] === char) {
            return true
        }
        else
            return false
    }

};
 remote=Checkchar("jha","a");
 console.log(remote);
