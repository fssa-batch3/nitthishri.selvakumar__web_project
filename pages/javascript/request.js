const request_form = document.getElementById("request_form");
const submit_button = document.getElementById("request_submit");
const logginid = localStorage.getItem("logged_in");
console.log(logginid);

const restore_item_arr =
  JSON.parse(localStorage.getItem("restore_item_detail")) || [];

const firstname = document.getElementById("first_name");
const antique_name = document.getElementById("last_name");
const phonenumber = document.getElementById("phone_number");
const category = document.getElementById("category");
const height = document.getElementById("height");
const width = document.getElementById("width");
const sentimental = document.querySelector(".sentimental");
const reason = document.querySelector('input[name="reason"]:checked');
const other_reason = document.getElementById("reason-others");
const speak = document.querySelector('input[name="quote"]:checked');
const image = document.getElementById("file");
const description = document.getElementById("description").value;

// const alphaOnlyInput = document.getElementById('alpha-only-input'),
//   first_name = new RegExp('^[a-zA-Z ]+$')

// if(email==logginid){
//     email = document.getElementById("email").value
// }
// else{
//     alert('you are not log in')
// }
const email = document.getElementById("email");
console.log(email);
email.value = logginid;

request_form.addEventListener("submit", (e) => {
  e.preventDefault();
  getdata();
});

function getdata() {
  const first_name = firstname.value;
  console.log(first_name);
  const thing_name = antique_name.value;
  console.log(last_name);
  console.log(email);
  const phone_number = phonenumber.value;
  console.log(phone_number);
  const cate_gory = category.value;
  console.log(cate_gory);
  const hei_ght = height.value;
  console.log(hei_ght);
  const wid_th = width.value;
  console.log(wid_th);
  const senti_mental = sentimental.value;
  console.log(senti_mental);
  // let rea_son = reason.value
  // console.log(rea_son)
  const other_reasons = other_reason.value;
  console.log(other_reasons);
  // let like_speak = speak.value
  // console.log(like_speak)
  const images = image.value;
  console.log(images);
  const descriptions = description.value;
  console.log(descriptions);

  restore_item_arr.push({
    booking_id: restore_item_arr.length,
    first_name:first_name,
    antique_name:thing_name,
    email: email.value,
    phonenumber: phone_number,
    category: cate_gory,
    height: hei_ght,
    width: wid_th,
    sentimental: senti_mental,
    // "reason": rea_son,
    image: images,
    // "other_reason": other_reasons,
    description: descriptions,
  });
  localStorage.setItem("restore_item_detail", JSON.stringify(restore_item_arr));
  // location.reload()
  window.location.href = "../../pages/track/track.html";
}
