const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  //test 7
  it("constructor sets position and default values for mode and generatorWatts", function() {
    let testObject = new Rover(999)
    expect(testObject.position).toBe(999);
    expect(testObject.mode).toBe('NORMAL');
    expect(testObject.generatorWatts).toBe(110);
    })

    //test 8
  it("response returned by receiveMessage contains the name of the message", function() {
    let roverObject = new Rover(999, "Message Name");
    let commandObjects = [new Command('STATUS_CHECK')]
    let messageObject = new Message("test message", [1])
    expect(roverObject.receiveMessage(messageObject).message).toBe("test message")
  })

  //test 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let roverObject = new Rover(999);
    let commandObjects = [new Command('STATUS_CHECK'), new Command('STATUS_CHECK')]//, 'STATUS_CHECK')
    let messageObject = new Message('test message', commandObjects)
    let roverResponse = roverObject.receiveMessage(messageObject)
    
    expect(roverResponse.results).toBeInstanceOf(Array)
    expect(roverResponse.results.length).toBe(2)
  })

  // test 10
  it("responds correctly to the status check command", function() {
    let roverObject = new Rover(999)
    let commandObjects =  [new Command('STATUS_CHECK')]
    let messageObject = new Message('test message', commandObjects)
    let roverResponse = roverObject.receiveMessage(messageObject)
    
    expect(roverResponse.results[0]).toMatchObject({completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 999}})
  })
  
  /* test 11
  1) The test should check the completed property and rover mode for accuracy.

  2) The rover has two modes that can be passed as values to a mode change command: ‘LOW_POWER’ and  ‘NORMAL’. */
  it("responds correctly to the mode change command", function() {
    let roverObject = new Rover(999)
    let commandObjects = [new Command('MODE_CHANGE', 'LOW_POWER')]
    let messageObject = new Message('test message', commandObjects)
    let roverResponse = roverObject.receiveMessage(messageObject)

    expect(roverResponse.results[0].completed).toBe(true)
    expect(roverObject.mode).toBe('LOW_POWER')

  })

  /* test 12
  1) The test should check the completed property for accuracy and confirm that the rover’s
  position did not change.
  
  2) Use the Rover Modes table for guidance on how to handle move commands in different modes.
  */
  it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
    let roverObject = new Rover(999)
    let commandObjects = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 2000)]
    let messageObject = new Message('test message', commandObjects)
    let roverResponse = roverObject.receiveMessage(messageObject)

    expect(roverResponse.results[1].completed).toBe(false)
    expect(roverObject.position).not.toBe(2000) //expect(roverObject.position).toBe(999)
  } )

  /* test 13
  1) A MOVE command will update the rover’s position with the position value in the command.
  */
  it("responds with the position for the move command", function() {
    let roverObject = new Rover(999)
    let commandObjects = [new Command('MOVE', 2000)]
    let messageObject = new Message('test message', commandObjects)
    let roverResponse = roverObject.receiveMessage(messageObject)

    expect(roverResponse.results[0].completed).toBe(true)
    expect(roverObject.position).toBe(2000)
  })

});
