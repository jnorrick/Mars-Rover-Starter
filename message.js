class Message {
   constructor(name, commands) {
      this.name = name
      if (!name) {
         throw Error("Name Required.");
         }
      this.commands = commands
   }
}

module.exports = Message;