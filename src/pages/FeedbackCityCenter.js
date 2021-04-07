import React from "react";
import { ArrowLeft, Check, Minus } from "react-feather";
import { useHistory } from "react-router";
import styled from "styled-components";

import Button from "../components/Button";
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

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 6px 0;
  list-style-type: none;
`;

const ListItemDone = styled(ListItem)`
  color: ${blue300};
`;

const ListItemPending = styled(ListItem)`
  color: black;
`;

const Icon = styled.div`
  margin-right: 12px;
`;

const Badge = styled.span`
  display: flex;
  border-radius: 4px;
  padding: 2px 4px;
  margin-left: 12px;
`;

const BadgeDone = styled(Badge)`
  background-color: ${blue300};
  color: white;
  border: 1px solid ${blue300};
`;

const BadgePending = styled(Badge)`
  background-color: white;
  color: ${blue300};
  border: 1px solid ${blue300};
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

function FeedbackCityCenter() {
  const history = useHistory();

  return (
    <DefaultPage>
      <Header>
        <Back href="/cameras/65ldui">
          <ArrowLeft size="32" />
        </Back>
        <CenteredTitle>Whoop whoop</CenteredTitle>
      </Header>
      <ActionRow>
        <Message>
          <b>
            Congratulations!
            <br />
            You found the yellow bus. 🎉
          </b>
        </Message>
      </ActionRow>
      <Row>
        <Col>
          <SubHeading>Your items for today</SubHeading>
          <List>
            <ListItemDone>
              <Icon>
                <Check size="20" color={blue300} />
              </Icon>
              <span>A yellow bus</span>
              <BadgeDone>
                <small>1 point</small>
              </BadgeDone>
            </ListItemDone>
            <ListItemPending>
              <Icon>
                <Minus size="20" />
              </Icon>
              <span>A person wearing gray sweatpants</span>
              <BadgePending>
                <small>5 points</small>
              </BadgePending>
            </ListItemPending>
            <ListItemPending>
              <Icon>
                <Minus size="20" />
              </Icon>
              <span>A person wearing a red hat</span>
              <BadgePending>
                <small>10 points</small>
              </BadgePending>
            </ListItemPending>
          </List>
        </Col>
      </Row>
      <ActionRow>
        <Button
          primary
          onClick={() => history.push("/cameras/65ldui")}
          Icon={ArrowLeft}
          iconPosition="left"
        >
          Continue at Rådhuspladsen
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

export default FeedbackCityCenter;
