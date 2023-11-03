import React from "react";
import SearchBox from "./SearchBox";
import Categrory from "./Categrory";
import LatestPost from "./LatestPost";
import PopularTags from "./PopularTags";

const BlogSidebar = () => {
  return (
    <div className="blog-sidebar">
      <SearchBox />
      <Categrory />
      <LatestPost />
      <PopularTags />
    </div>
  );
};

export default BlogSidebar;
