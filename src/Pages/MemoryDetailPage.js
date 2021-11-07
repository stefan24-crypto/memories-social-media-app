import React from "react";
import { useParams } from "react-router";

const MemoryDetail = () => {
  const params = useParams();
  return <h1>Memory Detail Page for {params.memoryID}!!!</h1>;
};

export default MemoryDetail;
