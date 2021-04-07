import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";
import { ArrowLeft, X } from "react-feather";
import { useHistory } from "react-router";
import styled from "styled-components";

import { blue300 } from "../constants";
import FullPage from "./_layouts/FullPage";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGhlaWxtYW5uIiwiYSI6ImNpbWozNHdlZDAwMG92dW00MmRjbW1nemsifQ.vPd3A5f_i5757K5B2hDMfw";

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Back = styled.a`
  position: absolute;
  z-index: 1111;
  top: 20px;
  left: 20px;
  color: ${blue300};
`;

const Close = styled.a`
  position: absolute;
  z-index: 1111;
  top: 20px;
  right: 20px;
  color: ${blue300};
`;

function Map() {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: ref.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [12.5669, 55.6759],
      zoom: 11,
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
        suffix: "N",
        lng: "12.5475993",
        lat: "55.693712",
      },
      {
        id: "6c3yh4",
        suffix: "A",
        lng: "12.6010453",
        lat: "55.663039",
      },
      {
        id: "am5bg7",
        suffix: "O",
        lng: "12.5832",
        lat: "55.7003",
      },
    ];

    markers.forEach((marker) => {
      let markerDiv = document.createElement("div");
      markerDiv.style.backgroundImage = "url('images/markers/cctv.svg')";
      markerDiv.style.width = "40px";
      markerDiv.style.height = "40px";
      markerDiv.style.backgroundSize = "100%";

      let previewDiv = document.createElement("div");
      previewDiv.style.display = "flex";
      previewDiv.style.justifyContent = "center";
      previewDiv.style.alignItems = "center";
      previewDiv.style.overflow = "hidden";
      previewDiv.style.width = "120px";
      previewDiv.style.height = "80px";
      previewDiv.style.borderRadius = "6px";
      previewDiv.style.border = "1px solid " + blue300;
      previewDiv.style.boxShadow = "0px 0px 10px " + blue300;
      previewDiv.style.cursor = "pointer";

      let previewImg = document.createElement("img");
      previewImg.src = "images/previews/preview" + marker.suffix + ".png";
      previewImg.style.objectFit = "cover";
      previewImg.style.minWidth = "100%";
      previewImg.style.minHidth = "100%";

      previewDiv.appendChild(previewImg);

      previewDiv.addEventListener("click", () => {
        history.push("/cameras/" + marker.id);
      });

      let popup = new mapboxgl.Popup({ closeOnClick: true, offset: 25 })
        .setLngLat([marker.lng, marker.lat])
        .setDOMContent(previewDiv)
        .addTo(map);

      popup.addClassName("popup");

      new mapboxgl.Marker(markerDiv)
        .setLngLat([marker.lng, marker.lat])
        .setPopup(popup)
        .addTo(map);
    });

    return () => map.remove();
  }, []);

  return (
    <FullPage>
      <Back href="/today">
        <ArrowLeft size="32" />
      </Back>
      <Close href="/today">
        <X size="32" />
      </Close>
      <MapContainer ref={ref} />
    </FullPage>
  );
}

export default Map;
