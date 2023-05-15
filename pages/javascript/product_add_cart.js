const wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
const user_detail = JSON.parse(localStorage.getItem("user_list"));
const product_information = JSON.parse(localStorage.getItem("product_detail"));

let output = "";
let order_count = 0;
let total = 0;
const last_email = localStorage.getItem("logged_in");
// console.log(last_email);

wishlist_arr.forEach((element) => {
  product_information.forEach((item) => {
    if (item.productid == element.productid) {
      // console.log("ppapa")
      if (element.status && element.wishlist_email == last_email) {
        order_count++;
        output += `<div class="gallery_box">
    <a href="../product_detail.html" id="pic">
        <img class="gallery_imgs" src="${element.pr_img_1}">
       
    </a>
    <div class="side2">
        <h2 class="product_name">${element.product_name}</h2>
        <p class="rating">${element.highlights}</p>
        <div class="rating">
    
        </div>

    </div>


    <div class="add_cart_box">
        <p class="price">₹ ${element.product_price}</p>
    </div>
    <div class="add_cart_box">
        <h3 id="stock">stock In</h3>
    </div>

    <div class="add_cart_box">
        <button id="add_cart">Add to favourite</button>
    </div>

    <div class="add_cart_box">
        <p><i id="trash" onclick="delete_wishlist(${element.productid})" class="fa-solid fa-trash"></i></p>
    </div>
    
</div>`;

        total += Number(element.product_price);

        document.querySelector(".product_page").innerHTML = output;
      }
    }
  });
});

// console.log(order_count);

// console.log(total)
const total_amount = document.getElementById("total_amount");
total_amount.innerHTML = `Total product price:` + `  ` + ` ${total}`;
const order_amount = document.getElementById("order_amount");
order_amount.innerHTML = `Order price:` + `  ` + `  ${total}`;

function delete_wishlist(id) {
  wishlist_arr.find((obj) => {
    if (obj.productid == id) {
      obj.status = false;
      // console.log(obj.status)

      localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
    }
  });
}

user_detail.forEach((obj) => {
  if (last_email == obj.emailid) {
    obj.count = order_count;

    localStorage.setItem("user_list", JSON.stringify(user_detail));
    // console.log(user_detail)
  }
});

// function wishlist_details(selected) {

// let wishlist_img=document.querySelector(".gallery_imgs");
// // console.log(wishlist_img)
// wishlist_img.setAttribute("src", selected.pr_img_1)
// let wishlist_name=document.querySelector(".product_name");
// wishlist_name.innerHTML=selected["product_name"];
// let wishlist_details=document.querySelector(".detail");
// wishlist_details.innerHTML=selected["description"]

// let wishlist_rating=document.querySelector(".rating");
// wishlist_rating.innerHTML="xfdsdfsa";

// // href_link = "../product/product_detail.html?prod_id=" + item["productid"];

// let wishlist_price=document.querySelector(".price");
// wishlist_price.innerHTML=`${selected["product_price"]}`;

// let wishlist_stock=document.getElementById("stock");
// wishlist_stock.innerHTML="stock In";

// }

const checkOut = document.getElementById("check_out");
checkOut.addEventListener("click", () => {
  window.location.href = ` ../product/product_buynow.html?last_email=${last_email}`;
});
