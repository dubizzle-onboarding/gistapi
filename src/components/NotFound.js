import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Container>
      <Text>No records found.</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;
const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export default NotFound;
