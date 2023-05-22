const favourite_arr = JSON.parse(localStorage.getItem("favourite"));
const user_detail = JSON.parse(localStorage.getItem("user_list"));
const product_information = JSON.parse(localStorage.getItem("product_detail"));

let output = "";
let fav_count = 0;

const last_email = localStorage.getItem("logged_in");
// console.log(last_email);


favourite_arr.forEach((element) => {
  product_information.forEach((item) => {
    if (item.productid == element.productid) {
      // console.log("ppapa")
      if (element.status && element.favourite_email == last_email) {
        fav_count++;
        output += `<div class="gallery_box">
    <a href="../product_detail.html" id="pic">
        <img class="gallery_imgs" src="${element.pr_img_1}">
       
    </a>
    <div class="side2">
        <h2 class="product_name">${element.product_name}</h2>
       <p class="about">${element.highlights}</p>

    </div>


    <div class="add_cart_box">
        <p class="price">₹${element.product_price}</p>
    </div>
    <div class="add_cart_box">
        <h3 id="stock"><i id="trash" onclick="delete_wishlist(${element.productid})" class="fa-solid fa-trash"></i></h3>
    </div>

   

    
    
</div>`;

        document.querySelector(".product_page").innerHTML = output;
      }
    }
  });
  console.log(fav_count);
});
function delete_wishlist(id) {
  favourite_arr.find((obj) => {
      if (obj.productid == id){
        obj.status = false;
        // console.log(obj.status)
        localStorage.setItem("favourite", JSON.stringify(favourite_arr));
      }
    });
  }

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

user_detail.forEach((obj) => {
  if (last_email == obj.emailid) {
    obj.favourite_count = fav_count;

    localStorage.setItem("user_list", JSON.stringify(user_detail));
    // console.log(user_detail)
  }
});
