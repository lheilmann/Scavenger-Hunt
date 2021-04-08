import React from "react";
import { ArrowLeft } from "react-feather";
import { useHistory } from "react-router";
import styled from "styled-components";

import Button from "../components/Button";
import TasksForToday from "../components/TasksForToday";
import ErrorTitle from "../components/Typography/ErrorTitle";
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

const Back = styled.a`
  color: ${blue300};
  flex: 1;
`;

const CenteredTitle = styled(ErrorTitle)`
  flex: auto;
`;

const Message = styled.p`
  text-align: center;
`;

function FeedbackKastrup() {
  const history = useHistory();

  return (
    <DefaultPage>
      <Header>
        <Back href="/cameras/6c3yh4">
          <ArrowLeft size="32" />
        </Back>
        <CenteredTitle>Oh snap!</CenteredTitle>
      </Header>
      <ActionRow>
        <Message>You didn't catch an item. Try again!</Message>
      </ActionRow>
      <Row>
        <Col>
          <SubHeading>Your items for today</SubHeading>
          <TasksForToday />
        </Col>
      </Row>
      <ActionRow>
        <Button
          primary
          onClick={() => history.push("/cameras/6c3yh4")}
          Icon={ArrowLeft}
          iconPosition="left"
        >
          Continue at Amager Strand
        </Button>
      </ActionRow>
      <ActionRow>
        <Button primary inverted onClick={() => history.push("/map")}>
          Back to map
        </Button>
      </ActionRow>
    </DefaultPage>
  );
}

export default FeedbackKastrup;
