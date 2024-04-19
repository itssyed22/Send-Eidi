document.getElementById("sendButton").addEventListener("click", function() {
    var name = document.querySelector(".name").value;
    var amounts = document.querySelectorAll('input[type="number"]');
    var total = 0;
    amounts.forEach(function(input, index) {
        if (!isNaN(input.value) && input.value > 0) {
            var multiplier = [10, 20, 50, 100, 500, 1000, 5000][index]; // Get multiplier based on input index
            total += parseFloat(input.value) * multiplier;
        }
    });
    alert("Eid Mubarak😊 " + name + "! You got Eidi from Syed Abdullah of Rs : " +"' " + total + " '");
});
