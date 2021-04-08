import React, { useEffect } from "react";
import { ArrowLeft } from "react-feather";
import styled from "styled-components";

import Title from "../components/Typography/Title";
import { blue300, gray300 } from "../constants";
import DefaultPage from "./_layouts/DefaultPage";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: none;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

function StreamNewYork() {
  useEffect(() => {
    let video = document.getElementById("stream");
    video.muted = true;
    video.play();
  }, []);

  return (
    <DefaultPage>
      <Header>
        <Back href="/goodbye">
          <ArrowLeft size="32" />
        </Back>
        <CenteredTitle>Unlocked</CenteredTitle>
      </Header>
      <Row>
        <p>
          You unlocked a new surveillance camera in New York city. Happy
          watching! 👀
        </p>
      </Row>
      <Row>
        <VideoContainer>
          <Video loop id="stream">
            <source src="/videos/streamNY.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </VideoContainer>
      </Row>
      <Row>
        <Hint>
          <small>
            Address: Times Square, Manhattan, NY 10036, United States
          </small>
        </Hint>
      </Row>
    </DefaultPage>
  );
}

export default StreamNewYork;
