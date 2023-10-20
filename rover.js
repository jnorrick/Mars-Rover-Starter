const Message = require('./message.js');
const Command = require('./command.js');
class Rover {
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }

   receiveMessage(message) {
      let response = {
         message: message.name, 
         results: []
      } 

      for (let commandObjectIndex in message.commands) {
         let commandObject = message.commands[commandObjectIndex]
         if (commandObject.commandType === 'MOVE') {
            //check rover mode to see if 'LOW_POWER'
            if(this.mode === 'LOW_POWER') {
               response.results.push({completed: false})
            } else {
               this.position = commandObject.value
               response.results.push({completed: true})
            }
         } else if (commandObject.commandType === 'STATUS_CHECK') {
            response.results.push({completed: true, roverStatus: {
               mode: this.mode, 
               generatorWatts: this.generatorWatts, 
               position: this.position
            }})
         } else if (commandObject.commandType === 'MODE_CHANGE') {
            this.mode = commandObject.value
            response.results.push({completed: true})
         }
      }

      return response;
   }
};

module.exports = Rover;