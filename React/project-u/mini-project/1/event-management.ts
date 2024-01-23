interface Person {
    id: number;
    name: string;
    email: string;
  }
  
  class Organizer implements Person {
    constructor(public id: number, public name: string, public email: string) {}
  
    createEvent(event: Event): void {
      event.organizer = this;
    }
  }
  
  interface Event {
    id: number;
    name: string;
    location: string;
    date: Date;
    organizer: Organizer | null;
    attendees: Person[];
    addAttendee(attendee: Person): void;
    removeAttendee(attendeeId: number): void;
  }
  
  class User implements Person {
    constructor(public id: number, public name: string, public email: string) {}
  
    rsvp(event: Event): void {
      if (!event.attendees.some((attendee) => attendee.id === this.id)) {
        event.addAttendee(this);
      }
    }
  
    cancelRsvp(eventId: number): void {
      const event = events.find((e) => e.id === eventId);
      if (event) {
        event.removeAttendee(this.id);
      }
    }
  }
  
  class EventManagement {
    private events: Event[] = [];
  
    addEvent(event: Event): void {
      this.events.push(event);
    }
  
    removeEvent(eventId: number): void {
      const index = this.events.findIndex((event) => event.id === eventId);
      if (index !== -1) {
        this.events.splice(index, 1);
      }
    }
  
    filterEventsByLocation(location: string): Event[] {
      return this.events.filter((event) => event.location === location);
    }
  
    filterEventsByDate(date: Date): Event[] {
      return this.events.filter((event) => event.date.toDateString() === date.toDateString());
    }
  
    sendNotifications(eventId: number, message: string): void {
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
  
  const event1: Event = {
    id: 1,
    name: "Tech Conference",
    location: "New York",
    date: new Date("2023-11-10"),
    organizer: null,
    attendees: [],
    addAttendee(attendee: Person) {
      this.attendees.push(attendee);
    },
    removeAttendee(attendeeId: number) {
      const index = this.attendees.findIndex((attendee) => attendee.id === attendeeId);
      if (index !== -1) {
        this.attendees.splice(index, 1);
      }
    },
  };
  
  organizer.createEvent(event1);
  
  eventManagement.addEvent(event1);
  user1.rsvp(event1);
  user2.rsvp(event1);
  
  const filteredEvents = eventManagement.filterEventsByLocation("New York");
  console.log("Events in New York:", filteredEvents);
  
  const notificationMessage = "Tech Conference has been updated.";
  eventManagement.sendNotifications(1, notificationMessage);
  
  user2.cancelRsvp(1);
  