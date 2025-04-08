import { useState, useEffect } from "react";
import React from "react";
import imgJabon from './assets/jabon.jpg';
import imgPapel from './assets/papel.jpg';
import imgToallas from './assets/toallascocina.webp';
import imgArroz from './assets/arroz.jpg';
import imgPan from './assets/pan.jpg';
import imgGalleta from './assets/galleta.jpg';
import imgChicle from './assets/chicle.jpg';
import imgRB from './assets/redbull.jpg';


const imagenesProductos = {
  jabon: imgJabon,
  papel: imgPapel,
  toallas: imgToallas,
  arroz: imgArroz,
  pan: imgPan,
  galleta: imgGalleta,
  chicle: imgChicle,
  redbull: imgRB,
};

const productosData = [
    { id: 1, nombre: 'Jabón', imagen: 'jabon', precio:4000 },
    { id: 2, nombre: 'Papel Higiénico', imagen: 'papel', precio: 5000 },
    { id: 3, nombre: 'Toallas Reciclables', imagen: 'toallas', precio: 4500},
    { id: 4, nombre: 'Arroz', imagen: 'arroz', precio: 3000},
    { id: 5, nombre: 'Pan', imagen: 'pan', precio: 500 },
    { id: 6, nombre: 'Galleta', imagen: 'galleta', precio: 1300 },
    { id: 7, nombre: 'Chicle', imagen: 'chicle', precio: 1200 },
    { id: 8, nombre: 'Red Bull', imagen: 'redbull', precio: 7500 },
];

const ProductCart = ({ cart, handleAdd, handleDelete }) => {
  const productInCart = productosData
  .filter(producto => cart.some(item => item.id === producto.id))
  .map(producto => {
    const cartItem = cart.find(item => item.id === producto.id);
    return { ...producto, cantidad: cartItem.cantidad };
  });
  const subTotal = productInCart.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

    //Calculo los descuentos
    var discountValue = "0%";
    var discount = 0;
    var totalDiscount = subTotal;

    if (subTotal > 50000){
        discountValue = "10%"
        discount = subTotal * (10/100)
        totalDiscount = subTotal - discount
    } else if(subTotal >= 30000 && subTotal <= 50000){
        discountValue = "5%"
        discount = subTotal * (5/100)
        totalDiscount = subTotal - discount
    } else if (subTotal < 30000){
        discountValue = "0%"
        discount = 0
        totalDiscount = subTotal;
    };

    return (
      <div className="mt-2 flex flex-col bg-[#f1f5f9] px-10 py-10 rounded">
        <h2 className="text-3xl text-[#1e293b] font-bold mb-4">Carrito de productos:</h2>
        {productInCart.length === 0 ? (
          <p className="text-[#64748b] text-lg">El carrito está vacío</p>
        ) : (
          <ul className="grid grid-cols-4 gap-4">
            {productInCart.map((producto) => {
              const imagenSrc = imagenesProductos[producto.imagen];
              return (
                <li key={producto.id} className="bg-white p-4 rounded shadow text-center">
                  <p className="font-bold mb-2 text-[#1e293b]">{producto.nombre}</p>
                  <img src={imagenSrc} alt={producto.nombre} className="w-20 h-20 object-cover mx-auto mb-2"/>
                  <p className="text-lg font-semibold text-[#1e293b]">cantidad: {producto.cantidad}</p>
                  <p>Total: ${producto.precio * producto.cantidad}</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <button onClick={() => handleAdd(producto.id)} className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-1 px-3 rounded">
                      +
                    </button>
                    <button onClick={() => handleDelete(producto.id)} className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-1 px-3 rounded">
                      -
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        <p className="mt-2 bg-[#e2e8f0] rounded shadow text-center text-[#1e293b] flex-justify-center px-2 py-2 max-w-60">Subtotal: ${subTotal}</p>
        <p className="mt-2 bg-[#e2e8f0] rounded shadow text-center text-[#1e293b] flex-justify-center px-2 py-2 max-w-60">Total con descuento de {discountValue}: ${totalDiscount}</p>
      </div>
    );
  };
  
  export default ProductCart;
  