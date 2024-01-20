import React from "react";
import { Route, Routes } from "react-router-dom";
import routesData from "./helperFiles/RawData.js/_routeData";

function Routers() {
  return (
    <Routes>
      {routesData.map((item,x) => (
        <Route key={x} path={item.path} element={item.component} />
      ))}
    </Routes>
  );
}

export default Routers;
