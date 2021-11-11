import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import AddMemory from "./Pages/AddMemory";
import MemoryDetailPage from "./Pages/MemoryDetailPage";
import Layout from "./Components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "./store/data-slice";
import { db } from "./firebase";
import { collection, getDocs, onSnapshot } from "@firebase/firestore";

//Add Error Handling
// Add Loading Spinner

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onSnapshot(collection(db, "memories"), (snapshot) =>
      snapshot.docs.map((doc) =>
        dispatch(
          dataActions.setMemories(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          )
        )
      )
    );
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddMemory />} />
        <Route path="/:memoryID" element={<MemoryDetailPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
