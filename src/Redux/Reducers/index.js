import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";

 const reducers = combineReducers({
    allProducts: ProductReducer,
    // product: selectedProductsReducer,
});

export default reducers;

// import { combineReducers } from "redux";
// import { productsReducer, selectedProductsReducer } from "./productsReducer";
// const reducers = combineReducers({
//   allProducts: productsReducer,
//   product: selectedProductsReducer,
// });
// export default reducers;