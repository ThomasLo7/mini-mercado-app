import React, { useEffect, useState } from "react";
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


const Productbox = ({cart, handleAdd, handleDelete}) => {
  
  return (
    <div className="flex flex-col bg-[#f1f5f9] px-10 py-5 rounded">
      <h2 className="text-3xl text-[#1e293b] font-bold mb-2">Nuestros productos:</h2>
      <ul className="space-y-4 grid grid-flow-col grid-rows-2 grid-cols-4 content-start gap-4">
        {productosData.map((producto) => {
          const imagenSrc = imagenesProductos[producto.imagen] || null;
          return(
          <li key={producto.id} className="flex flex-col items-center text-stone-950 bg-white p-2 rounded-lg shadow-md">
            <span className=" flex justify-center font-semibold text-[#1e293b] text-lg w-40 bg-[#e2e8f0] rounded">{producto.nombre}</span>
            <p className="ttext-green-700 font-bold text-md mb-2 bg-[#e2e8f0] px-1 py-1 rounded">${producto.precio}</p>
            {imagenSrc && (<img src={imagenSrc} alt={producto.nombre} className="w-24 h-24 rounded-md mx-auto mt-2" />)}
            <ProductButtonAdd productId={producto.id} onAdd={handleAdd}/>
            <ProductButtonDelete productId={producto.id} onDelete={handleDelete}/>
          </li>
        )})}
      </ul>
    </div>
  );
};

const ProductButtonAdd = ({productId, onAdd}) => {
  const handleAdd = () => {
      onAdd(productId);
  }
  return(
      <button onClick={handleAdd} className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-2 px-4 rounded mt-2">
          Agregar
      </button>
  )
}

const ProductButtonDelete = ({productId, onDelete}) => {
  const handleDelete = () => {
    onDelete(productId);
  }
  return(
    <button onClick={handleDelete} className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-2 px-4 rounded mt-2">
    Eliminar
  </button>
  )
}

export default Productbox;