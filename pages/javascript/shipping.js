const shipping_form = document.getElementById("shipping_form");
const submit_button = document.getElementById("pickup_submit");
const logginid = localStorage.getItem("logged_in");
const repair_request = JSON.parse(localStorage.getItem("restore_item_detail"))
console.log(logginid);

console.log(repair_request,"loosi")

const shipping_arr = JSON.parse(localStorage.getItem("pickup_detail")) || [];

const username = document.getElementById("name");
console.log(username)
const number = document.getElementById("number");
console.log(number)
const email = document.getElementById("email-id");
console.log(email)
const address = document.getElementById("address");
console.log(address)
const landmark = document.getElementById("landmark");
console.log(landmark)
const pincode = document.getElementById("pin-code");
console.log(pincode)
const date = document.getElementById("date")
console.log(date)
const time = document.getElementById("time")
console.log(time)
const pick_up_id = Math.floor(Math.random() * 1000000);

email.value = logginid;
repair_request.forEach(element => {

    if (logginid == element.email) {
 console.log("patiy")

        console.log(element,"nitthi")
        username.value = element.first_name 
        number.value = element.phonenumber
    }

});


shipping_form.addEventListener("submit", (e) => {
    e.preventDefault();
    receivedata()
})

function receive() {
    const user_address = address.value;
    const user_landmark = landmark.value;
    const user_pincode = pincode.value;
    const request_date = date.value;
    const request_time = time.value;

    shipping_arr.push({
        pick_uping_id: pick_up_id,
        user_name: username.value,
        number:number.value,
        email: email.value,
        request_landmark: user_landmark,
        request_address: user_address.value,
        request_pincode: user_pincode.value,
        request_date: request_date.value,
        request_time: request_time.value

    });
    localStorage.setItem("request_pickup",JSON.stringify(shipping_arr))
     window.location.href ="../../pages/track/last.html"
}


shipping_form.addEventListener("submit", (e) => {
    e.preventDefault();
    Email.send({
        // SecureToken :"3a08a71f-87c2-445b-9c68-5897a753d8bc",
        Host: "smtp.elasticemail.com",
        Username: "nitthishris@gmail.com",
        Password: "0EA9A69E9E8FDA478FD3B3C77EC313054E29",
        To: logginid,
        From: "nitthishris@gmail.com",
        Subject: "This is the message from the contact form",
        Body: `My booking id is`
        `  ${localStorage.getItem("logged_in")}`

    }).then((message) => alert(message));
});