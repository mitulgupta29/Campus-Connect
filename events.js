// Fetch event data and set up filtering
fetch("data/events.json")
  .then(response => response.json())
  .then(data => {
    displayEvents(data);

    document.getElementById("categoryFilter").addEventListener("change", function () {
      const selected = this.value;
      const filtered = selected === "All" ? data : data.filter(e => e.category === selected);
      displayEvents(filtered);

      console.log("Filter applied:", selected); // Optional debug log
    });
  })
  .catch(error => {
    console.error("Error loading events:", error);
  });

// Function to render events on the page
function displayEvents(events) {
  const container = document.getElementById("eventList");
  container.innerHTML = "";

  if (events.length === 0) {
    container.innerHTML = "<p>No events found for this category.</p>";
    return;
  }

  events.forEach(event => {
    const div = document.createElement("div");
    div.className = "event-item";
    div.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Time:</strong> ${event.time}</p>
      <p><strong>Venue:</strong> ${event.venue}</p>
      <p>${event.description}</p>
      <p><strong>Category:</strong> ${event.category}</p>
      <button class="register-btn" disabled>Register</button>
    `;
    container.appendChild(div);
  });
}

