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