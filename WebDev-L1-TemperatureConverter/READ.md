# Temperature Converter

A responsive and user-friendly Temperature Converter built using HTML5, CSS3, and Vanilla JavaScript.

## OIBSIP Internship

This project is completed as part of the **Oasis Infobyte Web Development Internship (OIBSIP)**.

**Level 1 – Task 3: Temperature Converter**

## Features

- Convert temperatures between Celsius, Fahrenheit, and Kelvin.
- Accept numeric temperature input.
- Validate empty input.
- Validate non-numeric input.
- Prevent temperatures below absolute zero.
- Display converted temperatures clearly.
- Responsive design for desktop, tablet, and mobile.
- Simple and professional user interface.
- Hover and focus effects.
- No frameworks, backend, or database required.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## Conversion Formulas

### Celsius to Fahrenheit

°F = (°C × 9/5) + 32

### Celsius to Kelvin

K = °C + 273.15

### Fahrenheit to Celsius

°C = (°F - 32) × 5/9

### Kelvin to Celsius

°C = K - 273.15

## Absolute Zero Validation

The converter validates the minimum possible temperature:

- Celsius: -273.15°C
- Fahrenheit: -459.67°F
- Kelvin: 0 K

Temperatures below these values are rejected with a user-friendly error message.

## Project Structure

Temperature-Converter/

├── index.html  
├── style.css  
├── logic.js  
└── README.md

## How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in any modern web browser.
4. Enter a temperature.
5. Select the input unit.
6. Click the **Convert Temperature** button.

No installation or server is required.

## Example

For an input of **100°C**:

- Celsius: 100°C
- Fahrenheit: 212°F
- Kelvin: 373.15 K

## Learning Objectives

This project helped me practice:

- HTML semantic elements
- CSS responsive design
- JavaScript DOM manipulation
- Event handling
- Conditional statements
- Input validation
- Temperature conversion formulas
- Creating a responsive web interface

## Author

Developed as part of the OIBSIP Web Development Internship.
