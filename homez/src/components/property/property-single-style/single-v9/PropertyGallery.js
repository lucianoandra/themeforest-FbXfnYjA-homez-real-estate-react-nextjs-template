"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
import "photoswipe/dist/photoswipe.css";
import listings from "@/data/listings";
import Map from "./Map";
import ContactWithAgent from "./ContactWithAgent";
import ScheduleForm from "../single-v2/ScheduleForm";

const PropertyGallery = ({ id }) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  return (
    <>
      <div className="ps-widget bdrs12  mb30 overflow-hidden mb30 mt30 position-relative">
        <div className="ps-v4-hero-tab position-relative ">
          <ul
            className="nav nav-pills justify-content-end"
            id="pills-tab2"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active mr10"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <span className="flaticon-images text-white fz20" />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link mr10"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <span className="flaticon-map text-white fz20" />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <span className="flaticon-maps-1 text-white fz20" />
              </button>
            </li>
          </ul>
        </div>
        {/* End .ps-v4-hero-tab */}

        <div className="ps-v4-hero-tab">
          <div className="tab-content overflow-visible" id="pills-tabContent2">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="container p-0">
                <div className="row" data-aos="fade-up" data-aos-delay="300">
                  <div className="sp-v9-forn d-none d-xl-block">
                    <div className="default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
                      <ContactWithAgent />
                      <ScheduleForm />
                    </div>
                  </div>
                  {/* End .sp-v9-forn */}

                  <div className="col-lg-12">
                    <div className="ps-v6-slider nav_none slider-1-grid mb30 sp-img-content position-relative">
                      <Gallery>
                        <Item
                          original="/images/listings/listing-single-9-1.jpg"
                          thumbnail="/images/listings/listing-single-9-1.jpg"
                          width={1206}
                          height={705}
                        >
                          {({ ref, open }) => (
                            <Image
                              ref={ref}
                              onClick={open}
                              width={1206}
                              height={705}
                              src="/images/listings/listing-single-9-1.jpg"
                              alt="gallery"
                              className="w-100 h-auto bdrs12 pointer"
                            />
                          )}
                        </Item>
                        <button className="all-tag popup-img border-0 pe-none">
                          See All 74 Photos
                        </button>
                      </Gallery>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End tab-pane */}

            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <Map />
            </div>
            {/* End map type listing */}

            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <iframe
                className="h510 w-100"
                src="https://www.google.com/maps/embed?pb=!4v1553797194458!6m8!1m7!1sR4K_5Z2wRHTk9el8KLTh9Q!2m2!1d36.82551718071267!2d-76.34864590837246!3f305.15097!4f0!5f0.7820865974627469"
                allowFullScreen
              />
            </div>
            {/* End map locatoin fnder */}
          </div>
        </div>
        {/* End ps-v4-hero-tab content */}
      </div>
    </>
  );
};

export default PropertyGallery;
