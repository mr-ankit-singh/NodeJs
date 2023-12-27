import EventEmitter from 'events'

// Creating Class
class MyEmitter extends EventEmitter { }

// Creating Objects
// You can assign event handlers to your own events with the EventEmitter object.
const myEmitter = new MyEmitter()

// Register Event Listener
myEmitter.on('event' , () => {
    console.log("An event Occured..")
})

// Trigger Event
// To fire an event, use the emit() method.
myEmitter.emit('event')

//-----------------------------------------------

// Trigger only Once
myEmitter.once('register' , () => {
    console.log("Register Successfully")
})

myEmitter.emit('register')


/******************************************************/

const EventEmitter = require("events")

class Emitter extends EventEmitter {}

const myE = new Emitter()

myE.on("event" , () => {
   console.log("Event occured")
})
myE.on("event" , () => {
   console.log("Event occured")
})
myE.on("event" , () => {
   console.log("Event occured")
})

myE.emit("event")