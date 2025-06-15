"use client";
import React, { useEffect, useState } from "react";
import {
  getBlogs,
  getBlogsAuthors,
  getBlogsCategories,
} from "../../core/services/api/Blogs/blogs";
import BlgHeroSection from "./BlgHeroSection";
import MostViewed from "./MostViewed";
import TopCategories from "./TopCategories";
import BlogsSection from "./BlogsSection";
import Suggested from "./Suggested";

const Index = () => {
  //blogs for show in search and filter items...
  const [blogs, setBlogs] = useState([]);
  //blogs for shoow in mostviews , suggestions , ...
  const [allblogs, setallBlogs] = useState([]);
  const [filterParams, setFilterParams] = useState({});
  const [items, setItems] = useState(blogs);
  const [categories, setCategories] = useState([]);
  const [Authors, setAuthors] = useState([]);
  const [hasMore, setHasMore] = useState(true);

 //load more blog cards
 const loadMore = () => {
  const newItems = blogs?.slice(items.length, items.length + 4);
  setItems([...items,...newItems]);
  if (newItems.length < 4) {
    setHasMore(false);
  }
};


  const getBlogsList = async () => {
    const res = await getBlogs()
    setBlogs(res);
    setCategories(await getBlogsCategories());
    setAuthors(await getBlogsAuthors());
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  
  useEffect(() => {
    const goToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    getBlogsList();
    goToTop();
  }, []);
useEffect(()=>{
  if (blogs.length > 4) {
    setHasMore(true);
  }
  setItems(blogs.slice(0,4))
},[blogs])
  useEffect(() => {
    const getAllBlogs=async()=>{
      setallBlogs(await getBlogs());
    }
      getAllBlogs()
  }, []);

  return (
    <div className="px-14 max-lg:px-4 max-lg:py-3 py-9 col gap-6">
      <BlgHeroSection blogs={allblogs[getRandomNumber(0, blogs.length - 1)]} />
      <MostViewed blogs={allblogs} />
      <TopCategories
        filterParams={filterParams}
        setFilterParams={setFilterParams}
        setBlogs={setBlogs}
        blogs={blogs}
      />
      <BlogsSection
      loadMore={loadMore}
      hasMore={hasMore}
      setHasMore={setHasMore}
        filterParams={filterParams}
        setFilterParams={setFilterParams}
        setBlogs={setBlogs}
        items={items}
        setItems={setItems}
        Authors={Authors}
        categories={categories}
        blogs={blogs}
      />
      <Suggested blogs={allblogs} />
    </div>
  );
};

export default Index;
