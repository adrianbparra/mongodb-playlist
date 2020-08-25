const assert = require("assert");
const MarioChar = require("../models/mariochars")

var char;

describe("Deleting records",function() {

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

    it("Deletes one record from db", function(done) {
        MarioChar.remove({name: "Yoshi"}).then(function(res) {
        //    MarioChar.findOne({name: "Yoshi"}).then(function(result) {
        //         assert(result === null)
        //         done();
        //    })
            assert(res.deletedCount === 1)
            done();
        });

    });

});
