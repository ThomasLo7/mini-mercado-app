# 🛒 Mini Market

A simple shopping cart app built with **React + Tailwind CSS**. Users can add products, modify quantities, get discounts, and their cart is saved persistently using **localStorage**. This project is my first project as software developer student, and i'm open to get feedback.

## 🚀 Features

- Browse a list of available products
- Add or remove items from the cart
- See quantity and subtotal per product
- Automatic discount calculation:
  - 0% for totals under $30,000
  - 5% for totals between $30,000 and $50,000
  - 10% for totals above $50,000
- Cart persistence using `localStorage`

## 💻 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📦 Installation

```bash
git clone https://github.com/ThomasLo/mini-market.git
cd mini-market
npm install
npm run dev
```

> The app will open at `http://localhost:5173`

## 📁 Project Structure

```
src/
│
├── assets/              # Product images
├── components/          # Reusable components
│   ├── Productbox.jsx
│   ├── ProductCart.jsx
│   ├── Title.jsx
│   └── ...
├── App.jsx              # Main component
└── main.jsx             # Entry point
```


## 🔮 Future Ideas (v2.0)

- Product search bar
- Category filtering
- Backend integration
- User authentication
- Responsive design

---

Created with ❤️ by **ThomasLo**
