let products = JSON.parse(localStorage.getItem("product_detail"));
let cart_list = JSON.parse(localStorage.getItem("wishlist"));
let last_email = localStorage.getItem("logged_in")
console.log(products)
let url = window.location.search;

let urls = new URLSearchParams(url)

let id = urls.get("prod_id");

let cart_email = urls.get("last_email")

if (id != undefined) {

    products.find(function (e) {
        if ((e["productid"] == id) && (e.status)) {

            buynow_details(e);

            show_total();

        }
    });
} else {

    cart_list.filter(function (obj) {

        if ((cart_email == obj.wishlist_email)&&(obj.status)) {

            buynow_details(obj);

            show_total();
        }
    })

}
// let choosed;



function buynow_details(selected) {
    //  choosed=selected
    // let product_image11 = document.querySelector(".gallery_imgs")
    // product_image11.setAttribute("src", selected["pr_img_1"])

    // let product_name = document.querySelector(".product_name")
    // product_name.innerText = selected["product_name"]

    // let product_price = document.querySelector(".price")
    // product_price.innerHTML = "&#8377;" + selected["product_price"]


    // let product_price1 = document.querySelector(".money")
    // product_price1.innerHTML = "&#8377;" + selected["product_price"]





    // <div class="gallery_box">
    //                 <a href="../product_detail.html" id="pic">
    //                     <img class="gallery_imgs" src="">

    //                 </a>
    //                 <div class="side2">
    //                     <h2 class="product_name">chair</h2>

    //                     <div class="add_cart_box">
    //                         <p class="price">&#8377; 23,000</p>
    //                     </div>
    //                 </div>
    //             </div>

    let gallery_box = document.createElement("div")
    gallery_box.setAttribute("class", "gallery_box")

    let href_link = "../product/product_detail.html?prod_id=" + selected["productid"];

    let anchor_1 = document.createElement("a");
    anchor_1.setAttribute("href", href_link);
    anchor_1.setAttribute("id", "pic")
    gallery_box.append(anchor_1);

    let gallery_imgs = document.createElement("img")
    gallery_imgs.setAttribute("class", "gallery_imgs")
    gallery_imgs.setAttribute("src", selected["pr_img_1"])
    // gallery_imgs.setAttribute("id", "product_img")
    gallery_imgs.setAttribute("alt", "antique")
    anchor_1.append(gallery_imgs);

    let div3 = document.createElement("div")
    div3.setAttribute("class", "side2")
    // div3.innerText = selected["product_name"];
    gallery_box.append(div3)

    let heading_2 = document.createElement("h2")
    heading_2.setAttribute("class", "product_name");
    heading_2.innerText = selected["product_name"];
    // document.querySelector(".gallery_box").append(heading_2)
    div3.append(heading_2);


    let add_cart = document.createElement("div")
    add_cart.setAttribute("class", "add_cart_box")
    div3.append(add_cart)

    let paragraph_1 = document.createElement("p")
    paragraph_1.setAttribute("class", "price")
    paragraph_1.innerText = "₹ " + selected["product_price"]
    add_cart.append(paragraph_1)


    document.getElementById("product_items").append(gallery_box)


}

function show_total(){

    let total = 0;

    let money_elements = document.querySelectorAll(".price")
    console.log(money_elements)

    for (let i = 0; i < money_elements.length; i++) {

        let split_rs = money_elements[i].innerHTML.split(" ");

        total += Number(split_rs[1]);
            
    }

    document.querySelector(".money").innerHTML = total;

}





let user = JSON.parse(localStorage.getItem('user_list'));

console.log(user)

const profile_email = localStorage.getItem("logged_in");

console.log(profile_email);

for (let i = 0; i < user.length; i++) {

    if (user[i].emailid == profile_email) {
        console.log(user[i].emailid)
        document.getElementById("use_num").value = user[i]["phone_number"];
        document.getElementById("use_address").value = user[i]["addressvalue"];
        // document.getElementById("email").value = user[i]["emailid"];

        break;
    }
}
document.querySelector(".update1").addEventListener("click", () => {
    console.log("fjng");
    for (let i = 0; i < user.length; i++) {
        if (last_email == user[i]["emailid"]) {

            user[i]["addressvalue"] = document.getElementById("use_address").value;
            // user[i]["pin_number"] = document.getElementById("pin_number").value;
            user[i]["phone_number"] = document.getElementById("use_num").value;



            localStorage.setItem("user_list", JSON.stringify(user));

        }

    }
})

let payment_card = document.querySelector(".pay_money");
// let pay_card = document.getElementById("pay_card");




// payment_card.addEventListener("click", (m) => {
//     m.preventDefault();
//     orderData();
// })

// function orderData() {

const payMethod = document.querySelectorAll('input[name="payment"]:checked').value;

