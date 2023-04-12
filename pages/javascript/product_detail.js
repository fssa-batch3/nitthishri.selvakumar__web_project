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
        l
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

