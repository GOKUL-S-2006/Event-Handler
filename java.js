document.addEventListener("DOMContentLoaded", function () {
    const postButton = document.getElementById("postButton");
    const eventForm = document.getElementById("eventForm");
    const postEventForm = document.getElementById("postEventForm");
    const postsContainer = document.getElementById("postsContainer");

    // Show the form when clicking "Post Event"
    postButton.addEventListener("click", function () {
        eventForm.style.display = eventForm.style.display === "none" ? "block" : "none";
    });

    // Handle form submission
    postEventForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const eventName = document.getElementById("eventName").value;
        const eventDescription = document.getElementById("eventDescription").value;
        const eventDate = document.getElementById("eventDate").value;
        const numMembers = document.getElementById("numMembers").value;
        const uploaderEmail = document.getElementById("uploaderEmail").value; // Get uploader's email

        // Create a new post card
        const postCard = document.createElement("div");
        postCard.classList.add("card", "post-card");

        postCard.innerHTML = `
            <div class="post-header">${uploaderEmail}</div>
            <div class="post-body">
                <h4>${eventName}</h4>
                <p>${eventDescription}</p>
                <p><strong>Deadline:</strong> ${eventDate}</p>
                <p><strong>Members Required:</strong> ${numMembers}</p>
                <button class="interest-btn">Interested</button>
            </div>
        `;

        // Append post to container
        postsContainer.prepend(postCard);

        // Add event listener for "Interested" button
        postCard.querySelector(".interest-btn").addEventListener("click", function () {
            sendEmail(eventName, eventDescription, eventDate, numMembers, uploaderEmail);
        });

        // Reset form and hide it
        postEventForm.reset();
        eventForm.style.display = "none";
    });

    // Function to send email
    function sendEmail(eventName, eventDescription, eventDate, numMembers, uploaderEmail) {
        const emailParams = {
            event_name: eventName,
            event_description: eventDescription,
            event_date: eventDate,
            num_members: numMembers,
            recipient_email: uploaderEmail // Send email to event uploader
        };

        emailjs.send("service_wim75x7", "template_par0dii", emailParams)
            .then(function (response) {
                alert("Email sent successfully to " + uploaderEmail);
            }, function (error) {
                alert("Failed to send email. Error: " + JSON.stringify(error));
            });
    }
});
