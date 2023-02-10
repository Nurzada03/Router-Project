import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PRODUCT_NAME = [
  {
    id: 1,
    title: "Product Name 1",   
  },
  {
    id: 2,
    title: "Product Name 2",
  },
  {
    id: 3,
    title: "Product Name 3",
  },
];

const Products = () => {
  return (
    <StyledUl>
      {PRODUCT_NAME.map((item) => (
        <Container>
          <li>{item.title}</li>

          <div>
            <StyledLink to={`/products/${item.id}/details`}>Details</StyledLink>
          </div>
        </Container>
      ))}
    </StyledUl>
  );
};

export default Products;

const StyledUl = styled.ul`
  margin-left: 200px;
  margin-right: 40px;
  margin-top: 80px;
  width: 60%;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  margin-top: 50px;
  height: 80px;
  padding: 20px 50px;

  li {
    list-style: none;
    text-align: center;
    font-size: 25px;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 25px;
  background-color: #19ae9f;
  border-radius: 20px;
  border: 0px solid;
  color: white;
  font-size: 23px;
  font-weight: bold;
`;
