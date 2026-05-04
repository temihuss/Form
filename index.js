let form = document.getElementById("studentForm");
let display = document.getElementById("display");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Basic inputs
    let name = document.getElementById("firstName").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("Pwd").value;
    let age = document.getElementById("age").value;

    // Gender
    let gender = "";
    let genders = document.getElementsByName("gender");

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            gender = genders[i].value;
        }
    }

    // Courses
    let courses = "";
    if (document.getElementById("cs").checked) courses += "CS ";
    if (document.getElementById("is").checked) courses += "IS ";
    if (document.getElementById("swe").checked) courses += "SWE ";

    // Other inputs
    let color = document.getElementById("color").value;
    let marks = document.getElementById("marks").value;
    let portfolio = document.getElementById("portfolio").value;
    let photo = document.getElementById("photo").value;
    let search = document.getElementById("search").value;
    let address = document.getElementById("address").value;

    // Output text
    let output =
        "----- Student Registration Data -----\n\n" +
        "Name: " + name + "\n" +
        "Date of Birth: " + dob + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Password: " + password + "\n" +
        "Age: " + age + "\n" +
        "Gender: " + gender + "\n" +
        "Courses: " + courses + "\n" +
        "Favorite Color: " + color + "\n" +
        "Expected Marks: " + marks + "\n" +
        "Portfolio: " + portfolio + "\n" +
        "Photo: " + photo + "\n" +
        "Search: " + search + "\n" +
        "Address: " + address;

    display.value = output;
});

// Reset clears display too
form.addEventListener("reset", function() {
    display.value = "";
});