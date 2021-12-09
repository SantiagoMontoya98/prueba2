import styled from "styled-components";

export const SearcherContainer = styled.div`
  width: 100%;
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-evenly;
  height: 30px;

  .buscador-container {
    width: 80%;
    /* border: 1px solid black; */
    font-family: sans-serif;
  }
  .buscador {
    width: 70%;
    height: 20px;
    padding: 0;
  }
  .boton {
    height: 88%;
    border-width: 0;
    background-color: #3498db;
    color: white;
    border-radius: 1px;
    cursor: pointer;
    margin-left: 5px;
  }
  .filtro {
    width: 40%;
    font-size: 10px;
    font-family: sans-serif;
  }
  .error {
    font-size: 12px;
    color: red;
  }
`;
