import MobileMenu from "@/components/common/mobile-menu";
import Hero from "@/components/home/home-v8/hero";
import Blog from "@/components/common/Blog";
import Footer from "@/components/home/home-v8/footer";
import Header from "@/components/home/home-v8/Header";
import Contact from "@/components/home/home-v8/Contact";
import Agents from "@/components/home/home-v8/Agents";
import FeatureProperties from "@/components/home/home-v8/FeatureProperties";
import Explore from "@/components/common/Explore";
import ExploreCities from "@/components/home/home-v8/ExploreCities";
import Service from "@/components/home/home-v8/Service";
import FeaturedHomes from "@/components/home/home-v8/FeaturedHomes";
import FeaturedListings from "@/components/home/home-v8/FeatuerdListings";
import PartnerDark from "@/components/common/PartnerDark";
import SidebarStickyBar from "@/components/home/home-v8/SidebarStickyBar";
import Link from "next/link";

export const metadata = {
  title: "Home v8 || Homez - Real Estate NextJS Template",
};

const Home_V8 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home sidebar sticky v bar */}
      <SidebarStickyBar />
      {/* Edn Home sidebar sticky v bar */}

      {/* Home Banner Style V1 */}
      <section className="home-banner-style8 p0">
        <div className="home-style8">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <Hero />
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End Home Banner Style V4 */}

      {/* Our Partners */}
      <section className="our-partners bgc-dark pt60 pb60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="main-title text-center">
                <h6 className="text-white">Trusted by the world’s best</h6>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div
                className="dots_none nav_none"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <PartnerDark />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Partners */}

      {/* Featured Listings */}
      <section id="explore-property" className="pb40-md pb90">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Discover Our Featured Listings</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/map-v1">
                  See All Properties
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          {/* End header */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <FeaturedListings />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Featured Listings */}

      {/* Featured Homes */}
      <section className="pt-0 pb90 pb30-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Featured Homes</h2>
                <p className="paragraph">
                  Get some Inspirations from 800+ Properties
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="properties_homes-prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination properties_homes_pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="properties_homes-next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="explore-apartment-5col-slider">
                <FeaturedHomes />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Featured Homes */}

      {/* CTA Banner */}
      <section className="pt30 pb-0">
        <div className="cta-banner5 bgc-f7 ms-auto maxw1850 pt100 pt60-lg pb90 pb30-lg position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-11 wow fadeInUp" data-aos-delay="100">
                <div className="main-title">
                  <h2 className="title text-capitalize">
                    Let’s find the right selling{" "}
                    <br className="d-none d-md-block" /> option for you
                  </h2>
                  <p className="text">
                    Aliquam lacinia diam quis lacus euismod
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row" data-aos="fade-up" data-aos-delay="200">
              <Service />
            </div>
          </div>
        </div>
      </section>
      {/* End CTA Banner */}

      {/* Explore Cities */}
      <section className="pb80 pb30-md">
        <div className="container">
          <div className="row">
            <div
              className="col-md-9 col-lg-5 col-xl-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="main-title mb30">
                <h2 className="title mb20">Explore Cities</h2>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum{" "}
                  <br className="d-none d-lg-block" />
                  tristique.
                </p>
              </div>
              <Link href="/agency" className="ud-btn btn-transparent mb30-md">
                Our Team
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 col-xl-7 offset-xl-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <ExploreCities />
            </div>
          </div>
          {/* End row */}
        </div>
      </section>

      {/* Explore Apartment */}
      <section className="pt0 pb60 pb10-md">
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

      {/* Featured Properties */}
      <section className="pt30 pb-0">
        <div className="cta-banner6 bgc-thm-light ms-auto maxw1850 pt100 pt60-lg pb100 pb30-lg position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6"
                daa-aos="fade-left"
                data-aos-delay="100"
              ></div>
              {/* End .col */}
              <div
                className="col-xl-5 offset-xl-1"
                daa-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="home8-property-slider">
                  <FeatureProperties />
                </div>
              </div>
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End Featured Properties */}

      {/* Our Exclusive Agetns */}
      <section className="pb80 pb30-md">
        <div className="container">
          <div className="row">
            <div
              className="col-md-9 col-lg-5 col-xl-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="main-title mb30">
                <h2 className="title mb20">Our Exclusive Agetns</h2>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum{" "}
                  <br className="d-none d-lg-block" />
                  tristique.
                </p>
              </div>
              <Link href="/agents" className="ud-btn btn-transparent mb30-md">
                Our Team
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
            {/* End .col */}

            <div className="col-lg-7 col-xl-7 offset-xl-1">
              <Agents />
            </div>
            {/* End .col */}
          </div>
          {/* End row */}
        </div>
      </section>
      {/* End  Our Exclusive Agetns */}

      {/* Explore Blog */}
      <section className="pt-0 mb0-md pb90 pb30-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto" data-aos="fade-up">
              <div className="main-title text-start text-md-center">
                <h2 className="title">From Our Blog</h2>
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
          {/* End .row */}
        </div>
      </section>
      {/* End Explore Blog */}

      {/* Our Contact With Map */}
      <section className="pt70 pb40">
        <iframe
          className="home8-map"
          loading="lazy"
          src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near"
          title="London Eye, London, United Kingdom"
          aria-label="London Eye, London, United Kingdom"
        />
        {/* End map */}

        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-6 position-relative">
              <div className="home8-contact-form bdrs12 p40 p30-md bgc-white mb30">
                <h2 className="form-title">Get In Touch</h2>
                <p className="text mb25">
                  Aliquam lacinia diam quis lacus euismod
                </p>
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Contact With Map */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V8;
