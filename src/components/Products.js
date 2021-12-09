import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductsContainer } from "../styles/ProductsStyles";
import {
  getProductsAsync,
  filterProducts,
} from "../redux/actions/productsAction";
import uuid from "react-uuid";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const { filter } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  useEffect(() => {
    dispatch(filterProducts(products));
  }, [products]);

  return (
    <ProductsContainer>
      <div className="products-container">
        {filter?.map((product, index) => {
          if (index < 3) {
            return (
              <div className="product-container" key={uuid()}>
                <img src={product?.image} alt={product?.name} />
                <p className="name">{product?.name}</p>
                <p className="precio">R$ {product?.price}</p>
                <p className="desc">{product?.desc}</p>
                <button>COMPRAR</button>
              </div>
            );
          }
        })}
      </div>

      <div className="products-container">
        {filter?.map((product, index) => {
          if (index > 2 && index < 6) {
            return (
              <div className="product-container" key={uuid()}>
                <img src={product?.image} alt={product?.name} />
                <p className="name">{product?.name}</p>
                <p className="precio">R$ {product?.price}</p>
                <p className="desc">{product?.desc}</p>
                <button>COMPRAR</button>
              </div>
            );
          }
        })}
      </div>

      <div className="products-container">
        {filter?.map((product, index) => {
          if (index > 5 && index < 9) {
            return (
              <div className="product-container" key={uuid()}>
                <img src={product?.image} alt={product?.name} />
                <p className="name">{product?.name}</p>
                <p className="precio">R$ {product?.price}</p>
                <p className="desc">{product?.desc}</p>
                <button>COMPRAR</button>
              </div>
            );
          }
        })}
      </div>
    </ProductsContainer>
  );
};

export default Products;
