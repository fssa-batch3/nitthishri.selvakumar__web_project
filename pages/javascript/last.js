const pickup_details=JSON.parse(localStorage.getItem("pickup_detail"))
console.log(pickup_details);
const last_login=localStorage.getItem("logged_in")
console.log(last_login)

const url = window.location.search;

const urls = new URLSearchParams(url);

const id = urls.get("booking_id");
console.log(id)


let collecting_detail=document.getElementById("collect")
pickup_details.forEach(element => {
    if(id==element.book_id){
        if(last_login==element.email){
                collecting_detail.innerHTML=`Your items will be picked up on ${element.request_date},${"  "}${element.request_time}  at  ${element.request_address}`
        }
    }
});
