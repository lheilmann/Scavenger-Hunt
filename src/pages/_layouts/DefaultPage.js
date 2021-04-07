import React from "react";
import styled from "styled-components";

const Content = styled.div`
  padding: 0 12px;
`;

function DefaultPage({ children }) {
  return <Content>{children}</Content>;
}

export default DefaultPage;
