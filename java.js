// Get the button and the form
const postButton = document.getElementById('postButton');
const eventForm = document.getElementById('eventForm');

// Event listener to show the form when the "Post Event" button is clicked
postButton.addEventListener('click', function() {
    eventForm.style.display = 'block'; // Show the form
});

// Form submission handler (to process the event details)
const postEventForm = document.getElementById('postEventForm');
postEventForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get the event details entered by the user
    const eventName = document.getElementById('eventName').value;
    const eventDescription = document.getElementById('eventDescription').value;
    const eventDate = document.getElementById('eventDate').value;
    const numMembers = document.getElementById('numMembers').value;

    // You can now do something with the event details, like saving to a database or sending it via email
    console.log('Event Posted:', {
        name: eventName,
        description: eventDescription,
        deadline: eventDate,
        members: numMembers
    });

    // Optionally, clear the form after submission
    postEventForm.reset();

    // Hide the form after submitting
    eventForm.style.display = 'none';
});
