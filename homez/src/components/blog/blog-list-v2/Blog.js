import { blogDataTwo } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
 

  return (
    <>
      {blogDataTwo.map((item, index) => (
        <div
          className="blog-style1 list-style bgc-white d-block d-md-flex align-items-xl-center"
          key={index}
        >
          <div className="blog-img flex-shrink-0">
            <Image
              width={280}
              height={240}
              priority
              className="w-100 h-100 cover"
              src={item.image}
              alt="blog"
            />
            <div className="date">
              <span className="month">{item.date.month}</span>
              <span className="day">{item.date.day}</span>
            </div>
          </div>
          <div className="blog-content pl30 pb20 flex-grow-1">
            <a className="tag" href="#">
              {item.tag}
            </a>
            <h4 className="title mt-1 mb20">
              <Link href={`/blogs/${item.id}`}>{item.title}</Link>
            </h4>
            <p className="text mb0">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;
