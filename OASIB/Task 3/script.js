function convertTemperature() {

    // Get input value

    let temperature =
        parseFloat(
            document.getElementById("temperature").value
        );


    // Get selected unit

    let unit =
        document.getElementById("unit").value;


    // Get error element

    let error =
        document.getElementById("error");


    // Check if input is empty

    if (isNaN(temperature)) {

        error.innerHTML =
            "Please enter a temperature.";

        return;

    }


    // Clear previous error

    error.innerHTML = "";


    let celsius;
    let fahrenheit;
    let kelvin;



    // =========================
    // CELSIUS
    // =========================

    if (unit === "celsius") {

        celsius = temperature;

        fahrenheit =
            (temperature * 9 / 5) + 32;

        kelvin =
            temperature + 273.15;

    }



    // =========================
    // FAHRENHEIT
    // =========================

    else if (unit === "fahrenheit") {

        fahrenheit = temperature;

        celsius =
            (temperature - 32) * 5 / 9;

        kelvin =
            celsius + 273.15;

    }



    // =========================
    // KELVIN
    // =========================

    else if (unit === "kelvin") {

        kelvin = temperature;

        celsius =
            temperature - 273.15;

        fahrenheit =
            (celsius * 9 / 5) + 32;

    }



    // =========================
    // SHOW RESULTS
    // =========================

    document.getElementById("celsius").innerHTML =
        celsius.toFixed(2) + " °C";


    document.getElementById("fahrenheit").innerHTML =
        fahrenheit.toFixed(2) + " °F";


    document.getElementById("kelvin").innerHTML =
        kelvin.toFixed(2) + " K";

}