const products = JSON.parse(localStorage.getItem("product_detail"));

const url = window.location.search;

const urls = new URLSearchParams(url);

const id = urls.get("prod_id");

products.find((e) => {
  if (e.productid == id && e.status) {
    // console.log(e)
    product_details(e);
  }
});

function product_details(selected) {
  const product_main_image = document.getElementById("main_pic");
  product_main_image.setAttribute("src", selected.pr_img_1);

  // let product_main_image11 = document.getElementById("main_pic1")
  // product_main_image11.setAttribute("src", selected["pr_img_2"])

  // let product_main_image22 = document.getElementById("main_pic2")
  // product_main_image22.setAttribute("src", selected["pr_img_3"])

  // let product_main_image33 = document.getElementById("main_pic3")
  // product_main_image33.setAttribute("src", selected["pr_img_4"])

  const product_image1 = document.getElementById("side_pic1");
  product_image1.setAttribute("src", selected.pr_img_2);

  const product_image2 = document.getElementById("side_pic2");
  product_image2.setAttribute("src", selected.pr_img_3);

  const product_image3 = document.getElementById("side_pic3");
  product_image3.setAttribute("src", selected.pr_img_4);

  const product_name = document.getElementById("product_name");
  product_name.innerText = selected.product_name;

  const rupee = document.getElementById("rupee");
  rupee.innerText = `₹ ${selected.product_price}`;

  const rating = document.getElementById("rating");
  rating.innerText = selected.highlights;

  const description = document.getElementById("details");
  description.innerText = selected.about_product;

  const buy_product = document.getElementById("buy_now");
  buy_product.setAttribute(
    "href",
    `../product/product_buynow.html?prod_id=${selected.productid}`
  );
}

// star rating starts

const stars = document.querySelectorAll(".review_star");
const current_rating = document.querySelector(".current_rating");
let current_star = 0;

let get_rating_value;

stars.forEach((star, index) => {
  star.addEventListener("click", (e) => {
    current_star = index + 1;
    get_rating_value = current_star;
    current_rating.innerText = `${current_star}`;

    stars.forEach((star, i) => {
      if (current_star >= i + 1) {
        star.innerHTML = "&#9733;";
      } else {
        star.innerHTML = "&#9734;";
      }
    });

    return get_rating_value;
  });
});

const changing_star = document.querySelector(".review_star").value;

const reviewer_email = localStorage.getItem("logged_in");

const reviewer_matching = JSON.parse(localStorage.getItem("user_list"));

const reviews = JSON.parse(localStorage.getItem("customer_review")) || [];
const whole_box = document.querySelector(".testimonial");

let output_review = "";

const match = reviewer_matching.find((user) => user.emailid == reviewer_email);

const experience = document.getElementById("experience");

document.getElementById("review_form").addEventListener("submit", (e) => {
  e.preventDefault();

  const experiencevalue = experience.value;
  const revieweremail_value = reviewer_email;
  const id_product = id;

  if (experience !== "") {
    let string = "";
    for (let i = 0; i < get_rating_value; i++) {
      string += "&#9733;";
    }

    reviews.push({
      reviewer_name: match.firstname,
      experience: experiencevalue,
      reviewer_email: revieweremail_value,
      star_rating: string,
      product_id: id_product,
    });

    localStorage.setItem("customer_review", JSON.stringify(reviews));
    alert("done");
    review_listing();
  }
});

function review_listing() {
  output_review = "";

  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].product_id == id) {
      output_review += `<div class="box">
        <p> ${reviews[i].experience}</p>
        <p> ${reviews[i].reviewer_name}</</p>
        <div class="star_rating">
        <p> ${reviews[i].star_rating}</p>
    </div>
     </div>`;

      //  const star_rating=document.querySelector(".star_rating")

      //     let customer_review_stars = "";
      //     for (let j = 0; j < reviews[i]["star_rating"]; j++) {
      //         customer_review_stars += `&#9733;`;
      //     }
      //     // customer_review_stars.append("star_rating");

      //  star_rating.innerText=customer_review_stars
      //  console.log(star_rating);

      whole_box.innerHTML = output_review;
    }
  }
}
review_listing();

//         let stars = "";
//         for (let j = 0; j < rating_round; j++) {
//             stars += `&#9733;`;
//         }
//         icon.innerHTML = stars;
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

// image slider
const imgs = document.querySelectorAll(".img a");
let imgId = 1;
imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    imgId = img.dataset.id;
    console.log(imgId);
    imagemovement();
  });
});

let display;
function imagemovement() {
  display = document.querySelector(".mainimage img:first-child").clientWidth;
  console.log(display);

  //  document.querySelector(".mainimage").style.transform=`translateX(-250px)`;
}
