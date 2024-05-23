import PropTypes from "prop-types";

const RightCart = ({ state, dispatch }) => {
  const { Products } = state;

  const showCart = () => {
    return Products.filter((ele) => ele.count !== 0);
  };

  const cartItems = showCart();
  const total = cartItems.reduce((acc, next) => {
    return acc + next.price * next.count;
  }, 0);

  return (
    <div className="w-1/4 relative h-[460px] bg-[#f2f2f2] rounded-sm">
    <h1 className="bg-black text-white p-2 text-2xl text-center rounded mb-4">CART</h1>
      <div>
        {cartItems.length !== 0 ? (
          cartItems.map((ele) => (
            <div
              key={ele.id}
              className="flex justify-around text-2xl p-4 font-medium bg-[#cfcfcf] m-4 rounded-sm"
            >
              <p>{ele.name}</p>
              <p>
                {ele.count} x {ele.price}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-3xl">Cart is empty</p>
        )}
      </div>

      <p className="absolute bottom-0 text-3xl font-bold w-[84%] p-2">
        Total is {total}
      </p>
    </div>
  );
};

RightCart.propTypes = {
  Products: PropTypes.array,
  dispatch: PropTypes.func,
};

export default RightCart;
