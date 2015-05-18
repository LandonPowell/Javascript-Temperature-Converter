var Input_Text = parseFloat(document.getElementById("input-text").value);
var Input_Units = "°F";
var Output_Units = "°C";

function round(float) { 
    return Math.round(float * 1000)/1000;
}

function temperature_conversion() {
    Input_Text = parseFloat(document.getElementById("input-text").value);

    if (Input_Units === "°F") {
        if (Output_Units === "°F") {
            document.getElementById("output-text").value = round(Input_Text);
        }
        if (Output_Units === "°C") {
            document.getElementById("output-text").value = round((Input_Text - 32) * 5/9);
        }
        if (Output_Units === "K") {
            document.getElementById("output-text").value = round(((Input_Text - 32) * 5/9) + 273.15);
        }
    }
    if (Input_Units === "°C") {
        if (Output_Units === "°F") {
            document.getElementById("output-text").value = round((Input_Text * 9/5) + 32);
        }
        if (Output_Units === "°C") {
            document.getElementById("output-text").value = round(Input_Text);
        }
        if (Output_Units === "K") {
            document.getElementById("output-text").value = round(Input_Text + 273.15);
        }
    }
    if (Input_Units === "K") {
        if (Output_Units === "°F") {
            document.getElementById("output-text").value = round((Input_Text * 9/5) - 459.67);
        }
        if (Output_Units === "°C") {
            document.getElementById("output-text").value = round(Input_Text - 273);
        }
        if (Output_Units === "K") {
            document.getElementById("output-text").value = round(Input_Text);
        }
    }
}

function button_in_pressed(Pressed_Button) {
    Input_Units = Pressed_Button.value;
    if (Pressed_Button.hasAttribute("id") === false) {
        document.getElementById("active-in").removeAttribute("id");
        Pressed_Button.id = "active-in";
      }
    temperature_conversion();
}

function button_out_pressed(Pressed_Button) {
    Output_Units = Pressed_Button.value;
    if (Pressed_Button.hasAttribute("id") === false) {
        document.getElementById("active-out").removeAttribute("id");
        Pressed_Button.id = "active-out";
    }
    temperature_conversion();
}
