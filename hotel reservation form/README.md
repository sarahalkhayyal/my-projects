# Hotel Reservation Form – JavaScript

## 📝 Project Description

This project is designed to demonstrate the use of JavaScript for form validation and dynamic behavior on a webpage. The goal was to create an interactive **online hotel reservation platform** where users can book rooms through a form, with built-in validation and responsive elements.

## 💻 Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript** (External `Reserve.js` file)

## 📄 Features Implemented

* **Form Fields**:

  * Name (Text input)
  * Phone Number (Telephone input with specific pattern: 05xxxxxxxx)
  * Reservation Start Date (Date input)
  * Reservation End Date (Date input)
  * Country (Dropdown list with at least two countries)
  * City (Dropdown list, dynamically updated based on selected country)
  * Number of Rooms (Numerical input)
  * Submit and Reset Buttons

* **Form Validation**:

  * Ensured all fields are filled before submission
  * Validated phone number format
  * Checked if the start date is after the current date
  * Validated that the end date is after the start date
  * Ensured the number of rooms is at least 1
  * Displayed error messages next to fields with invalid input

* **Dynamic Behavior**:

  * Highlighted fields with a soft green background when editing
  * Dynamically updated the City dropdown based on the selected Country
  * Reset button cleared the form and error messages
  * Confirmation message displayed upon successful submission with booking details

## 👩‍💻 Author

This project was developed individually as part of my Web Technologies course. I was responsible for the design, implementation, and testing of the form and validation features.

## 📁 How to View

1. Download or clone the repository.
2. Open `Reserve.html` in any modern web browser.
3. Link the `Reserve.js` and `Reserve.css` files correctly to ensure full functionality.
