import logo from "./logo.png";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import add_address_iamge from "./add_address_image.svg";
import men_sneaker from "./men_sneacker.webp";
import casual_shoe from "./casual_image.webp";
import women_footwear from "./women_footwear.webp";
import sport_shoe from "./sport_shoe.webp";
import kids_collection from "./kids_collection.webp";
import unisex_shoe from "./unisex_shoe.webp";
import main_banner_bg from "./main_banner_bg.png";
import banner_img_md from "./banner_img_md.jpg";
import banner_img_sm from "./banner_img_sm.jpg";

export const assets = {
  logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  main_banner_bg,
  add_address_iamge,
  box_icon,
  men_sneaker,
  casual_shoe,
  women_footwear,
  sport_shoe,
  kids_collection,
  unisex_shoe,
  banner_img_md,
  banner_img_sm
};

// export const footerLinks = [
//   {
//     title: "Quick Links",
//     links: [
//       { text: "Home", url: "#" },
//       { text: "Best Sellers", url: "#" },
//       { text: "Offers & Deals", url: "#" },
//       { text: "Contact Us", url: "#" },
//       { text: "FAQs", url: "#" },
//     ],
//   },
//   {
//     title: "Need help?",
//     links: [
//       { text: "Delivery Information", url: "#" },
//       { text: "Return & Refund Policy", url: "#" },
//       { text: "Payment Methods", url: "#" },
//       { text: "Track your Order", url: "#" },
//       { text: "Contact Us", url: "#" },
//     ],
//   },
//   {
//     title: "Follow Us",
//     links: [
//       { text: "Instagram", url: "#" },
//       { text: "Twitter", url: "#" },
//       { text: "Facebook", url: "#" },
//       { text: "YouTube", url: "#" },
//     ],
//   },
// ];

// export const features = [
//   {
//     icon: delivery_truck_icon,
//     title: "Fastest Delivery",
//     description: "Groceries delivered in under 30 minutes.",
//   },
//   {
//     icon: leaf_icon,
//     title: "Freshness Guaranteed",
//     description: "Fresh produce straight from the source.",
//   },
//   {
//     icon: coin_icon,
//     title: "Affordable Prices",
//     description: "Quality groceries at unbeatable prices.",
//   },
//   {
//     icon: trust_icon,
//     title: "Trusted by Thousands",
//     description: "Loved by 10,000+ happy customers.",
//   },
// ];

export const dummyShoes = [
  {
    _id: "358b5431-d531-46f3-81bb-b927365aa121",
    name: "Golden Accent Men Sneaker",
    category: "Men Sneakers",
    price: 77,
    offerPrice: 68,
    image: [
      "golden_accent_men_sneaker_img1.jpg",
      "golden_accent_men_sneaker_img2.jpg",
      "golden_accent_men_sneaker_img3.jpg",
      "golden_accent_men_sneaker_img4.jpg",
    ],
    description: [
      "Sole Material: PVC",
      "Insole Material: Cloth",
      "Upper Material: PU, Fabric",
      "Inner Material: Fabric",
    ],
    variation: [
      {
        color: "Black",
        sizes: {
          6: false,
          6.5: true,
          7: false,
          7.5: false,
          8: false,
          8.5: true,
          9: false,
          9.5: true,
        },
      },
      {
        color: "White",
        sizes: {
          6: false,
          6.5: true,
          7: false,
          7.5: false,
          8: false,
          8.5: false,
          9: false,
          9.5: true,
        },
      },
      {
        color: "Mesh Black",
        sizes: {
          6: true,
          6.5: true,
          7: true,
          7.5: true,
          8: true,
          8.5: false,
          9: true,
          9.5: true,
        },
      },
      {
        color: "Mesh White",
        sizes: {
          6: true,
          6.5: true,
          7: true,
          7.5: true,
          8: true,
          8.5: false,
          9: true,
          9.5: true,
        },
      },
    ],
    createdAt: "2025-03-25T00:00:00",
    updatedAt: "2025-03-25T00:05:00",
  },
  {
    _id: "19208cf9-7f21-4955-86dd-97d210c1bdf2",
    name: "Trendy Kid Shoe",
    category: "Kids Collection",
    price: 107,
    offerPrice: 101,
    image: ["trendy_kid_shoe_img1.jpg", "trendy_kid_shoe_img2.jpg"],
    description: [
      "Sole Material: PVC",
      "Insole Material: Cloth",
      "Upper Material: PU, Fabric",
      "Inner Material: Fabric",
    ],
    variation: [
      {
        color: "Khaki",
        sizes: {
          6: true,
          6.5: false,
          7: false,
          7.5: true,
          8: false,
          8.5: true,
          9: true,
          9.5: false,
        },
      },
      {
        color: "Black",
        sizes: {
          6: true,
          6.5: true,
          7: false,
          7.5: true,
          8: true,
          8.5: false,
          9: false,
          9.5: false,
        },
      },
    ],
    createdAt: "2025-03-25T00:01:00",
    updatedAt: "2025-03-25T00:06:00",
  },
  {
    _id: "bfa5e1f5-bd83-43e9-a3b2-02a54367a00d",
    name: "Air Max Bolt",
    category: "Kids Collection",
    price: 140,
    offerPrice: 127,
    image: ["air_max_bolt_img1.jpg"],
    description: [
      "Sole Material: PVC",
      "Insole Material: Cloth",
      "Upper Material: PU, Fabric",
      "Inner Material: Fabric",
    ],
    variation: [
      {
        color: "Grey",
        sizes: {
          6: false,
          6.5: true,
          7: true,
          7.5: true,
          8: true,
          8.5: true,
          9: false,
          9.5: false,
        },
      },
    ],
    createdAt: "2025-03-25T00:02:00",
    updatedAt: "2025-03-25T00:07:00",
  },
  {
    _id: "7756fc22-4eb1-4f3a-a52c-dc23fd2eac2f",
    name: "Puma Smash V2",
    category: "Women Footwear",
    price: 128,
    offerPrice: 114,
    image: ["puma_smash_v2_img1.jpg"],
    description: [
      "Sole Material: PVC",
      "Insole Material: Cloth",
      "Upper Material: PU, Fabric",
      "Inner Material: Fabric",
    ],
    variation: [
      {
        color: "Khaki",
        sizes: {
          6: true,
          6.5: true,
          7: true,
          7.5: true,
          8: false,
          8.5: true,
          9: true,
          9.5: true,
        },
      },
    ],
    createdAt: "2025-03-25T00:03:00",
    updatedAt: "2025-03-25T00:08:00",
  },
  {
    _id: "409b07f3-f117-4c3e-98e8-ce7aece51beb",
    name: "Nike Air Zoom Pegasus",
    category: "Unisex Shoes",
    price: 145,
    offerPrice: 129,
    image: ["nike_air_zoom_pegasus_img1.jpg"],
    description: [
      "Sole Material: PVC",
      "Insole Material: Cloth",
      "Upper Material: PU, Fabric",
      "Inner Material: Fabric",
    ],
    variation: [
      {
        color: "Grey",
        sizes: {
          6: true,
          6.5: true,
          7: false,
          7.5: true,
          8: true,
          8.5: false,
          9: true,
          9.5: true,
        },
      },
    ],
    createdAt: "2025-03-25T00:04:00",
    updatedAt: "2025-03-25T00:09:00",
  },
  {
    _id: "f4e32ea8-4eb4-4c07-8bf2-fd7d9f79c995",
    name: "New Balance 574",
    category: "Sport Shoes",
    price: 70,
    offerPrice: 65,
    image: ["new_balance_574_img1.jpeg"],
    description: [
      "Sole Material: PVC",
      "Insole Material: Cloth",
      "Upper Material: PU, Fabric",
      "Inner Material: Fabric",
    ],
    variation: [
      {
        color: "white",
        sizes: {
          6: false,
          6.5: false,
          7: true,
          7.5: true,
          8: true,
          8.5: false,
          9: false,
          9.5: true,
        },
      },
      {
        color: "blue",
        sizes: {
          6: true,
          6.5: true,
          7: false,
          7.5: false,
          8: true,
          8.5: true,
          9: true,
          9.5: false,
        },
      },
      {
        color: "black",
        sizes: {
          6: true,
          6.5: true,
          7: true,
          7.5: false,
          8: false,
          8.5: false,
          9: false,
          9.5: false,
        },
      },
    ],
    createdAt: "2025-03-25T00:07:00",
    updatedAt: "2025-03-25T00:12:00",
  },
];

