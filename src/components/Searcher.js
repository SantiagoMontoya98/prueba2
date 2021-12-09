import { useDispatch, useSelector } from "react-redux";
import { SearcherContainer } from "../styles/SearcherStyles";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { filterProducts } from "../redux/actions/productsAction";

const Searcher = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const SearchSchema = Yup.object().shape({
    product: Yup.string()
      .required("Ingresa el nombre del producto")
      .matches(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, "El nombre solo acepta letras"),
  });

  return (
    <SearcherContainer>
      <Formik
        initialValues={{
          product: "",
        }}
        validationSchema={SearchSchema}
        onSubmit={({ product }) => {
          const filter = products.filter((p) =>
            p.name.toLowerCase().includes(product)
          );
          dispatch(filterProducts(filter));
        }}
      >
        {({ errors, touched }) => (
          <Form className="buscador-container">
            <Field
              name="product"
              className="buscador"
              placeholder="Buscar..."
            />
            <input type="submit" className="boton" value="Buscar" />
            {errors.product && touched.product ? (
              <div className="error">{errors.product}</div>
            ) : null}
          </Form>
        )}
      </Formik>
      <select className="filtro">
        <option value="ordenar" style={{ display: "none" }}>
          Ordenar por
        </option>
        <option value="menor">Menor Precio</option>
        <option value="mayor">Mayor Precio</option>
      </select>
    </SearcherContainer>
  );
};

export default Searcher;
