import React from "react";
import { ArrowRight } from "react-feather";
import { useHistory } from "react-router";
import styled from "styled-components";

import Button from "../components/Button";
import Title from "../components/Typography/Title";
import DefaultPage from "./_layouts/DefaultPage";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: none;
  justify-content: center;
`;

function Home() {
  const history = useHistory();

  return (
    <DefaultPage>
      <Row>
        <Title>Look closely</Title>
      </Row>
      <Row>
        <p>Address: XXX</p>
      </Row>
      <Row>
        <p>Private</p>
      </Row>
      <Row>
        <Button
          primary
          onClick={() => history.push("/today")}
          Icon={ArrowRight}
          iconPosition="right"
        >
          Get started
        </Button>
      </Row>
    </DefaultPage>
  );
}

export default Home;
