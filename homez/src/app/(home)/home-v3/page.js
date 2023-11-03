import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v3/Header";
import Hero from "@/components/home/home-v3/hero";
import Footer from "@/components/home/home-v3/footer";
import Image from "next/image";
import Partner from "@/components/common/Partner";
import PropertyByCities from "@/components/home/home-v3/PropertyByCities";
import ApartmentType from "@/components/home/home-v3/ApartmentType";
import WhyChoose from "@/components/home/home-v3/why-choose";
import Testimonial from "@/components/home/home-v3/Testimonial";
import Funfact from "@/components/home/home-v3/Funfact";
import Blog from "@/components/common/Blog";
import Cta from "@/components/home/home-v3/Cta";
import InqueryForm from "@/components/home/home-v3/InqueryForm";
import Link from "next/link";
import PropertyByCitiesWrapper from "@/components/home/home-v3/PropertyByCitiesWrapper";

export const metadata = {
  title: "Home v3 || Homez - Real Estate NextJS Template",
};

const Home_V3 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V3 */}
      <section className="home-banner-style3 p0">
        <div className="home-style3">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <Hero />
              </div>
              {/* End .col-xl-8 */}

              <div className="col-xl-4 d-none d-xl-block">
                <div className="home3-img-box1">
                  <Image
                    width={641}
                    height={650}
                    className="img-1"
                    src="/images/about/about-3.png"
                    alt="about"
                  />
                  <Image
                    width={120}
                    height={120}
                    className="img-2 spin-right"
                    src="/images/about/element-3.png"
                    alt="about"
                  />
                  <Image
                    width={120}
                    height={120}
                    className="img-3 spin-right"
                    src="/images/about/element-3.png"
                    alt="about"
                  />
                  <Image
                    width={276}
                    height={146}
                    className="img-4 default-box-shadow1 bounce-y"
                    src="/images/about/about-1.png"
                    alt="about"
                  />
                </div>
              </div>
              {/* End .col-xl-4 */}
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End Home Banner Style V3 */}

      {/* Our Partners */}
      <section className="our-partners bgc-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="100">
              <div className="main-title text-center">
                <h6>Trusted by the world’s best</h6>
              </div>
            </div>
            {/* End .col-12 */}

            <div
              className="col-lg-12 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Partner />
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Our Partners */}

      {/* Properties by Cities */}
      <section className="pt-0 pb70 pb30-md">
        <div className="container">
          <div
            className="row align-items-md-center"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Properties by Cities</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End .col */}
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/grid-full-2-col">
                  See All Properties
                  <i className="fal fa-arrow-right-long dark-color" />
                </Link>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <PropertyByCities />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Properties by Cities */}

      {/* Popular Property */}
      <PropertyByCitiesWrapper />
      {/* Popular Property */}

      {/* Explore Apartment */}
      <section className="pb30-md bgc-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <div className="main-title wow fadeInUp" data-aos-delay="300">
                <h2 className="title text-white">Explore Apartment Types</h2>
                <p className="paragraph text-white">
                  Get some Inspirations from 1800+ skills
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="explore-apartment-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <ApartmentType />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Explore Apartment */}

      {/* Why Chose Us */}
      <section>
        <div className="container">
          <div
            className="row align-items-md-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <WhyChoose />
          </div>
        </div>
      </section>
      {/* End Why Chose Us */}

      {/*People Love Living with Realton */}
      <section className="pb30-md bgc-f7">
        <div className="container">
          <div className="row align-items-md-center">
            <div
              className="col-lg-6 mb30-md wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="main-title">
                <h2 className="title">People Love Living with Realton</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
              <div className="row">
                <Funfact />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-4 offset-xl-2">
              <div
                className="testimonial-slider2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Testimonial />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End People Love Living with Realton */}

      {/* Real Estate Inquiry Form */}
      <section className="pb-0">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-xl-5"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              <div className="main-title mb40">
                <h2 className="title">Real Estate Inquiry Form</h2>
                <p className="paragraph fz15">
                  As the complexity of buildings to increase
                </p>
              </div>
              <div className="inquiry-form mb30-md">
                <InqueryForm />
              </div>
            </div>
            {/* End col-6 */}

            <div
              className="col-lg-6 col-xl-6 offset-xl-1"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="inquiry-form">
                <div className="inquiry-img">
                  <Image
                    width={591}
                    height={778}
                    className="w-100 h-100 cover"
                    src="/images/about/about-4.png"
                    alt="about"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Real Estate Inquiry Form */}

      {/* Explore Blog */}
      <section className="mb35 mb0-md pb30-md">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto"
              data-aos="fade-up"
              data-aos-delay="0"
            >
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
        {/* End .container */}
      </section>
      {/* End Explore Blog */}

      {/* Our CTA */}
      <Cta />
      {/* Our End CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V3;
