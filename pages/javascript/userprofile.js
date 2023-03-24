const img_div = document.querySelector(".profile_img")
const profile_real = document.querySelector(".profile_changing_img")


const file = document.querySelector("#file")
//   let btn=document.querySelector("button")
//   btn.addEventListener("click",()=>{
//     console.log(file) // c:/fakepath/filename.jpg
//   })


const uploadbtn = document.querySelector("#button")
// when we choose file
file.addEventListener('change', function () {
    // this refers to file

    const choosed_file = this.files[0]
    if (choosed_file) {
        const reader = new FileReader()
        // filereader is prdefiden function of js

        reader.addEventListener('load', function () {

            profile_real.setAttribute("src", reader.result)
        })
        reader.readAsDataURL(choosed_file)
        console.log(reader)
    }

})


let user = JSON.parse(localStorage.getItem('user_list'));

console.log(user)

const profile_email = localStorage.getItem("logged_in");

console.log(profile_email);

// first time showing the values in the input field

for (let i = 0; i < user.length; i++) {


    if (user[i].emailid == profile_email) {

        document.getElementById("first_name").value = user[i]["firstname"];
        document.getElementById("last_name").value = user[i]["lastname"];
        document.getElementById("email").value = user[i]["emailid"];
        document.getElementById("phone_number").value = user[i]["phonenumber"];
        document.getElementById("address").value = user[i]["addressvalue"];
        document.getElementById("pin_number").value = user[i]["pin_number"];

        break;
    }
}


// document.getElementById("update").addEventListener("click",(e) =>{
//    if( document.getElementById("email").value == profile_email){
//     e["firstname"]=document.getElementById("first_name").value ;
//     e["lastname"]= document.getElementById("last_name").value ;
//     e["emailid"]=document.getElementById("email").value ;
//     e["addressvalue"]=document.getElementById("address").value ;
//     e["pin_number"]= document.getElementById("address").value ;
//     localStorage.setItem("user_list",JSON.stringify(user))
//    }
// })

document.getElementById("update").addEventListener("click", () => {
    for (let i = 0; i < user.length; i++) {
        if (document.getElementById("email").value == user[i]["emailid"]) {
            user[i]["firstname"] = document.getElementById("first_name").value;
            user[i]["lastname"] = document.getElementById("last_name").value;
            user[i]["emailid"] = document.getElementById("email").value;
            user[i]["addressvalue"] = document.getElementById("address").value;
            user[i]["pin_number"] = document.getElementById("pin_number").value;
            user[i]["phone_number"] = document.getElementById("phone_number").value;

        }
        localStorage.setItem("user_list", JSON.stringify(user))


    }
})


document.getElementById("delete").addEventListener("click",()=>{
document.getElementById("phone_number").removeAttribute("required","")


//     for (let i = 0; i < profile_email.length; i++) {


//         if(document.getElementById("email").value == user[profile_email]["emailid"]);

//         profile_email.splice(i,1);

//         localStorage.setItem("user_list", JSON.stringify(logged_in));


// }

}
);


// function edit() {
//     let user = JSON.parse(localStorage.getItem("user_list"));
//     for (let i = 0; i < user.length; i++) {
//         if (document.getElementById("email").value == user[i]["emailId"]) {
//             user[i].firstname = document.getElementById("first_name").value
//         }
//         localStorage.setItem("user_list", JSON.stringify(user))
//     }
// }
