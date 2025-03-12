//update event date, time, and location dynamically
const eventDate = document.getElementById("event-date");
const eventTime = document.getElementById("event-time");
const eventLocation = document.getElementById("event-Location");
//Example data
const eventData = {
  date: "Saturday, 15th February 2025",
  time: "8:00AM",
  Location: "Mai Tikau Palace, Sabon Garin Nangere, Yobe State.",
};
eventDate.textContent = eventData.date;
eventTime.textContent = eventData.time;
eventLocation.textContent = eventData.Location;
