const http=require('http')
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Tupe':"application\json"});//heder
resp.write(JSON.stringify({name:"ajit",email:"ajit@gmail.com"}));//body in obday object always store in string format
resp.end();
}).listen(5000);