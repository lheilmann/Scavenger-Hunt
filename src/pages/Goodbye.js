import React from "react";
import { ArrowRight, ArrowUp } from "react-feather";
import { useHistory } from "react-router";
import styled from "styled-components";

import Button from "../components/Button";
import Title from "../components/Typography/Title";
import { blue300, gray300 } from "../constants";
import DefaultPage from "./_layouts/DefaultPage";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: none;
  justify-content: center;
`;

const PaddedRow = styled(Row)`
  justify-content: center;
  margin: 24px 0;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const SubHeading = styled.h4`
  display: flex;
  align-self: flex-start;
  text-transform: uppercase;
  color: ${gray300};
  margin: 12px 0;
`;

const Score = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 32px;
  color: ${blue300};
  align-self: center;
`;

const Hint = styled.div`
  color: ${gray300};
  align-self: center;
`;

const Message = styled.p`
  text-align: center;
`;

function Home() {
  const history = useHistory();

  return (
    <DefaultPage>
      <Row>
        <Title>Scavenger Hunt</Title>
      </Row>
      <PaddedRow>
        <Col>
          <SubHeading>Current Score</SubHeading>
          <Row>
            <Score>6,211</Score>
            <Score>
              <ArrowUp size="32" />
            </Score>
          </Row>
        </Col>
      </PaddedRow>
      <PaddedRow>
        <Col>
          <SubHeading>Current Rank</SubHeading>
          <Row>
            <Score>1,576</Score>
            <Score>
              <ArrowUp size="32" />
            </Score>
          </Row>
          <Hint>
            <small>in Copenhagen City</small>
          </Hint>
        </Col>
      </PaddedRow>
      <PaddedRow>
        <Col>
          <SubHeading>Unlocked surveillance cameras</SubHeading>
          <Score>5</Score>
          <Hint>
            <small>in Copenhagen City & Newy York City</small>
          </Hint>
        </Col>
      </PaddedRow>
      <Row>
        <Message>See you tomorrow.</Message>
      </Row>
      <Row>
        <Message>Watch yourself (or others)!</Message>
      </Row>
      <PaddedRow>
        <Button
          primary
          onClick={() => history.push("/map")}
          Icon={ArrowRight}
          iconPosition="right"
        >
          Watch for fun
        </Button>
      </PaddedRow>
    </DefaultPage>
  );
}

export default Home;
