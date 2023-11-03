import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import EnergyClass from "@/components/property/property-single-style/common/EnergyClass";
import FloorPlans from "@/components/property/property-single-style/common/FloorPlans";
import HomeValueChart from "@/components/property/property-single-style/common/HomeValueChart";
import InfoWithForm from "@/components/property/property-single-style/common/more-info";
import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";
import OverView from "@/components/property/property-single-style/common/OverView";
import PropertyAddress from "@/components/property/property-single-style/single-v5/PropertyAddress";
import PropertyDetails from "@/components/property/property-single-style/single-v5/PropertyDetails";
import PropertyFeaturesAminites from "@/components/property/property-single-style/common/PropertyFeaturesAminites";
import PropertyHeader from "@/components/property/property-single-style/single-v5/PropertyHeader";
import PropertyNearby from "@/components/property/property-single-style/common/PropertyNearby";
import PropertyVideo from "@/components/property/property-single-style/common/PropertyVideo";
import PropertyViews from "@/components/property/property-single-style/common/property-view";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import ReviewBoxForm from "@/components/property/property-single-style/common/ReviewBoxForm";
import VirtualTour360 from "@/components/property/property-single-style/common/VirtualTour360";
import AllReviews from "@/components/property/property-single-style/common/reviews";
import ScheduleTour from "@/components/property/property-single-style/sidebar/ScheduleTour";
import PropertyGallery from "@/components/property/property-single-style/single-v5/property-gallery";
import MortgageCalculator from "@/components/property/property-single-style/common/MortgageCalculator";
import WalkScore from "@/components/property/property-single-style/common/WalkScore";

export const metadata = {
  title: "Property Single V5 || Homez - Real Estate NextJS Template",
};

const SingleV5 = ({params}) => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Property Slider Gallery */}
      <section className="p-0 bgc-white">
        <PropertyGallery id={params.id} />
      </section>
      {/* End Property Slider Gallery */}

      {/* Property All Single V4 */}
      <section className="pt30 pb90 bgc-f7">
        <div className="container">
          <div className="row sp-v5-property-details">
            <PropertyHeader id={params.id}  />
          </div>
          {/* End .row */}

          <div className="row mt50 mt30-lg">
            <div className="col-lg-6">
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Overview</h4>
                <div className="row">
                  <OverView id={params.id}  />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Property Description</h4>
                <ProperytyDescriptions />
                {/* End property description */}

                <h4 className="title fz17 mb30 mt50">Property Details</h4>
                <div className="row">
                  <PropertyDetails id={params.id}  />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30 mt30">Address</h4>
                <div className="row">
                  <PropertyAddress />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Features &amp; Amenities</h4>
                <div className="row">
                  <PropertyFeaturesAminites />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Energy Class</h4>
                <div className="row">
                  <EnergyClass />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Floor Plans</h4>
                <div className="row">
                  <div className="col-md-12">
                    <div className="accordion-style1 style2">
                      <FloorPlans />
                    </div>
                  </div>
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 ">
                <h4 className="title fz17 mb30">Video</h4>
                <div className="row">
                  <PropertyVideo />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <div className="row">
                  {/* <AllComments /> */}
                  <AllReviews />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Leave A Review</h4>
                <div className="row">
                  <ReviewBoxForm />
                </div>
              </div>
              {/* End .ps-widget */}
            </div>
            {/* End .col-8 */}

            <div className="col-lg-6">
              <div className="column">
                <div className="default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
                  <h4 className="form-title mb5">Schedule a tour</h4>
                  <p className="text">Choose your preferred day</p>
                  <ScheduleTour />
                </div>
                {/* End .Schedule a tour */}

                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">Get More Information</h4>
                  <InfoWithForm />
                </div>
                {/* End Get More Information */}

                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">Mortgage Calculator</h4>
                  <div className="row">
                    <MortgageCalculator />
                  </div>
                </div>
                {/* End .Mortgage Calculator */}

                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">What&apos;s Nearby?</h4>
                  <div className="row">
                    <PropertyNearby />
                  </div>
                </div>
                {/* End What&apos;s Nearby? */}

                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">Walkscore</h4>
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="fw400 mb20">
                        10425 Tabor St Los Angeles CA 90034 USA
                      </h4>
                      <WalkScore />
                    </div>
                  </div>
                </div>
                {/* End Walkscore */}

                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">360° Virtual Tour</h4>
                  <div className="row">
                    <VirtualTour360 />
                  </div>
                </div>
                {/* End .360° Virtual Tour */}

                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <div className="row">
                    <PropertyViews />
                  </div>
                </div>
                {/* End PropertyViews */}

                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">Home Value</h4>
                  <div className="row">
                    <HomeValueChart />
                  </div>
                </div>
                {/* End Home Value */}
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Property All Single V4  */}

      {/* Start similar-items  */}
      <section className="similar-items pt80 pb90">
        <div className="container">
          <div className="row mt30 align-items-center justify-content-between">
            <div className="col-auto">
              <div className="main-title">
                <h2 className="title">Nearby Similar Homes</h2>
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
            <div className="col-lg-12">
              <div className="property-city-slider">
                <NearbySimilarProperty />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End similar-items  */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default SingleV5;
