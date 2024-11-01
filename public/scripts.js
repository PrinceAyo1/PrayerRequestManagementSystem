document
  .getElementById("prayerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Capture input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      // Create a new request element
      const requestElement = document.createElement("div");
      requestElement.classList.add("request");
      requestElement.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Request:</strong> ${message}</p>
    `;

      // Append to requests list
      document.getElementById("requestsList").appendChild(requestElement);

      // Clear the form
      document.getElementById("prayerForm").reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
