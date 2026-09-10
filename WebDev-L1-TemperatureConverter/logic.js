
// Get HTML elements
const temperatureForm = document.getElementById("temperatureForm");

const temperatureInput = document.getElementById("temperature");

const unitSelect = document.getElementById("unit");

const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");

const fahrenheitResult = document.getElementById("fahrenheitResult");

const kelvinResult = document.getElementById("kelvinResult");


// Listen for form submission
temperatureForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get the input value
    const temperatureText = temperatureInput.value.trim();

    // Get the selected unit
    const unit = unitSelect.value;


    // Clear previous error
    errorMessage.textContent = "";


    // ================================
    // 1. Check for empty input
    // ================================

    if (temperatureText === "") {

        showError("Please enter a temperature.");

        return;
    }


    // ================================
    // 2. Convert input to a number
    // ================================

    const temperature = Number(temperatureText);


    // ================================
    // 3. Check for non-numeric input
    // ================================

    if (!Number.isFinite(temperature)) {

        showError("Please enter a valid numeric temperature.");

        return;
    }


    // ================================
    // 4. Absolute-zero validation
    // ================================

    if (
        unit === "celsius" &&
        temperature < -273.15
    ) {

        showError(
            "Celsius temperature cannot be below -273.15°C."
        );

        return;
    }


    if (
        unit === "fahrenheit" &&
        temperature < -459.67
    ) {

        showError(
            "Fahrenheit temperature cannot be below -459.67°F."
        );

        return;
    }


    if (
        unit === "kelvin" &&
        temperature < 0
    ) {

        showError(
            "Kelvin temperature cannot be below 0 K."
        );

        return;
    }


    // ================================
    // 5. Convert input to Celsius
    // ================================

    let celsius;


    if (unit === "celsius") {

        celsius = temperature;

    } else if (unit === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;

    } else if (unit === "kelvin") {

        celsius = temperature - 273.15;
    }


    // ================================
    // 6. Convert Celsius to
    //    Fahrenheit and Kelvin
    // ================================

    const fahrenheit = (celsius * 9 / 5) + 32;

    const kelvin = celsius + 273.15;


    // ================================
    // 7. Display results
    // ================================

    celsiusResult.textContent =
        `${formatTemperature(celsius)} °C`;

    fahrenheitResult.textContent =
        `${formatTemperature(fahrenheit)} °F`;

    kelvinResult.textContent =
        `${formatTemperature(kelvin)} K`;
        document.querySelectorAll(".temperature-box").forEach(box => {
            box.classList.remove("show");
            void box.offsetWidth;
            box.classList.add("show");
        });
});


// ================================
// Show error message
// ================================

function showError(message) {

    errorMessage.textContent = message;

    // Reset previous results
    celsiusResult.textContent = "--";

    fahrenheitResult.textContent = "--";

    kelvinResult.textContent = "--";
    
}



// ================================
// Format temperature
// ================================

function formatTemperature(value) {

    // Avoid displaying -0
    if (Math.abs(value) < 0.000001) {
        value = 0;
    }

    // Show maximum 2 decimal places
    return Number(value.toFixed(2));
}

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
    temperatureInput.value = "";
    celsiusResult.textContent = "--";
    fahrenheitResult.textContent = "--";
    kelvinResult.textContent = "--";
    
});

