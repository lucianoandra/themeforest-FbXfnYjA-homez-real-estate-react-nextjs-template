import Explore from "@/components/common/Explore";
import Footer from "@/components/home/home-v9/footer";
import MobileMenu from "@/components/common/mobile-menu";
import FeaturedListings from "@/components/home/home-v9/FeatuerdListings";
import Header from "@/components/home/home-v9/Header";
import Partner from "@/components/common/Partner";
import PropertiesByCities from "@/components/home/home-v9/PropertiesByCities";
import Testimonial from "@/components/home/home-v9/Testimonial";
import Hero from "@/components/home/home-v9/Hero";
import ApartmentType from "@/components/home/home-v9/ApartmentType";
import Link from "next/link";
import SellingBlock from "../../../components/home/home-v9/SellingBlock";
import About from "@/components/home/home-v9/about";
import Pricing from "@/components/home/home-v9/Pricing";
import Cta from "@/components/home/home-v9/Cta";

export const metadata = {
  title: "Home v9 || Homez - Real Estate NextJS Template",
};

const Home_V9 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Hero Slide */}
      <div className="banner-wrapper main-banner-wrapper  position-relative banner-style-one ">
        <Hero />
      </div>
      {/* Edn Hero Slide */}

      {/* Explore Apartment Types */}
      <section className="pb90 pb30-md">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="00ms">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Explore Apartment Types</h2>
                <p className="paragraph">
                  Get some Inspirations from 1800+ skills
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mt-0 mt-lg-5 mb-4">
                <a className="ud-btn2" href="#">
                  See All Categories
                  <i className="fal fa-arrow-right-long dark-color" />
                </a>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <ApartmentType />
          </div>
        </div>
      </section>
      {/* End Explore Apartment Types */}

      {/* Discover Our Featured Listings */}
      <section className="pt-0 pb90 pb50-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div className="main-title">
                <h2 className="title">Discover Our Featured Listings</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="featured-prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination featured-pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="featured-next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
              {/* End .col for navigation and pagination */}
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <FeaturedListings />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Discover Our Featured Listings */}

      {/* Let’s find the right selling option for you*/}
      <section className="pb90 pb30-md bgc-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title text-white mb-1">
                  Let’s find the right selling option for you
                </h2>
                <p className="paragraph text-white">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            <div
              className="col-lg-7 offset-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row">
                <SellingBlock />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Let’s find the right selling option for you*/}

      {/* Explore property-city */}
      <section className="pb40-md pb90">
        <div className="container">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Properties by Cities</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End col-lg-9 */}

            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/map-v4">
                  See All Cities
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            {/* End col-lg-3 */}
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <PropertiesByCities />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Explore property-city */}

      {/* About Us */}

      <About />

      {/* End About Us */}

      {/* Explore Apartment */}
      <section className="pb90">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 className="title">See How Realton Can Help</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <Explore />
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}

      {/* Our Testimonials */}
      <section className="our-testimonial bgc-dark">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="main-title text-center">
                <h2 className="title text-white">Testimonials</h2>
                <p className="paragraph text-white">
                  10,000+ unique online course list designs
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div
              className="col-lg-8 m-auto"
              data-aos="fade-up"
              data-wow-delay="500"
            >
              <div className="testimonial-style2">
                <Testimonial />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Our Testimonials */}

      {/* Pricing Section Area */}
      <section className="our-pricing pb90">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb30">
                <h2>Membership Plans</h2>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
          </div>
          {/* End .row */}
          <Pricing />
        </div>
        {/* End .container */}
      </section>
      {/* End Pricing Section Area */}

      {/* Our Partners */}
      <section className="our-partners pt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="main-title text-center">
                <h6>Trusted by the world’s best</h6>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div
                className="dots_none nav_none"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Partner />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Partners */}

      {/* Our CTA */}
      <Cta />
      {/* Our End CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V9;
