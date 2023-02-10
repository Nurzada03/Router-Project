import React from 'react'

import styled from 'styled-components'
const MyOrder = () => {
  return (
    <Container> 
      <ContainerText>My Orders page bla bla bla bla </ContainerText>
    </Container>
  )
}
export default MyOrder


const Container = styled.div`
  margin: 60px 90px;
`;
const ContainerText = styled.h2`
  background-color: white;
  width: 60%;
  height: 150px;
  padding: 30px 50px;
  margin-bottom: 30px;
`;
