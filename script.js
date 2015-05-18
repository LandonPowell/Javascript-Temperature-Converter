var Input_Text = parseFloat(document.getElementById("input-text").value);
var Input_Units = "°F";
var Output_Units = "°C";

function round(float) { 
    return Math.round(float * 1000)/1000;
}

function temperature_conversion() {
    Input_Text = parseFloat(document.getElementById("input-text").value);
    var result;
    
    if (Input_Units === Input_Text) {
        result = round(Input_Text);
        document.getElementById("output-text").value = result;
        return;
    }
    
    function FtoC(num) { return (num-32) * 5/9; }
    function CtoF(num) { return (num * 9/5) + 32; }
    function CtoK(num) { return num + 273.15; }
    function KtoC(num) { return num + 273.15; }
    
    switch (Input_Units) {
        case "ºF":
            switch (Output_Units) {
                case "ºC":
                    result = FtoC(Input_Text);
                    break;
                case "ºK":
                    result = CtoK(FtoC(Input_Text));
                    break;
            }
            break;
       
        case "ºC":
            switch (Output_Units) {
                case "ºF":
                    result = CtoF(Input_Text);
                    break;
                case "ºK":
                    result = CtoK(Input_Text);
                    break;
            }
            break;


        case "ºK":
            switch (Output_Units) {
                case "ºF":
                    result = CtoF(KtoC(Input_Text));
                    break;
                case "ºC":
                    result = KtoC(Input_Text);
                    break;
            }
            break;
    }
    
    document.getElementById("output-text").value = round(result);
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
