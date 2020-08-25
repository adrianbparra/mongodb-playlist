const assert = require("assert");
const MarioChar = require("../models/mariochars")


describe("Saving records",function() {
    //create test
    it("saves record to db", function(done) {
        var char  = new MarioChar({
            name: "Yoshi",
            weight: 12
        })

        char.save().then(function () {
            assert(char.isNew === false)
            done();
        });




    });

});
