# Temperature Converter

A simple, professional, and responsive Temperature Converter built using **HTML5, CSS3, and Vanilla JavaScript**.

This project was created as part of the **Oasis Infobyte Web Development Internship (OIBSIP)**.

## OIBSIP Task

**Web Development Level 1 - Task 3: Temperature Converter**

## Features

- Convert temperatures between Celsius, Fahrenheit, and Kelvin.
- Accept numeric temperature input.
- Validate empty input.
- Validate non-numeric input.
- Validate absolute-zero temperature limits.
- Display converted temperatures clearly.
- Responsive design for desktop, tablet, and mobile devices.
- Clean and professional user interface.
- Hover and focus effects.
- Subtle animations.
- Accessible labels and semantic HTML.
- Uses only HTML5, CSS3, and Vanilla JavaScript.
- No frameworks, backend, or database required.

## Technologies Used

- **HTML5** - Structure of the webpage
- **CSS3** - Styling and responsive design
- **Vanilla JavaScript** - Temperature conversion, validation, and DOM manipulation

## Conversion Formulas

### Celsius to Fahrenheit

```text
°F = (°C × 9/5) + 32
```

### Celsius to Kelvin

```text
K = °C + 273.15
```

### Fahrenheit to Celsius

```text
°C = (°F - 32) × 5/9
```

### Kelvin to Celsius

```text
°C = K - 273.15
```

The converter first converts the entered temperature into Celsius and then calculates the Fahrenheit and Kelvin values.

## Absolute Zero Validation

The converter prevents temperatures below absolute zero.

- Celsius cannot be below **-273.15°C**
- Fahrenheit cannot be below **-459.67°F**
- Kelvin cannot be below **0 K**

If a temperature below the allowed limit is entered, the application displays a clear error message.

## Input Validation

The application checks for:

### Empty Input

```text
Please enter a temperature.
```

### Non-Numeric Input

```text
Please enter a valid numeric temperature.
```

### Invalid Celsius Temperature

```text
Celsius temperature cannot be below -273.15°C.
```

### Invalid Fahrenheit Temperature

```text
Fahrenheit temperature cannot be below -459.67°F.
```

### Invalid Kelvin Temperature

```text
Kelvin temperature cannot be below 0 K.
```

## Project Structure

```text
Temperature-Converter/
│
├── index.html
├── style.css
├── logic.js
└── README.md
```

## How to Run

No installation, server, or additional software is required.

1. Download or clone this repository.
2. Open the `Temperature-Converter` folder.
3. Open `index.html` in a web browser.
4. Enter a temperature value.
5. Select the unit from the dropdown.
6. Click the **Convert Temperature** button.
7. The converted temperatures will be displayed.

## Example

If the user enters:

```text
100°C
```

The converter displays:

```text
Celsius: 100°C
Fahrenheit: 212°F
Kelvin: 373.15 K
```

## Responsive Design

The application is designed to work on:

- Desktop
- Laptop
- Tablet
- Mobile phones

The layout automatically adjusts according to the screen size.

## Learning Objectives

This project helped me practice:

- HTML5 semantic elements
- CSS3 styling
- Responsive web design
- JavaScript DOM manipulation
- JavaScript event handling
- `addEventListener()`
- Conditional statements
- Input validation
- Mathematical calculations
- Temperature conversion formulas
- Displaying dynamic content using JavaScript

## Project Purpose

The purpose of this project is to create a practical temperature conversion application while improving my understanding of frontend web development and JavaScript fundamentals.

## Internship

**Oasis Infobyte Web Development Internship (OIBSIP)**

**Web Development Level 1 - Task 3: Temperature Converter**

## Author

Developed as part of the OIBSIP Web Development Internship.
