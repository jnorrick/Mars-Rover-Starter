const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error("Command type required."));
  });
  
// new Command object when passed argument will set 'commandType' 
  it("constructor sets command type", function() {
    let testObject = new Command("test string", 0)
    expect(testObject.commandType).toBe("test string");
    })

    // new Command object when passed arguments will set 'commandType' and 'value'
  it("constructor sets a value passed in as the 2nd argument", function() {
    let newTestObject = new Command("test string", 2000)
    expect(newTestObject.value).toBe(2000)
  })
});