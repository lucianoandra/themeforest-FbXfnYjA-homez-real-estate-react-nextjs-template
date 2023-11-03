"use client";
import { blogsThree } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const BlogFilter = () => {
  

  const [filteredBlogs, setFilteredBlogs] = useState(blogsThree);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredBlogs(blogsThree);
    } else {
      const filtered = blogsThree.filter((blog) => blog.category === category);
      setFilteredBlogs(filtered);
    }
    setActiveCategory(category);
  };

  const categories = [
    "All",
    "Home Improvement",
    "Life & Style",
    "Finance",
    "Selling a Home",
    "Renting a Home",
    "Buying a Home",
  ];

  return (
    <>
      <ul className="nav nav-pills mb20">
        {categories.map((category, index) => (
          <li className="nav-item" role="presentation" key={index}>
            <button
              className={`nav-link mb-2 mb-lg-0 fw500 dark-color ${
                category === activeCategory ? "active" : ""
              }`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      {/* End nav */}

      <div className="row">
        {filteredBlogs.map((blog) => (
          <div className="col-sm-6 col-lg-4" key={blog.id}>
            <div className="blog-style1">
              <div className="blog-img">
                <Image
                  width={386}
                  height={271}
                  className="w-100 h-100 cover"
                  src={blog.image}
                  alt="blog"
                />
              </div>
              <div className="blog-content">
                <div className="date">
                  <span className="month">July</span>
                  <span className="day">{blog.date.day}</span>
                </div>
                <a className="tag" href="#">
                  {blog.tag}
                </a>
                <h6 className="title mt-1">
                  <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogFilter;
