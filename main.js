// if(localStorage.getItem("user_list")){
//     return;
// }
// else{
//     localStorage.setItem("user_list", JSON.stringify([

//             {
//                 "firstname": "Hemanath",
//                 "lastname": "s",
//                 "emailid": "hemanathm4@gmail.com",
//                 "password": "12345678"
//             },
//             {
//                 "firstname": "nitthishri",
//                 "lastname": "M",
//                 "emailid": "nitthishris@gmail.com",
//                 "password": "12345678"
//             },
//             {
//                 "firstname": "Nitthi",
//                 "lastname": "shri",
//                 "emailid": "nitthisris@gmail.com",
//                 "password": "1234567"
//             },
//             {
//                 "firstname": "nithi",
//                 "lastname": "shri",
//                 "emailid": "nithisris@gmail.com",
//                 "password": "123456"
//             },
//             {
//                 "firstname": "jaleela",
//                 "lastname": "s",
//                 "emailid": "jaleela@gmail.com",
//                 "password": "123456",
//                 "addressvalue": "",
//                 "pin_number": ""
//             },
//             {
//                 "firstname": "pradeep",
//                 "lastname": "s",
//                 "emailid": "pradeep@gmail.com",
//                 "password": "123456",
//                 "addressvalue": "wertyuiop",
//                 "pin_number": "2345678",
//                 "phone_number": ""
//             }

//     ]))
// }

