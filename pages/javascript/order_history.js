let history_arr = JSON.parse(localStorage.getItem("order_history"));
let user_detail = JSON.parse(localStorage.getItem("user_list"));
let product_information=JSON.parse(localStorage.getItem("product_detail"));

let output = "";
let fav_count = 0;

let last_email = localStorage.getItem("logged_in");
// console.log(last_email);

   
history_arr.forEach(element => {
product_information.forEach(item=>{
    if(item.productid == element.productid){
// console.log("ppapa")
    if ((element.status) && (element.order_email == last_email) ) {


       
       fav_count++
        output += `<div class="gallery_box">
    <a href="../product_detail.html" id="pic">
        <img class="gallery_imgs" src="${element.pr_img_1}">
       
    </a>
    <div class="side2">
        <h2 class="product_name">${element.product_name}</h2>
       <p class="about">${element.highlights}</p>

    </div>


    <div class="add_cart_box">
        <p class="price">₹${element["product_price"]}</p>
    </div>
    <div class="add_cart_box">
        <h3 id="stock">stock In</h3>
    </div>

   

    
    
</div>`
        

        document.querySelector(".product_page").innerHTML = output;
    }

    }
});
console.log(fav_count)

})

// console.log(order_count);

// console.log(total)

// function delete_wishlist(id) {

//     wishlist_arr.find(function (obj) {


//         if (obj.productid == id) {

//             obj.status = false;
//             // console.log(obj.status)

//             localStorage.setItem("favourite", JSON.stringify(favourite_arr));
//         }
//     })
// }

// user_detail.forEach(obj =>{
//     if(last_email==obj.emailid){
        
//         obj.favourite_count=fav_count
       
        
//         localStorage.setItem("user_list", JSON.stringify(user_detail));
//         // console.log(user_detail)
//     }
// })