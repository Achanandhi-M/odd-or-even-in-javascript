const prompt=require("prompt-sync")(); //prompt()won't works in nodejs environment

let num=prompt('Enter the number:');
if(num%2==0){
console.log('The number is even')
}
else{
    console.log('The number is odd')
}
