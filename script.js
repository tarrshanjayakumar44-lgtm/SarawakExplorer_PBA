function validateBooking() {

    let name =
        document.getElementById("name").value.trim();

    let email =
        document.getElementById("email").value.trim();

    let phone =
        document.getElementById("phone").value.trim();

    let travelDate =
        document.getElementById("travelDate").value;

    let participants =
        document.getElementById("participants").value;

    let tourPackage =
        document.getElementById("tourPackage").value;

    let consent =
        document.getElementById("consent").checked;


    clearErrors();

    let valid = true;


    if (name === "") {

        document.getElementById("nameError").innerHTML =
            "Please enter your full name.";

        valid = false;
    }


    if (email === "") {

        document.getElementById("emailError").innerHTML =
            "Please enter your email address.";

        valid = false;
    }


    if (phone === "") {

        document.getElementById("phoneError").innerHTML =
            "Please enter your phone number.";

        valid = false;
    }


    if (travelDate === "") {

        document.getElementById("dateError").innerHTML =
            "Please select your travel date.";

        valid = false;
    }


    if (participants === "") {

        document.getElementById("participantsError").innerHTML =
            "Please enter the number of participants.";

        valid = false;
    }


    if (tourPackage === "") {

        document.getElementById("packageError").innerHTML =
            "Please select a tour package.";

        valid = false;
    }


    if (!consent) {

        document.getElementById("consentError").innerHTML =
            "Please provide consent before submitting the booking.";

        valid = false;
    }


    if (valid === true) {

        document.getElementById("successMessage").style.display =
            "block";

        alert("Booking submitted successfully!");

    }

}