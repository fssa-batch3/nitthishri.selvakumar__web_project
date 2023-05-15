// {/* <div id="detail_box"> */}

// {/* <p id="booker_name">Name<span id="book_name">:  nitthi</span></p>
//         <p id="booker_category">Category<span id="book_category">:  nitthi</span></p>
//         <p id="booker_item_category">Category item<span id="book_category_item">:  nitthi</span></p>

//         <p id="booker_height">Height<span id="book_height">:  nitthi</span></p>
//         <p id="booker_width">Width<span id="book_width">:  nitthi</span></p> */}
const booking_items = JSON.parse(localStorage.getItem("restore_item_detail"));
const last_email = localStorage.getItem("logged_in");
booking_items.forEach((item) => {
  if (last_email == item.email) {
    booking_detail(item);
  }
});

function booking_detail(item) {
  const both_box = document.createElement("div");
  both_box.setAttribute("id", "both_box");
  whole_full_box.append(both_box);

  const full_box = document.createElement("div");
  full_box.setAttribute("class", "full_box");
  both_box.append(full_box);

  const img_box = document.createElement("div");
  img_box.setAttribute("id", "img_box");
  full_box.append(img_box);

  const repaired_img = document.createElement("img");
  repaired_img.setAttribute("src", item.image);
  repaired_img.setAttribute("id", "booker_image");
  repaired_img.setAttribute("alt", "antique_repair");
  img_box.append(repaired_img);

  const full_detail_box = document.createElement("div");
  full_detail_box.setAttribute("id", "full_detail_box");

  const detail_box = document.createElement("div");
  detail_box.setAttribute("id", "detail_box");
  full_box.append(detail_box);

  const p1 = document.createElement("p");
  p1.setAttribute("id", "booker_name");
  p1.innerText = "Booking Id";
  detail_box.append(p1);

  const span1 = document.createElement("span");
  span1.setAttribute("id", "book_name");
  span1.innerText = `:${item.booking_id}`;
  p1.append(span1);

  const p2 = document.createElement("p");
  p2.setAttribute("id", "booker_category");
  p2.innerText = "Category";
  detail_box.append(p2);

  const span2 = document.createElement("span");
  span2.setAttribute("id", "book_category");
  span2.innerText = `:${item.category}`;
  p2.append(span2);

  const p3 = document.createElement("p");
  p3.setAttribute("id", "booker_item_category");
  p3.innerText = "Category Item";
  detail_box.append(p3);

  const span3 = document.createElement("span");
  span3.setAttribute("id", "book_category_item");
  span3.innerText = `:${item.antique_name}`;
  p3.append(span3);

  const p4 = document.createElement("p");
  p4.setAttribute("id", "booker_height");
  p4.innerText = "Height";
  detail_box.append(p4);

  const span4 = document.createElement("span");
  span4.setAttribute("id", "book_height");
  span4.innerText = `:${item.height}`;
  p4.append(span4);

  const p5 = document.createElement("p");
  p5.setAttribute("id", "booker_width");
  p5.innerText = "Width";
  detail_box.append(p5);

  const span5 = document.createElement("span");
  span5.setAttribute("id", "book_width");
  span5.innerText = `:${item.width}`;
  p5.append(span5);

  const track_report = document.createElement("div");
  track_report.setAttribute("id", "track_report");
  both_box.append(track_report);

  const para1 = document.createElement("p");
  para1.setAttribute("id", "para_track_report");
  track_report.append(para1);

  const div_track = document.createElement("div");
  track_report.append(div_track);

  // let anchor1 = document.createElement("an")
  // anchor1.setAttribute("href", "../../pages/contact.html?booking_id= " + item["booking_id"])
  // anchor1.innerText="clarify your confusions"
  // div_track.append(anchor1)
  const link = document.createElement("a");

  link.href = `../../pages/contact.html?booking_id=${item.booking_id}`;
  link.textContent = "Clarify your doubt";
  link.setAttribute("id","clarify");
  track_report.append(link);



  document.getElementById("whole_full_box").append(both_box);

  if (last_email == item.email) {
    // console.log("kjdfk")
    para1.innerText =
      " The request for the restore your product is keep under process and you will check the result after 24 hours";
    div_track.setAttribute("id", "underprocess");
    div_track.innerText = "..Underprocess";

    if (item.status == true) {
      para1.innerText = ` your product is accepted to repair and fill the shipping detail page to collect your product from your place`;
      div_track.setAttribute("id", "accepted");
      div_track.innerHTML = "Accepted";

      const link1 = document.createElement("a");
      link1.href = `../../pages/track/shipping1.html?booking_id=${item.booking_id}`;
      link1.setAttribute("id","pickup")
      link1.textContent = "Request PickUp";
      track_report.append(link1);

    } else if (item.status == false) {
      para1.innerText = item.reject_reason;
      div_track.setAttribute("id", "rejected");
      div_track.innerText = "Rejected";
    }
  }

  // let user_detail = JSON.parse(localStorage.getItem("user_list"));
  // let product_information=JSON.parse(localStorage.getItem("product_detail"));
  // let last_email = localStorage.getItem("logged_in");
  // let booking_items = JSON.parse(localStorage.getItem("restore_item_detail"))
  // let track_report=document.getElementById("track_report")
  // booking_items.forEach(element => {
  // console.log('nlknl');

  //         if(last_email == element.email){
  //            track_report.innerText= " The request for the restore your product is keep under process and you will check the result after 24 hours"

  //         if (element.status==true) {

  //             track_report.innerText= ` your product is accepted to repair and fill the shipping detail page to collect your product from your place`

  //         }
  //         else if(element.status==false){

  //             track_report.innerText=element.reject_reason;

  //         }

  //     }
}
