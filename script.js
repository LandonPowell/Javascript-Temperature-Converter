var Input_Text = parseFloat(document.getElementById("input-text").value);
var Input_Units = "°F";
var Output_Units = "°C";

function round(float) {
	return Math.round(float * 1000) / 1000;
}

function temperature_conversion() {
	Input_Text = parseFloat(document.getElementById("input-text").value);
	var Temp = Input_Text;

	switch(Input_Units) { // Convert to degrees C
		/* Note Temp is already assigned */
		case "°F":
			Temp = (Input_Text - 32) / 1.8;
			break;
		case "K":
			Temp = Input_Text - 273.15;
			break;
		default:
			break;
	}

	switch(Output_Units) { // Convert from degrees C
			/* Note Temp is in degrees C */
		case "°F":
			Temp = Temp * 1.8 + 32;
			break;
		case "K":
			Temp = Temp + 273.15;
			break; 
		default:
			break;
	}
	document.getElementById("output-text").value = round(Temp);
}

function button_in_pressed(Pressed_Button) {
	Input_Units = Pressed_Button.value;
	if (!Pressed_Button.hasAttribute("id")) {
		document.getElementById("active-in").removeAttribute("id");
		Pressed_Button.id = "active-in";
	}
	temperature_conversion();
}

function button_out_pressed(Pressed_Button) {
	Output_Units = Pressed_Button.value;
	if (!Pressed_Button.hasAttribute("id")) {
		document.getElementById("active-out").removeAttribute("id");
		Pressed_Button.id = "active-out";
	}
	temperature_conversion();
}
