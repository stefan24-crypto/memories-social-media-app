import React from "react";
import { useSelector } from "react-redux";
import MemoryCard from "../Memory/MemoryCard";
import classes from "./HomePageContent.module.css";

const HomePageContent = () => {
  const memories = useSelector((state) => state.data.memories);
  const copyofMemories = [...memories];
  copyofMemories.sort((a, b) => {
    if (a.time.toMillis() > b.time.toMillis()) return -1;
    if (a.time.toMillis() < b.time.toMillis()) return 1;
  });
  return (
    <section className={classes.memories}>
      {copyofMemories.map((each) => (
        <MemoryCard
          key={each.id}
          time={each.time}
          image={each.image}
          numOfLikes={each.likes}
          creator={each.creator}
          tags={each.tags}
          message={each.message}
          title={each.title}
          id={each.id}
          numOfComments={each.comments.length}
        />
      ))}
    </section>
  );
};

export default HomePageContent;
