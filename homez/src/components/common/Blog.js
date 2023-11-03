
import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      {blogs.map((blog) => (
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
                <span className="month">{blog.date.month}</span>
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
    </>
  );
};

export default Blog;
