document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const destination = form.destination.value;
      const date = form.date.value;
      const people = form.people.value;
  
      if (!name || !email || !phone || !destination || !date || !people) {
        alert('Please fill in all fields.');
        return;
      }
  
      alert(`Thank you, ${name}! Your trip to ${destination} is booked.`);
      form.reset();
    });
  });