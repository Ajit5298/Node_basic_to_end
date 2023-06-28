const fs=require("fs");
const path=require("path");
const dirpath=path.join(__dirname,"File");//path join folder name file
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirpath+"/hello"+i+".txt","a simple file")
// }
fs.readdir(dirpath,(err,File)=>{
    File.forEach((item) => {
        console.log("file name is",item)
    });
})