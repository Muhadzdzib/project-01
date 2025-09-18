import React, { useState } from "react";

const menuData = [
  {
    category: "Coffe Based",
    items: [
      {
        name: "Espresso",
        price: "Rp 25.000",
        desc: "Kopi hitam pekat dengan aroma khas.",
        img: "https://static.fore.coffee/product/Americano%20Iced.jpg",
      },
      {
        name: "Iced Americano",
        price: "Rp 28.000",
        desc: "Espresso dengan tambahan air dingin dan Es Batu.",
        img: "https://static.fore.coffee/product/Manuka%20Americano%20Iced.jpg",
      },
      {
        name: "Hot Americano",
        price: "Rp 28.000",
        desc: "Espresso dengan tambahan air panas.",
        img: "https://static.fore.coffee/product/Manuka%20Americano%20Hot.jpg",
      },
      {
        name: "Long Black",
        price: "Rp 30.000",
        desc: "Espresso dengan air panas, rasa lebih kuat.",
        img: "https://static.fore.coffee/product/Manuka%20Americano%20Hot.jpg",
      },
      {
        name: "Hot Americano",
        price: "Rp 28.000",
        desc: "Espresso dengan tambahan air panas.",
        img: "https://static.fore.coffee/product/Manuka%20Americano%20Hot.jpg",
      },
      {
        name: "Long Black",
        price: "Rp 30.000",
        desc: "Espresso dengan air panas, rasa lebih kuat.",
        img: "https://static.fore.coffee/product/Manuka%20Americano%20Hot.jpg",
      },
      {
        name: "Hot Americano",
        price: "Rp 28.000",
        desc: "Espresso dengan tambahan air panas.",
        img: "https://static.fore.coffee/product/Manuka%20Americano%20Hot.jpg",
      },
      {
        name: "Long Black",
        price: "Rp 30.000",
        desc: "Espresso dengan air panas, rasa lebih kuat.",
        img: "https://static.fore.coffee/product/Manuka%20Americano%20Hot.jpg",
      },
      {
        name: "Long Black",
        price: "Rp 30.000",
        desc: "Espresso dengan air panas, rasa lebih kuat.",
        img: "https://static.fore.coffee/product/Manuka%20Americano%20Hot.jpg",
      },
    ],
  },
  {
    category: "Milk Based",
    items: [
      {
        name: "Cappuccino",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cappuccino",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cappuccino",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cappuccino",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cappuccino",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cappuccino",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cappuccino",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cappuccino",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cappuccino",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
    ],
  },
  {
    category: "Cocktail",
    items: [
      {
        name: "Cokctail",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cokctail",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cokctail",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cokctail",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cokctail",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cokctail",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cokctail",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cokctail",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
      {
        name: "Cokctail",
        price: "Rp 32.000",
        desc: "Espresso, susu, dan foam lembut.",
        img: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg",
      },
    ],
  },
  {
    category: "Food",
    items: [
      {
        name: "Chicken Sandwich",
        price: "Rp 40.000",
        desc: "Roti isi ayam dan sayuran segar.",
        img: "https://static.fore.coffee/product/Cakalang%20Quiche.png",
      },
      {
        name: "Chicken Sandwich",
        price: "Rp 40.000",
        desc: "Roti isi ayam dan sayuran segar.",
        img: "https://static.fore.coffee/product/Cakalang%20Quiche.png",
      },
      {
        name: "Chicken Sandwich",
        price: "Rp 40.000",
        desc: "Roti isi ayam dan sayuran segar.",
        img: "https://static.fore.coffee/product/Cakalang%20Quiche.png",
      },
      {
        name: "Chicken Sandwich",
        price: "Rp 40.000",
        desc: "Roti isi ayam dan sayuran segar.",
        img: "https://static.fore.coffee/product/Cakalang%20Quiche.png",
      },
      {
        name: "Chicken Sandwich",
        price: "Rp 40.000",
        desc: "Roti isi ayam dan sayuran segar.",
        img: "https://static.fore.coffee/product/Cakalang%20Quiche.png",
      },
      {
        name: "Chicken Sandwich",
        price: "Rp 40.000",
        desc: "Roti isi ayam dan sayuran segar.",
        img: "https://static.fore.coffee/product/Cakalang%20Quiche.png",
      },
      {
        name: "Chicken Sandwich",
        price: "Rp 40.000",
        desc: "Roti isi ayam dan sayuran segar.",
        img: "https://static.fore.coffee/product/Cakalang%20Quiche.png",
      },
      {
        name: "Chicken Sandwich",
        price: "Rp 40.000",
        desc: "Roti isi ayam dan sayuran segar.",
        img: "https://static.fore.coffee/product/Cakalang%20Quiche.png",
      },
      {
        name: "Chicken Sandwich",
        price: "Rp 40.000",
        desc: "Roti isi ayam dan sayuran segar.",
        img: "https://static.fore.coffee/product/Cakalang%20Quiche.png",
      },
    ],
  },
  {
    category: "Pastry",
    items: [
      {
        name: "Croissant",
        price: "Rp 18.000",
        desc: "Pastry renyah khas Perancis.",
        img: "https://static.fore.coffee/product/Choco%20Melt%20Muffin.png",
      },
      {
        name: "Croissant",
        price: "Rp 18.000",
        desc: "Pastry renyah khas Perancis.",
        img: "https://static.fore.coffee/product/Choco%20Melt%20Muffin.png",
      },
      {
        name: "Croissant",
        price: "Rp 18.000",
        desc: "Pastry renyah khas Perancis.",
        img: "https://static.fore.coffee/product/Choco%20Melt%20Muffin.png",
      },
      {
        name: "Croissant",
        price: "Rp 18.000",
        desc: "Pastry renyah khas Perancis.",
        img: "https://static.fore.coffee/product/Choco%20Melt%20Muffin.png",
      },
      {
        name: "Croissant",
        price: "Rp 18.000",
        desc: "Pastry renyah khas Perancis.",
        img: "https://static.fore.coffee/product/Choco%20Melt%20Muffin.png",
      },
      {
        name: "Croissant",
        price: "Rp 18.000",
        desc: "Pastry renyah khas Perancis.",
        img: "https://static.fore.coffee/product/Choco%20Melt%20Muffin.png",
      },
      {
        name: "Croissant",
        price: "Rp 18.000",
        desc: "Pastry renyah khas Perancis.",
        img: "https://static.fore.coffee/product/Choco%20Melt%20Muffin.png",
      },
      {
        name: "Croissant",
        price: "Rp 18.000",
        desc: "Pastry renyah khas Perancis.",
        img: "https://static.fore.coffee/product/Choco%20Melt%20Muffin.png",
      },
      {
        name: "Croissant",
        price: "Rp 18.000",
        desc: "Pastry renyah khas Perancis.",
        img: "https://static.fore.coffee/product/Choco%20Melt%20Muffin.png",
      },
    ],
  },
  {
    category: "Snack",
    items: [
      {
        name: "French Fries",
        price: "Rp 15.000",
        desc: "Kentang goreng renyah.",
        img: "https://static.fore.coffee/product/Mushroom%20Truffle%20Sandwich.png",
      },
      {
        name: "French Fries",
        price: "Rp 15.000",
        desc: "Kentang goreng renyah.",
        img: "https://static.fore.coffee/product/Mushroom%20Truffle%20Sandwich.png",
      },
      {
        name: "French Fries",
        price: "Rp 15.000",
        desc: "Kentang goreng renyah.",
        img: "https://static.fore.coffee/product/Mushroom%20Truffle%20Sandwich.png",
      },
      {
        name: "French Fries",
        price: "Rp 15.000",
        desc: "Kentang goreng renyah.",
        img: "https://static.fore.coffee/product/Mushroom%20Truffle%20Sandwich.png",
      },
      {
        name: "French Fries",
        price: "Rp 15.000",
        desc: "Kentang goreng renyah.",
        img: "https://static.fore.coffee/product/Mushroom%20Truffle%20Sandwich.png",
      },
      {
        name: "French Fries",
        price: "Rp 15.000",
        desc: "Kentang goreng renyah.",
        img: "https://static.fore.coffee/product/Mushroom%20Truffle%20Sandwich.png",
      },
      {
        name: "French Fries",
        price: "Rp 15.000",
        desc: "Kentang goreng renyah.",
        img: "https://static.fore.coffee/product/Mushroom%20Truffle%20Sandwich.png",
      },
      {
        name: "French Fries",
        price: "Rp 15.000",
        desc: "Kentang goreng renyah.",
        img: "https://static.fore.coffee/product/Mushroom%20Truffle%20Sandwich.png",
      },
      {
        name: "French Fries",
        price: "Rp 15.000",
        desc: "Kentang goreng renyah.",
        img: "https://static.fore.coffee/product/Mushroom%20Truffle%20Sandwich.png",
      },
    ],
  },
];

const categories = menuData.map((cat) => cat.category);

const Menu = () => {
  const [activeCat, setActiveCat] = useState(categories[0]);

  const activeMenus =
    menuData.find((cat) => cat.category === activeCat)?.items || [];

  return (
    <section id="menu" className="min-h-screen bg-white py-10 px-4 pt-20">
      <h1 className="text-4xl font-bold text-center mb-8">Available Menu</h1>
      {/* Kategori */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-4 py-2 rounded-full font-semibold border transition
                        ${
                          activeCat === cat
                            ? "bg-[#09DCD5] text-white border-[#09DCD5]"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-[#09DCD5] hover:text-white"
                        }
                    `}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Daftar Menu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {activeMenus.map((item, idx) => (
          <div key={idx} className="p-4 flex flex-row gap-4">
            <img
              src={item.img}
              alt={item.name}
              className="w-45 h-50 object-cover rounded-lg"
            />
            <div className="flex-1 flex flex-col">
              <h3 className="font-bold text-lg mb-1">{item.name}</h3>
              <span className="text-[#09DCD5] font-semibold mb-1">
                {item.price}
              </span>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
