class Rover {
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
   //returns an object with at least 2 properties = original Message and array of results
   receiveMessage(message) {
      let message = message.name
      let results = []
      let response = {message, results} //contains original message, and an array of results objects.
      // let results = this.commandType
   }

   //  message is a Message object
   //  Returns an object containing at least two properties:
   //      message: the name of the original Message object
   //      results: an array of results. Each element in the array is an object that corresponds to one Command in message.commands.
   //  Updates certain properties of the rover object
   //      Details about how to respond to different commands are in the 
   // receiveMessage(message) {
   //    let message = message.name
   //    let response = {message.name, results[]}
   // } 

   //if Command = 'STATUS_CHECK' = output current status of object Rover
   //if Command = 'MOVE' -this will need to update rover.position
   //if Command = 'MODE_CHANGE' - this changes to either 'LOW_POWER' or 'NORMAL'
   //Command message will always display {completed: true} first

//    return response
};

module.exports = Rover;