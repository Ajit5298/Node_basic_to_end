//set input from command line 
//create file with input
//delet the file with input

// console.log(process.argv) //.argv argument vectot// process is an object that contain almost data in node js

const fs =require('fs');

const input =process.argv;
if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4]) // input first file name - seond file data 
}
else if(input[2]=="remove")
{
    fs.unlinkSync(input[3])
}
else{
    console.log('invalid input')
}