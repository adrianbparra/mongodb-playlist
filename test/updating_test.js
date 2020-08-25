const assert = require("assert");
const MarioChar = require("../models/mariochars")

var char;

describe("Updating records",function() {

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

    it("Updates one record from db", function(done) {
        MarioChar.findOneAndUpdate({name: "Yoshi"}, {name: 'Mario'}).then(function() {
            MarioChar.findOne({_id: char._id}).then(function(res) {
                assert.equal(res.name, "Mario")
                done()
            })

        })
    });

    it("Increments the weight by one", function(done) {
        MarioChar.updateMany({}, {$inc: {weight: 1 }}).then(function() {
            MarioChar.findOne({name: "Yoshi"}).then(function(record) {
                assert(record.weight === 13)
                done();
            })
        })
    });

});