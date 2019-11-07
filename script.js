// JavaScript source code
function idCard() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    document.getElementById("postAge").innerHTML = "Age: " + age;
    document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
    document.getElementById("postAddress").innerHTML = address;
}