let order_id = Math.floor(Math.random() * 100000);
// let orderRecords = new Array();
let order = JSON.parse(localStorage.getItem('order_history')) || [];

let payment_button = document.getElementById("payment_form")
payment_form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(label1)
    if (cart_email== null) {
        if(last_email!=="[]"){
        // console.log(products)
        products.forEach(e => {

            if ((e["productid"] == id) && (e.status)) {
                console.log("nitthijdhv")

                console.log(e)
                let orderid = Math.floor((Math.random() * 1000000) + 1);
                order.push({
                    "payment": payMethod,
                    "order_id": orderid,
                    "order_email": last_email,
                    "productid": id,
                    "product_name": e.product_name,
                    "about_product": e.about_product,
                    "product_price": e.product_price,
                    "pr_img_1": e.pr_img_1,
                    "pr_img_2": e.pr_img_2,
                    "pr_img_3": e.pr_img_3,
                    "pr_img_4": e.pr_img_4,
                    "highlights": e.highlights,
                    "rating": e.rating,
                    "description": e.description,
                    "status": true

                })

                localStorage.setItem("order_history", JSON.stringify(order));

                alert("Product added to order history");

                window.location.href = "../product/product_ordered.html";

            }

        })
    }
    else{
        alert("Please login to add product to cart");
    }
    }
    else if(cart_email!=null){
        cart_list.forEach(e => {
         

            if ((e["wishlist_email"] == cart_email) && (e.status)) {
                console.log("nitthijdhv")

                console.log(e)
                let orderid = Math.floor((Math.random() * 1000000) + 1);
                order.push({
                    "payment": payMethod,
                    "order_id": orderid,
                    "order_email": last_email,
                    "productid": id,
                    "product_name": e.product_name,
                    "about_product": e.about_product,
                    "product_price": e.product_price,
                    "pr_img_1": e.pr_img_1,
                    "pr_img_2": e.pr_img_2,
                    "pr_img_3": e.pr_img_3,
                    "pr_img_4": e.pr_img_4,
                    "highlights": e.highlights,
                    "rating": e.rating,
                    "description": e.description,
                    "status": true

                })

                localStorage.setItem("order_history", JSON.stringify(order));

                alert("Product added to order history");

                window.location.href = "../product/product_ordered.html";

            }

        })

    }
  
        
  


})


//     if (order.find((x) => {
//             return x.orderid == order_id
//         })) {
//         alert("Product is already added")
//     } else {

//         products.forEach(e => {

//             if ((e["productid"] == id) && (e.status)) {
//                 console.log(e)
//                 let orderid = Math.floor((Math.random() * 1000000) + 1);
//                 order.push({
//                     "payment": payMethod,
//                     "order_id": orderid,
//                     "order_email": last_email,
//                     "productid": id,
//                     "product_name": e.product_name,
//                     "about_product": e.about_product,
//                     "product_price": e.product_price,
//                     "pr_img_1": e.pr_img_1,
//                     "pr_img_2": e.pr_img_2,
//                     "pr_img_3": e.pr_img_3,
//                     "pr_img_4": e.pr_img_4,
//                     "highlights": e.highlights,
//                     "rating": e.rating,
//                     "description": e.description,
//                     "status": true

//                 })
//                 // order.push({
//                 //     "orderid": order_id,
//                 //     "order_price": orderPrice,
//                 //     "or_pro_img": order_pro_image1,
//                 //     "or_pro_name": or_pro_name,
//                 //     "or_pro_quantity": or_pro_quan,
//                 //     "user_email": currentEmail,
//                 //     "address_id" : address_id
//                 // })
//             }
//         })
//         alert("order confirmed")
//         localStorage.setItem("order_history", JSON.stringify(order));

//         // window.location.href =""
//     }
// }
// pay_money_button.addEventListener("click", function(){

//     products.forEach(e=> {


//         if ((e["productid"] == id) && (e.status)) {
//             console.log(e)
//            let orderid =Math.floor((Math.random()*1000000)+1);
//             order.push({
//                 "order_id":orderid,
//                 "order_email":last_email,
//                 "productid": id,
//                 "product_name": e.product_name,
//                 "about_product": e.about_product,
//                 "product_price": e.product_price,
//                 "pr_img_1": e.pr_img_1,
//                 "pr_img_2": e.pr_img_2,
//                 "pr_img_3": e.pr_img_3,
//                 "pr_img_4": e.pr_img_4,
//                 "highlights": e.highlights,
//                 "rating": e.rating,
//                 "description": e.description,
//                 "status": true

//             })
//             localStorage.setItem("order_history", JSON.stringify(order))
//             // location.reload()
//             // window.location.href = "../../pages/track/track.html"

//         }
//     });
// })