import Pagination from "@/components/blog/Pagination";
import BlogFilter from "@/components/blog/blog-list-v3/BlogFilter";
import BlogFilterContainer from "@/components/blog/blog-list-v3/BlogFilterContainer";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

export const metadata = {
  title: "Blog List v3  || Homez - Real Estate NextJS Template",
};

const BlogV3 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Start */}
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Blog</h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">Blog</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Start */}

      {/* Blog Section Area */}
      <BlogFilterContainer/>
      {/* End Blog Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default BlogV3;
