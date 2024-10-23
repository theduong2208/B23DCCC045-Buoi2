import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from './actions';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
      
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };

    default:
      return state;
  }
};

export default productReducer;
