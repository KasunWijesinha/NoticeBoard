function showDateTime() {
      var now = new Date();
      // Date
      var date = now.toLocaleDateString("en-US",
         {  weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"});
      
      // Time
      var time = now.toLocaleTimeString("en-US");

      document.getElementById("datetime").textContent = date + " | " + time;
    }

    // Run now
    showDateTime();

    // Update every second
    setInterval(showDateTime, 1000);

    const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    themeBtn.textContent =
        document.body.classList.contains("dark")
            ? "☀️"
            : "🌙";
});