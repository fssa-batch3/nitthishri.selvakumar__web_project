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


let product_detail = [{
        "productid": 34,
        "product_name": "camera",
        "about_product": "antique piece(300 years old",
        "product_price": "12345",
        "pr_img_1": "https://iili.io/HXV3zT7.webp",
        "pr_img_2": "https://iili.io/HXV3zT7.webp",
        "pr_img_3": "https://iili.io/HXV3zT7.webp",
        "pr_img_4": "https://iili.io/HXV3zT7.webp",
        "highlights": "asdfghjkldsfghjk",
        "rating": "4"
    },
    {
        "productid": 69,
        "product_name": "camera",
        "about_product": "antique piece(300 years old",
        "product_price": "12345",
        "pr_img_1": "https://iili.io/HXV3zT7.webp",
        "pr_img_2": "https://iili.io/HXV3zT7.webp",
        "pr_img_3": "https://iili.io/HXV3zT7.webp",
        "pr_img_4": "https://iili.io/HXV3zT7.webp",
        "highlights": "asdfghjkldsfghjk",
        "rating": "4"
    },
    {
        "productid": 36,
        "product_name": "camera",
        "about_product": "antique piece(300 years old",
        "product_price": "12345",
        "pr_img_1": "https://iili.io/HXV3zT7.webp",
        "pr_img_2": "https://iili.io/HXV3zT7.webp",
        "pr_img_3": "https://iili.io/HXV3zT7.webp",
        "pr_img_4": "https://iili.io/HXV3zT7.webp",
        "highlights": "asdfghjkldsfghjk",
        "rating": "4"
    },
    {
        "productid": 40,
        "product_name": "camera",
        "about_product": "antique piece(300 years old",
        "product_price": "12345",
        "pr_img_1": "https://iili.io/HXV3zT7.webp",
        "pr_img_2": "https://iili.io/HXV3zT7.webp",
        "pr_img_3": "https://iili.io/HXV3zT7.webp",
        "pr_img_4": "https://iili.io/HXV3zT7.webp",
        "highlights": "asdfghjkldsfghjk",
        "rating": "4"
    },
    {
        "productid": 78,
        "product_name": "camera",
        "about_product": "antique piece(300 years old",
        "product_price": "12345",
        "pr_img_1": "https://iili.io/HXV3kuI.webp",
        "pr_img_2": "https://iili.io/HXV3zT7.webp",
        "pr_img_3": "https://iili.io/HXV3zT7.webp",
        "pr_img_4": "https://iili.io/HXV3zT7.webp",
        "highlights": "asdfghjkldsfghjk",
        "rating": "4"
    },
    {
        "productid": 77,
        "product_name": "camera",
        "about_product": "antique piece(300 years old",
        "product_price": "12345",
        "pr_img_1": "https://iili.io/HXV3kuI.webp",
        "pr_img_2": "https://iili.io/HXV3zT7.webp",
        "pr_img_3": "https://iili.io/HXV3zT7.webp",
        "pr_img_4": "https://iili.io/HXV3zT7.webp",
        "highlights": "asdfghjkldsfghjk",
        "rating": "4"
    },
    {
        "productid": 35,
        "product_name": "telephone",
        "about_product": "ss",
        "product_price": "",
        "pr_img_1": "",
        "pr_img_2": "",
        "pr_img_3": "",
        "pr_img_4": "",
        "highlights": "",
        "rating": ""
    }
];

if (localStorage.getItem("product_detail")) {
    console.log("obj")
} else {
    localStorage.setItem("product_detail", JSON.stringify(product_detail));
    console.log("yes");
}