let request_form = document.getElementById("request_form");
let submit_button = document.getElementById("request_submit");
let logginid = localStorage.getItem("logged_in");
console.log(logginid)


let restore_item_arr = JSON.parse(localStorage.getItem("restore_item_detail")) || [];

let firstname = document.getElementById("first_name")
let antique_name = document.getElementById("last_name")
let phonenumber = document.getElementById("phone_number")
let category = document.getElementById("category")
let height = document.getElementById("height")
let width = document.getElementById("width")
let sentimental = document.querySelector(".sentimental")
let reason = document.querySelector('input[name="reason"]:checked');
let other_reason = document.getElementById("reason-others")
let speak = document.querySelector('input[name="quote"]:checked')
let image = document.getElementById("file")
let description = document.getElementById("description").value


// const alphaOnlyInput = document.getElementById('alpha-only-input'),
//   first_name = new RegExp('^[a-zA-Z ]+$')

// if(email==logginid){
//     email = document.getElementById("email").value
// }
// else{
//     alert('you are not log in')
// }
let email = document.getElementById("email")
console.log(email);
email.value = logginid

request_form.addEventListener("submit", function (e) {

    e.preventDefault();
    getdata();
})


function getdata() {
    let first_name = firstname.value
    console.log(first_name)
    let last_name = antique_name.value
    console.log(last_name)
    console.log(email)
    let phone_number = phonenumber.value
    console.log(phone_number)
    let cate_gory = category.value
    console.log(cate_gory)
    let hei_ght = height.value
    console.log(hei_ght)
    let wid_th = width.value
    console.log(wid_th)
    let senti_mental = sentimental.value
    console.log(senti_mental)
    // let rea_son = reason.value
    // console.log(rea_son)
    let other_reasons = other_reason.value
    console.log(other_reasons)
    // let like_speak = speak.value
    // console.log(like_speak)
    let images = image.value
    console.log(images)
    let descriptions = description.value
    console.log(descriptions)

    restore_item_arr.push({
        "booking_id": restore_item_arr.length,
        "first_name": first_name,
        "antique_name": antique_name,
        "email": email.value,
        "phonenumber": phone_number,
        "category": cate_gory,
        "height": hei_ght,
        "width": wid_th,
        "sentimental": senti_mental,
        // "reason": rea_son,
        "image": images,
        // "other_reason": other_reasons,
        "description": descriptions

    })
    localStorage.setItem("restore_item_detail", JSON.stringify(restore_item_arr))
    // location.reload()
    window.location.href = "../../pages/track/track.html";
     
    
}