import React from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { useHistory } from "react-router";
import styled from "styled-components";

import Button from "../components/Button";
import TasksForToday from "../components/TasksForToday";
import SuccessTitle from "../components/Typography/SuccessTitle";
import { blue300, gray300 } from "../constants";
import DefaultPage from "./_layouts/DefaultPage";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: none;
`;

const ActionRow = styled(Row)`
  justify-content: center;
  margin: 24px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SubHeading = styled.h4`
  text-transform: uppercase;
  color: ${gray300};
  margin: 12px 0;
`;

const Badge = styled.span`
  display: inline-flex;
  border-radius: 4px;
  padding: 2px 4px;
  margin-left: 12px;
`;

const BadgeDone = styled(Badge)`
  background-color: ${blue300};
  color: white;
  border: 1px solid ${blue300};
`;

const BadgeTotal = styled(BadgeDone)`
  margin: 0 12px;
`;

const Back = styled.a`
  color: ${blue300};
  flex: 1;
`;

const CenteredTitle = styled(SuccessTitle)`
  flex: auto;
`;

const Message = styled.p`
  text-align: center;
`;

const Hint = styled.div`
  color: ${gray300};
`;

const Amount = styled.span`
  color: ${blue300};
`;

function FeedbackOsterbro() {
  const history = useHistory();
  return (
    <DefaultPage>
      <Header>
        <Back href="/cameras/am5bg7">
          <ArrowLeft size="32" />
        </Back>
        <CenteredTitle>Whoop whoop</CenteredTitle>
      </Header>
      <ActionRow>
        <Message>
          Congratulations!
          <br />
          You found a red hat. 🎉
        </Message>
      </ActionRow>
      <Row>
        <Col>
          <SubHeading>Your items for today</SubHeading>
          <TasksForToday />
        </Col>
      </Row>
      <ActionRow>
        <Message>
          <b>
            You earned
            <BadgeTotal>
              <small>+ 16 points</small>
            </BadgeTotal>
            today! <br />
          </b>
          <Hint>(Rank 1,576 in Copenhagen City)</Hint>
        </Message>
      </ActionRow>
      <ActionRow>
        <Message>
          <b>
            You unlocked{" "}
            <Amount>
              <b>1</b>
            </Amount>{" "}
            surveillance camera!
          </b>
        </Message>
      </ActionRow>
      <ActionRow>
        <Button
          primary
          onClick={() => history.push("/new-camera")}
          Icon={ArrowRight}
          iconPosition="right"
        >
          Check out new camera
        </Button>
      </ActionRow>
    </DefaultPage>
  );
}

export default FeedbackOsterbro;
