//1                         //2
module.exports = function(req, res, next){
    //3                     //4
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE'); //5
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); //6
    //7
    next();
}

//1. module.exports allows us to export this module to be used in another file.

//2. req refersto the request from the client, specifically focusing on any headers present on the request object. res refers to the response and will be used to present which types of headers are allowed by the server.

//3. We call res.header so that the server will respond with what kind of headers are allowed in the request.

//4. We use the specific   access-control-allow-origin   header to tell the server the specific origin locations thta are allowed to communicate with the server. The  *  is known as a wild-card. It means that everything is allowed. In this setting, it's saying that requests origination from any location are allowed to communicate with the database.

//5. These are the HTTP methods that the server will allow to be used. Post allows you to send 15 different HTTP requests; our server will only appect four.

//6. These are specific header types that the server will accept from the client. Remember from our earlier testing, we sent a Content-Type header to the server. Without this header, our request would not have worked.

//7. next   sends the request along to its next destination. This could be the API endpoint or another middleware function  designed to do somethign else.


//NEXT() tels the middleware to continue its process. With the above example, next() takes the request object and passes it on the endpoint on the server. Not including the next() would cause the application to break, as the server doesn't know what to do after sending the header. We could also use next() to provide additional headers, if we want further restrictions on our server.