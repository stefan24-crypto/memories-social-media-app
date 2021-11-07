import React from "react";
import MemoryCard from "../Memory/MemoryCard";
import classes from "./HomePageContent.module.css";

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
    time: "2 months ago",
  },
  {
    id: "m2",
    title: "New Years Eve 2021!",
    message: "This was the best New Years ever, enjoyed it so much",
    image: "https://c.tadst.com/gfx/750w/newyearindia2010.jpg",
    tags: ["whatagreattime", "secondbestInTheWorld"],
    comments: [
      { id: 1, text: "This is so beautiful" },
      { id: 2, text: "This is the best I have ever seen!" },
      { id: 3, text: "Wowwwww" },
    ],
    likes: 9,
    creator: "coffee__coder",
    time: "10 months ago",
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
    time: "1 month ago",
  },
];
const HomePageContent = () => {
  return (
    <section className={classes.memories}>
      {DUMMY_DATA.map((each) => (
        <MemoryCard
          time={each.time}
          image={each.image}
          numOfLikes={each.likes}
          creator={each.creator}
          tags={each.tags}
          message={each.message}
          title={each.title}
        />
      ))}
    </section>
  );
};

export default HomePageContent;
