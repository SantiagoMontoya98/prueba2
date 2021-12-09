import Products from "../components/Products";
import Searcher from "../components/Searcher";
import { HomeContainer } from "../styles/HomeStyles";

const Home = () => {
  return (
    <HomeContainer>
      <Searcher />
      <Products />
    </HomeContainer>
  );
};

export default Home;
