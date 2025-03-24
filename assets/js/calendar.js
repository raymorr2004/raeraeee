document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const monthYear = document.getElementById("month-year");
    const prevBtn = document.getElementById("prev-month");
    const nextBtn = document.getElementById("next-month");
  
    let current = new Date(); // Today's date
    let events = []; // Will be filled with data from JSON
  
    // Fetch events from external JSON file
    fetch("assets/data/calendarEvents.json")
      .then((response) => response.json())
      .then((data) => {
        events = data;
        renderCalendar(current);
      });
  
    function renderCalendar(date) {
      const year = date.getFullYear();
      const month = date.getMonth(); // 0-indexed
  
      const firstDay = new Date(year, month, 1).getDay(); // Day of week (0=Sun)
      const daysInMonth = new Date(year, month + 1, 0).getDate();
  
      // Set month/year header
      monthYear.textContent = `${date.toLocaleString("default", {
        month: "long",
      })} ${year}`;
  
      // Clear calendar
      calendar.innerHTML = `
        <div class="calendar-header">Sun</div>
        <div class="calendar-header">Mon</div>
        <div class="calendar-header">Tue</div>
        <div class="calendar-header">Wed</div>
        <div class="calendar-header">Thu</div>
        <div class="calendar-header">Fri</div>
        <div class="calendar-header">Sat</div>
      `;
  
      // Add empty boxes before the 1st
      for (let i = 0; i < firstDay; i++) {
        calendar.innerHTML += `<div class="calendar-day empty"></div>`;
      }
  
      // Fill in the days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(
          day
        ).padStart(2, "0")}`;
  
        // Check if there is an event for this date
        const event = events.find((e) => e.date === fullDate);
  
        // If event exists, add its text and time
        const content = event
          ? `
            <p class="event-text">${event.text}</p>
            <p class="event-time">${event.time}</p>
          `
          : "";
  
        // Add day box
        calendar.innerHTML += `
          <div class="calendar-day">
            <strong>${day}</strong>
            ${content}
          </div>
        `;
      }
    }
  
    // Month navigation buttons
    prevBtn.addEventListener("click", () => {
      current.setMonth(current.getMonth() - 1);
      renderCalendar(current);
    });
  
    nextBtn.addEventListener("click", () => {
      current.setMonth(current.getMonth() + 1);
      renderCalendar(current);
    });
  });
  
  