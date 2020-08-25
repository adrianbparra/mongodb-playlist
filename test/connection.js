const mongoose = require("mongoose");

//Connect to the db before the test run

before(function(done){
    
    // Connnect to mongodb
    mongoose.connect('mongodb://localhost/testaroo', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    
    mongoose.connection.once("open", function(){
        console.log("Connection has been made, now make fireworks...");
        done();
    }).on('error', function(error) {
        console.log("Connection Error", error);
    });


});   

//Drop mariochars collection before each test
beforeEach(function(done) {
    mongoose.connection.collections.mariochars.drop(function() {
        done();
    })
});