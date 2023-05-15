const booking_items =
  JSON.parse(localStorage.getItem("restore_item_detail")) || [];

// let output = "";

booking_items.forEach((item) => {
  // console.log("bri")
  //   booking_detail(item);

  // function booking_detail(item) {
  const whole_box = document.createElement("tr");
  whole_box.setAttribute("id", "whole_rows");

  const td1 = document.createElement("td");
  td1.innerText = item.booking_id;
  whole_box.append(td1);

  const td2 = document.createElement("td");
  td2.innerText = item.first_name;
  whole_box.append(td2);

  const td3 = document.createElement("td");
  td3.innerText = item.email;
  whole_box.append(td3);

  const td4 = document.createElement("td");
  td4.innerText = item.phonenumber;
  whole_box.append(td4);

  const td5 = document.createElement("td");
  td5.innerText = item.category;
  whole_box.append(td5);

  const td6 = document.createElement("td");
  td6.innerText = item.height;
  whole_box.append(td6);

  const td7 = document.createElement("td");
  whole_box.append(td7);

  const rep_img = document.createElement("img");
  rep_img.setAttribute("src", item.image);
  td7.append(rep_img);

  const td8 = document.createElement("td");
  whole_box.append(td8);

  const button = document.createElement("button");
  button.id = "acc_button";
  button.textContent = "Accepted";
  td8.appendChild(button);

  const td9 = document.createElement("td");
  whole_box.append(td9);

  const button1 = document.createElement("button");
  button1.id = "rej_button";
  button1.textContent = "Rejected";
  td9.appendChild(button1);

  const td10 = document.createElement("td");
  td10.id = "reason";
  whole_box.append(td10);

  const textarea = document.createElement("textarea");
  textarea.placeholder = "Tell us about your experience";
  if (item.reject_reason != null) {
    textarea.value = item.reject_reason;
  }
  textarea.classList.add("text_reason");
  textarea.id = "problem";
  td10.appendChild(textarea);

  document.querySelector(".table_row").append(whole_box);

  button.addEventListener("click", () => {
    item.status = true;
    localStorage.setItem("restore_item_detail", JSON.stringify(booking_items));
  });

  button1.addEventListener("click", () => {
    // console.log(problem_textbox.value)
    item.status = false;
    item.reject_reason = problem_textbox.value;
    localStorage.setItem("restore_item_detail", JSON.stringify(booking_items));
  });
});

// output += `<tr>

//   <td>${item.booking_id}</td>
//   <td>${item.first_name}</td>
//   <td>${item.email}</td>
//   <td>${item.phonenumber}</td>
//   <td>${item.category}</td>
//   <td>${item.height}</td>
//   <td><img src="${item.image}"></td>
//   <td><button id=acc_button onclick="accepted(${item.booking_id})">Accepted</button></td>
//   <td><button id=rej_button onclick="rejected(${item.booking_id},${index})">Rejected</button></td>

//    <td id="reason"><textarea placeholder="Tell us about your experience" class="text_reason" id="problem"></textarea> </td>

//    </tr>`

// document.querySelector(".table_row").innerHTML = output;
// }

// let accept_button = document.getElementById("acc_button")
// let reject_button = document.getElementById("rej_button")

// function accepted(id) {
//   console.log("nitthi", id)
//   booking_items.find(function (obj) {

//     if (obj.booking_id == id) {
//       obj.status = true;
//       // accept_button.style.backround = "blue";
//       localStorage.setItem("restore_item_detail", JSON.stringify(booking_items));
//     }
//   })

// }

// function rejected(id, index) {
//   //  console.log("pradeep")

//   alert(id);
//   alert(index);
//   booking_items.find(function (obj) {

//     // obj.preventDefault();
//     if (obj.booking_id == id) {

//       obj.status = false;
//       // let heading_insert=document.getElementById("reason");
//       // heading_insert.style.display = "block";
//       // heading_insert.setAttribute("disabled","")
//       // let row_insert=document.getElementById("reason_reject");
//       // row_insert.style.display = "block";
//       // row_insert.setAttribute("disabled","")

//       let problem_textbox = document.querySelectorAll(".text_reason");

//       for (let i = 0; i < problem_textbox.length; i++) {

//         if (index == i) {

//           console.log(problem_textbox[i].value);

//           obj.reject_reason = problem_textbox.value;

//           localStorage.setItem("restore_item_detail", JSON.stringify(booking_items));

//         }
//       }
//     // inserting the reason into the localStorage

//     }
//   })

// }

// function accept_item(id) {
//   console.log("nitthi", id)
//   product_arr.find(function (obj) {
//     if (obj.productid == id) {
//       obj.status = true;
//       localStorage.setItem("product_detail", JSON.stringify(product_arr));
//     }
//   })
// }

// <td><button onclick="accept_item(${item.booking_id})">Accepted</button></td>
// <td><button onclick="reject_item(${item.booking_id})">Rejected</button></td>
