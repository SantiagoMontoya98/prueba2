import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
  /* border: 1px solid green; */

  .products-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid red; */
    margin-top: 30px;
  }
  .product-container {
    width: 32%;
    /* border: 1px solid black; */
    font-family: sans-serif;
    font-size: 14px;
    img {
      width: 100%;
    }
    p {
      width: 100%;
      /* border: 1px solid green; */
      text-align: center;
    }
    .name {
      font-size: 2.2vw;
      font-weight: 600;
    }
    .precio {
      font-weight: bold;
      margin: 0;
    }
    .desc {
      font-size: 12px;
      margin-top: 3px;
    }
    button {
      width: 100%;
      padding: 10px;
      border-width: 0;
      background-color: black;
      color: white;
      font-weight: 600;
    }
  }
`;
