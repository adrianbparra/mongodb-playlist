const assert = require("assert");
const MarioChar = require("../models/mariochars")

var char;

describe("Finding records",function() {
    

    //creation
    beforeEach(function(done) {
        char  = new MarioChar({
            name: "Yoshi",
            weight: 12
        })
    
        char.save().then(function () {
            done();
        });
        
    })

    it("finds one record from db", function(done) {
        MarioChar.findOne({name: "Yoshi"}).then(function(result) {
            assert(result.name === "Yoshi")
            done();
        })


    });

    it("finds one record by ID from db", function(done) {
        MarioChar.findOne({_id: char._id}).then(function(result) {
            assert.deepEqual(char._id,result._id);
            // console.log(result)

            done();
        })


    });
});
