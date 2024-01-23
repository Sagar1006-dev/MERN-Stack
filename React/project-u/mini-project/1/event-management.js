class Person {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  }
  
  class Organizer extends Person {
    constructor(id, name, email) {
      super(id, name, email);
      this.events = [];
    }
  
    createEvent(event) {
      event.organizer = this;
      this.events.push(event);
    }
  }
  
  class Event {
    constructor(id, name, location, date) {
      this.id = id;
      this.name = name;
      this.location = location;
      this.date = date;
      this.organizer = null;
      this.attendees = [];
    }
  
    addAttendee(attendee) {
      this.attendees.push(attendee);
    }
  
    removeAttendee(attendeeId) {
      const index = this.attendees.findIndex((a) => a.id === attendeeId);
      if (index !== -1) {
        this.attendees.splice(index, 1);
      }
    }
  }
  
  class User extends Person {
    constructor(id, name, email) {
      super(id, name, email);
    }
  
    rsvp(event) {
      if (!event.attendees.some((attendee) => attendee.id === this.id)) {
        event.addAttendee(this);
      }
    }
  
    cancelRsvp(eventId) {
      const event = events.find((e) => e.id === eventId);
      if (event) {
        event.removeAttendee(this.id);
      }
    }
  }
  
  class EventManagement {
    constructor() {
      this.events = [];
    }
  
    addEvent(event) {
      this.events.push(event);
    }
  
    removeEvent(eventId) {
      const index = this.events.findIndex((event) => event.id === eventId);
      if (index !== -1) {
        this.events.splice(index, 1);
      }
    }
  
    filterEventsByLocation(location) {
      return this.events.filter((event) => event.location === location);
    }
  
    filterEventsByDate(date) {
      return this.events.filter((event) => event.date.toDateString() === date.toDateString());
    }
  
    sendNotifications(eventId, message) {
      const event = this.events.find((event) => event.id === eventId);
      if (event) {
        event.attendees.forEach((attendee) => {
          console.log(`Notification sent to ${attendee.name}: ${message}`);
        });
      }
    }
  }
  
  // Example usage:
  
  const organizer = new Organizer(1, "John Doe", "john@example.com");
  const user1 = new User(2, "Alice", "alice@example.com");
  const user2 = new User(3, "Bob", "bob@example.com");
  
  const eventManagement = new EventManagement();
  
  const event1 = new Event(1, "Tech Conference", "New York", new Date("2023-11-10"));
  organizer.createEvent(event1);
  
  eventManagement.addEvent(event1);
  user1.rsvp(event1);
  user2.rsvp(event1);
  
  const filteredEvents = eventManagement.filterEventsByLocation("New York");
  console.log("Events in New York:", filteredEvents);
  
  const notificationMessage = "Tech Conference has been updated.";
  eventManagement.sendNotifications(1, notificationMessage);
  
  user2.cancelRsvp(1);
  