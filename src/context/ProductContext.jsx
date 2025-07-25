import { createContext, useState } from "react"



export const productcontext = createContext(null)

const ProductContext = (props) => {

      const [products,Setproducts] = useState( [
    {
      id: 1,
      name: "Masala Wafer",
      description:
        "A perfect blend of spices and crunch. Spicy, tangy, and utterly addictive.",
      image:
        " https://www.balajiwafers.com/cdn/shop/files/Crunchem_Masala_Masti_Wafers_Default_bc03ebaa-4c86-4de2-977b-c25c873ade91.png?v=1749561574&width=1500",
      price: "₹40",
      bg: "#5fc9fa",
      bigimg : "https://www.balajiwafers.com/cdn/shop/files/Crunchem__Masala_Masti_Wafers_Carousal_01_4ec160eb-3668-495f-9a39-8bcd2b67158f.jpg?v=1746169125",
      ingr: "Potato (87%), Edible Vegetable Oil (Palmolein), Sugar, Spices & Condiments 1% (Chilli, Dry Mango, Coriander, Cumin, Black Pepper, Ginger, Clove), Edible Common Salt, Black Salt",
    },
    {
      id: 2,
      name: "Chat Chaska",
      description:
        "Cheesy goodness with a crispy twist. A favorite among kids and adults alike.",
      image: " https://www.balajiwafers.com/cdn/shop/files/Crunchem_Chaat_Chaska_Wafers_Default_36b39d51-f832-4f38-897a-df0aff2f5f24.png?v=1749561464&width=1500",
      price: "₹10",
      bg: "#fac45f",
      bigimg : "https://www.balajiwafers.com/cdn/shop/files/Crunchem__Chaat_Chaska_Wafers_Carousal_01_0097a0df-79db-4f3c-a168-3c0a54fa4f2e.jpg?v=1746169312&width=768",
      ingr: "Potato (88%), Edible Vegetable Oil (Palmolein), Edible Common Salt, Spices & Condiments 0.5% (Cumin, Chilli, Parsley, Ginger, Cinnamon, Black Pepper, Dry Mango), Dehydrated Vegetable Powder (Onion, Garlic), Sugar, Maltodextrin, Flavour Enhancer (INS 627, INS 631), Acidity Regulator (INS 296, INS 330), Anticaking Agent (INS 551), Natural & Nature Identical Flavouring Substances (Chaat)",
    },
    {
      id: 3,
      name: "Chilli Tadka",
      description: "For the spice lovers. Bold, hot, and full of flavor.",
      image: " https://www.balajiwafers.com/cdn/shop/files/Crunchex_Chilli_Tadka_Wafers_Default_76e7f7b0-9629-4f93-b320-b5793e035ce8.png?v=1749560920&width=1500",
      price: "₹40",
      bg: "#fa5f5f",
      bigimg : "https://www.balajiwafers.com/cdn/shop/files/Crunchem_ChilliTadkaWafers_Carousal_01.jpg?v=1746174230&width=768",
      ingr: "Potato (88%), Edible Vegetable Oil (Palmolein), Sugar, Edible Common Salt, Maltodextrin, Spices & Condiments (Chilli (0.5%), Pepper), Dehydrated Vegetable Powder (Onion, Garlic (0.1%), Tomato), Milk Solids (Whey) (0.1%), Hydrolyzed Vegetable Protein (Soya), Acidity Regulator (INS 296, INS 334), Anticaking Agent (INS 551), Mineral Salt (INS 340), Paprika Extract (INS 160C), Flavour Enhancer (INS 627, INS 631), Natural & Nature Identical Flavouring Substance (Chilli)",
    },
    {
      id: 4,
      name: "Rumble Fudina",
      description: "Classic and crisp. Perfect with tea or as a light snack.",
      image: " https://www.balajiwafers.com/cdn/shop/files/Rumbles_Pudina_Twist_Wafers_Default_9b819c2b-43f6-4b48-8121-f29950aeda33.png?v=1749560637&width=1500",
      price: "₹40",
      bg: "#5ffa69",
      bigimg : "https://www.balajiwafers.com/cdn/shop/files/Rumbles_Pudina_Twist_Wafers_Carousal_01_510bceb4-8253-4583-a159-bfe1cc3c0fb0.jpg?v=1746174391&width=768",
      ingr: "Potato (88%), Edible Vegetable Oil (Palmolein), Edible Common Salt, Maltodextrin, Spices & Condiments 2% (Cumin, Coriander, Cinnamon), Dehydrated Vegetable Powder (Onion, Garlic), Sugar, Black Salt, Acidity Regulator (INS 330), Anticaking Agent (INS 551), Flavour Enhancer (INS 627, INS 631), Natural & Nature Identical Flavouring Substances (Mint)",
    },
    {
      id: 5,
      name: "Tomato Twist",
      description: "Classic and crisp with extra crunch. Perfect with tea or as a light snack.",
      image: " https://www.balajiwafers.com/cdn/shop/files/Crunchem_Tomato_Twist_Wafers_Default_f0a9a1d5-cbe0-4475-9aac-0423acae381c.png?v=1749561520&width=1500",
      price: "₹40",
      bg: "#5ffab4",
      bigimg : "https://www.balajiwafers.com/cdn/shop/files/Crunchem_Tomato_Twist_Wafers_Carousal_01_cc8a6840-9a84-427a-8f59-5a8bc4002774.jpg?v=1746169179&width=768",
      ingr: "Potato (87%), Edible Vegetable Oil (Palmolein), Sugar, Edible Common Salt, Maltodextrin, Spices & Condiments (Chilli, Cumin, Clove, Cinnamon), Dehydrated Vegetable Powder (Tomato (1%), Onion, Garlic), Acidity Regulator (INS 296, INS 330), Anticaking Agent (INS 551), Flavour Enhancer (INS 627, INS 631), Natural & Nature Identical Flavouring Substances (Tomato)",
    },
    {
      id: 6,
      name: "Banana - Mast Mari",
      description: "Classic and crisp with extra crunch. Perfect with tea or as a light snack.",
      image: " https://www.balajiwafers.com/cdn/shop/files/Banana_Mari_Wafers_Default_f5103cc1-4b49-42ba-a6fe-674a548b62b0.png?v=1749560524&width=1500",
      price: "₹10",
      bg: "#e5fa5f",
      bigimg : "https://www.balajiwafers.com/cdn/shop/files/Wafers_Banana_Mari_Wafers_Carousal_01_f5209ac7-54c7-4e4d-a1ba-a46b71a3ae5d.jpg?v=1746174585&width=768",
      ingr: "Banana (91%), Edible Vegetable Oil (Palmolein), Black Pepper Powder (0.6%), Edible Common Salt",
    },
    {
      id: 7,
      name: "Peri Peri",
      description: "Classic and crisp with extra crunch. Perfect with tea or as a light snack.",
      image: " https://www.balajiwafers.com/cdn/shop/files/Crunchem_Peri_Peri_Wafers_Defult_c6f530ae-1fbd-4e8a-be74-89f5eff3c6a8.png?v=1749561037&width=1500",
      price: "₹10",
      bg: "#e5fa5f",
      bigimg : "https://www.balajiwafers.com/cdn/shop/files/Crunchem__Peri_Peri_Wafers_Carousal_01_b9bbb4d9-f5bd-4550-8d33-41bfbf96597f.jpg?v=1746173966&width=768",
      ingr: "Potato (88%), Edible Vegetable Oil (Palmolein), Spices & Condiments 0.6% (Chilli, Black Pepper, Curry Leaves, Oregano), Dehydrated Vegetable Powder (Garlic, Tamarind, Onion), Edible Common Salt, Sugar, Hydrolyzed Vegetable Protein (Soya), Acidity Regulator (INS 330), Anticaking Agent (INS 551), Natural & Nature Identical Flavouring Substances (Peri Peri)",
    },
    {
      id: 8,
      name: "Cream & Onion",
      description: "For the spice lovers. Bold, hot, and full of flavor.",
      image: " https://www.balajiwafers.com/cdn/shop/files/Crunchem_Cream_Onion_Wafers_Default_4a89e1e3-54a9-4089-92de-c1ad75b11156.png?v=1746173853&width=1500",
      price: "₹40",
      bg: "#e5fa5f",
      bigimg : "https://www.balajiwafers.com/cdn/shop/files/Crunchem__Cream_Onion_Wafers_Carousal_01_9fcea2c0-9667-4ce4-b6cf-9ca5a700ddca.jpg?v=1746173813&width=768",
      ingr: "Potato (88%), Edible Vegetable Oil (Palmolein), Milk Solids (Whey) (0.7%), Sugar, Edible Common Salt, Onion Powder (0.3%), Cheese Powder (0.2%), Herbs (Chives, Parsley), Acidity Regulator (INS 330), Yeast Extract Powder, Anticaking Agent (INS 551), Hydrolyzed Vegetable Powder (Soya), Flavour Enhancer (INS 627, INS 631), Natural & Nature Identical Flavouring Substances (Cream, Onion)",
    },
    {
      id: 9,
      name: "Pizzy Masala",
      description: "Classic and crisp with extra crunch. Perfect with tea or as a light snack.",
      image: " https://www.balajiwafers.com/cdn/shop/files/Crunchem_Pizzy_Masala_Wafers_Default_0b57b5df-b8e0-4d51-ad08-73c93c7b3ffb.png?v=1749561106&width=1500",
      price: "₹10",
      bg: "#e5fa5f",
      bigimg : "https://www.balajiwafers.com/cdn/shop/files/Crunchem__Pizzy_Masala_Wafers_Carousal_01_f347cd7d-bf4b-4e1f-ba47-dff2f2bf4703.jpg?v=1746173894",
      ingr: "Potato (88%), Edible Vegetable Oil (Palmolein), Sugar, Edible Common Salt, Dehydrated Vegetable Powder 0.6% (Onion, Garlic, Tomato), Milk Solids (Whey (0.1%)), Spices & Condiments (Chilli, Pepper, Oregano), Parsley, Anticaking Agent (INS 551, INS 414), Natural & Nature Identical Flavouring Substances (Pizza)",
    },
  ]
)

  return (
    <productcontext.Provider value={{products,Setproducts}}>
            {props.children}
    </productcontext.Provider>
  )
}

export default ProductContext