import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bottles from "./assets/Components/Bottles/Bottles";
import Cart from "./assets/Components/Cart/Cart";

function App() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    if (bottles.length > 0) {
      const Cart = getStoredCart();
      const storedCart = Cart.map((id) =>
        bottles.find((bottle) => bottle.id === id)
      );
      setCart(storedCart);
    }
  }, [bottles]);

  const handleAddCart = (id) => {
    const purchaseId = [...cart, id];
    setCart(purchaseId);
    addToLS(id);
  };

  function getStoredCart() {
    const getCart = localStorage.getItem("cart");
    if (getCart) {
      return JSON.parse(getCart);
    }
    return [];
  }

  function addToLS(id) {
    const getValue = getStoredCart();
    getValue.push(id);
    const cartStringified = JSON.stringify(getValue);
    localStorage.setItem("cart", cartStringified);
  }
  
  const toggleCart = () => {
    setToggle(!toggle);
  }
  // const allCart =  cart.map(id => bottles.find(bottle => bottle.id === id));

  getStoredCart();
  return (
    <div className="px-24 py-8 space-y-8">
      <h1 className="text-5xl text-black font-semibold text-center ">
        Memorable Water Bottle
      </h1>
      <h1 className="text-3xl text-black font-medium text-center ">
        Bottles length : {bottles.length}
      </h1>
      <div className="flex gap-4 justify-end ">
        <h1 className="text-3xl text-black font-medium text-center ">
          Cart : {cart.length}
        </h1>
        <button onClick={() => toggleCart()} className={` btn text-white bg-blue-600`}>See cart</button>
      </div>
      {/* <div className="flex gap-5 items-center justify-center">
        {cart.map(cart => <img className="w-20" src={cart.img}></img>)}
      </div> */}
      <div className={`absolute flex items-center justify-center flex-col gap-4 rounded-xl shadow-lg bg-transparent backdrop-blur-lg backdrop-black space-y-6 p-8  ${toggle ? "hidden" : 'block'}`}>
        <h1 className="text-4xl text-black font-semibold text-center ">
          Your Shopping Cart
        </h1>
        <div className="grid grid-cols-4 gap-8">
          {cart.map((cart) => (
            <Cart cart={cart}></Cart>
          ))}
        </div>
        <button className="mx-auto btn bg-blue-600 text-white ">
          Purchase All
        </button>
      </div>
      <div>
        <Bottles
          key={bottles.id}
          handleAddCart={handleAddCart}
          bottles={bottles}
        ></Bottles>
      </div>
    </div>
  );
}

export default App;
