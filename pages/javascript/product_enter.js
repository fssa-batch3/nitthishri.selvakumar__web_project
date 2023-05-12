let submitbut = document.getElementById("sub")

let product_arr = JSON.parse(localStorage.getItem("product_detail")) || [];

let output = "";

product_arr.forEach(item => {

  list_create_products(item);

});

submitbut.addEventListener("click", function (e) {

  e.preventDefault();

  let product_name = document.getElementById("pr_name").value;
  let about_product = document.getElementById("about_product").value;
  let product_price = document.getElementById("product_price").value
  let pr_img_1 = document.getElementById("pr_img_1").value;
  let pr_img_2 = document.getElementById("pr_img_2").value;
  let pr_img_3 = document.getElementById("pr_img_3").value;
  let pr_img_4 = document.getElementById("pr_img_4").value;
  let highlights = document.getElementById("high").value;
  let description = document.getElementById("description").value;
  let rating = document.getElementById("rating").value;


  product_arr.push({

    "productid": product_arr.length,
    "product_name": product_name,
    "about_product": about_product,
    "product_price": product_price,
    "pr_img_1": pr_img_1,
    "pr_img_2": pr_img_2,
    "pr_img_3": pr_img_3,
    "pr_img_4": pr_img_4,
    "highlights": highlights,
    "rating": rating,
    "description": description,
    "status": true

  });

  localStorage.setItem("product_detail", JSON.stringify(product_arr));

});

function list_create_products(item) {

  output += `<tr>
  
  <td>${item.productid}</td>
  <td><img src="${item.pr_img_1}"></td>
  <td>${item.product_name}</td>
  <td>${item.product_price}</td>
  <td><button onclick="avail_stock_yes(${item.productid})">Yes</button></td>
  <td><button onclick="avail_stock_no(${item.productid})">No</button></td>
  <td><button onclick="updateitem(${item.productid})">Update</button></td>

  </tr>`

  document.querySelector(".table_rows").innerHTML = output;

}


function updateitem(id) {
  product_arr.find(function (e) {
    if (e.productid == id) {

      document.getElementById("pr_name").value = e.product_name;
      document.getElementById("about_product").value = e.about_product;
      document.getElementById("product_price").value = e.product_price;
      document.getElementById("pr_img_1").value = e.pr_img_1;
      document.getElementById("pr_img_2").value = e.pr_img_2;
      document.getElementById("pr_img_3").value = e.pr_img_3;
      document.getElementById("pr_img_4").value = e.pr_img_4;
      document.getElementById("high").value = e.highlights;
      document.getElementById("description").value = e.description;
      document.getElementById("rating").value = e.rating;


    }
  });
}

function updatenew() {

  let product_name = document.getElementById("pr_name").value;
  let about_product = document.getElementById("about_product").value;
  let product_price = document.getElementById("product_price").value
  let pr_img_1 = document.getElementById("pr_img_1").value;
  let pr_img_2 = document.getElementById("pr_img_2").value;
  let pr_img_3 = document.getElementById("pr_img_3").value;
  let pr_img_4 = document.getElementById("pr_img_4").value;
  let highlights = document.getElementById("high").value;
  let description = document.getElementById("description").value;
  let rating = document.getElementById("rating").value;


  product_arr.find(function (ob) {

    if (product_name == ob.product_name) {

      ob.product_name = product_name;
      ob.about_product = about_product;
      ob.product_price = product_price;
      ob.pr_img_1 = pr_img_1;
      ob.pr_img_2 = pr_img_2;
      ob.pr_img_3 = pr_img_3;
      ob.pr_img_4 = pr_img_4;
      ob.highlights = highlights;
      ob.description = description;
      ob.rating = rating;

    }

  });

  localStorage.setItem("product_detail", JSON.stringify(product_arr));

}

function avail_stock_yes(id) {
  console.log("nitthi", id)
  product_arr.find(function (obj) {

    if (obj.productid == id) {

      obj.status = true;

      localStorage.setItem("product_detail", JSON.stringify(product_arr));
    }
  })

}

function avail_stock_no(id) {

  product_arr.find(function (obj) {

    if (obj.productid == id) {

      obj.status = false;

      localStorage.setItem("product_detail", JSON.stringify(product_arr));
    }
  })

}

// function delete_product() {
//   let get_array = JSON.parse(localStorage.getItem("product_detail"));
//   for (let i = 0; i < product_arr.length; i++) {
//     if (document.getElementById("product_name").value == get_array[i]["product_name"]) {

//       localStorage.setItem("product_detail", JSON.stringify(product_arr));
//     }

//   }

// }