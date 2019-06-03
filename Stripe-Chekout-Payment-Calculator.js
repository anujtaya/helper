var domestic_percent = 1.7501;
var international_percent = 2.905;
var flat_fee = 0.30;

//returns the final price value including stripe fee.
function calculate_pricing() {
    var input_amount = document.getElementById("invoice_amount");
    var user_price_value = input_amount.value;
    user_price_value = parseFloat(user_price_value);
    if (document.getElementById("exampleRadios1").checked == true) {
        //domestic customer
        var a = domestic_percent / 100;
        a = parseFloat(a);
        var b = (a * user_price_value) + flat_fee;
        b = parseFloat(b);
        var total = (a * b) + b + user_price_value;
        return (total.toFixed(2));
    } else {
        //international customer 
        var a = international_percent / 100;
        a = parseFloat(a);
        var b = (a * user_price_value) + flat_fee;
        b = parseFloat(b);
        var total = (a * b) + b + user_price_value;
        return (total.toFixed(2));
    }
}