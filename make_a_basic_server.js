const http=require('http');
//req of response to handal on node.js use http module and createServer as a function
http.createServer((req,resp)=>{
    resp.write('hello world');
    resp.end();
}).listen(4500);//4500>> port number


//run this and serch on browser http://localhost:4500 u get output as a hello world