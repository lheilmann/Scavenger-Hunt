import React, { useEffect } from "react";
import { ArrowLeft, Minus } from "react-feather";
import { useHistory } from "react-router";
import styled from "styled-components";

import Title from "../components/Typography/Title";
import { blue300, gray300 } from "../constants";
import DefaultPage from "./_layouts/DefaultPage";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: none;
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

const BadgePending = styled(Badge)`
  background-color: white;
  color: ${blue300};
  border: 1px solid ${blue300};
`;

const Back = styled.a`
  color: ${blue300};
  flex: 1;
`;

const CenteredTitle = styled(Title)`
  flex: auto;
`;

const Video = styled.video`
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 300px;
  border-radius: 6px;
  border: 2px solid ${gray300};
  box-shadow: 0px 0px 10px ${gray300};
  margin: 24px 0;
`;

const Hint = styled.div`
  color: ${gray300};
`;

function Home() {
  const history = useHistory();

  useEffect(() => {
    let video = document.getElementById("stream");
    video.muted = true;
    video.play();
  }, []);

  return (
    <DefaultPage>
      <Header>
        <Back href="/home">
          <ArrowLeft size="32" />
        </Back>
        <CenteredTitle>Look closely</CenteredTitle>
      </Header>
      <Row>
        <Col>
          <SubHeading>Your items for today</SubHeading>
          <List>
            <ListItemPending>
              <Icon>
                <Minus size="20" />
              </Icon>
              <span>A yellow bus</span>
              <BadgePending>
                <small>1 point</small>
              </BadgePending>
            </ListItemPending>
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
      <Row>
        <VideoContainer
          onClick={() => history.push("/cameras/65ldui/feedback")}
        >
          <Video loop id="stream">
            <source src="/videos/streamC.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </VideoContainer>
      </Row>
      <Row>
        <Hint>
          <small>Address: Rådhuspladsen, 1550 København</small>
        </Hint>
      </Row>
    </DefaultPage>
  );
}

export default Home;