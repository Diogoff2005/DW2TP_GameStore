import GameInCard from "../components/GameInCard/GameInCard";
import CartCounter from "../components/CartCounter/CartCounter";
import "./cart.css";

const Cart = () => {
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
              <div className="cartcontent row">
                <GameInCard
                  picture={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafTpE3c1qQxvViNPGy_220c9lIUktuREqxJri7OTfkw&s"
                  }
                  name={"God of war"}
                  price={"29.99€"}
                />
              </div>
              <div className="cartcontent row">
                <GameInCard
                  picture={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafTpE3c1qQxvViNPGy_220c9lIUktuREqxJri7OTfkw&s"
                  }
                  name={"God of war"}
                  price={"29.99€"}
                />
              </div>
            </div>
            <div className="col-3">
              <CartCounter offPrice={"50"} discounts={"20"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
