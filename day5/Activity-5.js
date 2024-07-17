//task 9
function Great(greet){
greet="you are too cute";
console.log(greet);
}
 function RepeatGreat(Great,num){
    for(let i=0;i<num;i++){
        Great();
    }

 }
  RepeatGreat(Great,4);

  //task 10

  function Addnum(a){
    return a+2;
  }
  function subnum(a){
    return a-1;
  }

  function higherfunc(p,q,n){
     return p(q(n))+2;
    
    
  }
  console.log(higherfunc(Addnum,subnum,50));