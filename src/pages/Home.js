import '../App.css';
import styled from "styled-components"
import React from "react"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function Home() {
  return (
      <Title>
        This is a title
      </Title>
  );
}

export default Home;