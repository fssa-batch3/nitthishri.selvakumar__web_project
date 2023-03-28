const submitbut = document.getElementById("sub")

let productid = Math.floor(Math.random() * 100)

    submitbut.addEventListener("click", function (e) {

      e.preventDefault();

      const product_name = document.getElementById("pr_name").value;
      const about_product = document.getElementById("about_product").value
      const product_price = document.getElementById("product_price").value
      const pr_img_1 = document.getElementById("pr_img_1").value
      const pr_img_2 = document.getElementById("pr_img_2").value
      const pr_img_3 = document.getElementById("pr_img_3").value
      const pr_img_4 = document.getElementById("pr_img_4").value
      const highlights = document.getElementById("high").value
      const description=document.getElementById("description").value
      const rating = document.getElementById("rating").value
   
      // let product_arr = []
      let product_arr = JSON.parse(localStorage.getItem("product_detail")) ?? []


      product_arr.push({

        "productid": productid,
        "product_name": product_name,
        "about_product": about_product,
        "product_price": product_price,
        "pr_img_1": pr_img_1,
        "pr_img_2": pr_img_2,
        "pr_img_3": pr_img_3,
        "pr_img_4": pr_img_4,
        "highlights": highlights,
        "rating": rating,
        "description":description,
        "status" :true

      })
      localStorage.setItem("product_detail", JSON.stringify(product_arr));

      

      // 
    })
    let product_arr = JSON.parse(localStorage.getItem("product_detail"))
console.log(product_arr)
    const appending_div=document.querySelector("table_row")

let row="";
    for(let i=0; i<product_arr.length; i++){
       row +=  `
      <tr>
     <td>${product_arr[i].productid}</td>
    <td class="td-img"><img src="${product_arr[i].pr_img_1}"></td>
    <td>${product_arr[i].product_name}</td>
    <td>${product_arr[i].product_price}</td>
    <td onclick="updateitem(${product_arr[i].productid})" ><button>Update</button></td>
  </tr>`;
  console.log(row)

  appending_div.innerHTML = row ;
    }
    
   
    

    function updateitem(id) {
      product_arr.find(function (e) {
        if (e.productid == id) {
          document.getElementById("pr_img_1").value = e.pr_img_1;
          document.getElementById("pr_name").value = e.product_name;
          document.getElementById("product_price").value = e.product_price;
          document.getElementById("rating").value = e.rating;
        }
      });
    }
    function updatenew(){
      const image = document.getElementById("pr_img_1").value;
      const title = document.getElementById("pr_name").value;
      const price = document.getElementById("product_price").value;
      const rating = document.getElementById("rating").value;
      product_arr.find(function (ob){
        if(title == ob.product_name){
          ob.pr_img_1 = image;
          ob.product_name = title;
          ob.product_price = price;
          ob.rating = rating;
        }
      })
      localStorage.setItem("product_detail", JSON.stringify(product_arr));
    }

    function delete_product() {
      let get_array = JSON.parse(localStorage.getItem("product_detail"));
      for (let i = 0; i < product_arr.length; i++) {
        if (document.getElementById("product_name").value == get_array[i]["product_name"]) {
             
          localStorage.setItem("product_detail", JSON.stringify(product_arr));
        }
        
      }

    }




