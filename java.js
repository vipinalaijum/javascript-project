function submitForm() {
    // Validate the form data before submission (You can add more robust validation)
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var bloodGroup = document.getElementById("bloodGroup").value;

    if (name.trim() === "" || email.trim() === "" || bloodGroup === "") {
        alert("Please fill in all the required fields.");
        return;
    }

    // For demonstration purposes, you can perform further actions (e.g., send data to a server)
    alert("Thank you for donating blood!");
    document.getElementById("donationForm").reset();
}
