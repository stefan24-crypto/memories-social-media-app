import React from "react";
import { useParams } from "react-router";
import MemoryDetail from "../Components/Memory/MemoryDetail";

const MemoryDetailPage = () => {
  const params = useParams();
  return <MemoryDetail id={params.memoryID} />;
};

export default MemoryDetailPage;
