
// <form action="../index.html">
// <input type="text" id="name" placeholder="Name" required> <br>
// <input type="text" id="email" placeholder="Email" required> <br>
// <textarea id="message" name="message" rows="6" cols="75" placeholder="Message"></textarea> <br>
/* <input type="number" id="book_id" placeholder="booking_id"><br> */

// <button id="sub">Submit</button>
// </form>

let url = window.location.search;

let urls = new URLSearchParams(url)


let id = urls.get("booking_id")
console.log(id)

let booking_id=document.getElementById("book_id")
booking_id.value = id;
let last_email=localStorage.getItem("logged_in");
let submit=document.getElementById("sub");
const user_records = JSON.parse(localStorage.getItem("user_list"));


// let messages=document.getElementById("message").value;


submit.addEventListener("click",function(e){
    e.preventDefault()
    Email.send({
      // SecureToken :"3a08a71f-87c2-445b-9c68-5897a753d8bc",
      Host : "smtp.elasticemail.com",
      Username : "nitthishris@gmail.com",
      Password : "0EA9A69E9E8FDA478FD3B3C77EC313054E29",
      To : 'nitthishris@gmail.com',
      From : "nitthishris@gmail.com",
      Subject : "This is the message from the contact form",
      Body :"My booking id is"+" " + ' " '+ id + ' " '+localStorage.getItem("logged_in") + "My question is" + document.getElementById("message").value 
  }).then(
    
    message => alert(message)

  );
});
