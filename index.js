const express = require("express")

const dateService = require("./");


var app = express()
app.get("/",function(request,response){

    //,"yyyy-mm-dd
    response.send(dateService.getPreviousDay("2022-09-12"));
})
app.listen(10000, function () {
    console.log("Started application on port %d", 10000)
});
