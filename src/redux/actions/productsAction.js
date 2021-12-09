import { types } from "../types/types";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const getProductsSync = (products) => {
  return {
    type: types.obtener,
    payload: products,
  };
};

export const getProductsAsync = () => {
  return async (dispatch) => {
    let docRef = collection(db, "products");
    let getData = await getDocs(docRef);

    const products = [];

    getData.forEach((doc) => {
      //console.log(doc.data());
      products.push(doc.data());
    });

    dispatch(getProductsSync(products));
  };
};

export const filterProducts = (products) => {
  return {
    type: types.filtrar,
    payload: products,
  };
};
