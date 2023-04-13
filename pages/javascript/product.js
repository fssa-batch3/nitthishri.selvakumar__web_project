// const div_1 = document.createElement("div")
// div_1.setAttribute("class","outer-box")
// document.querySelector(".furniture-imgs").prepend(div_1)

// const a =document.createElement("anchor")
// a.setAttribute("href","../../pages/request.html")
// document.querySelector(".outer-box").append(a)

// const img = document.createElement("img")
// img.setAttribute("src",data[i]["image"]["src"])
// img.setAttribute("class","furniture")
// img.setAttribute("alt","antique")
// document.querySelector("anchor").append(img)

// const h3 = document.createElement("h3")
// h3.innerText = data[i]["h3"]
// document.querySelector("anchor").append(h3)

// for(let i=0; i<products)

let products = JSON.parse(localStorage.getItem("product_detail"));

for (let i = 0; i < products.length; i++) {

    if (products[i].status) {


        list_product(products[i]);
    }
}

function list_product(item) {

    // let anchor_1 = document.createElement("a");
    // anchor_1.setAttribute("href", "../../product_detail.html?name=" + item["productid"]);


    let gallery_box = document.createElement("div")
    gallery_box.setAttribute("class", "gallery_box")

    let href_link = "../product/product_detail.html?prod_id=" + item["productid"];


    let div_1 = document.createElement("div")
    div_1.setAttribute("id", "pic")
    gallery_box.append(div_1)



    let anchor_1 = document.createElement("a");
    anchor_1.setAttribute("href", href_link);
    // anchor_1.setAttribute("id","pic")
    div_1.append(anchor_1);


    let gallery_imgs = document.createElement("img")
    gallery_imgs.setAttribute("class", "gallery_imgs")
    gallery_imgs.setAttribute("src", item["pr_img_1"])
    gallery_imgs.setAttribute("id", "product_img")
    gallery_imgs.setAttribute("alt", "antique")
    // document.querySelector(".gallery_box").append(gallery_imgs)
    anchor_1.append(gallery_imgs);

    let heading_2 = document.createElement("h2")
    heading_2.setAttribute("class", "product_name");
    heading_2.innerText = item["product_name"];
    // document.querySelector(".gallery_box").append(heading_2)
    gallery_box.append(heading_2);

    let paragraph_1 = document.createElement("p")
    paragraph_1.setAttribute("class", "detail")
    paragraph_1.innerText = item["highlights"]
    // document.querySelector(".gallery_box").append(paragraph_1)
    gallery_box.append(paragraph_1);

    let rating = document.createElement("div")
    rating.setAttribute("class", "rating")
    // document.querySelector(".gallery_box").append(rating)
    gallery_box.append(rating);

    let icon = document.createElement("div")
    icon.setAttribute("class", "star")
    // document.querySelector(".rating").append(icon)
    rating.append(icon);

    let products_star = item
    let rating_round = Math.round(products_star.rating);
    let stars = "";
    for (let j = 0; j < rating_round; j++) {
        stars += "⭐";
    }
    icon.append(stars);
    

    //     ratings_div = document.createElement("div");
    // ratings_div.setAttribute("class", "product-ratings");
    // product_card_div.append(ratings_div);
    //     let products_star = products[i];
    // let rating_round = Math.round(products_star.ratings);
    // let stars = "";
    // for (let j = 0; j < rating_round; j++) {
    //     stars += ":star:";
    // }
    // ratings_div.append(stars); 

    let paragraph_2 = document.createElement("p")
    paragraph_2.innerText = "₹ " + item["product_price"]
    paragraph_2.setAttribute("class", "price")
    // document.querySelector(".gallery_box").append(paragraph_2)
    gallery_box.append(paragraph_2);

    let add_to_card = document.createElement("button")
    add_to_card.innerText = "add to card"
    add_to_card.setAttribute("id", "add_to_card")
    gallery_box.append(add_to_card);

    document.querySelector(".product_page").append(gallery_box);
    console.log(gallery_box);

}



const searchbox = document.getElementById("search");
searchbox.addEventListener("input", (e) => {
    console.log("skokdkd");
    const searchQuery = searchbox.value.trim().toLowerCase();
    // console.log(searchQuery);
    //   if (e.key === "Enter") {
    //     e.preventDefault();
    //   }
    let filteredList = products.filter((item) => {

        if (item.status) {

            return item.product_name.toLowerCase().includes(searchQuery);
        }


    });
    const parentHtmlDiv = document.querySelector(".product_page");
    parentHtmlDiv.innerHTML = "";


    filteredList.forEach((item) => {

        let gallery_box = document.createElement("div")
        gallery_box.setAttribute("class", "gallery_box")

        let href_link = "../product/product_detail.html?prod_id=" + item["productid"];


        let div_1 = document.createElement("div")
        div_1.setAttribute("id", "pic")
        gallery_box.append(div_1)



        let anchor_1 = document.createElement("a");
        anchor_1.setAttribute("href", href_link);
        // anchor_1.setAttribute("id","pic")
        div_1.append(anchor_1);


        let gallery_imgs = document.createElement("img")
        gallery_imgs.setAttribute("class", "gallery_imgs")
        gallery_imgs.setAttribute("src", item["pr_img_1"])
        gallery_imgs.setAttribute("id", "product_img")
        gallery_imgs.setAttribute("alt", "antique")
        // document.querySelector(".gallery_box").append(gallery_imgs)
        anchor_1.append(gallery_imgs);

        let heading_2 = document.createElement("h2")
        heading_2.setAttribute("class", "product_name");
        heading_2.innerText = item["product_name"];
        // document.querySelector(".gallery_box").append(heading_2)
        gallery_box.append(heading_2);

        let paragraph_1 = document.createElement("p")
        paragraph_1.setAttribute("class", "detail")
        paragraph_1.innerText = item["highlights"]
        // document.querySelector(".gallery_box").append(paragraph_1)
        gallery_box.append(paragraph_1);

        let rating = document.createElement("div")
        rating.setAttribute("class", "rating")
        // document.querySelector(".gallery_box").append(rating)
        gallery_box.append(rating);



        let icon = document.createElement("div")
        icon.setAttribute("class", "star")
        // document.querySelector(".rating").append(icon)
        rating.append(icon);

        let products_star = item
        let rating_round = Math.round(products_star.rating);
        let stars = "";
        for (let j = 0; j < rating_round; j++) {
            stars += "⭐";
        }
        icon.append(stars);

        //     ratings_div = document.createElement("div");
        // ratings_div.setAttribute("class", "product-ratings");
        // product_card_div.append(ratings_div);
        //     let products_star = products[i];
        // let rating_round = Math.round(products_star.ratings);
        // let stars = "";
        // for (let j = 0; j < rating_round; j++) {
        //     stars += ":star:";
        // }
        // ratings_div.append(stars); 

        let paragraph_2 = document.createElement("p")
        paragraph_2.innerText = "₹ " + item["product_price"]
        paragraph_2.setAttribute("class", "price")
        // document.querySelector(".gallery_box").append(paragraph_2)
        gallery_box.append(paragraph_2);

        let add_to_card = document.createElement("button")
        add_to_card.innerText = "add to card"
        add_to_card.setAttribute("id", "add_to_card")
        gallery_box.append(add_to_card);

        // document.querySelector(".product_page").append(gallery_box);
        console.log(gallery_box);

        parentHtmlDiv.append(gallery_box)
    })

})