const util = require("./util")

it('check add numbers',() => {
  var res = util.add(5,11)
  if(res != 10)
    throw new Error(`Expecting 10 but result was ${res}`);
})
