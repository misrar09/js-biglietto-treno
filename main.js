//Geting input from the users:

const travelingDistance = parseFloat(prompt("Please insert the number of kilometers you want to travel?"));
const passengerAge = parseInt(prompt("Please insert your age"));


//Cost of travelling per Kilometer
const pricePerKm = 0.21;


//Discount types
const minorsDiscount = 0.20;
const eldersDiscount = 0.40;


//Calculation:
let finalPrice;

if (isNaN(travelingDistance) || isNaN(passengerAge)) {
    alert("Please insert the values in numbers");
}

else
    if (passengerAge <= 17) {
        finalPrice = ((pricePerKm * travelingDistance) * (1 - minorsDiscount))
    }

    else
        if (passengerAge >= 65) {
            finalPrice = ((pricePerKm * travelingDistance) * (1 - eldersDiscount))

        }

        else {
            finalPrice = (pricePerKm * travelingDistance)
        }


//Output on the page:
document.getElementById("price").innerHTML = `Your Ticket price is:  ${finalPrice.toFixed(2)} euros only`

