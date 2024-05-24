import React, { useState, useEffect } from "react";
import GameInCard from "../components/GameInCard/GameInCard";
import CartCounter from "../components/CartCounter/CartCounter";
import { supabase } from "../components/supabase";
import Buttonsubmit from "../components/Buttonsubmit/Buttonsubmit";
import "./cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [games, setGames] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = sessionStorage.getItem("cart");
    if (storedCart) {
      try {
        const cartArray = JSON.parse(storedCart);
        setCart(cartArray);
        fetchGames(cartArray);
      } catch (error) {
        console.error("Failed to parse cart from session storage", error);
      }
    }
  }, []);

  const getData = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGames = async (ids) => {
    const { data, error } = await supabase
      .from("games")
      .select("*")
      .in("id", ids);

    if (error) {
      console.error("Error fetching games:", error);
    } else {
      const gamesWithQuantity = data.map((game) => ({
        ...game,
        quantity: 1,
      }));
      setGames(gamesWithQuantity);
      calculateTotalPrice(gamesWithQuantity);
    }
  };

  const calculateTotalPrice = (games) => {
    const total = games.reduce(
      (sum, game) => sum + game.price * game.quantity,
      0
    );
    setTotalPrice(total);
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedGames = games.map((game) =>
      game.id === id ? { ...game, quantity: parseInt(quantity) } : game
    );
    setGames(updatedGames);
    calculateTotalPrice(updatedGames);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get the user data
      const { user, error: userError } = await supabase.auth.getUser();
      if (userError) {
        throw userError;
      }

      // Insert each game from the cart for the current user
      const insertPromises = games.map(async (game) => {
        const { error } = await supabase
          .from("userGames")
          .insert({ idUser: user.id, idGame: game.id });
        if (error) {
          throw error;
        }
      });

      // Wait for all insertions to complete
      await Promise.all(insertPromises);

      console.log("Bought successfully. Game On!");
      sessionStorage.removeItem("cart");
    } catch (error) {
      console.error("Error submitting cart:", error.message);
    }
  };

  return (
    <main className="main">
      <div className="grid-container">
        <h2 className="title col-3">Cart</h2>
        <div className="col-3">
          <h2 className="Summary">Summary</h2>
        </div>
        <div className="cart row grid-container">
          <div className="row">
            <div className="col-3">
              {games.map((game) => (
                <div className="cartcontent row" key={game.id}>
                  <GameInCard
                    picture={game.coverImg}
                    name={game.name}
                    price={game.price}
                    quantity={game.quantity}
                    onQuantityChange={(quantity) =>
                      handleQuantityChange(game.id, quantity)
                    }
                  />
                </div>
              ))}
            </div>
            <div className="col-3">
              <CartCounter offPrice={totalPrice.toFixed(2)} discounts={"0"} />
              <div className="align">
                <form onSubmit={handleSubmit}>
                  <Buttonsubmit
                    className={"Payment"}
                    textobutton={"Go to payment"}
                  ></Buttonsubmit>
                </form>
              </div>
              <Buttonsubmit
                className={"Shopping"}
                textobutton={"Continue Shopping"}
              ></Buttonsubmit>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