const product_detail = [
  {
    productid: 0,
    product_name: "gramophone",
    about_product:
      "Antique Vintage Gramophone Player Original Working Gramophone Original Gramophone White Piller Gramophone",
    product_price: "200",
    pr_img_1: "https://iili.io/HNpUmH7.jpg",
    pr_img_2: "https://iili.io/HNpUyNe.jpg",
    pr_img_3: "https://iili.io/HNpgoDg.jpg",
    pr_img_4: "https://iili.io/HNp6zxe.jpg",
    highlights: "Gramophone Player Original/Working Gramophone Record Player",
    rating: "4",
    description:
      "Antique Vintage Gramophone Player Original Working Gramophone Original Gramophone White Piller Gramophone",
    status: true,
  },
  {
    productid: 1,
    product_name: "camera",
    about_product:
      "Vintage Tripod Camera Showpiece Antique showpiece for Home Decoration.Deco 79 Metal Antique Camera, 15 by 12-Inch Vintage Tripod Camera Showpiece Antique showpiece for Home Decoration, Living Room Bedroom.Deco 79 Metal Antique Camera, 15 by 12-Inch Vintage Tripod Camera Showpiece Antique showpiece for Home Decoration.Deco 79 Metal Antique Camera, 15 by 12-Inch Vintage Tripod Camera",
    product_price: "5788",
    pr_img_1: "https://iili.io/HNp6a5B.jpg",
    pr_img_2: "https://iili.io/HNp6XgR.jpg",
    pr_img_3: "https://iili.io/HNp66dl.jpg",
    pr_img_4: "https://iili.io/HNp6QI9.jpg",
    highlights: "Vintage Tripod Camera Showpiece Antique",
    rating: "5",
    description:
      "Deco 79 Metal Antique Camera, 15 by 12-Inch Vintage Tripod Camera Showpiece Antique showpiece for Home Decoration, Living Room Bedroom",
    status: true,
  },
  {
    productid: 2,
    product_name: "watch",
    about_product: "this is 200 year old",
    product_price: "4500",
    pr_img_1: "https://iili.io/HNpPH7V.jpg",
    pr_img_2: "https://iili.io/HNpPUj1.jpg",
    pr_img_3: "https://iili.io/HNpi7wP.jpg",
    pr_img_4: "https://iili.io/HNpi7wP.jpg",
    highlights: "This is alloy of rare metals and good working now ",
    rating: "2",
    description: "good working product",
    status: true,
  },
  {
    productid: 3,
    product_name: "watch",
    about_product: "this is 200 year old",
    product_price: "4500",
    pr_img_1: "https://iili.io/HNpPH7V.jpg",
    pr_img_2: "https://iili.io/HNpPUj1.jpg",
    pr_img_3: "https://iili.io/HNpi7wP.jpg",
    pr_img_4: "https://iili.io/HNpi7wP.jpg",
    highlights: "This is alloy of rare metals and good working now ",
    rating: "2",
    description: "good working product",
    status: false,
  },
  {
    productid: 4,
    product_name: "fan",
    about_product: "This is 200 years old",
    product_price: "5778",
    pr_img_1: "https://iili.io/HNpLkv4.jpg",
    pr_img_2: "https://iili.io/HNpL4n9.jpg",
    pr_img_3: "https://iili.io/HNpL4n9.jpg",
    pr_img_4: "https://iili.io/HNpL4n9.jpg",
    highlights: "This is alloy of rare metals and good working now ",
    rating: "4",
    description: "asdfghjkl",
    status: true,
  },
  {
    productid: 5,
    product_name: "gramophone",
    about_product:
      "Antique Vintage Gramophone Player Original Working Gramophone Original Gramophone White Piller Gramophone",
    product_price: "200",
    pr_img_1: "https://iili.io/HNpUmH7.jpg",
    pr_img_2: "https://iili.io/HNpUyNe.jpg",
    pr_img_3: "https://iili.io/HNpgoDg.jpg",
    pr_img_4: "https://iili.io/HNp6zxe.jpg",
    highlights: "Gramophone Player Original/Working Gramophone Record Player",
    rating: "4",
    description:
      "Antique Vintage Gramophone Player Original Working Gramophone Original Gramophone White Piller Gramophone",
    status: true,
  },
  {
    productid: 6,
    product_name: "gramophone",
    about_product:
      "Antique Vintage Gramophone Player Original Working Gramophone Original Gramophone White Piller Gramophone",
    product_price: "200",
    pr_img_1: "https://iili.io/HNpUmH7.jpg",
    pr_img_2: "https://iili.io/HNpUyNe.jpg",
    pr_img_3: "https://iili.io/HNpgoDg.jpg",
    pr_img_4: "https://iili.io/HNp6zxe.jpg",
    highlights: "Gramophone Player Original/Working Gramophone Record Player",
    rating: "4",
    description:
      "Antique Vintage Gramophone Player Original Working Gramophone Original Gramophone White Piller Gramophone",
    status: true,
  },
  {
    productid: 7,
    product_name: "gramophone",
    about_product:
      "Antique Vintage Gramophone Player Original Working Gramophone Original Gramophone White Piller Gramophone",
    product_price: "200",
    pr_img_1: "https://iili.io/HNpUmH7.jpg",
    pr_img_2: "https://iili.io/HNpUyNe.jpg",
    pr_img_3: "https://iili.io/HNpgoDg.jpg",
    pr_img_4: "https://iili.io/HNp6zxe.jpg",
    highlights: "Gramophone Player Original/Working Gramophone Record Player",
    rating: "4",
    description:
      "Antique Vintage Gramophone Player Original Working Gramophone Original Gramophone White Piller Gramophone",
    status: true,
  },
];
if (localStorage.getItem("product_detail")) {
  console.log("obj");
} else {
  localStorage.setItem("product_detail", JSON.stringify(product_detail));
  console.log("yes");
}

const user_records = [
  {
    firstname: "nikitha",
    lastname: "niki",
    emailid: "niki@gmail.com",
    password: "Niki@0104",
    count: "",
    favourite_count: "",
  },
  {
    firstname: "nitthishri",
    lastname: "shri",
    emailid: "nitthi@gmail.com",
    password: "Nitthi@0104",
    count: "",
    favourite_count: "",
  },
  {
    firstname: "Dharun",
    lastname: "A",
    emailid: "manidharun2204@gmail.com",
    password: "1234567890Aa",
    count: "",
    favourite_count: "",
  },
  {
    firstname: "admin",
    lastname: "k",
    emailid: "admin@gmail.com",
    password: "Admin@0104",
    count: "",
    favourite_count: "",
  },
  {
    firstname: "black",
    lastname: "wood",
    emailid: "blackwood@gmail.com",
    password: "Black@0104",
    count: "",
    favourite_count: "",
  },
];

if (localStorage.getItem("user_List")) {
    //   return;
    alert("")
  } else {
    localStorage.setItem("user_list", JSON.stringify(user_records));
    
}

if (localStorage.getItem("logged_in")) {
    // return;
} else {
  localStorage.setItem("logged_in", JSON.stringify([]));
}

const restore_item_arr = [];
