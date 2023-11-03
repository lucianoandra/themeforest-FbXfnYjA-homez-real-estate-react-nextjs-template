import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Pricing from "@/components/pages/pricing/Pricing";

export const metadata = {
  title: "Pricing  || Homez - Real Estate NextJS Template",
};

const PricingPlan = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Membership Plans</h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">Plans</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* Pricing Section Area */}
      <section className="our-pricing pb90 pt-0">
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

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default PricingPlan;
