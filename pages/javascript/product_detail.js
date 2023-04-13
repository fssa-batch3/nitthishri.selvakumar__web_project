let products = JSON.parse(localStorage.getItem("product_detail"))

let url = window.location.search;
console.log(url)
let urls = new URLSearchParams(url)
console.log(urls)

let id = urls.get("prod_id")
console.log(id)




products.find(function (e) {
    if ((e["productid"] == id) && (e.status)) {

        product_details(e);

    }

})


function product_details(selected) {

    let product_main_image = document.getElementById("main_pic")
    product_main_image.setAttribute("src", selected["pr_img_1"])

    let product_image1 = document.getElementById("side_pic1")
    product_image1.setAttribute("src", selected["pr_img_2"])
    console.log(product_image1);

    let product_image2 = document.getElementById("side_pic2")
    product_image2.setAttribute("src", selected["pr_img_3"])

    let product_image3 = document.getElementById("side_pic3")
    product_image3.setAttribute("src", selected["pr_img_3"])

    let product_name = document.getElementById("product_name")
    product_name.innerText = selected["product_name"]

    let rupee = document.getElementById("rupee")
    rupee.innerText = selected["product_price"]

    let rating = document.getElementById("rating")
    rating.innerText = selected["rating"]

    let description = document.getElementById("details")
    description.innerText = selected["about_product"]

}




let reviewer_email = localStorage.getItem("logged_in")
console.log(reviewer_email)

let reviewer_matching = JSON.parse(localStorage.getItem("user_list"));
let separating;
let match = reviewer_matching.find(function (e) {
    if (e["emailid"] == reviewer_email) {
        return separate = e
    }
})

let review_form = document.getElementById("review_form");
document.getElementById("btn").addEventListener("submit", e => {
    e.preventDefault();
    const review_box = document.getElementById("experience").value;

})

// let review_output = document.querySelector(".boxer");
// document.getElementById("sub-form").addEventListener("submit", e => {
//     e.preventDefault();
//     const input = document.getElementById("experience").value;
//     const commentes = document.getElementById("vendors_review").value;
//    const name_of_reviewer=re["user_name"]
//     if ((input !== "") && (commentes !== "")) {
//         let user_rev = {
//             "input": input,
//             "comments": commentes,
//             "artists_name": name,
//             "reviewer_name":name_of_reviewer
//         }
//         artist_reviews.push(user_rev);
//         localStorage.setItem("artistreviews", JSON.stringify(artist_reviews));
//         alert("done");
//         output = " ";
//         review_list();
//     }
//     else {
//         alert("not done");
//     }
// }

// )