const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

    it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
    expect( function() { new Message();}).toThrow(new Error("Name Required."));
    });
    

    it("constructor sets name", function() {
    let testObject = new Message("test string", 0)
    expect(testObject.name).toBe("test string");
    });

/*This test confirms that the commands property of a new message object contains the data passed in from the Message(name, commands) call. */
    it("contains a commands array passed into the constructor as the 2nd argument", function() {
    let commands = [new Command('STATUS_CHECK')]
    let newTestObject = new Message("test string", commands)
    expect(newTestObject.commands).toBeInstanceOf(Array)
    expect(newTestObject.commands).toHaveLength(1)
    })
});