export const user = [
  {
    _id: "531-13313",
    name: "Alex",
    email: "alex@email.com",
    password: "alex",
    cartItems: [],
    addresses: [
      {
        firstName: "alex",
        lastName: "benjamin",
        street: "No.10",
        city: "karapitiya",
        district: "galle",
        province: "south",
        country: "srilanka",
        phoneNumber: "077745745",
      },
    ],
  },
  {
    _id: "531-13413",
    name: "Ruwan",
    email: "ruwan@email.com",
    password: "ruwan",
    cartItems: [],
    addresses: [
      {
        firstName: "ruwan",
        lastName: "dodmduwa",
        street: "No.15",
        city: "karapitiya",
        district: "galle",
        province: "south",
        country: "srilanka",
        phoneNumber: "077746745",
      },
    ],
  },
];

// export const dummyAddress = [
//   {
//     _id: "67b5b9e54ea97f71bbc196a0",
//     userId: "67b5880e4d09769c5ca61644",
//     firstName: "Great",
//     lastName: "Stack",
//     email: "user.greatstack@gmail.com",
//     street: "Street 123",
//     city: "Main City",
//     state: "New State",
//     zipcode: 123456,
//     country: "IN",
//     phone: "1234567890",
//   },
// ];

// export const dummyOrders = [
//   {
//     _id: "67e2589a8f87e63366786400",
//     userId: "67b5880e4d09769c5ca61644",
//     items: [
//       {
//         product: dummyProducts[3],
//         quantity: 2,
//         _id: "67e2589a8f87e63366786401",
//       },
//     ],
//     amount: 89,
//     address: dummyAddress[0],
//     status: "Order Placed",
//     paymentType: "Online",
//     isPaid: true,
//     createdAt: "2025-03-25T07:17:46.018Z",
//     updatedAt: "2025-03-25T07:18:13.103Z",
//   },
//   {
//     _id: "67e258798f87e633667863f2",
//     userId: "67b5880e4d09769c5ca61644",
//     items: [
//       {
//         product: dummyProducts[0],
//         quantity: 1,
//         _id: "67e258798f87e633667863f3",
//       },
//       {
//         product: dummyProducts[1],
//         quantity: 1,
//         _id: "67e258798f87e633667863f4",
//       },
//     ],
//     amount: 43,
//     address: dummyAddress[0],
//     status: "Order Placed",
//     paymentType: "COD",
//     isPaid: false,
//     createdAt: "2025-03-25T07:17:13.068Z",
//     updatedAt: "2025-03-25T07:17:13.068Z",
//   },
// ];
