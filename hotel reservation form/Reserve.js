// Reserve.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservationForm");
    const country = document.getElementById("country");
    const city = document.getElementById("city");
    const confirmationMessage = document.getElementById("confirmationMessage");
  
    const errors = {
      name: document.getElementById("nameError"),
      phone: document.getElementById("phoneError"),
      startDate: document.getElementById("startDateError"),
      endDate: document.getElementById("endDateError"),
      country: document.getElementById("countryError"),
      city: document.getElementById("cityError"),
      rooms: document.getElementById("roomsError")
    };
  
    const cityOptions = {
      "Saudi Arabia": ["Riyadh", "Jeddah"],
      "UAE": ["Dubai", "Abu Dhabi"]
    };
  
    // Dynamically update city dropdown when a country is selected
    country.addEventListener("change", function () {
      const selectedCountry = country.value;
      city.innerHTML = `<option value="">Select City</option>`; // Reset list
  
      if (cityOptions[selectedCountry]) {
        cityOptions[selectedCountry].forEach(cityName => {
          const option = document.createElement("option");
          option.value = cityName;
          option.textContent = cityName;
          city.appendChild(option);
        });
      }
    });
  
    // Form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearErrors();
      confirmationMessage.textContent = "";
  
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const startDateInput = document.getElementById("startDate").value;
      const endDateInput = document.getElementById("endDate").value;
      const selectedCountry = country.value;
      const selectedCity = city.value;
      const rooms = parseInt(document.getElementById("rooms").value);
  
      const startDate = new Date(startDateInput);
      const endDate = new Date(endDateInput);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
  
      let isValid = true;
  
      if (name === "") {
        showError("name", "Name is required.");
        isValid = false;
      }
  
      if (!/^05\d{8}$/.test(phone)) {
        showError("phone", "Phone must match 05xxxxxxxx.");
        isValid = false;
      }
  
      if (!startDateInput || startDate <= today) {
        showError("startDate", "Start date must be after today.");
        isValid = false;
      }
  
      if (!endDateInput || endDate <= startDate) {
        showError("endDate", "End date must be after the start date.");
        isValid = false;
      }
  
      if (selectedCountry === "") {
        showError("country", "Please select a country.");
        isValid = false;
      }
  
      if (selectedCity === "") {
        showError("city", "Please select a city.");
        isValid = false;
      }
  
      if (isNaN(rooms) || rooms < 1) {
        showError("rooms", "At least 1 room must be selected.");
        isValid = false;
      }
  
      if (isValid) {
        console.log("Form is valid, showing confirmation"); //check
        const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        confirmationMessage.textContent = `${name}, thank you for your booking. You will be staying for ${days} days.`;
        city.innerHTML = `<option value="">Select City</option>`; // Reset city dropdown
      }
    });
  
    // Reset form behavior
    form.addEventListener("reset", function () {
      clearErrors();
      confirmationMessage.textContent = "";
      city.innerHTML = `<option value="">Select City</option>`; // Reset city dropdown
    });
  
    // Helper to show error
    function showError(field, message) {
      errors[field].textContent = message;
    }
  
    // Helper to clear all errors
    function clearErrors() {
      for (const err in errors) {
        errors[err].textContent = "";
      }
    }
  });
  