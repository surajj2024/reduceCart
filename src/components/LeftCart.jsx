import PropTypes from "prop-types";

const LeftCart = ({ state, dispatch }) => {
  const { Products } = state;
  return (
    <div className=" w-2/5 h-[460px] bg-[#f2f2f2] rounded-sm">
    <h1 className="bg-black text-white p-2 text-2xl text-center rounded mb-4">PRODUCTS</h1>
      {Products.map((item) => {
        return (
          <div key={item.id} className="flex justify-around p-4 text-2xl m-4 rounded-lg bg-[#cfcfcf]">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <div className="flex w-1/5 justify-around rounded-lg font-bold bg-[#d3e3fd]">
              <button
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
              >
                +
              </button>
              <p>{item.count}</p>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item })
                }
              >
                -
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

LeftCart.prototype = {
  state: PropTypes.object,
  Products: PropTypes.array,
  dispatch: PropTypes.func,
};

export default LeftCart;
