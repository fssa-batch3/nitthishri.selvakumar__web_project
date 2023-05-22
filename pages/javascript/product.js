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

// for(let i=0; i<products);

const cart_arr = JSON.parse(localStorage.getItem("wishlist")) || [];

const favourites = JSON.parse(localStorage.getItem("favourite")) || [];

const products = JSON.parse(localStorage.getItem("product_detail"));

const user_detail = JSON.parse(localStorage.getItem("user_list"));

const last_email = localStorage.getItem("logged_in");

const order_count = document.getElementById("cart_count");

const favourite_count = document.getElementById("fav_count");

// console.log(order_count);

const product_arr = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].status) {
    product_arr.push(products[i]);
  }
}

function list_product(array = []) {
  array.forEach((item) => {
    const gallery_box = document.createElement("div");
    gallery_box.setAttribute("class", "gallery_box");

    const href_link = `../product/product_detail.html?prod_id=${item.productid}`;

    const div_1 = document.createElement("div");
    div_1.setAttribute("id", "pic");
    gallery_box.append(div_1);

    const anchor_1 = document.createElement("a");
    anchor_1.setAttribute("href", href_link);
    // anchor_1.setAttribute("id","pic")
    div_1.append(anchor_1);

    const gallery_imgs = document.createElement("img");
    gallery_imgs.setAttribute("class", "gallery_imgs");
    gallery_imgs.setAttribute("src", item.pr_img_1);
    gallery_imgs.setAttribute("id", "product_img");
    gallery_imgs.setAttribute("alt", "antique");
    // document.querySelector(".gallery_box").append(gallery_imgs)
    anchor_1.append(gallery_imgs);

    const heading_2 = document.createElement("h2");
    heading_2.setAttribute("class", "product_name");
    heading_2.innerText = item.product_name;
    // document.querySelector(".gallery_box").append(heading_2)
    gallery_box.append(heading_2);

    const paragraph_1 = document.createElement("p");
    paragraph_1.setAttribute("class", "detail");
    paragraph_1.innerText = item.highlights;
    // document.querySelector(".gallery_box").append(paragraph_1)
    gallery_box.append(paragraph_1);

    const rating = document.createElement("div");
    rating.setAttribute("class", "rating");
    // document.querySelector(".gallery_box").append(rating)
    gallery_box.append(rating);

    const icon = document.createElement("div");
    icon.setAttribute("class", "star");
    // document.querySelector(".rating").append(icon)
    rating.append(icon);

    const products_star = item;
    const rating_round = Math.round(products_star.rating);
    let stars = "";
    for (let j = 0; j < rating_round; j++) {
      stars += `&#9733;`;
    }
    icon.innerHTML = stars;

    const paragraph_2 = document.createElement("p");
    paragraph_2.innerText = `₹ ${item.product_price}`;
    paragraph_2.setAttribute("class", "price");
    // document.querySelector(".gallery_box").append(paragraph_2)
    gallery_box.append(paragraph_2);

    const add_to_card = document.createElement("button");
    add_to_card.innerText = "add to card";
    add_to_card.setAttribute("id", "add_to_card");
    gallery_box.append(add_to_card);

    const label1 = document.createElement("label");
    label1.setAttribute("id", "fav_click");
    gallery_box.append(label1);

    const input1 = document.createElement("input");
    input1.setAttribute("type", "checkbox");
    input1.setAttribute("id", "favourite");
    label1.append(input1);

    const span1 = document.createElement("div");
    span1.setAttribute("class", "favourite_symbol");
    span1.innerHTML = "&#10084;";
    label1.append(span1);

    document.querySelector(".product_page").append(gallery_box);

    add_to_card.addEventListener("click", () => {
      // console.log(label1)
      if (last_email != "[]") {
        let cart_check = false;

        cart_arr.find((obj) => {
          if (last_email === obj.wishlist_email) {
            if (item.productid === obj.productid) {
              cart_check = true;
            }
          }

          return cart_check;
        });

        if (cart_check) {
          alert("Product was already added to add_to_cart");
        } else {
          cart_arr.push({
            wishlist_email: last_email,
            productid: item.productid,
            product_name: item.product_name,
            about_product: item.about_product,
            product_price: item.product_price,
            pr_img_1: item.pr_img_1,
            pr_img_2: item.pr_img_2,
            pr_img_3: item.pr_img_3,
            pr_img_4: item.pr_img_4,
            highlights: item.highlights,
            rating: item.rating,
            description: item.description,
            status: true,
          });

          localStorage.setItem("wishlist", JSON.stringify(cart_arr));

          alert("Product added to cart");
        }
      } else {
        alert("Please login to add product to cart");
      }
    });

    label1.addEventListener("click", () => {
      if (last_email != null) {
        let fav_check = false;

        favourites.find((obj) => {
          if (last_email === obj.favourite_email) {
            if (item.productid === obj.productid) {
              fav_check = true;
            }
          }

          return fav_check;
        });

        if (fav_check) {
          alert("Product was already added to wishlist");
        } else {
          favourites.push({
            favourite_email: last_email,
            productid: item.productid,
            product_name: item.product_name,
            about_product: item.about_product,
            product_price: item.product_price,
            pr_img_1: item.pr_img_1,
            pr_img_2: item.pr_img_2,
            pr_img_3: item.pr_img_3,
            pr_img_4: item.pr_img_4,
            highlights: item.highlights,
            rating: item.rating,
            description: item.description,
            status: true,
          });

          localStorage.setItem("favourite", JSON.stringify(favourites));

          alert("Added to Wishlist");
        }
      } else {
        alert("Please login to add product to wishlist");
      }

      // Check if the checkbox is checked
    });
  });
}
//

// fav_click.addEventListener("click",function(){
//     console.log(fav_click)
// })

const searchbox = document.getElementById("search");
searchbox.addEventListener("input", (e) => {
  const searchQuery = searchbox.value.trim().toLowerCase();
  // console.log(searchQuery);
  //   if (e.key === "Enter") {
  //     e.preventDefault();
  //   }
  const filteredList = products.filter((item) => {
    if (item.status) {
      return item.product_name.toLowerCase().includes(searchQuery);
    }
  });
  const parentHtmlDiv = document.querySelector(".product_page");
  parentHtmlDiv.innerHTML = "";
  list_product(filteredList);

});

list_product(product_arr);

user_detail.forEach((e) => {
  if (e.emailid == last_email) {
    order_count.innerHTML = e.count;
  }
});
user_detail.forEach((e) => {
  if (e.emailid == last_email) {
    favourite_count.innerHTML = e.favourite_count;
  }
});
document.getElementById("favourite").addEventListener("click",function () {
  //check if checkbox is checked
  
      document.getElementById("favourite").setAttribute('disabled', true); //disable input
  
});

