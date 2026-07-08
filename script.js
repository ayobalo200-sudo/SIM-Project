const reportBtn = document.getElementById("reportBtn");
const reportForm = document.getElementById("reportForm");
const submitBtn = document.getElementById("submitBtn");
const success = document.getElementById("success");
const refNumber = document.getElementById("refNumber");

reportBtn.addEventListener("click", function () {
    reportForm.style.display = "block";
    reportBtn.style.display = "none";
});

submitBtn.addEventListener("click", function () {

    const randomNumber = Math.floor(Math.random() * 9000) + 1000;

    refNumber.innerHTML = "SIM-" + randomNumber;

    reportForm.style.display = "none";
    success.style.display = "block";

});