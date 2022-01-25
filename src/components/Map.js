import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: "50vw",
    height: "100vh",
    longitude: -79.3832,
    latitude: 43.6532,
    zoom: 12,
  });

  const myLocation = {
    description: "I'm currently living in Toronto, Canada!",
    latitude: 43.6622,
    longitude: -79.3832,
  };

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/kimberlycao13/ckytceejh000914qf0kn5d87y"
    >
      <Marker latitude={myLocation.latitude} longitude={myLocation.longitude}>
        <div className="flex flex-col">
          <svg
            className="w-8 h-8 stroke-pink-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </Marker>
      <div className="text-pink-700 bg-pink-200 font-roboto p-6 rounded-md m-6 float-right hidden sm:block">
        {myLocation.description}
      </div>
    </ReactMapGL>
  );
}

export default Map;
