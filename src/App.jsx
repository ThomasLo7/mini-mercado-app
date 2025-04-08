import { useState, useEffect } from 'react'
import Titulo from "./components/titulo"
import Productbox from "./components/productbox"
import ProductCart from './components/productcart'
function App() {
  //Hook para actualizar el carrito
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('shoppingCart');
    if(storedCart){
      try {
        return JSON.parse(storedCart);
      } catch (error) {
        console.error("Error analizando el carrito de compra", error);
        return [];
      }
    } else {
      return [];
    }
  })

  //Actualizo la base de datos del navegador cada que cambia el carrito de compras
  useEffect(() => {
    try{
      localStorage.setItem("shoppingCart", JSON.stringify(cart))
    } catch (error) {
      console.error("Error guardando el carrito de compra", error);
    }
  }, [cart])


  //Funciones para agregar o eliminar algún producto del carrito de compras
  const handleAdd = (productId) => {
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct){
      const updatedCart = cart.map(item => 
        item.id === productId ? {...item, cantidad: item.cantidad + 1} : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, {id: productId, cantidad: 1}]);
    };
  };
  const handleDelete = (productId) => {
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
      if (existingProduct.cantidad > 1) {
        // Resta 1 si hay más de uno
        const updatedCart = cart.map(item =>
          item.id === productId ? { ...item, cantidad: item.cantidad - 1 } : item
        );
        setCart(updatedCart);
      } else {
        // Si solo hay uno, lo elimina
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
      }
    }
  };
  return (
    <>
    <Titulo/>
    <Productbox cart={cart} handleAdd={handleAdd} handleDelete={handleDelete}/>
    <ProductCart cart={cart} handleDelete={handleDelete} handleAdd={handleAdd}/>
    </>
  )
} 

export default App;
