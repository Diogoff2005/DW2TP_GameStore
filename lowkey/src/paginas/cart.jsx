import GameInCard from "../components/GameInCard/GameInCard";
import "./cart.css";

const Cart = () => {
  return (
    <main className="main">
      <h2 className="title">Cart</h2>
      <div className="grid-container">
        <div className="cart">
          <div className="cartcontent col-4">
            <GameInCard
              picture={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafTpE3c1qQxvViNPGy_220c9lIUktuREqxJri7OTfkw&s"
              }
              name={"God of war"}
              price={"29.99€"}
            />
          </div>
          <div className="cartcontent">
            <GameInCard
              picture={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafTpE3c1qQxvViNPGy_220c9lIUktuREqxJri7OTfkw&s"
              }
              name={"God of war"}
              price={"29.99€"}
            />
          </div>
        </div>
        <div className="col-2">
          <h2 className="title">Summary</h2>
        </div>
      </div>
    </main>
  );
};

export default Cart;
