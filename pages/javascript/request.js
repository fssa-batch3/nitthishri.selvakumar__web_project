let submit_button = document.getElementById("request_submit");
 
let restore_item_arr = JSON.parse(localStorage.getItem("restore_item_detail")) || [];

submit_button.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("nitthi")

    let firstname = document.getElementById("first_name").value
    console.log(firstname)
    let lastname = document.getElementById("last_name").value
    console.log(lastname)
    let email = document.getElementById("email").value
    console.log(email)
    let phonenumber = document.getElementById("phone_number").value
    console.log(phonenumber)
    let category = document.getElementById("category").value
    console.log(category)
    let height = document.getElementById("height").value
    console.log(height)
    let width = document.getElementById("width").value
    console.log(width)
    let sentimental = document.getElementById("sentimental").value
    console.log(sentimental)
    let reason = document.querySelector('input[name="reason "]:checked');
    console.log(reason)
    let other_reason = document.getElementById("valuable").value
    console.log(other_reason)
    let image=document.getElementById("file").value
    console.log(image)
    let description = document.getElementById("description").value
    console.log(description)

    restore_item_arr.push({
        "first_name": firstname,
        "last_name": lastname,
        "email": email,
        "phonenumber": phonenumber,
        "category": category,
        "height": height,
        "width": width,
        "sentimental": sentimental,
        "reason": reason,
        "image":image,
        "other_reason": other_reason,
        "description": description

    })

    localStorage.setItem("restore_item_detail", JSON.stringify(restore_item_arr))
})