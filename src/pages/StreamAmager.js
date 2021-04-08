import React, { useEffect } from "react";
import { ArrowLeft } from "react-feather";
import { useHistory } from "react-router";
import styled from "styled-components";

import TasksForToday from "../components/TasksForToday";
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

function StreamAmager() {
  const history = useHistory();

  useEffect(() => {
    let video = document.getElementById("stream");
    video.muted = true;
    video.play();
  }, []);

  const handleClick = () => {
    localStorage.setItem("scavenger-hunt.item.stop-sign", true);

    history.push("/cameras/6c3yh4/feedback");
  };

  return (
    <DefaultPage>
      <Header>
        <Back href="/map">
          <ArrowLeft size="32" />
        </Back>
        <CenteredTitle>Look closely</CenteredTitle>
      </Header>
      <Row>
        <Col>
          <SubHeading>Your items for today</SubHeading>
          <TasksForToday />
        </Col>
      </Row>
      <Row>
        <VideoContainer onClick={handleClick}>
          <Video loop id="stream">
            <source src="/videos/streamA.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </VideoContainer>
      </Row>
      <Row>
        <Hint>
          <small>Address: Sverrigsgade 47-33, 2300 København, Denmark</small>
        </Hint>
      </Row>
    </DefaultPage>
  );
}

export default StreamAmager;
