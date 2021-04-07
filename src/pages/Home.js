import React from "react";
import { ArrowRight } from "react-feather";
import { useHistory } from "react-router";
import styled from "styled-components";

import Button from "../components/Button";
import Title from "../components/Typography/Title";
import { blue300, gray300, textColor } from "../constants";
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

const Amount = styled.span`
  color: ${blue300};
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
          <Score>6,227</Score>
        </Col>
      </PaddedRow>
      <PaddedRow>
        <Col>
          <SubHeading>Current Rank</SubHeading>
          <Score>1,892</Score>
          <Hint>
            <small>in Copenhagen City</small>
          </Hint>
        </Col>
      </PaddedRow>
      <PaddedRow>
        <Col>
          <SubHeading>Unlocked surveillance cameras</SubHeading>
          <Score>4</Score>
          <Hint>
            <small>in Copenhagen City</small>
          </Hint>
        </Col>
      </PaddedRow>
      <Row>
        <p>
          You have{" "}
          <Amount>
            <b>1</b>
          </Amount>{" "}
          active hunt!
        </p>
      </Row>
      <Row>
        <p>Find out what there is to hunt today.</p>
      </Row>
      <PaddedRow>
        <Button
          primary
          onClick={() => history.push("/today")}
          Icon={ArrowRight}
          iconPosition="right"
        >
          Get started
        </Button>
      </PaddedRow>
    </DefaultPage>
  );
}

export default Home;
