import {
  NavLink,
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Products from "./components/Products";
import MyCart from "./components/MyCart";
import MyOrder from "./components/MyOrder";
import styled from "styled-components";
import DetailsPage from "./components/pages/DetailsPage";
import Button from "./UI/Button";

function AppContent() {
  const navigate = useNavigate();

  return (
    <div>
      <StyledHeader>
        <h1>LOGO</h1>
        <StyledLink>
          <StyledText to="/products">Products</StyledText>
          <StyledText to="/myCart">My Cart</StyledText>
          <StyledText to="/myOrder">My Orders</StyledText>
        </StyledLink>
      </StyledHeader>
      <main>
        <Routes>
          <Route path="/" element={<h1>Welcome to My </h1>}></Route>
          <Route path="products" element={<Products />} />
          <Route path="products/:id/details" element={<DetailsPage />} />
          <Route path="myCart" element={<MyCart />}></Route>
          <Route path="myOrder" element={<MyOrder />} />
        </Routes>
        <ContainerBtn>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </ContainerBtn>
      </main>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;

const StyledHeader = styled.header`
  width: 100%;
  height: 120px;
  background-color: #2c88d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 150px;
  padding-right: 150px;
  color: white;
`;

const StyledLink = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 35px;
  width: 50%;
`;

const StyledText = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    color: black;
  }
`;

const ContainerBtn = styled.div`
  margin-top: 20px;
  border: 0px solid;
  border-radius: 20px;
  margin-left: 200px;
`;
