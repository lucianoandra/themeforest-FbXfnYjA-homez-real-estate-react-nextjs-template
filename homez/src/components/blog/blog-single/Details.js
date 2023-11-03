import { allblogs } from '@/data/blogs';
import Image from 'next/image';
import React from 'react'

export default function Details({id}) {
    const data = allblogs.filter((elm) => elm.id == id)[0] || allblogs[0];
  return (
    <>
     <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12">
              <h2 className="blog-title">
                {data.title ||  data.content || `7 Simple Ways to Keep Your Kid&apos;s Toys From Taking Over Your
                Home`}
                
              </h2>
              <div className="blog-single-meta">
                <div className="post-author d-sm-flex align-items-center">
                  <Image
                    width={40}
                    height={40}
                    className="mr10"
                    src="/images/blog/author-1.png"
                    alt="blog"
                  />
                  <a className="pr15 bdrr1" href="#">
                    Leslie Alexander
                  </a>
                  <a className="ml15 pr15 bdrr1" href="#">
                    Home Improvement
                  </a>
                  <a className="ml15" href="#">
                    {data.date.month} {data.date.day}, {data.date.year || 2022}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div
          className="mx-auto maxw1600 mt60"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="large-thumb">
                <Image
                  width={1200}
                  height={600}
                  priority
                  className="w-100 h-100 cover"
                  // style={{maxHeight:'600px',objectFit:'cover'}}
                  src='/images/blog/blog-single-1.jpg'
                  alt="blog"
                />
              </div>
            </div>
          </div>
        </div>

    </>
  )
}
