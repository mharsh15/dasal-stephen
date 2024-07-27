// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  // Register an event handler
  eventList = []
  on(eventName, callback) {
    this.eventList.push({ event: eventName, callback })
    //console.log(this.eventList)
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const eventList = this.eventList.filter((event) => {
      return event.event === eventName
    })

    console.log(eventList)
    eventList.forEach((event) => {
      event.callback()
    })

  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    const excludeEventArray = this.eventList.filter((event) => {
      return event.event !== eventName
    })

    this.eventList = excludeEventArray
  }
}


function testOne() {
  const events = new Events();

  const cb1 = () => {
    console.log("clicked 1")
  }
  const cb2 = () => {
    console.log("hover 2")
  }

  events.on('click', cb1);
  events.trigger('click');
  events.on('hover', cb2);
  events.trigger('click');
  events.trigger('hover');

}
//testOne()

module.exports = Events;
