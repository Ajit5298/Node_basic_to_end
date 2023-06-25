// find any number in arr or filter the arr

const arr=[1,2,3,4,3,5,6,7]
let findnum =arr.filter((item)=>{
    return item===3;
})
console.log(findnum)

//output
//[ 3, 3 ]