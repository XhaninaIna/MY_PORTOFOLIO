import "./Events.css";
export default function Events() {
  return (
    <section className="events" id="eventsSection">
      <p>My Events</p>
      <div class="calendar" id="calendar"></div>
      <EventForm />
      <EventSearch />
      <EventList />
    </section>
  );
}
function EventForm() {
  return (
    <div class="add-event-form">
      <h3>Add a New Event*:</h3>
      <form id="eventForm">
        <label for="eventTitle">Event Title*:</label>
        <input type="text" id="eventTitle" placeholder="Event Title" />
        <label for="eventDesc">Event Description*:</label>
        <input type="text" id="eventDesc" placeholder="Event Description" />
        <label for="eventDate">Event Date*:</label>
        <input type="date" id="eventDate" />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}
function EventSearch() {
  return (
    <div class="event-search">
      <h3>Search an event*:</h3>
      <input type="text" id="searchInput" placeholder="Search an event..." />
    </div>
  );
}
function EventList() {
  return (
    <div class="event-list">
      <h3>Event List*:</h3>
      <ul id="eventList"></ul>
    </div>
  );
}
