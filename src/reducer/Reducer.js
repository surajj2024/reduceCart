export const initialState = {
  Products: [
    { id: 1, name: "Product-1", price: 100, count: 0 },
    { id: 2, name: "Product-2", price: 200, count: 0 },
    { id: 3, name: "Product-3", price: 300, count: 0 },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": return {
        ...state,
        Products: state.Products.map((item) => {
            if(item.id === action.payload.id){
                item.count++
            }
            return item;
        }),
      };

    case "REMOVE_FROM_CART":return {
        ...state,
        Products: state.Products.map((item) => {
            if(item.id === action.payload.id){
                if(item.count !== 0)item.count--
            }
            return item;
        }),
      };

      default: state;
  }
};
