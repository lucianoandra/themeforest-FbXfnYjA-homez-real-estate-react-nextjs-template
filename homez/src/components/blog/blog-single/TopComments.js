import Image from "next/image";
import React from "react";

const topComments = [
  {
    name: "Brooklyn Simmons",
    role: "Medical Assistant",
    text: "Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod.",
    image: "/images/blog/comments-1.png",
  },

  // Add more comment objects as needed
];

const TopComments = () => {
  return (
    <div className="bsp_comments bdrb1 d-block d-sm-flex justify-content-between pt30 pb45 pb30-sm">
      {topComments.map((comment, index) => (
        <div className="mbp_first d-flex" key={index}>
          <div className="flex-shrink-0">
            <Image
              width={70}
              height={70}
              src={comment.image}
              className="mr-3"
              alt="comment-image"
            />
          </div>
          <div className="flex-grow-1 ml30">
            <h6 className="mb0">{comment.name}</h6>
            <div className="text fz13 mb20">{comment.role}</div>
            <p className="text">{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopComments;
