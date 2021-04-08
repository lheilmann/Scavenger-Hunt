import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";
import { ArrowLeft } from "react-feather";
import styled from "styled-components";
// eslint-disable-next-line
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

import TasksForToday from "../components/TasksForToday";
import Title from "../components/Typography/Title";
import { blue300, fontFamily, gray300 } from "../constants";
import DefaultPage from "./_layouts/DefaultPage";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGhlaWxtYW5uIiwiYSI6ImNpbWozNHdlZDAwMG92dW00MmRjbW1nemsifQ.vPd3A5f_i5757K5B2hDMfw";
mapboxgl.workerClass = MapboxWorker;

const MapContainer = styled.div`
  height: 200px;
  width: 100%;
  border-radius: 8px;
  font-family: ${fontFamily};
  border: 2px solid ${gray300};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const PaddedRow = styled(Row)`
  margin: 24px 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Hint = styled.div`
  margin: 4px 6px;
  color: ${gray300};
`;

const Link = styled.a`
  text-decoration: none;
`;

const Back = styled.a`
  color: ${blue300};
  flex: 1;
`;

const CenteredTitle = styled(Title)`
  flex: auto;
`;

const SubHeading = styled.h4`
  text-transform: uppercase;
  color: ${gray300};
  margin: 12px 0;
`;

function Today() {
  const ref = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: ref.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [12.5669, 55.6759],
      zoom: 10,
    });

    const markers = [
      {
        id: "65ldui",
        suffix: "C",
        lng: "12.568882",
        lat: "55.676096",
      },
      {
        id: "5cu15i",
        suffix: "K",
        lng: "12.646760",
        lat: "55.646183",
      },
      {
        id: "6c3yh4",
        suffix: "A",
        lng: "12.598280",
        lat: "55.662629",
      },
      {
        id: "am5bg7",
        suffix: "O",
        lng: "12.5571114",
        lat: "55.707532",
      },
    ];

    markers.forEach((marker) => {
      let markerDiv = document.createElement("div");
      markerDiv.style.backgroundImage = "url('images/markers/cctv.svg')";
      markerDiv.style.width = "40px";
      markerDiv.style.height = "40px";
      markerDiv.style.backgroundSize = "100%";

      new mapboxgl.Marker(markerDiv)
        .setLngLat([marker.lng, marker.lat])
        .addTo(map);
    });

    return () => map.remove();
  }, []);

  return (
    <DefaultPage>
      <Header>
        <Back href="/home">
          <ArrowLeft size="32" />
        </Back>
        <CenteredTitle>Today</CenteredTitle>
      </Header>
      <Row>
        <p>
          Find the items by observing the public through your unlocked
          surveillance cameras.
        </p>
      </Row>
      <PaddedRow>
        <Col>
          <SubHeading>Your items for today</SubHeading>
          <TasksForToday />
        </Col>
      </PaddedRow>
      <PaddedRow>
        <Col>
          <Link href="/map">
            <Hint>
              <small>
                Click <b>here</b> or on <b>map</b> to expand
              </small>
            </Hint>
          </Link>
          <Link href="/map">
            <MapContainer ref={ref} />
          </Link>
        </Col>
      </PaddedRow>
    </DefaultPage>
  );
}

export default Today;
