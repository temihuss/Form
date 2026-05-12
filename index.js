let form = document.getElementById("studentForm")
let display = document.getElementById("display")


// AGE CALCULATION

let dobInput = document.getElementById("dob")
let ageInput = document.getElementById("age")

dobInput.addEventListener("change", function () {

    let dobDate = new Date(dobInput.value)

    let today = new Date()

    let age =
        today.getFullYear() -
        dobDate.getFullYear()

    let monthDifference =
        today.getMonth() -
        dobDate.getMonth()

    // CHECK IF BIRTHDAY HASN'T HAPPENED YET

    if (
        monthDifference < 0 ||

        (
            monthDifference === 0 &&
            today.getDate() < dobDate.getDate()
        )
    ) {
        age--
    }

    ageInput.value = age
})


// FORM SUBMIT

form.addEventListener("submit", function (event) {

    event.preventDefault()

    // GET VALUES

    let name =
        document.getElementById("firstName")
        .value
        .trim()

    let dob =
        document.getElementById("dob")
        .value

    let email =
        document.getElementById("email")
        .value
        .trim()

    let phone =
        document.getElementById("phone")
        .value
        .trim()

    let password =
        document.getElementById("Pwd")
        .value

    let age =
        document.getElementById("age")
        .value

    let color =
        document.getElementById("color")
        .value

    let marks =
        document.getElementById("marks")
        .value

    let portfolio =
        document.getElementById("portfolio")
        .value
        .trim()

    let photo =
        document.getElementById("photo")
        .value

    let search =
        document.getElementById("search")
        .value
        .trim()

    let address =
        document.getElementById("address")
        .value
        .trim()


    // REGEX

    let phoneRegex =
        /^(\+251|251|0)9\d{8}$/

    let emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    let passwordRegex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/

    let portfolioRegex =
        /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-z]{2,}(\/\S*)?$/


    // REQUIRED FIELDS

    if (
        name === "" ||
        dob === "" ||
        email === "" ||
        phone === "" ||
        password === ""
    ) {

        alert("Please fill all required fields")

        return
    }


    // PHONE VALIDATION

    if (!phoneRegex.test(phone)) {

        alert(
            "Invalid Ethiopian phone number"
        )

        return
    }


    // EMAIL VALIDATION

    if (!emailRegex.test(email)) {

        alert(
            "Invalid Email Address"
        )

        return
    }


    // PASSWORD VALIDATION

    if (!passwordRegex.test(password)) {

        alert(
            "Password must contain:\n" +
            "- One uppercase letter\n" +
            "- One lowercase letter\n" +
            "- One digit\n" +
            "- One special character\n" +
            "- Minimum 12 characters"
        )

        return
    }


    // PORTFOLIO VALIDATION

    if (
        portfolio !== "" &&
        !portfolioRegex.test(portfolio)
    ) {

        alert(
            "Invalid Portfolio URL"
        )

        return
    }


    // GENDER VALIDATION

    let gender = ""

    let genders =
        document.getElementsByName("gender")

    for (let i = 0; i < genders.length; i++) {

        if (genders[i].checked) {

            gender = genders[i].value
        }
    }

    if (gender === "") {

        alert("Please select gender")

        return
    }


    // COURSES VALIDATION

    let courses = ""

    let courseCount = 0

    if (document.getElementById("cs").checked) {

        courses += "CS "

        courseCount++
    }

    if (document.getElementById("is").checked) {

        courses += "IS "

        courseCount++
    }

    if (document.getElementById("swe").checked) {

        courses += "SWE "

        courseCount++
    }

    if (courseCount < 2) {

        alert(
            "Please select at least 2 courses"
        )

        return
    }


    // ADDRESS VALIDATION

    if (address === "") {

        alert("Please enter address")

        return
    }


    // DISPLAY OUTPUT

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

        "Address: " + address


    // DISPLAY INSIDE TEXTAREA

    display.value = output

    alert("Form Submitted Successfully!")
})


// RESET EVENT

form.addEventListener("reset", function () {

    display.value = ""

    ageInput.value = ""
})