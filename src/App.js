import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import AddMemory from "./Pages/AddMemory";
import MemoryDetailPage from "./Pages/MemoryDetailPage";
import Layout from "./Components/Layout/Layout";
import { useDispatch } from "react-redux";
import { dataActions } from "./store/data-slice";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "The first Memory Post!",
    message: "This is the first memory Post that I have added to this app!",
    image:
      "https://checkyeti.imgix.net/images/optimized/skydiving-kiwis-gallery31.jpg",
    tags: ["first", "bestInTheWorld"],
    comments: [
      { id: 1, text: "This is the first comment" },
      { id: 2, text: "This is another comment!" },
    ],
    likes: 3,
    creator: "Stefan",
    time: new Date(2021, 6, 24, 10, 33, 30, 0).toISOString(),
  },
  {
    id: "m2",
    title: "New Years Eve 2021!",
    message:
      "This was the best New Years ever, enjoyed it so much.This was the best New Years ever, enjoyed it so muchThis was the best New Years ever, enjoyed it so muchThis was the best New Years ever, enjoyed it so muchThis was the best New Years ever, enjoyed it so muchThis was the best New Years ever, enjoyed it so muchThis was the best New Years ever, enjoyed it so muchThis was the best New Years ever, enjoyed it so muchThis was the best New Years ever, enjoyed it so muchThis was the best New Years ever, enjoyed it so muchThis was the best New Years ever, enjoyed it so muchThis was the best New Years ever, enjoyed it so muchThis was the best New Years ever, enjoyed it so much.This was the best New Years ever, enjoyed it so much.This was the best New Years ever, enjoyed it so muchThis was the best New Years ever, enjoyed it so muchThis was the best New Years ever, enjoyed it so much.",
    image: "https://c.tadst.com/gfx/750w/newyearindia2010.jpg",
    tags: ["whatagreattime", "secondbestInTheWorld"],
    comments: [
      { id: 1, text: "This is so beautiful" },
      { id: 2, text: "This is the best I have ever seen!" },
      { id: 3, text: "Wowwwww" },
    ],
    likes: 9,
    creator: "coffee__coder",
    time: new Date(2019, 12, 24, 10, 33, 30, 0).toISOString(),
  },
  {
    id: "m3",
    title: "My Birthday",
    message:
      "This was the best birthday I have every had. Coudn't ask for anything better",
    image:
      "https://www.pixel4k.com/wp-content/uploads/2018/09/happy-birthday-images-surprize.jpg",
    tags: ["whatagreattime", "bestbirthday ever"],
    comments: [
      { id: 1, text: "This ws the best" },
      { id: 2, text: "This was the best party everr!!!!" },
      { id: 3, text: "Wowwwww!!!" },
    ],
    likes: 120,
    creator: "john__doe",
    time: new Date(2020, 4, 24, 10, 33, 30, 0).toISOString(),
  },
];
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("In Here");
    dispatch(dataActions.setMemories(DUMMY_DATA));
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
