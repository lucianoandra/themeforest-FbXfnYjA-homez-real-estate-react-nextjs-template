import Details from "@/components/blog/blog-single/Details";
import Features from "@/components/blog/blog-single/Features";
import Pagination from "@/components/blog/blog-single/Pagination";
import ReviewBoxForm from "@/components/blog/blog-single/ReviewBoxForm";
import Social from "@/components/blog/blog-single/Social";
import Tags from "@/components/blog/blog-single/Tags";
import TopComments from "@/components/blog/blog-single/TopComments";
import AllReviews from "@/components/blog/blog-single/reviews";
import Blog from "@/components/common/Blog";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Image from "next/image";

export const metadata = {
  title: "Blog Single  || Homez - Real Estate NextJS Template",
};

const BlogSingle = ({params}) => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Blog Section Area */}
      <section className="our-blog pt50">

        <Details  id={params.id} />
       


        <div className="container">
          <div className="roww" data-aos="fade-up" data-aos-delay="500">
            <div className="col-xl-8 offset-xl-2">
              <div className="ui-content mt40 mb60">
                <h4 className="mb10">1. Reduce the clutter</h4>
                <p className="mb25 ff-heading">
                  It doesn’t matter how organized you are — a surplus of toys
                  will always ensure your house is a mess waiting to happen.
                  Fortunately, getting kids on board with the idea of ditching
                  their stuff is a lot easier than it sounds.
                </p>
                <p className="ff-heading">
                  The trick is to make it an opportunity for them to define
                  themselves and their interests. Encourage kids to make a pile
                  of ”baby toys” to donate, and have them set aside any toys
                  that no longer interest them, such as action figures from a
                  forgotten TV show. Separating these toys will help them
                  appreciate how much they’ve grown and rediscover the toys they
                  love.
                </p>
              </div>

              <div className="blockquote-style1 mb60">
                <blockquote className="blockquote">
                  <p className="fst-italic fz15 fw500 ff-heading">
                    Aliquam hendrerit sollicitudin purus, quis rutrum mi
                    accumsan nec. Quisque bibendum orci ac nibh facilisis, at
                    malesuada orci congue.
                  </p>
                  <h6 className="quote-title">Luis Pickford</h6>
                </blockquote>
              </div>
              {/* End  blockquote*/}

              <div className="col-12 ui-content">
                <h4 className="title">2. Choose toys wisely</h4>
              </div>

              <div className="row">
                <Features />
              </div>
              {/* End .row */}

              <div className="col-lg-12 mt40">
                <Image
                  width={804}
                  height={470}
                  priority
                  src="/images/blog/blog-single-2.jpg"
                  alt="blog"
                  className="bdrs12 post-img-2 w-100 h-100 cover"
                />
              </div>
              {/* End .col-12 */}

              <div className="ui-content mt40 mb30">
                <h4 className="mb10">3.Leave some toys out of reach</h4>
                <div className="custom_bsp_grid">
                  <ul className="list-style-type-bullet p-0 ml20">
                    <li>
                      We do not require any previous experience or pre-defined
                      skills to take this course. A great orientation would be
                      enough to master UI/UX design.
                    </li>
                    <li>A computer with a good internet connection.</li>
                    <li>Adobe Photoshop (OPTIONAL)</li>
                  </ul>
                </div>
              </div>
              {/* End .i-content */}

              <div className="bdrt1 bdrb1 d-block d-sm-flex justify-content-between pt50 pt30-sm pb50 pb30-sm">
                <div className="blog_post_share d-flex align-items-center mb10-sm">
                  <span className="mr30">Share this post</span>
                  <Social />
                </div>
                <div className="bsp_tags d-flex">
                  <Tags />
                </div>
              </div>
              {/* End share social and tags */}

              <TopComments />
              {/* End TopComments */}

              <Pagination />
              {/* End Blog Single pagination */}

              <AllReviews />
              {/* End  AllReviews */}

              <div className="bsp_reveiw_wrt">
                <h6 className="fz17">Leave A Review</h6>
                <ReviewBoxForm />
              </div>
              {/* End ReviewBoxForm */}
            </div>
          </div>
        </div>
      </section>
      {/* End Blog Details */}

      {/* Related Blog Post */}
      <section className="pb90 pb20-md pt-0">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="main-title text-start text-md-center">
                <h2 className="title">Related Posts</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog />
          </div>
        </div>
      </section>
      {/* end Related Blog Post */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default BlogSingle;
