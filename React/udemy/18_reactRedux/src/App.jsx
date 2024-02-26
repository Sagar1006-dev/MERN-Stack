import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const sendCartData = async () => {
      setNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      });
      try {
        const response = await fetch(
          "https://react-http-6b4a6.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (!response.ok) {
          throw new Error("Sending cart data failed.");
        }
        setNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        });
      } catch (error) {
        if (error instanceof TypeError && error.message === "Failed to fetch") {
          setNotification({
            status: "error",
            title: "Error!",
            message: "Failed to connect to server!",
          });
        } else {
          setNotification({
            status: "error",
            title: "Error!",
            message: error.message || "Sending cart failed!",
          });
        }
      }
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData();
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
