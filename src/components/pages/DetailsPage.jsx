import React from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

             

const DetailsPage = () => {
  const { id } = useParams();
  return (
    <Container>
      <ContainerText>
        <h2>Product Detaile page</h2>
        <h2>Product name {id}</h2>
      </ContainerText>
    </Container>
  );
};

export default DetailsPage;

const Container = styled.div`
  margin: 60px 90px;
`;
const ContainerText = styled.div`
  background-color: white;
  width: 80%;
  height: 200px;
  padding: 30px 50px;
  margin-bottom: 30px;
`;
